"use client"

import type { DimensionScore } from "./scorecard-utils"

interface Props {
  data: DimensionScore[]
  size?: number
  accent?: string
}

export default function ScorecardRadar({
  data,
  size = 480,
  accent = "#9fce4d",
}: Props) {
  const cx = size / 2
  const cy = size / 2
  const radius = size * 0.38
  const angleStep = (Math.PI * 2) / data.length

  const rings = [0.2, 0.4, 0.6, 0.8, 1]

  const pointFor = (i: number, r: number) => {
    const angle = -Math.PI / 2 + i * angleStep
    return {
      x: cx + Math.cos(angle) * radius * r,
      y: cy + Math.sin(angle) * radius * r,
    }
  }

  const valuePoints = data.map((d, i) => pointFor(i, d.normalized / 100))
  const polygon = valuePoints.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ")

  return (
    <div className="w-full overflow-visible">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="AI readiness radar chart"
      >
        {rings.map((r, i) => {
          const ringPoints = data
            .map((_, idx) => {
              const p = pointFor(idx, r)
              return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
            })
            .join(" ")
          return (
            <polygon
              key={i}
              points={ringPoints}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth={1}
            />
          )
        })}

        {data.map((_, i) => {
          const outer = pointFor(i, 1)
          return (
            <line
              key={`axis-${i}`}
              x1={cx}
              y1={cy}
              x2={outer.x}
              y2={outer.y}
              stroke="#e5e7eb"
              strokeWidth={1}
            />
          )
        })}

        <polygon
          points={polygon}
          fill={accent}
          fillOpacity={0.25}
          stroke={accent}
          strokeWidth={2}
          strokeLinejoin="round"
        />

        {valuePoints.map((p, i) => (
          <circle
            key={`dot-${i}`}
            cx={p.x}
            cy={p.y}
            r={4}
            fill="#ffffff"
            stroke={accent}
            strokeWidth={2}
          />
        ))}

        {data.map((d, i) => {
          const p = pointFor(i, 1.12)
          const angle = -Math.PI / 2 + i * angleStep
          const isTop = Math.abs(p.y - cy) > radius * 0.6 && p.y < cy
          const isBottom = Math.abs(p.y - cy) > radius * 0.6 && p.y > cy
          const isRight = Math.cos(angle) > 0.2
          const isLeft = Math.cos(angle) < -0.2
          let textAnchor: "start" | "middle" | "end" = "middle"
          if (isRight) textAnchor = "start"
          else if (isLeft) textAnchor = "end"
          const dy = isTop ? -4 : isBottom ? 12 : 4
          return (
            <text
              key={`label-${i}`}
              x={p.x}
              y={p.y + dy}
              textAnchor={textAnchor}
              className="fill-gray-700"
              style={{ fontSize: 11, fontWeight: 500 }}
            >
              {d.name}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
