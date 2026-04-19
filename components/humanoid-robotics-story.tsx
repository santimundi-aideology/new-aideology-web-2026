"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  Brain,
  Camera,
  CheckCircle2,
  Cloud,
  Cog,
  Cpu,
  Eye,
  Factory,
  Gauge,
  GitMerge,
  HandMetal,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  ListChecks,
  ListOrdered,
  MessageSquare,
  Move3d,
  Network,
  Package,
  PanelLeft,
  PhoneCall,
  Plug,
  Rocket,
  ScanLine,
  ScanSearch,
  ShieldCheck,
  Siren,
  SlidersHorizontal,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  UserCog,
  Workflow,
  Wrench,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

function SignalBars({ level }: { level: number }) {
  return (
    <div className="flex items-end gap-[1.5px]">
      {[1, 2, 3, 4].map((b) => (
        <span
          key={b}
          className={`w-[2px] rounded-sm ${b <= level ? "bg-accent-green" : "bg-black/15"}`}
          style={{ height: `${3 + b * 1.5}px` }}
        />
      ))}
    </div>
  )
}

function BatteryBadge({ pct }: { pct: number }) {
  const color = pct > 50 ? "bg-accent-green" : pct > 25 ? "bg-amber-400" : "bg-red-400"
  return (
    <div className="flex items-center gap-1">
      <div className="relative h-2 w-5 rounded-[2px] border border-black/30">
        <div className={`absolute left-0 top-0 bottom-0 ${color} rounded-[1px]`} style={{ width: `${pct}%` }} />
      </div>
      <span className="ml-px h-1 w-[2px] rounded-r bg-black/30" />
    </div>
  )
}

function RobotAvatar({ size = 32 }: { size?: number }) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-accent-green/50 bg-gradient-to-b from-[#1a2330] to-[#0d141d]"
      style={{ width: size, height: size }}
    >
      <HumanoidIcon size={Math.round(size * 0.7)} variant="dark" />
    </div>
  )
}

function HumanoidIcon({
  size = 32,
  variant = "light",
  accent = "#82c832",
}: {
  size?: number
  variant?: "light" | "dark"
  accent?: string
}) {
  const isDark = variant === "dark"
  const body = isDark ? "#e8e8e8" : "#f4f4f4"
  const joint = isDark ? "#cfcfcf" : "#cfcfcf"
  const bg = isDark ? "transparent" : "transparent"
  return (
    <svg
      viewBox="0 0 80 110"
      width={size}
      height={(size * 110) / 80}
      fill="none"
      style={{ background: bg }}
    >
      <rect x="28" y="6" width="24" height="20" rx="9" fill={body} />
      <rect x="32" y="14" width="16" height="6" rx="2" fill={accent} />
      <rect x="36" y="26" width="8" height="4" fill={joint} />
      <path d="M22 30 H58 L62 64 H18 Z" fill={body} stroke={accent} strokeWidth="0.6" />
      <circle cx="40" cy="44" r="4" fill={accent} />
      <circle cx="40" cy="44" r="2" fill="#0d141d" />
      <circle cx="22" cy="32" r="4.5" fill={joint} />
      <circle cx="58" cy="32" r="4.5" fill={joint} />
      <rect x="14" y="34" width="6" height="22" rx="3" fill={body} />
      <rect x="60" y="34" width="6" height="22" rx="3" fill={body} />
      <circle cx="17" cy="60" r="4" fill={accent} />
      <circle cx="63" cy="60" r="4" fill={accent} />
      <rect x="22" y="64" width="36" height="8" rx="2" fill={joint} />
      <rect x="26" y="72" width="9" height="28" rx="3" fill={body} />
      <rect x="45" y="72" width="9" height="28" rx="3" fill={body} />
      <circle cx="30.5" cy="86" r="2" fill={accent} />
      <circle cx="49.5" cy="86" r="2" fill={accent} />
      <rect x="24" y="100" width="13" height="4" rx="1.5" fill="#1a2330" />
      <rect x="43" y="100" width="13" height="4" rx="1.5" fill="#1a2330" />
    </svg>
  )
}

type Bullet = { icon: LucideIcon; text: string }

type Block = {
  id: string
  label: string
  stepIcon: LucideIcon
  title: string
  summary: string
  bullets: Bullet[]
  featured?: true
}

const blocks: Block[] = [
  {
    id: "block-01",
    label: "Step 01",
    stepIcon: ScanSearch,
    title: "We start on the floor — understanding the physical operation, not the robot",
    summary:
      "Before talking about humanoids, NVIDIA stacks, or simulators, we walk the line, time the cycle, study the safety perimeter, and map the real physical workflow that humans run today.",
    bullets: [
      { icon: Factory, text: "Walk the cell, the line, and the operator workflow on-site" },
      { icon: Gauge, text: "Measure cycle time, ergonomic load, and exception rates" },
      { icon: Target, text: "Identify which physical tasks would create the most value if automated first" },
    ],
  },
  {
    id: "block-02",
    label: "Step 02",
    stepIcon: BarChart3,
    title: "Then we test feasibility inside Omniverse before touching real hardware",
    summary:
      "Each candidate task is rebuilt as an Omniverse digital twin and stress-tested in Isaac Sim. We compare physics, sensing, manipulation, and integration risk so we only build what is realistic to deploy.",
    bullets: [
      { icon: Layers, text: "Reconstruct the cell as a USD digital twin in NVIDIA Omniverse" },
      { icon: SlidersHorizontal, text: "Validate physics, sensors, and humanoid kinematics in Isaac Sim" },
      { icon: ListOrdered, text: "Score each task by sim readiness, integration cost, and expected impact" },
    ],
  },
  {
    id: "block-03",
    label: "Step 03",
    stepIcon: Bot,
    title: "We train one humanoid policy end-to-end inside the digital twin",
    summary:
      "The first build is not a flashy demo. It is a single, well-scoped humanoid skill — trained at scale in Isaac Lab on synthetic data, evaluated against safety and quality KPIs, and ready to leave the simulator.",
    bullets: [
      { icon: Workflow, text: "Define one focused humanoid skill around a measurable production outcome" },
      { icon: Plug, text: "Generate synthetic data and train with imitation + reinforcement learning in Isaac Lab" },
      { icon: Rocket, text: "Validate the policy in the digital twin against real production KPIs and safety limits" },
    ],
    featured: true,
  },
  {
    id: "block-04",
    label: "Step 04",
    stepIcon: Network,
    title: "We move sim-to-real and integrate the humanoid into the enterprise stack",
    summary:
      "Once the policy is solid in simulation, we deploy it onto real humanoid hardware running on Jetson Thor and Isaac ROS, and wire the robot into MES, ERP, and WMS through NIM microservices on NVIDIA AI Enterprise.",
    bullets: [
      { icon: GitMerge, text: "Sim-to-real transfer onto Jetson Thor with Isaac ROS perception and control" },
      { icon: Cpu, text: "Expose perception, planning, and skills as NIM microservices on NVIDIA AI Enterprise" },
      { icon: LayoutGrid, text: "Connect telemetry and control to MES, ERP, and WMS — under enterprise governance" },
    ],
  },
  {
    id: "block-05",
    label: "Step 05",
    stepIcon: LayoutDashboard,
    title: "We design the experience for operators, supervisors, and safety officers",
    summary:
      "A humanoid only creates value when the people around it trust it. We shape the operator and supervisor interfaces — teleop, exception handling, dashboards, audit — so the floor can run the robots, not the other way around.",
    bullets: [
      { icon: UserCog, text: "Operator UX for handovers, pauses, retries, and shared autonomy" },
      { icon: PanelLeft, text: "Supervisor dashboard with live tasks, KPIs, exceptions, and approvals" },
      { icon: ShieldCheck, text: "Safety officer console with full audit trail and policy controls" },
    ],
  },
  {
    id: "block-06",
    label: "Step 06",
    stepIcon: TrendingUp,
    title: "Finally, we scale across cells, sites, and the full humanoid fleet",
    summary:
      "Once one cell is in production, we replicate the deployment across lines and plants, manage the fleet centrally on NVIDIA AI Enterprise, and run continuous learning loops so every robot improves the next one.",
    bullets: [
      { icon: ArrowUpRight, text: "Roll proven skills out to additional cells, lines, and plants" },
      { icon: Wrench, text: "Centralised fleet operations, OTA policy updates, and lifecycle support" },
      { icon: BarChart3, text: "Continuous learning loop — every deployment teaches the next one" },
    ],
  },
]

type Priority = "High" | "Medium" | "Low"
type Complexity = 1 | 2 | 3

const tableRows: {
  id: string
  cellCode: string
  taskIcon: LucideIcon
  taskKind: string
  problem: string
  aiSolution: string
  priority: Priority
  hours: number
  complexity: Complexity
}[] = [
  {
    id: "A1",
    cellCode: "STG-A1",
    taskIcon: Package,
    taskKind: "Bin-picking",
    problem: "Manual case picking and placement from mixed totes all shift",
    aiSolution: "Humanoid bin-picking & placement skill",
    priority: "High",
    hours: 320,
    complexity: 2,
  },
  {
    id: "A2",
    cellCode: "STG-A2",
    taskIcon: Layers,
    taskKind: "Bimanual kitting",
    problem: "Manual kitting of small assemblies on a workbench",
    aiSolution: "Humanoid bimanual kitting cell",
    priority: "High",
    hours: 240,
    complexity: 2,
  },
  {
    id: "B1",
    cellCode: "STG-B1",
    taskIcon: Truck,
    taskKind: "Material handover",
    problem: "Trolley shuttling between line, QA, and packing all day",
    aiSolution: "Mobile humanoid material handover",
    priority: "Medium",
    hours: 180,
    complexity: 3,
  },
  {
    id: "QC",
    cellCode: "STG-QC",
    taskIcon: Eye,
    taskKind: "Visual QC",
    problem: "Manual visual inspection of finished parts under fatigue",
    aiSolution: "Vision-guided humanoid quality inspection",
    priority: "Medium",
    hours: 120,
    complexity: 2,
  },
  {
    id: "CNC",
    cellCode: "STG-CNC",
    taskIcon: Cog,
    taskKind: "Machine tending",
    problem: "Loading and unloading CNC machines on the night shift",
    aiSolution: "Humanoid machine tending skill",
    priority: "Low",
    hours: 90,
    complexity: 3,
  },
]

const priorityConfig: Record<Priority, { bar: string; badge: string; dot: string }> = {
  High:   { bar: "bg-accent-green",   badge: "bg-accent-green/10 text-accent-green border-accent-green/20",  dot: "bg-accent-green" },
  Medium: { bar: "bg-amber-400",      badge: "bg-amber-50 text-amber-600 border-amber-200",                  dot: "bg-amber-400" },
  Low:    { bar: "bg-gray-300",       badge: "bg-gray-100 text-gray-400 border-gray-200",                    dot: "bg-gray-300" },
}

function ComplexityDots({ level }: { level: Complexity }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className={`h-2 w-2 rounded-full ${n <= level ? "bg-charcoal/40" : "bg-charcoal/10"}`}
        />
      ))}
    </div>
  )
}

function FloorPlanBlueprint() {
  const totalHours = tableRows.reduce((s, r) => s + r.hours, 0)

  type CellLayout = {
    id: string
    x: number
    y: number
    w: number
    h: number
  }
  const layout: Record<string, CellLayout> = {
    A1:  { id: "A1",  x: 60,  y: 70,  w: 150, h: 110 },
    A2:  { id: "A2",  x: 230, y: 70,  w: 150, h: 110 },
    QC:  { id: "QC",  x: 410, y: 70,  w: 150, h: 110 },
    B1:  { id: "B1",  x: 580, y: 70,  w: 160, h: 240 },
    CNC: { id: "CNC", x: 60,  y: 220, w: 150, h: 110 },
  }
  const inboundDock = { x: 60,  y: 350, w: 150, h: 30 }
  const outboundDock = { x: 410, y: 220, w: 150, h: 110 }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      {/* industrial chrome bar */}
      <div className="flex items-center gap-3 border-b border-black/5 bg-charcoal px-5 py-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-green/15 text-accent-green">
          <Factory className="h-3.5 w-3.5" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-green">
            Plant Stuttgart · Building 4 · Floor Plan
          </span>
          <span className="font-mono text-[9.5px] text-white/50">
            scale 1:200 · 38m × 22m · drawn during AIdeology floor walk
          </span>
        </div>
        <span className="ml-auto flex items-center gap-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-accent-green">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" />
          </span>
          Walk · in progress
        </span>
      </div>

      {/* the actual blueprint area */}
      <div className="relative bg-[#0e2438]">
        {/* blueprint grid background */}
        <svg viewBox="0 0 800 420" className="block h-auto w-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="blueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(180,220,255,0.10)" strokeWidth="0.6" />
            </pattern>
            <pattern id="blueprintGridMajor" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(180,220,255,0.18)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="800" height="420" fill="url(#blueprintGrid)" />
          <rect width="800" height="420" fill="url(#blueprintGridMajor)" />

          {/* dimension lines */}
          <g stroke="rgba(180,220,255,0.25)" strokeWidth="0.6" strokeDasharray="2 3" fill="none">
            <line x1="60" y1="40" x2="740" y2="40" />
            <line x1="60" y1="35" x2="60" y2="45" />
            <line x1="740" y1="35" x2="740" y2="45" />
            <line x1="30" y1="70" x2="30" y2="380" />
            <line x1="25" y1="70" x2="35" y2="70" />
            <line x1="25" y1="380" x2="35" y2="380" />
          </g>
          <text x="400" y="34" fill="rgba(180,220,255,0.55)" fontSize="9" fontFamily="monospace" textAnchor="middle">
            38.0 m
          </text>
          <text x="20" y="225" fill="rgba(180,220,255,0.55)" fontSize="9" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 20 225)">
            22.0 m
          </text>

          {/* central walking aisle */}
          <rect x="60" y="195" width="680" height="20" fill="rgba(180,220,255,0.05)" stroke="rgba(180,220,255,0.18)" strokeWidth="0.5" strokeDasharray="3 3" />
          <text x="400" y="209" fill="rgba(180,220,255,0.45)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="2">
            ─── MAIN AISLE ───
          </text>

          {/* operator walking path during the audit (AIdeology team's walk) */}
          <path
            d="M 90 365 Q 130 300 135 215 L 135 195 Q 135 130 135 125 L 230 125 L 230 195 L 305 215 L 410 195 L 410 125 L 485 125 Q 550 125 580 165 L 660 195 L 660 215 L 660 280"
            stroke="#82c832"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="4 3"
            opacity="0.7"
          />
          {/* footprint markers along path */}
          {[
            [135, 350], [135, 280], [180, 215], [230, 165], [280, 215], [340, 215],
            [410, 165], [460, 215], [520, 215], [600, 195], [660, 250],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.2" fill="#82c832" opacity="0.85" />
          ))}

          {/* docks */}
          <g>
            <rect x={inboundDock.x} y={inboundDock.y} width={inboundDock.w} height={inboundDock.h} fill="rgba(180,220,255,0.06)" stroke="rgba(180,220,255,0.4)" strokeWidth="0.8" strokeDasharray="2 2" />
            <text x={inboundDock.x + inboundDock.w / 2} y={inboundDock.y + 19} fill="rgba(180,220,255,0.7)" fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="1.5">
              INBOUND DOCK
            </text>
            <rect x={outboundDock.x} y={outboundDock.y} width={outboundDock.w} height={outboundDock.h} fill="rgba(180,220,255,0.06)" stroke="rgba(180,220,255,0.3)" strokeWidth="0.8" />
            <text x={outboundDock.x + outboundDock.w / 2} y={outboundDock.y + 22} fill="rgba(180,220,255,0.65)" fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="1.5">
              PACKING / OUTBOUND
            </text>
            <text x={outboundDock.x + outboundDock.w / 2} y={outboundDock.y + 38} fill="rgba(180,220,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">
              [out of pilot scope]
            </text>
          </g>

          {/* compass */}
          <g transform="translate(720,360)" fontFamily="monospace">
            <circle r="14" fill="rgba(180,220,255,0.05)" stroke="rgba(180,220,255,0.35)" strokeWidth="0.6" />
            <line x1="0" y1="-14" x2="0" y2="14" stroke="rgba(180,220,255,0.5)" strokeWidth="0.6" />
            <line x1="-14" y1="0" x2="14" y2="0" stroke="rgba(180,220,255,0.5)" strokeWidth="0.6" />
            <text x="0" y="-17" fontSize="8" fill="#82c832" textAnchor="middle">N</text>
          </g>
        </svg>

        {/* cell cards (HTML overlays positioned to match SVG coords) */}
        <div className="absolute inset-0">
          {tableRows.map((row, i) => {
            const cell = layout[row.id]
            if (!cell) return null
            const isSelected = i < 2
            const TaskIcon = row.taskIcon
            const left = `${(cell.x / 800) * 100}%`
            const top = `${(cell.y / 420) * 100}%`
            const width = `${(cell.w / 800) * 100}%`
            const height = `${(cell.h / 420) * 100}%`
            return (
              <div
                key={row.id}
                data-row={isSelected ? "highlight" : "dim"}
                className={`absolute flex flex-col gap-1 rounded-md border px-1.5 py-1 backdrop-blur-[1px] transition ${
                  isSelected
                    ? "border-accent-green/80 bg-accent-green/10 shadow-[0_0_24px_rgba(130,200,50,0.35)]"
                    : "border-[rgba(180,220,255,0.35)] bg-[rgba(20,40,60,0.7)]"
                }`}
                style={{ left, top, width, height }}
              >
                {/* corner brackets for selected */}
                {isSelected && (
                  <>
                    <span className="pointer-events-none absolute -left-0.5 -top-0.5 h-2 w-2 border-l-2 border-t-2 border-accent-green" />
                    <span className="pointer-events-none absolute -right-0.5 -top-0.5 h-2 w-2 border-r-2 border-t-2 border-accent-green" />
                    <span className="pointer-events-none absolute -bottom-0.5 -left-0.5 h-2 w-2 border-b-2 border-l-2 border-accent-green" />
                    <span className="pointer-events-none absolute -bottom-0.5 -right-0.5 h-2 w-2 border-b-2 border-r-2 border-accent-green" />
                  </>
                )}

                {/* header row inside cell */}
                <div className="flex items-center gap-1">
                  <div className={`flex h-4 w-4 items-center justify-center rounded-sm ${isSelected ? "bg-accent-green text-charcoal" : "bg-[rgba(180,220,255,0.15)] text-[rgba(180,220,255,0.85)]"}`}>
                    <TaskIcon className="h-2.5 w-2.5" />
                  </div>
                  <span className={`font-mono text-[8.5px] font-bold tracking-wider ${isSelected ? "text-accent-green" : "text-[rgba(180,220,255,0.85)]"}`}>
                    {row.cellCode}
                  </span>
                </div>

                {/* task name */}
                <span className={`text-[9.5px] font-semibold leading-tight ${isSelected ? "text-white" : "text-[rgba(220,235,255,0.8)]"}`}>
                  {row.taskKind}
                </span>

                {/* operator-hours mini bar */}
                <div className="mt-auto flex items-center gap-1.5">
                  <span className="font-mono text-[8px] text-[rgba(180,220,255,0.65)]">{row.hours}h/mo</span>
                  <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-[rgba(180,220,255,0.18)]">
                    <div
                      className={isSelected ? "h-full rounded-full bg-accent-green" : "h-full rounded-full bg-[rgba(180,220,255,0.5)]"}
                      style={{ width: `${(row.hours / 320) * 100}%` }}
                    />
                  </div>
                </div>

                {/* selected badge */}
                {isSelected && (
                  <span
                    data-selected-badge
                    className="absolute -top-2 right-1 inline-flex items-center gap-1 rounded-sm bg-accent-green px-1 py-px text-[7.5px] font-bold uppercase tracking-wider text-charcoal opacity-0 shadow-md"
                    style={{ transform: "translateY(4px)" }}
                  >
                    ✓ WAVE 1
                  </span>
                )}

                {/* humanoid marker (only for selected cells = where humanoid will go) */}
                {isSelected && (
                  <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-accent-green bg-charcoal shadow-[0_0_10px_rgba(130,200,50,0.6)]">
                    <HumanoidIcon size={9} variant="dark" />
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* legend (top-left overlay) */}
        <div className="absolute left-3 top-3 flex flex-col gap-1 rounded-md border border-[rgba(180,220,255,0.2)] bg-[rgba(14,36,56,0.8)] px-2 py-1.5 font-mono text-[8px] uppercase tracking-wider text-[rgba(180,220,255,0.7)]">
          <span className="flex items-center gap-1.5"><span className="h-1 w-3 rounded-sm bg-accent-green" /> Wave 1 cell</span>
          <span className="flex items-center gap-1.5"><span className="h-1 w-3 rounded-sm bg-[rgba(180,220,255,0.5)]" /> Reviewed cell</span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="3"><line x1="0" y1="1.5" x2="14" y2="1.5" stroke="#82c832" strokeWidth="1.2" strokeDasharray="3 2" /></svg>
            Audit walk path
          </span>
        </div>
      </div>

      {/* footer */}
      <div className="relative flex items-center justify-between border-t border-black/5 bg-[#f8f8f8] px-5 py-3">
        <span data-footer-default className="font-mono text-[10.5px] text-gray-500">
          {tableRows.length} cells mapped · {totalHours.toLocaleString()} operator-h/mo · 1 plant · 1 building
        </span>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-accent-green" />
          <span data-footer-default className="text-[11px] text-gray-400">
            STG-A1 &amp; STG-A2 nominated for Wave 1 humanoid pilot
          </span>
        </div>
        <div
          data-footer-selected
          className="absolute inset-0 flex items-center justify-center gap-2 bg-accent-green/8 opacity-0"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-accent-green" />
          <span className="text-[11px] font-semibold text-accent-green">
            STG-A1 &amp; STG-A2 selected — taking the floor walk into Omniverse
          </span>
          <ArrowRight className="h-3 w-3 text-accent-green" />
        </div>
      </div>
    </div>
  )
}

// ─── Step 02: Feasibility Assessment ────────────────────────────────────────

type FeasibilityTopic = {
  id: string
  cellCode: string
  name: string
  taskIcon: LucideIcon
  dataScore: number
  dataLabel: string
  integrations: string[]
  effort: string
  returnScore: number
  risk: "Low" | "Low–Med"
  confidence: number
  simRuns: string
  successRate: number
  cycleTime: string
  trajectory: number[]
}

const feasibilityTopics: FeasibilityTopic[] = [
  {
    id: "STG-A1",
    cellCode: "STG-A1",
    name: "Humanoid bin-picking & placement skill",
    taskIcon: Package,
    dataScore: 90,
    dataLabel: "USD twin of cell + RGB-D capture + WMS pick lists",
    integrations: ["Omniverse · USD", "Isaac Sim", "Isaac ROS", "WMS · MES"],
    effort: "10–14 wks",
    returnScore: 92,
    risk: "Low",
    confidence: 90,
    simRuns: "5,240",
    successRate: 96.8,
    cycleTime: "18.4s",
    trajectory: [22, 28, 35, 30, 24, 32, 40, 36, 42, 48, 44, 52, 58, 54, 60],
  },
  {
    id: "STG-A2",
    cellCode: "STG-A2",
    name: "Humanoid bimanual kitting cell",
    taskIcon: Layers,
    dataScore: 78,
    dataLabel: "USD twin + part library + bill-of-materials in MES",
    integrations: ["Omniverse · USD", "Isaac Lab", "MES · BOM", "Vision pipeline"],
    effort: "12–16 wks",
    returnScore: 86,
    risk: "Low–Med",
    confidence: 80,
    simRuns: "3,180",
    successRate: 91.4,
    cycleTime: "42.1s",
    trajectory: [50, 44, 38, 30, 26, 32, 28, 36, 30, 38, 32, 40, 34, 42, 36],
  },
]

// ─── Isometric Omniverse digital twin scene ─────────────────────────────────

// iso projection helpers (origin at cx,cy; units in "grid cells")
const ISO_COS = Math.cos(Math.PI / 6) // 0.866
const ISO_SIN = Math.sin(Math.PI / 6) // 0.5
function iso(gx: number, gy: number, gz: number = 0, cx = 380, cy = 220, scale = 30) {
  return {
    x: cx + (gx - gy) * ISO_COS * scale,
    y: cy + (gx + gy) * ISO_SIN * scale - gz * scale,
  }
}
function isoPath(points: Array<[number, number, number]>, cx?: number, cy?: number, scale?: number) {
  return points
    .map(([gx, gy, gz], i) => {
      const p = iso(gx, gy, gz, cx, cy, scale)
      return `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
    })
    .join(" ") + " Z"
}

function IsoBox({
  px, py, w, d, h,
  fillTop = "#3a4a5e",
  fillLeft = "#22303f",
  fillRight = "#2c3b4d",
  stroke = "#82c832",
  strokeOpacity = 0.6,
  strokeDash,
  cx, cy, scale,
}: {
  px: number; py: number; w: number; d: number; h: number
  fillTop?: string; fillLeft?: string; fillRight?: string
  stroke?: string; strokeOpacity?: number; strokeDash?: string
  cx?: number; cy?: number; scale?: number
}) {
  const top: Array<[number, number, number]> = [
    [px,     py,     h],
    [px + w, py,     h],
    [px + w, py + d, h],
    [px,     py + d, h],
  ]
  const left: Array<[number, number, number]> = [
    [px, py,     0],
    [px, py + d, 0],
    [px, py + d, h],
    [px, py,     h],
  ]
  const right: Array<[number, number, number]> = [
    [px,     py + d, 0],
    [px + w, py + d, 0],
    [px + w, py + d, h],
    [px,     py + d, h],
  ]
  return (
    <g>
      <path d={isoPath(left,  cx, cy, scale)} fill={fillLeft}  stroke={stroke} strokeWidth="0.6" strokeOpacity={strokeOpacity} strokeDasharray={strokeDash} />
      <path d={isoPath(right, cx, cy, scale)} fill={fillRight} stroke={stroke} strokeWidth="0.6" strokeOpacity={strokeOpacity} strokeDasharray={strokeDash} />
      <path d={isoPath(top,   cx, cy, scale)} fill={fillTop}   stroke={stroke} strokeWidth="0.6" strokeOpacity={strokeOpacity} strokeDasharray={strokeDash} />
    </g>
  )
}

function IsoHumanoid({ px, py, accent = "#82c832", cx, cy, scale }: { px: number; py: number; accent?: string; cx?: number; cy?: number; scale?: number }) {
  const base = iso(px,        py,        0,    cx, cy, scale)
  const feetL = iso(px - 0.15, py + 0.05, 0,    cx, cy, scale)
  const feetR = iso(px + 0.15, py + 0.05, 0,    cx, cy, scale)
  const knees = iso(px,        py,        0.55, cx, cy, scale)
  const hips  = iso(px,        py,        1.0,  cx, cy, scale)
  const chest = iso(px,        py,        1.45, cx, cy, scale)
  const head  = iso(px,        py,        1.85, cx, cy, scale)
  const handL = iso(px - 0.35, py - 0.2,  1.15, cx, cy, scale)
  const handR = iso(px + 0.35, py + 0.2,  1.15, cx, cy, scale)
  const shoL  = iso(px - 0.18, py - 0.02, 1.55, cx, cy, scale)
  const shoR  = iso(px + 0.18, py + 0.02, 1.55, cx, cy, scale)
  return (
    <g>
      {/* contact shadow */}
      <ellipse cx={base.x} cy={base.y + 3} rx="14" ry="4" fill="rgba(0,0,0,0.45)" />
      {/* legs */}
      <line x1={feetL.x} y1={feetL.y} x2={knees.x} y2={knees.y} stroke="#cfd6df" strokeWidth="4.5" strokeLinecap="round" />
      <line x1={feetR.x} y1={feetR.y} x2={knees.x} y2={knees.y} stroke="#cfd6df" strokeWidth="4.5" strokeLinecap="round" />
      <line x1={knees.x} y1={knees.y} x2={hips.x}  y2={hips.y}  stroke="#e5eaf0" strokeWidth="5"   strokeLinecap="round" />
      {/* torso */}
      <line x1={hips.x}  y1={hips.y}  x2={chest.x} y2={chest.y} stroke="#f0f4f8" strokeWidth="9"   strokeLinecap="round" />
      <circle cx={chest.x} cy={chest.y} r="2.5" fill={accent} />
      {/* shoulders + arms */}
      <line x1={shoL.x}  y1={shoL.y}  x2={handL.x} y2={handL.y} stroke="#e5eaf0" strokeWidth="3.5" strokeLinecap="round" />
      <line x1={shoR.x}  y1={shoR.y}  x2={handR.x} y2={handR.y} stroke="#e5eaf0" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx={handL.x} cy={handL.y} r="2.5" fill={accent} />
      <circle cx={handR.x} cy={handR.y} r="2.5" fill={accent} />
      {/* head */}
      <circle cx={head.x} cy={head.y} r="6" fill="#f0f4f8" stroke={accent} strokeWidth="0.8" />
      <rect x={head.x - 4} y={head.y - 1} width="8" height="2" fill={accent} />
    </g>
  )
}

function OmniverseTwinScene({ topic }: { topic: typeof feasibilityTopics[number] }) {
  // bigger viewBox for more breathing room
  const VB_W = 760
  const VB_H = 440
  const cx = 380
  const cy = 200
  const s = 28

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="block h-auto w-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="omniSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#0d141d" />
          <stop offset="100%" stopColor="#070b12" />
        </linearGradient>
        <radialGradient id="omniSpot" cx="50%" cy="48%" r="55%">
          <stop offset="0%"  stopColor="rgba(130,200,50,0.18)" />
          <stop offset="100%" stopColor="rgba(13,20,29,0)" />
        </radialGradient>
      </defs>
      <rect width={VB_W} height={VB_H} fill="url(#omniSky)" />
      <rect width={VB_W} height={VB_H} fill="url(#omniSpot)" />

      {/* ─── isometric floor with grid ─── */}
      {(() => {
        const corners: Array<[number, number, number]> = [
          [-5, -5, 0],
          [ 6, -5, 0],
          [ 6,  5, 0],
          [-5,  5, 0],
        ]
        return (
          <path
            d={isoPath(corners, cx, cy, s)}
            fill="rgba(20,40,60,0.6)"
            stroke="rgba(180,220,255,0.25)"
            strokeWidth="0.8"
          />
        )
      })()}
      {/* grid lines on floor */}
      {(() => {
        const lines = []
        for (let i = -5; i <= 6; i++) {
          const a = iso(i, -5, 0, cx, cy, s)
          const b = iso(i,  5, 0, cx, cy, s)
          lines.push(<line key={`gx${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(130,200,50,0.18)" strokeWidth="0.5" />)
        }
        for (let j = -5; j <= 5; j++) {
          const a = iso(-5, j, 0, cx, cy, s)
          const b = iso( 6, j, 0, cx, cy, s)
          lines.push(<line key={`gy${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(130,200,50,0.18)" strokeWidth="0.5" />)
        }
        return <g>{lines}</g>
      })()}

      {/* cell boundary highlight */}
      {(() => {
        const corners: Array<[number, number, number]> = [
          [-3.2, -3.2, 0.02],
          [ 4.2, -3.2, 0.02],
          [ 4.2,  3.2, 0.02],
          [-3.2,  3.2, 0.02],
        ]
        return (
          <path
            d={isoPath(corners, cx, cy, s)}
            fill="none"
            stroke="#82c832"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.7"
          />
        )
      })()}

      {/* ─── conveyor (long box at the back) ─── */}
      <IsoBox px={-3} py={-3.2} w={7} d={1.0} h={0.55} fillTop="#3a4a5e" fillLeft="#1a2330" fillRight="#22303f" stroke="rgba(180,220,255,0.4)" strokeOpacity={0.5} cx={cx} cy={cy} scale={s} />
      {/* belt segments */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = iso(-3 + 0.05 + i * 1.15, -2.85, 0.56, cx, cy, s)
        const b = iso(-3 + 1.10 + i * 1.15, -2.85, 0.56, cx, cy, s)
        return <line key={`belt${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#82c832" strokeWidth="1.1" opacity="0.8" />
      })}

      {/* parts on the conveyor (boxes representing kits) */}
      <IsoBox px={-1.4} py={-2.95} w={0.7} d={0.55} h={0.4}  fillTop="#82c832" fillLeft="#5e9920" fillRight="#6da827" stroke="#0d141d" strokeOpacity={0.6} cx={cx} cy={cy} scale={s} />
      <IsoBox px={ 0.4} py={-2.95} w={0.6} d={0.55} h={0.35} fillTop="#a8d96a" fillLeft="#739b3a" fillRight="#8cbb4f" stroke="#0d141d" strokeOpacity={0.6} cx={cx} cy={cy} scale={s} />

      {/* ─── parts bin (left) ─── */}
      <IsoBox px={-2.5} py={1.5} w={1.4} d={1.4} h={0.7} fillTop="#1f2a37" fillLeft="#141b25" fillRight="#1a232f" stroke="rgba(180,220,255,0.35)" strokeOpacity={0.5} cx={cx} cy={cy} scale={s} />
      {/* small parts piled inside */}
      <IsoBox px={-2.2} py={1.85} w={0.4} d={0.4} h={0.2} fillTop="#82c832" fillLeft="#5e9920" fillRight="#6da827" stroke="#0d141d" strokeOpacity={0.5} cx={cx} cy={cy} scale={s} />
      <IsoBox px={-1.7} py={1.7}  w={0.4} d={0.4} h={0.18} fillTop="#a8d96a" fillLeft="#739b3a" fillRight="#8cbb4f" stroke="#0d141d" strokeOpacity={0.5} cx={cx} cy={cy} scale={s} />

      {/* ─── workbench (right of robot) ─── */}
      <IsoBox px={1.2} py={1.2} w={2.5} d={1.4} h={0.85} fillTop="#3a4a5e" fillLeft="#22303f" fillRight="#2c3b4d" stroke="rgba(180,220,255,0.35)" strokeOpacity={0.5} cx={cx} cy={cy} scale={s} />

      {/* ─── humanoid robot in the middle of the cell ─── */}
      <IsoHumanoid px={-0.3} py={-0.3} cx={cx} cy={cy} scale={s} />

      {/* ─── ghost asset (still being authored - dotted) ─── */}
      <IsoBox px={2.6} py={-2.5} w={1.2} d={1.0} h={1.2} fillTop="rgba(130,200,50,0.06)" fillLeft="rgba(130,200,50,0.04)" fillRight="rgba(130,200,50,0.05)" stroke="#82c832" strokeOpacity={0.7} strokeDash="3 3" cx={cx} cy={cy} scale={s} />
      <text x={iso(3.2, -2.0, 1.4, cx, cy, s).x} y={iso(3.2, -2.0, 1.4, cx, cy, s).y} fill="#82c832" fontSize="9" fontFamily="monospace" textAnchor="middle">
        QC station · authoring
      </text>

      {/* ─── trajectory preview (planned arm path) ─── */}
      {(() => {
        const path: Array<[number, number, number]> = [
          [-1.4, -2.6, 0.8],
          [-1.0, -1.8, 1.1],
          [-0.5, -0.8, 1.3],
          [ 0.2,  0.2, 1.2],
          [ 1.0,  0.8, 1.0],
          [ 1.8,  1.2, 0.9],
        ]
        const d = path.map(([gx, gy, gz], i) => {
          const p = iso(gx, gy, gz, cx, cy, s)
          return `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
        }).join(" ")
        return (
          <g>
            <path d={d} fill="none" stroke="#82c832" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.85" />
            {path.map(([gx, gy, gz], i) => {
              const p = iso(gx, gy, gz, cx, cy, s)
              return <circle key={i} cx={p.x} cy={p.y} r="1.8" fill="#82c832" />
            })}
          </g>
        )
      })()}

      {/* ─── HUD overlays (rendered as foreignObject? simpler: SVG text + rect) ─── */}
      {/* axis indicator (top-right of viewport) */}
      <g transform="translate(700, 50)" fontFamily="monospace" fontSize="10">
        <line x1="0" y1="0" x2="14" y2="-8" stroke="#ef4444" strokeWidth="1.5" /><text x="16" y="-8" fill="#ef4444">x</text>
        <line x1="0" y1="0" x2="-14" y2="-8" stroke="#82c832" strokeWidth="1.5" /><text x="-22" y="-8" fill="#82c832">y</text>
        <line x1="0" y1="0" x2="0" y2="-18" stroke="#3b82f6" strokeWidth="1.5" /><text x="-3" y="-22" fill="#3b82f6">z</text>
      </g>
    </svg>
  )
}

function SimSparkline({ data, accent }: { data: number[]; accent: string }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const w = 100
  const h = 28
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w
      const y = h - ((v - min) / range) * h
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(" ")
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-7 w-full" preserveAspectRatio="none">
      <polyline
        points={points}
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points={`0,${h} ${points} ${w},${h}`}
        fill={accent}
        fillOpacity="0.12"
        stroke="none"
      />
    </svg>
  )
}

function FeasibilityAssessment() {
  const [activeIdx, setActiveIdx] = useState(0)
  const topic = feasibilityTopics[activeIdx]
  const riskStyle: Record<string, { dot: string; label: string }> = {
    "Low":     { dot: "bg-accent-green",  label: "text-accent-green" },
    "Low–Med": { dot: "bg-amber-400",     label: "text-amber-500" },
  }

  const usdTree = [
    { depth: 0, kind: "root",  name: "/World" },
    { depth: 1, kind: "scope", name: "Cell_" + topic.cellCode },
    { depth: 2, kind: "xform", name: "Floor",          phantom: false },
    { depth: 2, kind: "xform", name: "Conveyor_01",    phantom: false },
    { depth: 2, kind: "xform", name: "PartsBin_A",     phantom: false },
    { depth: 2, kind: "xform", name: "Workbench_01",   phantom: false },
    { depth: 2, kind: "xform", name: "QC_Station",     phantom: true },
    { depth: 1, kind: "scope", name: "Robots" },
    { depth: 2, kind: "xform", name: "Humanoid_01",    phantom: false },
    { depth: 3, kind: "skel",  name: "Skeleton (32 joints)" },
    { depth: 1, kind: "scope", name: "Physics" },
    { depth: 2, kind: "phys",  name: "PhysicsScene · 240 Hz" },
    { depth: 1, kind: "scope", name: "Sensors" },
    { depth: 2, kind: "cam",   name: "RGBD_chest_cam" },
    { depth: 2, kind: "cam",   name: "Wrist_cam_L" },
    { depth: 2, kind: "cam",   name: "Wrist_cam_R" },
    { depth: 2, kind: "imu",   name: "IMU · base_link" },
  ]

  const kindGlyph: Record<string, string> = {
    root:  "▸",
    scope: "▾",
    xform: "◇",
    skel:  "⨯",
    phys:  "⚡",
    cam:   "◉",
    imu:   "↟",
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-black/5 bg-[#f9f9f9] shadow-[0_8px_40px_rgba(0,0,0,0.06)]">

      {/* industrial chrome bar */}
      <div className="flex items-center gap-3 border-b border-black/5 bg-charcoal px-5 py-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-green/15 text-accent-green">
          <Layers className="h-3.5 w-3.5" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-green">
            Omniverse Kit · Cell Twin Builder
          </span>
          <span className="font-mono text-[9.5px] text-white/50">
            project: aideology_stuttgart_b4.usd · physics: PhysX 5 · render: RTX
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {/* file menu pretend */}
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/60">
            GPU · 4× L40S
          </span>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-accent-green" />
          </div>
        </div>
      </div>

      {/* cell switcher tabs */}
      <div className="flex items-center gap-1 border-b border-black/5 bg-[#0d141d] px-3 pt-2">
        {feasibilityTopics.map((t, idx) => {
          const TaskIcon = t.taskIcon
          const isActive = idx === activeIdx
          return (
            <button
              key={t.id}
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-1.5 rounded-t-md border-x border-t px-3 py-1.5 text-[10px] font-mono transition ${
                isActive
                  ? "border-[rgba(180,220,255,0.2)] bg-[#0a1117] text-accent-green"
                  : "border-transparent text-white/45 hover:text-white/70"
              }`}
            >
              <TaskIcon className="h-3 w-3" />
              <span className="font-bold uppercase tracking-wider">{t.cellCode}</span>
              <span className="hidden text-white/35 sm:inline">·</span>
              <span className="hidden text-white/55 sm:inline">{t.name}</span>
            </button>
          )
        })}
        <span className="ml-auto flex items-center gap-1 px-2 text-[9px] font-mono text-white/40">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
          PhysX · 240 Hz
        </span>
      </div>

      {/* main 3-column layout: USD tree | viewport | properties */}
      <div className="grid bg-[#0a1117] xl:grid-cols-[180px_1fr_220px]">
        {/* left: USD asset tree */}
        <div className="flex flex-col border-r border-[rgba(180,220,255,0.08)]">
          <div className="flex items-center justify-between border-b border-[rgba(180,220,255,0.08)] px-3 py-2">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[rgba(180,220,255,0.55)]">USD Stage</span>
            <span className="font-mono text-[9px] text-[rgba(180,220,255,0.35)]">{usdTree.length} prims</span>
          </div>
          <div className="flex-1 overflow-y-auto py-1.5 font-mono text-[10px]">
            {usdTree.map((node, i) => (
              <div
                key={i}
                className={`flex items-center gap-1.5 px-3 py-0.5 ${
                  node.kind === "scope"
                    ? "text-[rgba(180,220,255,0.85)]"
                    : node.phantom
                    ? "text-[rgba(130,200,50,0.55)]"
                    : "text-[rgba(180,220,255,0.55)]"
                }`}
                style={{ paddingLeft: `${12 + node.depth * 10}px` }}
              >
                <span className="text-accent-green/70">{kindGlyph[node.kind] || "·"}</span>
                <span className={node.phantom ? "italic" : ""}>{node.name}</span>
                {node.phantom && (
                  <span className="ml-auto rounded-sm border border-accent-green/30 bg-accent-green/10 px-1 text-[7.5px] uppercase tracking-wider text-accent-green">
                    auth
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* center: isometric viewport */}
        <div className="relative">
          {/* viewport chrome */}
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-md border border-[rgba(180,220,255,0.15)] bg-black/60 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-accent-green/90 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" />
            </span>
            Isaac Sim · live
          </div>
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-md border border-[rgba(180,220,255,0.15)] bg-black/60 px-2 py-1 font-mono text-[9px] text-white/70 backdrop-blur-sm">
            <span>iso · 30°</span>
            <span className="text-white/30">|</span>
            <span>60 fps</span>
            <span className="text-white/30">|</span>
            <span>RTX</span>
          </div>
          {/* sim runs counter */}
          <div className="absolute bottom-3 left-3 z-10 rounded-md border border-[rgba(180,220,255,0.15)] bg-black/60 px-2.5 py-1.5 backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[8.5px] uppercase tracking-wider text-[rgba(180,220,255,0.55)]">Domain-randomised runs</span>
              <span className="font-mono text-[11px] font-bold text-accent-green">{topic.simRuns}</span>
            </div>
            <SimSparkline data={topic.trajectory} accent="#82c832" />
            <div className="mt-1 flex items-center justify-between font-mono text-[8px] uppercase tracking-wider">
              <span className="text-[rgba(180,220,255,0.55)]">policy reward · Isaac Lab</span>
              <span className="text-accent-green">↑ {topic.successRate}%</span>
            </div>
          </div>

          <OmniverseTwinScene topic={topic} />
        </div>

        {/* right: properties panel */}
        <div className="flex flex-col gap-3 border-l border-[rgba(180,220,255,0.08)] p-3 text-[10px] text-[rgba(180,220,255,0.7)]">
          <div>
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[rgba(180,220,255,0.5)]">Selected prim</span>
            <p className="mt-1 font-mono text-[11px] text-white">/World/Robots/Humanoid_01</p>
          </div>

          <div className="rounded-md border border-[rgba(180,220,255,0.1)] bg-[rgba(180,220,255,0.03)] p-2">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[rgba(180,220,255,0.5)]">Sim metrics</span>
            <div className="mt-1.5 grid grid-cols-2 gap-1.5 font-mono">
              <div>
                <span className="block text-[8.5px] uppercase tracking-wider text-[rgba(180,220,255,0.4)]">success</span>
                <span className="text-[12px] font-bold text-accent-green">{topic.successRate}%</span>
              </div>
              <div>
                <span className="block text-[8.5px] uppercase tracking-wider text-[rgba(180,220,255,0.4)]">cycle</span>
                <span className="text-[12px] font-bold text-white">{topic.cycleTime}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-[8.5px] uppercase tracking-wider text-[rgba(180,220,255,0.4)]">twin readiness</span>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-[rgba(180,220,255,0.1)]">
                    <div className="h-full rounded-full bg-blue-400/80" style={{ width: `${topic.dataScore}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-white">{topic.dataScore}%</span>
                </div>
              </div>
              <div className="col-span-2">
                <span className="block text-[8.5px] uppercase tracking-wider text-[rgba(180,220,255,0.4)]">expected return</span>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-[rgba(180,220,255,0.1)]">
                    <div className="h-full rounded-full bg-accent-green" style={{ width: `${topic.returnScore}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-white">{topic.returnScore}%</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[rgba(180,220,255,0.5)]">Risk &amp; effort</span>
            <div className="mt-1 flex flex-wrap items-center gap-1.5">
              <span className="rounded-full border border-[rgba(180,220,255,0.15)] bg-[rgba(180,220,255,0.05)] px-2 py-0.5 font-mono text-[9px] text-white">
                ⏱ {topic.effort}
              </span>
              <span className={`flex items-center gap-1 font-mono text-[9.5px] ${riskStyle[topic.risk].label}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${riskStyle[topic.risk].dot}`} />
                {topic.risk} risk
              </span>
            </div>
          </div>

          <div>
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[rgba(180,220,255,0.5)]">NVIDIA stack</span>
            <div className="mt-1 flex flex-wrap gap-1">
              {topic.integrations.map((int) => (
                <span key={int} className="rounded-sm border border-[rgba(180,220,255,0.15)] bg-[rgba(180,220,255,0.04)] px-1.5 py-0.5 font-mono text-[8.5px] text-[rgba(180,220,255,0.7)]">
                  {int}
                </span>
              ))}
            </div>
          </div>

          <div className={`mt-auto rounded-md p-2 ${activeIdx === 0 ? "bg-accent-green/15" : "bg-amber-500/12"}`}>
            <p className={`text-[10px] font-semibold leading-relaxed ${activeIdx === 0 ? "text-accent-green" : "text-amber-300"}`}>
              {activeIdx === 0
                ? "Clean cell geometry, well-defined parts — ready to train in Isaac Lab."
                : "Larger part library and tighter tolerances — high return justifies the work."}
            </p>
          </div>
        </div>
      </div>

      {/* status bar */}
      <div className="flex items-center justify-between gap-3 bg-[#070b12] px-4 py-1.5 font-mono text-[9px] text-[rgba(180,220,255,0.4)]">
        <span>frame: 02:14:57:18</span>
        <span>1.42 ms / frame</span>
        <span>9 prims · 32 joints</span>
        <span className="text-accent-green">policy: humanoid_pickplace_v07</span>
      </div>
    </div>
  )
}

// ─── Sticky Progress Rail ───────────────────────────────────────────────────

const rail = [
  { n: 1, label: "Walk the floor", icon: ScanSearch },
  { n: 2, label: "Twin in Omniverse", icon: BarChart3 },
  { n: 3, label: "Train policy", icon: Bot },
  { n: 4, label: "Sim-to-real", icon: Network },
  { n: 5, label: "Operator UX", icon: LayoutDashboard },
  { n: 6, label: "Scale fleet", icon: TrendingUp },
]

function ProgressRail({ active }: { active: number }) {
  const handleJump = (n: number) => {
    const el = document.getElementById(`scene-${n.toString().padStart(2, "0")}`)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        {rail.map(({ n, label, icon: Icon }) => {
          const isActive = active === n
          const isPast = active > n
          return (
            <button
              key={n}
              onClick={() => handleJump(n)}
              className="group flex items-center gap-2 outline-none focus:outline-none"
              aria-label={`Jump to step ${n}: ${label}`}
            >
              <span
                className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium backdrop-blur transition-all duration-300 ${
                  isActive
                    ? "bg-charcoal text-white opacity-100"
                    : "bg-white/80 text-charcoal opacity-0 group-hover:opacity-100"
                }`}
              >
                {label}
              </span>
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? "scale-110 border-accent-green bg-accent-green text-charcoal shadow-[0_4px_18px_rgba(130,200,50,0.4)]"
                    : isPast
                    ? "border-accent-green bg-accent-green/20 text-accent-green"
                    : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Scene 4: NVIDIA AI Enterprise stack (sim ↔ real bridge) ────────────────

type BrandKey = "vision" | "depth" | "joint" | "force" | "mes" | "wms" | "fleet" | "safety" | "nvidia"

const scene4Sources: { id: string; label: string; sublabel: string; brand: BrandKey; Icon: LucideIcon }[] = [
  { id: "src-rgb",   label: "RGB-D cameras",  sublabel: "30 Hz · multi-view",      brand: "vision", Icon: Camera },
  { id: "src-lidar", label: "LiDAR / depth",  sublabel: "Cell occupancy + humans", brand: "depth",  Icon: ScanLine },
  { id: "src-force", label: "Force / torque", sublabel: "Contact + grasp",         brand: "force",  Icon: Gauge },
  { id: "src-mes",   label: "MES order",      sublabel: "Task, part, sequence",    brand: "mes",    Icon: Factory },
]

// Stack layers, top → bottom (cloud → edge)
const scene4Steps: { id: string; tier: string; label: string; sub: string; Icon: LucideIcon; nvidia: string }[] = [
  { id: "st-cloud",  tier: "Cloud",     label: "NVIDIA AI Enterprise",  sub: "Fleet control plane · governance · OTA", Icon: Cloud,       nvidia: "DGX Cloud" },
  { id: "st-twin",   tier: "Sim",       label: "Omniverse · Isaac Sim/Lab", sub: "Digital twin + RL training in sim", Icon: Layers,    nvidia: "USD · PhysX" },
  { id: "st-policy", tier: "Policy",    label: "GR00T fine-tuned for STG-A1", sub: "Humanoid foundation policy", Icon: Brain,      nvidia: "GR00T-FT" },
  { id: "st-nim",    tier: "Services",  label: "NIM microservices",     sub: "Perception, planning, safety as APIs", Icon: Cpu,         nvidia: "NIM" },
  { id: "st-edge",   tier: "Edge",      label: "Jetson Thor on Humanoid_01", sub: "On-robot inference @ 60 Hz", Icon: Bot,           nvidia: "Jetson Thor" },
]

const scene4Actions: { id: string; label: string; sublabel: string; brand: BrandKey; Icon: LucideIcon }[] = [
  { id: "act-pick",   label: "Pick &amp; place part",  sublabel: "Bin → fixture",         brand: "vision", Icon: Package },
  { id: "act-mes",    label: "Update MES",            sublabel: "Operation complete",     brand: "mes",    Icon: Factory },
  { id: "act-wms",    label: "Reserve next kit",      sublabel: "WMS pick request",       brand: "wms",    Icon: Boxes },
  { id: "act-alert",  label: "Notify supervisor",     sublabel: "Exception or approval",  brand: "safety", Icon: Siren },
]

const scene4Tools: { label: string; Icon: LucideIcon }[] = [
  { label: "Omniverse · USD",            Icon: Layers },
  { label: "Isaac Sim",                  Icon: Cpu },
  { label: "Isaac Lab · RL",             Icon: Brain },
  { label: "GR00T foundation",           Icon: Sparkles },
  { label: "NIM microservices",          Icon: Cloud },
  { label: "Jetson Thor edge",           Icon: Bot },
  { label: "NVIDIA AI Enterprise",       Icon: ShieldCheck },
]

function BrandBadge({ brand, Icon }: { brand: BrandKey; Icon: LucideIcon }) {
  const colors: Record<BrandKey, string> = {
    vision: "bg-[#76B900]",
    depth:  "bg-[#0A66C2]",
    joint:  "bg-charcoal",
    force:  "bg-[#EA8B1A]",
    mes:    "bg-[#3F4B66]",
    wms:    "bg-[#6264A7]",
    fleet:  "bg-[#00A1E0]",
    safety: "bg-[#C0392B]",
    nvidia: "bg-[#76B900]",
  }
  return (
    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${colors[brand]} text-white shadow-sm`}>
      <Icon className="h-4 w-4" />
    </div>
  )
}

// Horizontal flow arrow (sources → stack and stack → actions)
function Scene4ArrowConnector({ label, dir = "right" }: { label?: string; dir?: "right" | "left" }) {
  const flip = dir === "left"
  return (
    <div className="flex items-center justify-center">
      <svg viewBox="0 0 48 40" className={`h-10 w-14 overflow-visible ${flip ? "-scale-x-100" : ""}`} fill="none" aria-hidden>
        <line
          data-scene4-arrow
          x1="3" y1="20" x2="42" y2="20"
          stroke="#82c832"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="45"
          strokeDashoffset="45"
        />
        <line
          x1="3" y1="20" x2="42" y2="20"
          stroke="#82c832"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 5"
          opacity="0.55"
          style={{ animation: "scene4-flow 1.8s linear infinite" }}
        />
        <polyline
          data-scene4-arrowhead
          points="37,13 45,20 37,27"
          stroke="#82c832"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0"
        />
        {label && (
          <text x="23" y="10" textAnchor="middle" fontSize="6" fill="#6b7280" fontWeight="600" letterSpacing="1" transform={flip ? "translate(46 0) scale(-1 1)" : undefined}>
            {label}
          </text>
        )}
      </svg>
    </div>
  )
}

// Vertical connector between stack layers
function Scene4StackArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg viewBox="0 0 60 28" className="h-7 w-16 overflow-visible" fill="none" aria-hidden>
        <line
          data-scene4-arrow
          x1="30" y1="2" x2="30" y2="22"
          stroke="#82c832"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="22"
          strokeDashoffset="22"
        />
        <line
          x1="30" y1="2" x2="30" y2="22"
          stroke="#82c832"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 4"
          opacity="0.55"
          style={{ animation: "scene4-flow-v 1.6s linear infinite" }}
        />
        <polyline
          data-scene4-arrowhead
          points="24,18 30,26 36,18"
          stroke="#82c832"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0"
        />
        {label && (
          <text x="40" y="16" fontSize="5.5" fill="#6b7280" fontWeight="600" letterSpacing="0.6">
            {label}
          </text>
        )}
      </svg>
    </div>
  )
}

function Scene4MultiAgent({
  sceneRef,
  block,
}: {
  sceneRef: React.RefObject<HTMLElement | null>
  block: Block
}) {
  const StepIcon = block.stepIcon
  return (
    <section
      ref={sceneRef}
      id="scene-04"
      data-scene="4"
      className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#f9f9f9] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
    >
      <div className="bg-charcoal p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
            <StepIcon className="h-5 w-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">{block.label}</span>
        </div>
        <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{block.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-white/60">{block.summary}</p>
      </div>

      <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[280px_1fr] xl:items-start xl:gap-10">
        {/* bullets */}
        <div className="space-y-3">
          {block.bullets.map(({ icon: BulletIcon, text }, i) => (
            <div
              key={text}
              data-scene4-bullet={i}
              className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm opacity-0"
              style={{ transform: "translateY(12px)" }}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                <BulletIcon className="h-4 w-4" />
              </div>
              <span className="text-sm leading-relaxed text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* NVIDIA AI Enterprise stack — sim ↔ real */}
        <div className="overflow-hidden rounded-[1.5rem] border border-accent-green/15 bg-gradient-to-b from-[#f7f7f7] to-white shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
          {/* server-rack chrome */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 bg-charcoal px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-green/15 text-accent-green">
                <Cpu className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-green">
                  AIdeology Humanoid Stack · STG-A1
                </div>
                <div className="font-mono text-[9.5px] text-white/55">
                  cloud → sim → policy → services → edge · sim ↔ real bridge
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent-green">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" />
              </span>
              policy v07 · live
            </div>
          </div>

          {/* main grid: SIM | STACK | REAL */}
          <div className="grid gap-3 p-4 md:p-5 lg:grid-cols-[minmax(0,0.85fr)_auto_minmax(0,1.1fr)_auto_minmax(0,0.85fr)] lg:items-stretch">

            {/* ─── LEFT: SIM column ─── */}
            <div className="flex flex-col gap-2">
              <div className="mb-1 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-blue-400">
                <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-blue-500/15 text-blue-500"><Layers className="h-2.5 w-2.5" /></span>
                Sim · digital twin
              </div>
              {/* mini sim viewport */}
              <div className="relative h-28 overflow-hidden rounded-lg border border-blue-500/20 bg-gradient-to-b from-[#0d141d] to-[#070b12]">
                <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  <defs>
                    <pattern id="simGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(96,165,250,0.2)" strokeWidth="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100" height="60" fill="url(#simGrid)" />
                  <line x1="0" y1="35" x2="100" y2="35" stroke="rgba(96,165,250,0.4)" strokeWidth="0.3" />
                  {/* small humanoid in sim */}
                  <g transform="translate(50 32)">
                    <circle cx="0" cy="-12" r="3" fill="#dde3ea" />
                    <rect x="-3" y="-9" width="6" height="9" rx="1.5" fill="#f1f4f8" />
                    <rect x="-4.5" y="0" width="3" height="8" rx="1" fill="#dde3ea" />
                    <rect x="1.5" y="0" width="3" height="8" rx="1" fill="#dde3ea" />
                    <circle cx="0" cy="-6" r="1" fill="#82c832" />
                  </g>
                </svg>
                <div className="absolute left-1.5 top-1.5 flex items-center gap-1 rounded-sm bg-black/60 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-blue-300">
                  <Layers className="h-2 w-2" /> Isaac Sim
                </div>
                <div className="absolute right-1.5 top-1.5 rounded-sm bg-black/60 px-1.5 py-0.5 font-mono text-[8px] text-blue-300">240 Hz</div>
              </div>
              {/* training stats */}
              <div className="rounded-lg border border-blue-500/20 bg-blue-500/[0.04] p-2 font-mono text-[9.5px]">
                <div className="mb-0.5 flex items-center justify-between">
                  <span className="uppercase tracking-wider text-blue-400/70">DR runs</span>
                  <span className="font-bold text-blue-300">5,240</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wider text-blue-400/70">success</span>
                  <span className="font-bold text-blue-300">96.8%</span>
                </div>
              </div>
              <span className="mt-auto text-center font-mono text-[9px] text-blue-400/70">
                ← train policy in sim
              </span>
            </div>

            {/* sim → stack arrow */}
            <Scene4ArrowConnector label="PROMOTE" />

            {/* ─── CENTER: NVIDIA AI ENTERPRISE STACK ─── */}
            <div className="relative flex flex-col gap-1 rounded-2xl border border-accent-green/30 bg-white p-3 shadow-[0_8px_32px_rgba(130,200,50,0.06)]">
              {/* rack ear left */}
              <span className="pointer-events-none absolute -left-1 top-3 h-2 w-2 rounded-sm bg-accent-green/40" />
              <span className="pointer-events-none absolute -left-1 bottom-3 h-2 w-2 rounded-sm bg-accent-green/40" />
              <span className="pointer-events-none absolute -right-1 top-3 h-2 w-2 rounded-sm bg-accent-green/40" />
              <span className="pointer-events-none absolute -right-1 bottom-3 h-2 w-2 rounded-sm bg-accent-green/40" />

              <div className="mb-1 flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-accent-green">
                  <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-accent-green text-charcoal"><Cpu className="h-2.5 w-2.5" /></span>
                  NVIDIA AI Enterprise · Stack
                </span>
                <span className="font-mono text-[8.5px] text-gray-400">5 layers</span>
              </div>

              {/* stack layers */}
              {scene4Steps.map((st, i) => {
                const Icon = st.Icon
                const isPolicy = st.id === "st-policy"
                return (
                  <div key={st.id}>
                    <div
                      data-scene4-step={i}
                      className={`relative flex items-center gap-2.5 rounded-lg border px-2.5 py-2 opacity-0 transition ${
                        isPolicy
                          ? "border-accent-green/60 bg-gradient-to-r from-accent-green/15 to-accent-green/[0.05]"
                          : "border-black/[0.08] bg-[#fafafa]"
                      }`}
                      style={{ transform: "translateY(8px)" }}
                    >
                      <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-gray-400">L{5 - i}</span>
                      <span className={`flex h-7 w-7 items-center justify-center rounded-md ${
                        isPolicy ? "bg-accent-green text-charcoal" : "bg-accent-green/15 text-accent-green"
                      }`}>
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[11.5px] font-bold text-charcoal">{st.label}</span>
                          <span className="font-mono text-[8.5px] uppercase tracking-wider text-gray-400">{st.tier}</span>
                        </div>
                        <div className="truncate text-[10px] text-gray-500">{st.sub}</div>
                      </div>
                      <span className="hidden shrink-0 rounded-sm border border-accent-green/30 bg-white px-1.5 py-0.5 font-mono text-[8.5px] font-bold text-accent-green md:inline">
                        {st.nvidia}
                      </span>
                    </div>
                    {i < scene4Steps.length - 1 && <Scene4StackArrow />}
                  </div>
                )
              })}
            </div>

            {/* stack → real arrow */}
            <Scene4ArrowConnector label="DEPLOY" />

            {/* ─── RIGHT: REAL column ─── */}
            <div className="flex flex-col gap-2">
              <div className="mb-1 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-accent-green">
                <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-accent-green/15 text-accent-green"><Factory className="h-2.5 w-2.5" /></span>
                Real · cell STG-A1
              </div>
              {/* real-cell viewport with humanoid */}
              <div className="relative h-28 overflow-hidden rounded-lg border border-accent-green/30 bg-gradient-to-b from-[#1a2330] to-[#0d141d]">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(transparent 92%, rgba(130,200,50,0.5) 92%), linear-gradient(90deg, transparent 92%, rgba(130,200,50,0.5) 92%)",
                    backgroundSize: "12px 12px",
                    maskImage: "linear-gradient(to bottom, transparent 40%, black 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, black 100%)",
                  }}
                />
                <div
                  data-scene4-avatar
                  className="absolute bottom-1 left-1/2 flex -translate-x-1/2 items-end justify-center opacity-0"
                  style={{ transform: "translateX(-50%) scale(0.75)" }}
                >
                  <HumanoidIcon size={56} variant="dark" />
                </div>
                <div className="absolute left-1.5 top-1.5 flex items-center gap-1 rounded-sm bg-black/60 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-accent-green">
                  <span className="h-1 w-1 rounded-full bg-accent-green" />
                  Humanoid_01
                </div>
                <div className="absolute right-1.5 top-1.5 rounded-sm bg-black/60 px-1.5 py-0.5 font-mono text-[8px] text-accent-green">60 Hz</div>
              </div>
              {/* live stats */}
              <div className="rounded-lg border border-accent-green/20 bg-accent-green/[0.04] p-2 font-mono text-[9.5px]">
                <div className="mb-0.5 flex items-center justify-between">
                  <span className="uppercase tracking-wider text-accent-green/70">cycles</span>
                  <span className="font-bold text-accent-green">142 / hr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wider text-accent-green/70">success</span>
                  <span className="font-bold text-accent-green">98.6%</span>
                </div>
              </div>
              <span className="mt-auto text-center font-mono text-[9px] text-accent-green/70">
                ← run on real cell
              </span>
            </div>
          </div>

          {/* Sources & Actions row (under the stack) */}
          <div className="grid gap-3 border-t border-black/5 bg-[#fafafa] p-4 md:grid-cols-2">
            {/* SENSORS IN */}
            <div>
              <div className="mb-2 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal">
                <ArrowRight className="h-3 w-3 rotate-90 text-accent-green" />
                Sensors stream into the stack
              </div>
              <div className="grid grid-cols-2 gap-2">
                {scene4Sources.map((s, i) => (
                  <div
                    key={s.id}
                    data-scene4-source={i}
                    className="flex items-center gap-2 rounded-lg border border-black/[0.08] bg-white px-2.5 py-1.5 opacity-0 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                    style={{ transform: "translateX(-12px)" }}
                  >
                    <BrandBadge brand={s.brand} Icon={s.Icon} />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[10.5px] font-semibold text-charcoal">{s.label}</div>
                      <div className="truncate font-mono text-[9px] text-gray-500">{s.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ACTIONS OUT */}
            <div>
              <div className="mb-2 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal">
                <ArrowRight className="h-3 w-3 -rotate-90 text-accent-green" />
                Actions back to the cell
              </div>
              <div className="grid grid-cols-2 gap-2">
                {scene4Actions.map((a, i) => (
                  <div
                    key={a.id}
                    data-scene4-action={i}
                    className="flex items-center gap-2 rounded-lg border border-black/[0.08] bg-white px-2.5 py-1.5 opacity-0 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                    style={{ transform: "translateX(12px)" }}
                  >
                    <BrandBadge brand={a.brand} Icon={a.Icon} />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[10.5px] font-semibold text-charcoal" dangerouslySetInnerHTML={{ __html: a.label }} />
                      <div className="truncate font-mono text-[9px] text-gray-500">{a.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools footer */}
          <div className="border-t border-black/5 bg-charcoal p-3">
            <div className="mb-2 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-accent-green">
              <Wrench className="h-3 w-3" />
              NVIDIA components in this stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {scene4Tools.map((t, i) => (
                <span
                  key={t.label}
                  data-scene4-tool={i}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] font-semibold text-white opacity-0"
                  style={{ transform: "translateY(6px)" }}
                >
                  <t.Icon className="h-3 w-3 text-accent-green" />
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes scene4-flow {
              from { stroke-dashoffset: 0; }
              to   { stroke-dashoffset: -24; }
            }
            @keyframes scene4-flow-v {
              from { stroke-dashoffset: 0; }
              to   { stroke-dashoffset: -18; }
            }
          `}</style>
        </div>

        {/* caption — spans full width below the blueprint */}
        <div
          data-scene4-caption
          className="xl:col-span-2 mx-auto mt-2 flex items-center gap-2 rounded-full border border-accent-green/30 bg-gradient-to-r from-accent-green/10 via-accent-green/15 to-accent-green/10 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-green opacity-0 shadow-[0_4px_16px_rgba(130,200,50,0.12)]"
          style={{ transform: "translateY(8px)" }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          Every humanoid skill in the cell follows this same blueprint
        </div>
      </div>
    </section>
  )
}

// ─── Scene 5: User Experience ───────────────────────────────────────────────

// Scene 5 workspace mock data ——————————————————————————————————————
const scene5Agents = [
  { id: "s5a1", name: "H-01", role: "Bin-picking · A1",       task: "Picking parts from tote 14",          status: "active" as const, progress: 72, battery: 84, signal: 4 },
  { id: "s5a2", name: "H-02", role: "Kitting · A2",           task: "Assembling kit BOM-2041",             status: "active" as const, progress: 46, battery: 67, signal: 4 },
  { id: "s5a3", name: "H-03", role: "QC inspection",          task: "Visual QC on batch #884",             status: "active" as const, progress: 88, battery: 92, signal: 3 },
  { id: "s5a4", name: "H-04", role: "Material handover",      task: "Awaiting next pallet from line",      status: "idle"   as const, progress: 30, battery: 41, signal: 2 },
  { id: "s5a5", name: "H-05", role: "Machine tending · CNC",  task: "Loading CNC-3, unloading CNC-2",      status: "active" as const, progress: 60, battery: 76, signal: 4 },
]

const scene5Decisions = [
  {
    id: "d1",
    agent: "H-01 · Bin-picking",
    title: "Approve non-standard grasp on part 7821-B",
    detail: "Confidence 71% on a deformed tote item. Approve attempt or fall back to operator?",
    amount: "Low conf.",
    tag: "Manipulation",
  },
  {
    id: "d2",
    agent: "H-04 · Material handover",
    title: "Authorise route through walkway 3B",
    detail: "Crowd density at safe limit. Switch to alternate path adds 28s to cycle.",
    amount: "+28s",
    tag: "Safety",
  },
]

const scene5Drafts = [
  {
    id: "dr1",
    agent: "H-03 · Inspection",
    subject: "QC report ready · batch #884",
    preview: "172 of 180 parts passed. 8 flagged for rework with annotated images and reason codes for line lead review…",
    ready: true,
  },
  {
    id: "dr2",
    agent: "H-02 · Kitting",
    subject: "Skill update v0.34 ready to promote",
    preview: "New kitting policy improved success rate from 94.1% to 96.8% across 5,400 sim runs. Promote to Cell A2?",
    ready: true,
  },
]

const scene5Activity = [
  { id: "act1", text: "H-01 completed 142 picks in the last hour (98.6% success)", time: "2 min ago" },
  { id: "act2", text: "H-02 finished kit BOM-2039 and reported to MES",            time: "14 min ago" },
  { id: "act3", text: "H-03 flagged 3 parts for rework on batch #883",             time: "28 min ago" },
]

function Scene5Experience({
  sceneRef,
  block,
}: {
  sceneRef: React.RefObject<HTMLElement | null>
  block: Block
}) {
  const StepIcon = block.stepIcon
  return (
    <section
      ref={sceneRef}
      id="scene-05"
      data-scene="5"
      className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#f9f9f9] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
    >
      <div className="bg-charcoal p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
            <StepIcon className="h-5 w-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">{block.label}</span>
        </div>
        <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{block.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-white/60">{block.summary}</p>
      </div>

      <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[280px_1fr] xl:items-start xl:gap-10">
        {/* bullets */}
        <div className="space-y-3">
          {block.bullets.map(({ icon: BulletIcon, text }, i) => (
            <div
              key={text}
              data-scene5-bullet={i}
              className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm opacity-0"
              style={{ transform: "translateY(12px)" }}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                <BulletIcon className="h-4 w-4" />
              </div>
              <span className="text-sm leading-relaxed text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Mission Control cockpit */}
        <div
          data-scene5-workspace
          className="relative overflow-hidden rounded-[1.75rem] border border-[rgba(180,220,255,0.1)] bg-[#0a1117] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] opacity-0"
          style={{ transform: "translateY(24px)" }}
        >
          {/* control room chrome */}
          <div className="flex items-center gap-3 border-b border-[rgba(180,220,255,0.1)] bg-[#070b12] px-5 py-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-green/15 text-accent-green">
              <ShieldCheck className="h-3.5 w-3.5" />
            </div>
            <div className="leading-tight">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-green">
                Mission Control · STG · Building 4
              </div>
              <div className="font-mono text-[9px] text-[rgba(180,220,255,0.45)]">
                shift A · 07:42:18 CET · supervisor: SM · 5 humanoids on the floor
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-md border border-red-500/40 bg-red-500/15 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-red-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" /> REC
              </span>
              <button className="flex items-center gap-1.5 rounded-md border border-red-500/60 bg-red-500/20 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-red-300 shadow-[0_0_12px_rgba(239,68,68,0.3)]">
                <Siren className="h-3 w-3" />
                E-STOP
              </button>
            </div>
          </div>

          {/* telemetry KPI strip */}
          <div className="grid grid-cols-2 divide-x divide-[rgba(180,220,255,0.08)] border-b border-[rgba(180,220,255,0.08)] bg-[#0d141d] sm:grid-cols-4">
            {[
              { label: "Cycles / hr",  value: "142",     accent: "text-accent-green" },
              { label: "Success rate", value: "98.6%",   accent: "text-accent-green" },
              { label: "Avg cycle",    value: "18.4s",   accent: "text-white" },
              { label: "Mean energy",  value: "342 W",   accent: "text-blue-300" },
            ].map((k) => (
              <div key={k.label} className="px-4 py-2">
                <div className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.18em] text-[rgba(180,220,255,0.5)]">{k.label}</div>
                <div className={`font-mono text-base font-bold ${k.accent}`}>{k.value}</div>
              </div>
            ))}
          </div>

          {/* main grid: fleet rack | viewport+gauges | decisions */}
          <div className="grid bg-[#0a1117] xl:grid-cols-[200px_minmax(0,1fr)_280px]">
            {/* ─── LEFT: fleet rack ─── */}
            <div className="flex flex-col border-r border-[rgba(180,220,255,0.08)]">
              <div className="flex items-center justify-between border-b border-[rgba(180,220,255,0.08)] px-3 py-2">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[rgba(180,220,255,0.55)]">Fleet rack</span>
                <span className="flex items-center gap-1 font-mono text-[9px] text-accent-green">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" />
                  </span>
                  4/5 live
                </span>
              </div>
              <div className="flex flex-col">
                {scene5Agents.map((a, i) => {
                  const isFocused = i === 0
                  return (
                    <div
                      key={a.id}
                      data-scene5-agent={i}
                      className={`flex flex-col gap-1 border-b border-[rgba(180,220,255,0.06)] px-3 py-2 opacity-0 ${
                        isFocused ? "bg-accent-green/[0.06]" : ""
                      }`}
                      style={{ transform: "translateY(10px)" }}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className={`relative flex h-1.5 w-1.5 shrink-0`}>
                          {a.status === "active" && (
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-70" />
                          )}
                          <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                            a.status === "active" ? "bg-accent-green" : "bg-amber-400"
                          }`} />
                        </span>
                        <span className="font-mono text-[10.5px] font-bold text-white">{a.name}</span>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-[rgba(180,220,255,0.4)]">
                          {a.status === "active" ? "RUN" : "IDLE"}
                        </span>
                        {isFocused && (
                          <span className="ml-auto rounded-sm border border-accent-green/40 bg-accent-green/15 px-1 font-mono text-[7.5px] uppercase tracking-wider text-accent-green">
                            FOCUS
                          </span>
                        )}
                      </div>
                      <div className="font-mono text-[9px] leading-tight text-[rgba(180,220,255,0.6)]">{a.role}</div>
                      {/* battery + signal mini-row */}
                      <div className="flex items-center gap-2 font-mono text-[8.5px] text-[rgba(180,220,255,0.5)]">
                        <span className="flex items-center gap-0.5">
                          <span className={`h-1.5 w-2.5 rounded-sm border ${
                            a.battery > 50 ? "border-accent-green/60" : a.battery > 25 ? "border-amber-400/60" : "border-red-400/60"
                          }`}>
                            <span className={`block h-full rounded-sm ${
                              a.battery > 50 ? "bg-accent-green" : a.battery > 25 ? "bg-amber-400" : "bg-red-400"
                            }`} style={{ width: `${a.battery}%` }} />
                          </span>
                          {a.battery}%
                        </span>
                        <span className="ml-auto flex items-end gap-px">
                          {[1, 2, 3, 4].map((b) => (
                            <span key={b} className={`w-px ${
                              b <= a.signal ? "bg-accent-green" : "bg-[rgba(180,220,255,0.2)]"
                            }`} style={{ height: `${b * 1.5 + 1}px` }} />
                          ))}
                        </span>
                      </div>
                      {/* cycle progress */}
                      <div className="flex items-center gap-1.5">
                        <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-[rgba(180,220,255,0.1)]">
                          <div
                            data-scene5-agent-bar={i}
                            className={`h-full rounded-full ${a.status === "active" ? "bg-accent-green" : "bg-amber-400"}`}
                            style={{ width: "0%" }}
                            data-target-width={a.progress}
                          />
                        </div>
                        <span className="font-mono text-[8.5px] text-[rgba(180,220,255,0.55)]">{a.progress}%</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ─── CENTER: camera viewport + joint gauges ─── */}
            <div className="flex flex-col">
              {/* camera viewport */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[rgba(180,220,255,0.08)] bg-gradient-to-b from-[#1a2330] to-[#070b12]">
                {/* simulated robot's-eye view */}
                <svg viewBox="0 0 320 180" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="camGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(180,220,255,0.08)" strokeWidth="0.4" />
                    </pattern>
                    <radialGradient id="camVignette" cx="50%" cy="50%" r="60%">
                      <stop offset="60%" stopColor="rgba(0,0,0,0)" />
                      <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
                    </radialGradient>
                  </defs>
                  <rect width="320" height="180" fill="url(#camGrid)" />
                  {/* horizon */}
                  <line x1="0" y1="105" x2="320" y2="105" stroke="rgba(180,220,255,0.25)" strokeWidth="0.5" strokeDasharray="3 3" />
                  {/* parts bin (in front of robot) */}
                  <rect x="100" y="115" width="120" height="40" rx="4" fill="rgba(58,74,94,0.85)" stroke="rgba(180,220,255,0.4)" strokeWidth="0.6" />
                  {/* parts in bin */}
                  {[
                    { x: 115, y: 128, fill: "#82c832" },
                    { x: 138, y: 132, fill: "#a8d96a" },
                    { x: 162, y: 126, fill: "#82c832" },
                    { x: 185, y: 134, fill: "#7fb728" },
                    { x: 200, y: 130, fill: "#a8d96a" },
                  ].map((p, i) => <rect key={i} x={p.x} y={p.y} width="14" height="14" rx="1" fill={p.fill} opacity="0.85" />)}
                  {/* robot's own arms in foreground */}
                  <path d="M 30 180 L 60 130 L 95 145 L 95 180 Z" fill="rgba(220,230,240,0.85)" stroke="rgba(130,200,50,0.5)" strokeWidth="0.5" />
                  <path d="M 290 180 L 260 130 L 225 145 L 225 180 Z" fill="rgba(220,230,240,0.85)" stroke="rgba(130,200,50,0.5)" strokeWidth="0.5" />
                  {/* gripper tips */}
                  <rect x="86" y="143" width="12" height="6" rx="1" fill="#cfd6df" stroke="#82c832" strokeWidth="0.5" />
                  <rect x="222" y="143" width="12" height="6" rx="1" fill="#cfd6df" stroke="#82c832" strokeWidth="0.5" />

                  {/* detection bounding box around target part */}
                  <g>
                    <rect x="158" y="122" width="22" height="22" fill="none" stroke="#82c832" strokeWidth="1" />
                    <rect x="156" y="120" width="4" height="4" fill="#82c832" />
                    <rect x="178" y="120" width="4" height="4" fill="#82c832" />
                    <rect x="156" y="142" width="4" height="4" fill="#82c832" />
                    <rect x="178" y="142" width="4" height="4" fill="#82c832" />
                    <text x="160" y="116" fontSize="7" fontFamily="monospace" fill="#82c832">part_7821-B · 0.71</text>
                  </g>

                  {/* vignette overlay */}
                  <rect width="320" height="180" fill="url(#camVignette)" />

                  {/* center crosshair */}
                  <line x1="160" y1="86" x2="160" y2="98" stroke="#82c832" strokeWidth="0.6" />
                  <line x1="160" y1="106" x2="160" y2="118" stroke="#82c832" strokeWidth="0.6" />
                  <line x1="148" y1="102" x2="158" y2="102" stroke="#82c832" strokeWidth="0.6" />
                  <line x1="162" y1="102" x2="172" y2="102" stroke="#82c832" strokeWidth="0.6" />
                  <circle cx="160" cy="102" r="14" fill="none" stroke="rgba(130,200,50,0.4)" strokeWidth="0.4" strokeDasharray="2 3" />
                </svg>

                {/* viewport HUD overlays */}
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md border border-[rgba(180,220,255,0.15)] bg-black/60 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-accent-green backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" />
                  </span>
                  H-01 · chest cam
                </div>
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md border border-[rgba(180,220,255,0.15)] bg-black/60 px-2 py-1 font-mono text-[9px] text-white/70 backdrop-blur-sm">
                  <span>STG-A1</span>
                  <span className="text-white/30">|</span>
                  <span>30 fps</span>
                  <span className="text-white/30">|</span>
                  <span className="text-accent-green">Bin-picking</span>
                </div>
                {/* corner brackets */}
                <span className="pointer-events-none absolute left-2 top-9 h-3 w-3 border-l-2 border-t-2 border-accent-green/40" />
                <span className="pointer-events-none absolute right-2 top-9 h-3 w-3 border-r-2 border-t-2 border-accent-green/40" />
                <span className="pointer-events-none absolute bottom-12 left-2 h-3 w-3 border-b-2 border-l-2 border-accent-green/40" />
                <span className="pointer-events-none absolute bottom-12 right-2 h-3 w-3 border-b-2 border-r-2 border-accent-green/40" />

                {/* current task */}
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between rounded-md border border-[rgba(180,220,255,0.15)] bg-black/60 px-2 py-1 backdrop-blur-sm">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[rgba(180,220,255,0.55)]">cycle 73 of est. 142</span>
                  <span className="font-mono text-[9px] text-accent-green">grasp confidence 71%</span>
                </div>
              </div>

              {/* joint gauges row */}
              <div className="grid grid-cols-6 gap-px bg-[rgba(180,220,255,0.06)]">
                {[
                  { name: "θ1", v: 32, max: 90 },
                  { name: "θ2", v: 58, max: 90 },
                  { name: "θ3", v: 14, max: 60 },
                  { name: "θ4", v: 71, max: 90 },
                  { name: "θ5", v: 22, max: 45 },
                  { name: "θ6", v: 8,  max: 30 },
                ].map((j) => {
                  const pct = (j.v / j.max) * 100
                  const angle = -90 + (pct / 100) * 180
                  return (
                    <div key={j.name} className="flex flex-col items-center gap-1 bg-[#0d141d] px-1 py-2">
                      <svg viewBox="0 0 40 24" className="h-7 w-full">
                        <path d="M 4 22 A 16 16 0 0 1 36 22" fill="none" stroke="rgba(180,220,255,0.15)" strokeWidth="2" strokeLinecap="round" />
                        <path d={`M 4 22 A 16 16 0 0 1 ${+(20 + 16 * Math.cos((180 - pct * 1.8) * Math.PI / 180)).toFixed(4)} ${+(22 - 16 * Math.sin((180 - pct * 1.8) * Math.PI / 180)).toFixed(4)}`} fill="none" stroke="#82c832" strokeWidth="2" strokeLinecap="round" />
                        <line x1="20" y1="22" x2={+(20 + 14 * Math.cos((angle - 90) * Math.PI / 180)).toFixed(4)} y2={+(22 + 14 * Math.sin((angle - 90) * Math.PI / 180)).toFixed(4)} stroke="white" strokeWidth="0.8" />
                        <circle cx="20" cy="22" r="1.5" fill="#82c832" />
                      </svg>
                      <div className="flex w-full items-center justify-between font-mono text-[8px] text-[rgba(180,220,255,0.55)]">
                        <span>{j.name}</span>
                        <span className="text-white">{j.v}°</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* force / torque + activity */}
              <div className="grid gap-3 border-t border-[rgba(180,220,255,0.08)] p-3 sm:grid-cols-2">
                {/* force gauge */}
                <div className="rounded-md border border-[rgba(180,220,255,0.08)] bg-[#0d141d] p-2">
                  <div className="mb-1 flex items-center justify-between font-mono text-[8.5px] uppercase tracking-wider text-[rgba(180,220,255,0.5)]">
                    <span>Wrist force / torque</span>
                    <span className="text-accent-green">F = 4.2 N · safe</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 font-mono">
                    {[
                      { axis: "Fx", v: 1.2 },
                      { axis: "Fy", v: 4.2 },
                      { axis: "Fz", v: 0.8 },
                    ].map((f) => (
                      <div key={f.axis} className="rounded-sm bg-[rgba(180,220,255,0.04)] p-1.5">
                        <div className="text-[8px] uppercase tracking-wider text-[rgba(180,220,255,0.45)]">{f.axis}</div>
                        <div className="text-[11px] font-bold text-white">{f.v} N</div>
                        <div className="mt-0.5 h-0.5 overflow-hidden rounded-full bg-[rgba(180,220,255,0.1)]">
                          <div className="h-full rounded-full bg-accent-green" style={{ width: `${(f.v / 8) * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* activity stream */}
                <div className="rounded-md border border-[rgba(180,220,255,0.08)] bg-[#0d141d] p-2">
                  <div className="mb-1 flex items-center justify-between font-mono text-[8.5px] uppercase tracking-wider text-[rgba(180,220,255,0.5)]">
                    <span>Live event log</span>
                    <span className="flex items-center gap-1 text-accent-green">
                      <span className="h-1 w-1 rounded-full bg-accent-green" />
                      streaming
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {scene5Activity.map((a, i) => (
                      <div
                        key={a.id}
                        data-scene5-activity={i}
                        className="flex items-baseline gap-2 font-mono text-[9px] opacity-0"
                        style={{ transform: "translateX(-8px)" }}
                      >
                        <span className="text-[rgba(180,220,255,0.4)]">[07:{42 - i * 14}:18]</span>
                        <span className="flex-1 text-[rgba(180,220,255,0.85)]">{a.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ─── RIGHT: decisions + reports ─── */}
            <div className="flex flex-col gap-2 border-l border-[rgba(180,220,255,0.08)] p-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[rgba(180,220,255,0.55)]">Approval queue</span>
                <span className="rounded-sm border border-amber-400/30 bg-amber-400/10 px-1.5 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-wider text-amber-300">
                  {scene5Decisions.length} pending
                </span>
              </div>
              {scene5Decisions.map((d, i) => (
                <div
                  key={d.id}
                  data-scene5-decision={i}
                  className="flex flex-col gap-1.5 rounded-md border border-amber-400/30 bg-amber-400/[0.06] p-2 opacity-0"
                  style={{ transform: "translateY(8px)" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold text-amber-300">{d.agent}</span>
                    <span className="rounded-sm border border-[rgba(180,220,255,0.2)] bg-[rgba(180,220,255,0.05)] px-1 py-0.5 font-mono text-[8px] text-[rgba(180,220,255,0.7)]">
                      {d.tag}
                    </span>
                  </div>
                  <p className="text-[10px] font-semibold leading-tight text-white">{d.title}</p>
                  <p className="font-mono text-[9px] leading-snug text-[rgba(180,220,255,0.6)]">{d.detail}</p>
                  <div className="flex items-center gap-1.5">
                    <button className="flex items-center gap-1 rounded-sm bg-accent-green px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-charcoal">
                      <CheckCircle2 className="h-2.5 w-2.5" /> approve
                    </button>
                    <button className="rounded-sm border border-[rgba(180,220,255,0.2)] bg-transparent px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[rgba(180,220,255,0.6)]">
                      reject
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-2 flex items-center justify-between">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[rgba(180,220,255,0.55)]">Reports</span>
                <span className="rounded-sm border border-accent-green/30 bg-accent-green/10 px-1.5 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-wider text-accent-green">
                  {scene5Drafts.length} ready
                </span>
              </div>
              {scene5Drafts.map((d, i) => (
                <div
                  key={d.id}
                  data-scene5-draft={i}
                  className="flex flex-col gap-1 rounded-md border border-[rgba(180,220,255,0.1)] bg-[rgba(180,220,255,0.03)] p-2 opacity-0"
                  style={{ transform: "translateY(8px)" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold text-accent-green">{d.agent}</span>
                    {d.ready && (
                      <span className="flex items-center gap-0.5 rounded-sm bg-accent-green/15 px-1 py-0.5 font-mono text-[8px] uppercase tracking-wider text-accent-green">
                        <CheckCircle2 className="h-2 w-2" /> ready
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] font-semibold leading-tight text-white">{d.subject}</p>
                  <p className="font-mono text-[9px] leading-snug text-[rgba(180,220,255,0.55)] line-clamp-2">{d.preview}</p>
                </div>
              ))}
            </div>
          </div>

          {/* status bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#070b12] px-4 py-1.5 font-mono text-[9px] text-[rgba(180,220,255,0.4)]">
            <span>NVIDIA AI Enterprise · control plane @ 12 ms RTT</span>
            <span>policy v07 · GR00T-FT</span>
            <span>4 humanoids · 1 idle (H-04)</span>
            <span className="text-accent-green">all interlocks armed</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Scene 6: Scale & Support ───────────────────────────────────────────────

type Scene6Dept = {
  name: string
  code: string
  role: string
  region: string
  icon: LucideIcon
  highlight?: boolean
  robotCount: number
  uptime: number
  agents: { name: string; icon: LucideIcon }[]
}

const scene6Departments: Scene6Dept[] = [
  {
    name: "Plant · Stuttgart",
    code: "STG",
    role: "Pilot site",
    region: "DE",
    icon: Factory,
    highlight: true,
    robotCount: 6,
    uptime: 98.4,
    agents: [
      { name: "Bin-picking · A1", icon: Package },
      { name: "Kitting · A2",     icon: Layers },
      { name: "QC inspection",    icon: Eye },
      { name: "CNC tending",      icon: Cog },
    ],
  },
  {
    name: "Plant · Barcelona",
    code: "BCN",
    role: "Wave 2 rollout",
    region: "ES",
    icon: Factory,
    robotCount: 4,
    uptime: 96.1,
    agents: [
      { name: "Bin-picking · B1", icon: Package },
      { name: "Kitting · B2",     icon: Layers },
      { name: "Material handover",icon: Truck },
    ],
  },
  {
    name: "Plant · Monterrey",
    code: "MTY",
    role: "Wave 3 rollout",
    region: "MX",
    icon: Factory,
    robotCount: 3,
    uptime: 94.8,
    agents: [
      { name: "Bin-picking · C1", icon: Package },
      { name: "QC inspection",    icon: Eye },
      { name: "Machine tending",  icon: Cog },
    ],
  },
  {
    name: "Warehouse · Hub EU",
    code: "HUB",
    role: "Logistics fleet",
    region: "NL",
    icon: Truck,
    robotCount: 5,
    uptime: 97.2,
    agents: [
      { name: "Pallet move",      icon: Package },
      { name: "Order pick",       icon: Boxes },
      { name: "Loading dock",     icon: Truck },
    ],
  },
]

function Scene6Scale({
  sceneRef,
  block,
}: {
  sceneRef: React.RefObject<HTMLElement | null>
  block: Block
}) {
  const StepIcon = block.stepIcon
  return (
    <section
      ref={sceneRef}
      id="scene-06"
      data-scene="6"
      className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#f9f9f9] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
    >
      <div className="bg-charcoal p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
            <StepIcon className="h-5 w-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">{block.label}</span>
        </div>
        <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{block.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-white/60">{block.summary}</p>
      </div>

      <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[280px_1fr] xl:items-start xl:gap-10">
        {/* bullets */}
        <div className="space-y-3">
          {block.bullets.map(({ icon: BulletIcon, text }, i) => (
            <div
              key={text}
              data-scene6-bullet={i}
              className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm opacity-0"
              style={{ transform: "translateY(12px)" }}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                <BulletIcon className="h-4 w-4" />
              </div>
              <span className="text-sm leading-relaxed text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Fleet topology */}
        <div className="relative mx-auto w-full max-w-[760px] overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-gradient-to-b from-[#fafafa] to-white p-5 shadow-[0_4px_30px_rgba(0,0,0,0.04)] md:p-6">
          {/* faint grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(transparent 95%, #000 95%), linear-gradient(90deg, transparent 95%, #000 95%)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* header row: title + counter */}
          <div className="relative mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-green">
                Humanoid Fleet · Operating model
              </div>
              <div className="text-sm font-semibold text-charcoal">
                From one pilot cell to a global humanoid fleet
              </div>
            </div>
            <div
              data-scene6-counter
              className="flex items-baseline gap-2 rounded-full bg-charcoal px-4 py-2 text-white shadow-md"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent-green">Humanoids live</span>
              <span data-scene6-count className="text-lg font-bold tabular-nums text-white">1</span>
            </div>
          </div>

          {/* Control plane */}
          <div className="relative flex flex-col items-center gap-2">
            <div
              data-scene6-root
              className="relative flex h-24 w-[260px] items-center gap-3 overflow-hidden rounded-2xl border-2 border-accent-green bg-gradient-to-br from-charcoal via-[#1a2330] to-[#0d141d] px-4 py-3 shadow-[0_8px_32px_rgba(130,200,50,0.25)]"
            >
              {/* HUD corners */}
              <span className="absolute left-1.5 top-1.5 h-2 w-2 border-l-2 border-t-2 border-accent-green/70" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 border-r-2 border-t-2 border-accent-green/70" />
              <span className="absolute bottom-1.5 left-1.5 h-2 w-2 border-b-2 border-l-2 border-accent-green/70" />
              <span className="absolute bottom-1.5 right-1.5 h-2 w-2 border-b-2 border-r-2 border-accent-green/70" />

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-green text-charcoal shadow-md">
                <Cloud className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-green">
                  NVIDIA AI Enterprise
                </span>
                <span className="text-sm font-bold leading-tight text-white">Fleet Control Plane</span>
                <span className="mt-0.5 flex items-center gap-1 text-[9px] text-white/60">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" />
                  </span>
                  GR00T policies · OTA updates · telemetry
                </span>
              </div>
            </div>
          </div>

          {/* vertical trunk down from control plane */}
          <div className="relative mx-auto mt-3 h-6 w-px bg-accent-green/20">
            <div
              data-scene6-trunk
              className="absolute inset-x-0 top-0 bg-accent-green"
              style={{ height: "0%" }}
            />
          </div>

          {/* horizontal spreader + 4 site cards */}
          <div className="relative mt-0">
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-accent-green/20 md:block" />

            <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-4 md:gap-x-3">
              {scene6Departments.map((dept, i) => {
                const DeptIcon = dept.icon
                return (
                  <div
                    key={dept.name}
                    data-scene6-branch={i}
                    className="relative flex flex-col items-stretch gap-2 opacity-0"
                    style={{ transform: "translateY(16px)" }}
                  >
                    {/* vertical drop from spreader */}
                    <div className="mx-auto hidden h-4 w-px bg-accent-green/25 md:block" />

                    {/* site card */}
                    <div
                      className={`relative flex w-full flex-col gap-2 rounded-xl border px-2.5 py-2.5 ${
                        dept.highlight
                          ? "border-accent-green/50 bg-white shadow-[0_4px_16px_rgba(130,200,50,0.15)]"
                          : "border-black/[0.06] bg-white"
                      }`}
                    >
                      {/* site header */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${dept.highlight ? "bg-accent-green text-charcoal" : "bg-charcoal text-accent-green"}`}>
                            <DeptIcon className="h-3.5 w-3.5" />
                          </div>
                          <div className="flex flex-col leading-tight">
                            <span className="font-mono text-[9px] font-bold tracking-wider text-accent-green">{dept.code} · {dept.region}</span>
                            <span className="text-[10px] font-bold text-charcoal">{dept.name.replace(/^.*· /, "")}</span>
                          </div>
                        </div>
                        {dept.highlight && (
                          <span className="rounded-full bg-accent-green/15 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider text-accent-green">
                            Pilot
                          </span>
                        )}
                      </div>

                      {/* robot dots row */}
                      <div className="flex items-center gap-1 rounded-md bg-[#fafafa] px-1.5 py-1.5">
                        {Array.from({ length: dept.robotCount }).map((_, k) => (
                          <span
                            key={k}
                            className="flex h-4 w-3 items-end justify-center"
                          >
                            <HumanoidIcon size={11} variant="dark" accent={dept.highlight ? "#82c832" : "#76B900"} />
                          </span>
                        ))}
                        <span className="ml-auto font-mono text-[8px] font-bold text-gray-500">×{dept.robotCount}</span>
                      </div>

                      {/* uptime + role */}
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-gray-500">{dept.role}</span>
                        <span className="font-mono font-bold text-accent-green">↑ {dept.uptime}%</span>
                      </div>
                    </div>

                    {/* mini trunk to skill modules */}
                    <div className="mx-auto h-2 w-px bg-accent-green/25" />

                    {/* skill modules */}
                    <div className="flex w-full flex-col gap-1">
                      {dept.agents.map((agent, j) => {
                        const AgentIcon = agent.icon
                        return (
                          <div
                            key={agent.name}
                            data-scene6-child={`${i}-${j}`}
                            className="flex items-center gap-1.5 rounded-md border border-black/[0.06] bg-white px-1.5 py-1 opacity-0 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent-green/10 text-accent-green">
                              <AgentIcon className="h-2.5 w-2.5" />
                            </span>
                            <span className="truncate text-[9.5px] font-medium text-charcoal">{agent.name}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* caption */}
          <div className="relative mt-6 flex justify-center">
            <div
              data-scene6-caption
              className="flex items-center gap-2 rounded-full border border-accent-green/30 bg-gradient-to-r from-accent-green/10 via-accent-green/15 to-accent-green/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-green opacity-0 shadow-[0_4px_16px_rgba(130,200,50,0.12)]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              From one pilot cell to a global humanoid operating model
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Scene 3: Pilot Sales Agent — radial capability explorer ────────────────

type AgentCapability = {
  id: string
  icon: LucideIcon
  name: string
  short: string
  desc: string
  examples: string[]
}

const agentCapabilities: AgentCapability[] = [
  {
    id: "foundation",
    icon: Sparkles,
    name: "Foundation policy",
    short: "GR00T as the brain",
    desc: "A humanoid foundation model (NVIDIA GR00T family) provides general manipulation and locomotion priors. We fine-tune it on the customer's cell so the robot starts with a strong baseline rather than learning from scratch.",
    examples: ["GR00T fine-tuning", "Per-cell skill heads", "Sim + real co-training"],
  },
  {
    id: "perception",
    icon: Eye,
    name: "Perception",
    short: "See and understand",
    desc: "Multimodal perception fuses RGB-D, depth, and proprioception to build a rich scene understanding — recognising parts, fixtures, humans, and their poses in real time.",
    examples: ["RGB-D + depth fusion", "6-DoF pose estimation", "Human-aware scene graphs"],
  },
  {
    id: "planning",
    icon: ListChecks,
    name: "Planning",
    short: "Task + motion",
    desc: "The policy decomposes a goal into manipulation and locomotion subtasks, plans collision-free motions, and replans on the fly when the cell state changes mid-execution.",
    examples: ["Task & motion planning", "Re-planning on failure", "Goal → subtasks"],
  },
  {
    id: "manipulation",
    icon: HandMetal,
    name: "Manipulation",
    short: "Bimanual dexterity",
    desc: "Closed-loop bimanual control with force-torque feedback for grasps, insertions, and fine assembly — robust to part variation and small misplacements in the fixture.",
    examples: ["Bimanual grasping", "Force-controlled insertion", "In-hand re-grasp"],
  },
  {
    id: "locomotion",
    icon: Move3d,
    name: "Locomotion",
    short: "Whole-body control",
    desc: "Whole-body control keeps the humanoid stable while walking, reaching, and carrying loads — handling uneven floors, dynamic obstacles, and people sharing the workspace.",
    examples: ["Walking + reaching", "Load handling", "Dynamic obstacle avoidance"],
  },
  {
    id: "safety",
    icon: ShieldCheck,
    name: "Safety",
    short: "Policy + interlocks",
    desc: "Hard safety interlocks, force and speed limits, and human-in-the-loop approvals keep the robot inside its safety envelope. Every move is validated against the cell's safety policy.",
    examples: ["Force & speed limits", "Safe-stop interlocks", "Approval gates"],
  },
  {
    id: "skills",
    icon: Layers,
    name: "Skill memory",
    short: "Reusable library",
    desc: "Each trained skill is versioned, evaluated, and stored in a shared skill library — so a kitting policy proven in one cell can be rolled out, fine-tuned, and improved across the fleet.",
    examples: ["Versioned skill registry", "Per-cell fine-tuning", "Cross-fleet reuse"],
  },
  {
    id: "observability",
    icon: Activity,
    name: "Observability",
    short: "Replay every cycle",
    desc: "Every cycle is logged with sensors, decisions, and outcomes — so engineers can replay edge cases in Isaac Sim, debug failures, and feed corrections back into the next training loop.",
    examples: ["Full sensor traces", "Sim replay of failures", "Continuous learning loop"],
  },
]

// Anatomical layout: each capability is pinned to a body part.
// Coordinates are in a 100x100 viewBox where the humanoid is centred.
// `target` is where the leader line points (a body part), `callout` is where
// the label/button sits on the canvas. `side` controls leader-line direction.
type CapabilityAnatomy = {
  target: { x: number; y: number }   // body part
  callout: { x: number; y: number }  // label position
  bodyPart: string
}
const capabilityAnatomy: Record<string, CapabilityAnatomy> = {
  perception:    { target: { x: 50, y: 14 }, callout: { x: 88, y: 8  }, bodyPart: "Head · cameras" },
  planning:      { target: { x: 50, y: 18 }, callout: { x: 12, y: 8  }, bodyPart: "Cortex" },
  foundation:    { target: { x: 50, y: 36 }, callout: { x: 88, y: 30 }, bodyPart: "Chest · compute" },
  manipulation:  { target: { x: 72, y: 50 }, callout: { x: 92, y: 50 }, bodyPart: "Hands · 6-DoF" },
  skills:        { target: { x: 28, y: 50 }, callout: { x: 8,  y: 50 }, bodyPart: "Hand · grippers" },
  safety:        { target: { x: 50, y: 56 }, callout: { x: 88, y: 70 }, bodyPart: "Pelvis · interlocks" },
  locomotion:    { target: { x: 50, y: 82 }, callout: { x: 12, y: 82 }, bodyPart: "Legs · whole-body" },
  observability: { target: { x: 50, y: 98 }, callout: { x: 88, y: 92 }, bodyPart: "Feet · contact sensors" },
}

function SalesAgentPilot({
  sceneRef,
  block,
}: {
  sceneRef: React.RefObject<HTMLElement | null>
  block: Block
}) {
  const StepIcon = block.stepIcon
  const [activeId, setActiveId] = useState<string>("foundation")
  const active = agentCapabilities.find((c) => c.id === activeId) ?? agentCapabilities[0]
  const ActiveIcon = active.icon

  return (
    <section
      ref={sceneRef}
      id="scene-03"
      className="min-h-[75vh] rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] md:p-10"
    >
      <div className="grid gap-10 lg:min-h-[560px] lg:grid-cols-[1fr_0.95fr] lg:items-center">

        {/* LEFT: title + bullets */}
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
              <StepIcon className="h-5 w-5" />
            </div>
            <p className="text-sm uppercase tracking-[0.22em] text-accent-green">{block.label}</p>
          </div>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">{block.title}</h2>
          <p className="mt-6 max-w-xl text-lg text-gray-600">{block.summary}</p>
          <div className="mt-8 grid gap-3">
            {block.bullets.map(({ icon: BulletIcon, text }) => (
              <div
                key={text}
                className="flex items-center gap-4 rounded-2xl border border-accent-green/10 bg-[#f7f7f7] px-5 py-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                  <BulletIcon className="h-4 w-4" />
                </div>
                <span className="text-base text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: anatomical capability diagram */}
        <div className="flex flex-col gap-5">

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[28px] border border-[rgba(180,220,255,0.12)] bg-[#0d141d]">

            {/* engineering grid background */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 125" preserveAspectRatio="none">
              <defs>
                <pattern id="anatGrid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(180,220,255,0.06)" strokeWidth="0.15" />
                </pattern>
                <pattern id="anatGridMajor" width="25" height="25" patternUnits="userSpaceOnUse">
                  <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(180,220,255,0.12)" strokeWidth="0.25" />
                </pattern>
              </defs>
              <rect width="100" height="125" fill="url(#anatGrid)" />
              <rect width="100" height="125" fill="url(#anatGridMajor)" />
            </svg>

            {/* DATA SHEET chrome — top */}
            <div className="absolute left-3 top-3 z-20 flex items-center gap-2 rounded-md border border-[rgba(180,220,255,0.2)] bg-[rgba(13,20,29,0.85)] px-2.5 py-1 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" />
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent-green">
                Humanoid datasheet · GR00T-FT
              </span>
            </div>
            <div className="absolute right-3 top-3 z-20 rounded-md border border-[rgba(180,220,255,0.2)] bg-[rgba(13,20,29,0.85)] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[rgba(180,220,255,0.7)] backdrop-blur">
              {agentCapabilities.length} subsystems
            </div>

            {/* dimension marks (left side, like a blueprint) */}
            <div className="pointer-events-none absolute bottom-3 left-2 top-12 z-10 flex flex-col justify-between font-mono text-[8px] uppercase tracking-wider text-[rgba(180,220,255,0.35)]">
              <span>1.85 m</span>
              <span>1.20 m</span>
              <span>0.90 m</span>
              <span>0.00 m</span>
            </div>

            {/* the anatomy: SVG with body + leader lines + targets */}
            <svg className="absolute inset-0 z-10 h-full w-full" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid meet">
              {/* contact shadow */}
              <ellipse cx="50" cy="118" rx="14" ry="2" fill="rgba(0,0,0,0.5)" />

              {/* legs */}
              <rect x="42" y="78" width="6" height="34" rx="2" fill="#dde3ea" />
              <rect x="52" y="78" width="6" height="34" rx="2" fill="#dde3ea" />
              {/* knee joints */}
              <circle cx="45" cy="92" r="1.6" fill="#82c832" />
              <circle cx="55" cy="92" r="1.6" fill="#82c832" />
              {/* feet */}
              <rect x="40" y="111" width="10" height="4" rx="1" fill="#1a2330" stroke="#82c832" strokeWidth="0.3" />
              <rect x="50" y="111" width="10" height="4" rx="1" fill="#1a2330" stroke="#82c832" strokeWidth="0.3" />
              {/* hip plate */}
              <rect x="40" y="74" width="20" height="6" rx="1.5" fill="#cfd6df" stroke="#82c832" strokeWidth="0.25" />
              {/* torso */}
              <path d="M37 36 H63 L65 74 H35 Z" fill="#f1f4f8" stroke="rgba(130,200,50,0.4)" strokeWidth="0.3" />
              {/* chest core (NIM compute) */}
              <circle cx="50" cy="46" r="4.5" fill="#0d141d" stroke="#82c832" strokeWidth="0.6" />
              <circle cx="50" cy="46" r="2.5" fill="#82c832" />
              {/* faint chest cooling vents */}
              <line x1="40" y1="55" x2="60" y2="55" stroke="rgba(130,200,50,0.4)" strokeWidth="0.25" />
              <line x1="40" y1="58" x2="60" y2="58" stroke="rgba(130,200,50,0.4)" strokeWidth="0.25" />
              <line x1="40" y1="61" x2="60" y2="61" stroke="rgba(130,200,50,0.4)" strokeWidth="0.25" />
              {/* shoulders */}
              <circle cx="36" cy="38" r="3.2" fill="#cfd6df" stroke="#82c832" strokeWidth="0.3" />
              <circle cx="64" cy="38" r="3.2" fill="#cfd6df" stroke="#82c832" strokeWidth="0.3" />
              {/* upper arms */}
              <rect x="32" y="40" width="4" height="14" rx="1.5" fill="#e5eaf0" />
              <rect x="64" y="40" width="4" height="14" rx="1.5" fill="#e5eaf0" />
              {/* elbow joints */}
              <circle cx="34" cy="54" r="1.4" fill="#82c832" />
              <circle cx="66" cy="54" r="1.4" fill="#82c832" />
              {/* forearms */}
              <rect x="30" y="55" width="4" height="13" rx="1.5" fill="#e5eaf0" />
              <rect x="66" y="55" width="4" height="13" rx="1.5" fill="#e5eaf0" />
              {/* hands (5-finger grippers) */}
              <g>
                <rect x="28" y="68" width="6" height="5" rx="1" fill="#cfd6df" stroke="#82c832" strokeWidth="0.3" />
                <line x1="29" y1="73" x2="29" y2="76" stroke="#cfd6df" strokeWidth="0.6" />
                <line x1="30.5" y1="73" x2="30.5" y2="76.5" stroke="#cfd6df" strokeWidth="0.6" />
                <line x1="32" y1="73" x2="32" y2="76" stroke="#cfd6df" strokeWidth="0.6" />
                <line x1="33.5" y1="73" x2="33.5" y2="75.5" stroke="#cfd6df" strokeWidth="0.6" />
              </g>
              <g>
                <rect x="66" y="68" width="6" height="5" rx="1" fill="#cfd6df" stroke="#82c832" strokeWidth="0.3" />
                <line x1="67" y1="73" x2="67" y2="76" stroke="#cfd6df" strokeWidth="0.6" />
                <line x1="68.5" y1="73" x2="68.5" y2="76.5" stroke="#cfd6df" strokeWidth="0.6" />
                <line x1="70" y1="73" x2="70" y2="76" stroke="#cfd6df" strokeWidth="0.6" />
                <line x1="71.5" y1="73" x2="71.5" y2="75.5" stroke="#cfd6df" strokeWidth="0.6" />
              </g>
              {/* neck */}
              <rect x="47" y="32" width="6" height="4" fill="#cfd6df" />
              {/* head + visor */}
              <rect x="40" y="14" width="20" height="18" rx="6" fill="#f1f4f8" stroke="rgba(130,200,50,0.4)" strokeWidth="0.3" />
              <rect x="43" y="20" width="14" height="5" rx="1.5" fill="#0d141d" />
              <rect x="44" y="21.5" width="3" height="2" fill="#82c832" />
              <rect x="53" y="21.5" width="3" height="2" fill="#82c832" />
              {/* perception cone (subtle) */}
              <path d="M50 22 L30 8 L70 8 Z" fill="rgba(130,200,50,0.06)" stroke="rgba(130,200,50,0.25)" strokeWidth="0.2" strokeDasharray="0.8 1" />

              {/* contact-sensor radiating arcs at feet */}
              <path d="M30 117 Q50 122 70 117" fill="none" stroke="rgba(130,200,50,0.35)" strokeWidth="0.3" />
              <path d="M28 119 Q50 124 72 119" fill="none" stroke="rgba(130,200,50,0.2)" strokeWidth="0.3" />

              {/* ── leader lines from each callout to its body part ── */}
              {agentCapabilities.map((c) => {
                const a = capabilityAnatomy[c.id]
                if (!a) return null
                const isActive = c.id === active.id
                return (
                  <g key={c.id}>
                    <line
                      x1={a.callout.x}
                      y1={a.callout.y}
                      x2={a.target.x}
                      y2={a.target.y}
                      stroke="#82c832"
                      strokeWidth={isActive ? 0.45 : 0.25}
                      strokeOpacity={isActive ? 0.95 : 0.35}
                      strokeDasharray={isActive ? "none" : "1 1.2"}
                    />
                    <circle
                      cx={a.target.x}
                      cy={a.target.y}
                      r={isActive ? 1.2 : 0.7}
                      fill="#82c832"
                      opacity={isActive ? 1 : 0.6}
                    />
                  </g>
                )
              })}
            </svg>

            {/* ── capability callout buttons (HTML, positioned over SVG) ── */}
            {agentCapabilities.map((c) => {
              const Icon = c.icon
              const a = capabilityAnatomy[c.id]
              if (!a) return null
              const isActive = c.id === active.id
              const onLeft = a.callout.x < 50
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveId(c.id)}
                  aria-pressed={isActive}
                  aria-label={`Show details for ${c.name}`}
                  className={`group absolute z-20 flex -translate-y-1/2 items-center gap-1.5 rounded-md border px-1.5 py-1 outline-none transition-all duration-300 focus:outline-none ${
                    onLeft ? "-translate-x-0 flex-row" : "-translate-x-full flex-row-reverse"
                  } ${
                    isActive
                      ? "border-accent-green bg-accent-green text-charcoal shadow-[0_8px_24px_rgba(130,200,50,0.45)]"
                      : "border-[rgba(180,220,255,0.2)] bg-[rgba(13,20,29,0.85)] text-[rgba(180,220,255,0.85)] hover:border-accent-green/60 hover:bg-[rgba(20,30,42,0.9)] hover:text-white"
                  }`}
                  style={{
                    left: `${a.callout.x}%`,
                    top:  `${(a.callout.y / 125) * 100}%`,
                  }}
                >
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-sm ${
                    isActive ? "bg-charcoal text-accent-green" : "bg-accent-green/15 text-accent-green"
                  }`}>
                    <Icon className="h-3 w-3" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className={`whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.14em] ${
                      isActive ? "text-charcoal" : "text-white"
                    }`}>
                      {c.name}
                    </span>
                    <span className={`whitespace-nowrap font-mono text-[8px] ${
                      isActive ? "text-charcoal/70" : "text-[rgba(180,220,255,0.5)]"
                    }`}>
                      {a.bodyPart}
                    </span>
                  </span>
                </button>
              )
            })}

            {/* status caption pinned bottom-center */}
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-accent-green/30 bg-[rgba(13,20,29,0.88)] px-3 py-1 backdrop-blur">
              <Workflow className="h-3 w-3 text-accent-green" />
              <span className="font-mono text-[10px] font-semibold text-accent-green">
                Bin-picking · STG-A1 · policy v07
              </span>
            </div>
          </div>

          {/* DETAIL PANEL */}
          <div
            key={active.id}
            className="rounded-2xl border border-accent-green/20 bg-gradient-to-br from-accent-green/[0.08] via-white to-white px-5 py-5 shadow-[0_10px_30px_-15px_rgba(130,200,50,0.3)]"
            style={{ animation: "cap-fade 0.3s ease-out" }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-green text-charcoal shadow-[0_6px_16px_rgba(130,200,50,0.4)]">
                <ActiveIcon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-lg font-bold text-charcoal">{active.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-green">
                    {active.short}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{active.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {active.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-full border border-black/[0.08] bg-white px-2.5 py-1 text-[11px] font-medium text-gray-600"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="-mt-1 flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
            <Sparkles className="h-3 w-3 text-accent-green" />
            Click any capability to explore
          </p>

          <style>{`
            @keyframes cap-fade {
              from { opacity: 0.35; transform: translateY(4px); }
              to   { opacity: 1;    transform: translateY(0);   }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────

export default function HumanoidRoboticsStory() {
  const step01Ref    = useRef<HTMLElement>(null)
  const step02Ref    = useRef<HTMLElement>(null)
  const step03Ref    = useRef<HTMLElement>(null)
  const scene04Ref   = useRef<HTMLElement>(null)
  const scene05Ref   = useRef<HTMLElement>(null)
  const scene06Ref   = useRef<HTMLElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isDesktop = window.innerWidth >= 1024

    const section = step01Ref.current
    if (!section) return

    const dimRows   = section.querySelectorAll<HTMLElement>('[data-row="dim"]')
    const hlRows    = section.querySelectorAll<HTMLElement>('[data-row="highlight"]')
    const badges    = section.querySelectorAll<HTMLElement>('[data-selected-badge]')
    const leftPanel = section.querySelector<HTMLElement>('[data-left-panel]')
    const footerDef = section.querySelectorAll<HTMLElement>('[data-footer-default]')
    const footerSel = section.querySelector<HTMLElement>('[data-footer-selected]')

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.out" },
    })

    tl.to(dimRows,   { opacity: 0.1, filter: "grayscale(1)", duration: 0.5 }, 0)
    tl.to(hlRows,    { backgroundColor: "rgba(130,200,50,0.06)", duration: 0.5 }, 0)
    tl.to(badges,    { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 }, 0.25)
    if (leftPanel) {
      tl.to(leftPanel, { x: 0, duration: 0.55, ease: "power3.out" }, 0.3)
    }
    tl.to(footerDef, { opacity: 0, duration: 0.25 }, 0.55)
    tl.to(footerSel, { opacity: 1, duration: 0.35 }, 0.6)

    const scene1Trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      onEnter: () => tl.play(),
    })

    // ── Active step tracking for progress rail ──
    const stepRefs = [step01Ref, step02Ref, step03Ref, scene04Ref, scene05Ref, scene06Ref]
    const stepTriggers = stepRefs.map((ref, i) => {
      if (!ref.current) return null
      return ScrollTrigger.create({
        trigger: ref.current,
        start: "top 50%",
        end: "bottom 40%",
        onToggle: (self) => {
          if (self.isActive) setActiveStep(i + 1)
        },
        onEnter: () => setActiveStep(i + 1),
        onEnterBack: () => setActiveStep(i + 1),
      })
    })

    // ── Scene 4 pinned timeline: Sales Agent Blueprint ──
    const scene4El = scene04Ref.current
    let scene4Tl: gsap.core.Timeline | null = null
    if (scene4El && isDesktop && !prefersReducedMotion) {
      const bullets    = scene4El.querySelectorAll<HTMLElement>("[data-scene4-bullet]")
      const avatar     = scene4El.querySelector<HTMLElement>("[data-scene4-avatar]")
      const sources    = scene4El.querySelectorAll<HTMLElement>("[data-scene4-source]")
      const steps      = scene4El.querySelectorAll<HTMLElement>("[data-scene4-step]")
      const actions    = scene4El.querySelectorAll<HTMLElement>("[data-scene4-action]")
      const arrows     = scene4El.querySelectorAll<SVGLineElement>("[data-scene4-arrow]")
      const arrowheads = scene4El.querySelectorAll<SVGPolylineElement>("[data-scene4-arrowhead]")
      const tools      = scene4El.querySelectorAll<HTMLElement>("[data-scene4-tool]")
      const caption    = scene4El.querySelector<HTMLElement>("[data-scene4-caption]")

      scene4Tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      })

      scene4Tl.to(bullets, { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 }, 0)
      scene4Tl.to(avatar,  { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(1.6)" }, 0.2)
      scene4Tl.to(sources, { opacity: 1, x: 0, stagger: 0.06, duration: 0.4 }, 0.3)
      scene4Tl.to(arrows,  { strokeDashoffset: 0, duration: 0.45, stagger: 0.08 }, 0.5)
      scene4Tl.to(arrowheads, { opacity: 1, duration: 0.25, stagger: 0.08 }, 0.75)
      scene4Tl.to(steps,   { opacity: 1, y: 0, stagger: 0.07, duration: 0.35 }, 0.6)
      scene4Tl.to(actions, { opacity: 1, x: 0, stagger: 0.07, duration: 0.4 }, 0.9)
      scene4Tl.to(tools,   { opacity: 1, y: 0, stagger: 0.04, duration: 0.35 }, 1.1)
      scene4Tl.to(caption, { opacity: 1, y: 0, duration: 0.4 }, 1.3)

      ScrollTrigger.create({
        trigger: scene4El,
        start: "top 70%",
        onEnter: () => scene4Tl!.play(),
      })
    } else if (scene4El) {
      scene4El.querySelectorAll<HTMLElement>(
        "[data-scene4-bullet], [data-scene4-avatar], [data-scene4-source], [data-scene4-step], [data-scene4-action], [data-scene4-tool], [data-scene4-caption]"
      ).forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
      scene4El.querySelectorAll<SVGLineElement>("[data-scene4-arrow]").forEach((el) => {
        el.setAttribute("stroke-dashoffset", "0")
      })
      scene4El.querySelectorAll<SVGPolylineElement>("[data-scene4-arrowhead]").forEach((el) => {
        el.setAttribute("opacity", "1")
      })
    }

    // ── Scene 5 pinned timeline: customer workspace ──
    const scene5El = scene05Ref.current
    let scene5Tl: gsap.core.Timeline | null = null
    if (scene5El && isDesktop && !prefersReducedMotion) {
      const bullets    = scene5El.querySelectorAll<HTMLElement>("[data-scene5-bullet]")
      const workspace  = scene5El.querySelector<HTMLElement>("[data-scene5-workspace]")
      const agents     = scene5El.querySelectorAll<HTMLElement>("[data-scene5-agent]")
      const agentBars  = scene5El.querySelectorAll<HTMLElement>("[data-scene5-agent-bar]")
      const decisions  = scene5El.querySelectorAll<HTMLElement>("[data-scene5-decision]")
      const drafts     = scene5El.querySelectorAll<HTMLElement>("[data-scene5-draft]")
      const activities = scene5El.querySelectorAll<HTMLElement>("[data-scene5-activity]")

      scene5Tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      })

      scene5Tl.to(bullets, { opacity: 1, y: 0, stagger: 0.08, duration: 0.45 }, 0)
      scene5Tl.to(workspace, { opacity: 1, y: 0, duration: 0.55 }, 0.2)
      scene5Tl.to(agents, { opacity: 1, y: 0, stagger: 0.06, duration: 0.4 }, 0.5)
      agentBars.forEach((bar, i) => {
        const target = bar.getAttribute("data-target-width") || "50"
        scene5Tl!.to(bar, { width: `${target}%`, duration: 0.4 }, 0.6 + i * 0.04)
      })
      scene5Tl.to(decisions, { opacity: 1, y: 0, stagger: 0.1, duration: 0.45 }, 0.85)
      scene5Tl.to(drafts, { opacity: 1, y: 0, stagger: 0.1, duration: 0.45 }, 1.0)
      scene5Tl.to(activities, { opacity: 1, x: 0, stagger: 0.08, duration: 0.4 }, 1.2)

      ScrollTrigger.create({
        trigger: scene5El,
        start: "top 70%",
        onEnter: () => scene5Tl!.play(),
      })
    } else if (scene5El) {
      scene5El.querySelectorAll<HTMLElement>(
        "[data-scene5-bullet], [data-scene5-workspace], [data-scene5-agent], [data-scene5-decision], [data-scene5-draft], [data-scene5-activity]"
      ).forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
      scene5El.querySelectorAll<HTMLElement>("[data-scene5-agent-bar]").forEach((bar) => {
        const target = bar.getAttribute("data-target-width") || "50"
        bar.style.width = `${target}%`
      })
    }

    // ── Scene 6 pinned timeline: scale tree ──
    const scene6El = scene06Ref.current
    let scene6Tl: gsap.core.Timeline | null = null
    if (scene6El && isDesktop && !prefersReducedMotion) {
      const bullets  = scene6El.querySelectorAll<HTMLElement>("[data-scene6-bullet]")
      const trunk    = scene6El.querySelector<HTMLElement>("[data-scene6-trunk]")
      const branches = scene6El.querySelectorAll<HTMLElement>("[data-scene6-branch]")
      const children = scene6El.querySelectorAll<HTMLElement>("[data-scene6-child]")
      const caption  = scene6El.querySelector<HTMLElement>("[data-scene6-caption]")
      const count    = scene6El.querySelector<HTMLElement>("[data-scene6-count]")
      const counterObj = { value: 1 }

      scene6Tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      })

      scene6Tl.to(bullets, { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 }, 0)
      scene6Tl.to(trunk, { height: "100%", duration: 0.55 }, 0.3)
      scene6Tl.to(branches, { opacity: 1, y: 0, stagger: 0.1, duration: 0.45 }, 0.55)
      scene6Tl.to(children, { opacity: 1, stagger: 0.03, duration: 0.25 }, 0.9)
      scene6Tl.to(counterObj, {
        value: 42,
        duration: 1.0,
        ease: "power2.out",
        onUpdate: () => {
          if (count) count.textContent = Math.round(counterObj.value).toString() + (counterObj.value >= 40 ? "+" : "")
        },
      }, 0.9)
      scene6Tl.to(caption, { opacity: 1, duration: 0.4 }, 1.6)

      ScrollTrigger.create({
        trigger: scene6El,
        start: "top 70%",
        onEnter: () => scene6Tl!.play(),
      })
    } else if (scene6El) {
      scene6El.querySelectorAll<HTMLElement>("[data-scene6-bullet], [data-scene6-branch], [data-scene6-child], [data-scene6-caption]").forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
      const trunk = scene6El.querySelector<HTMLElement>("[data-scene6-trunk]")
      if (trunk) trunk.style.height = "100%"
      const count = scene6El.querySelector<HTMLElement>("[data-scene6-count]")
      if (count) count.textContent = "42+"
    }

    return () => {
      tl.kill()
      scene1Trigger?.kill()
      stepTriggers.forEach((t) => t?.kill())
      scene4Tl?.kill()
      scene5Tl?.kill()
      scene6Tl?.kill()
    }
  }, [])

  return (
    <main className="bg-[#f4f4f4] text-charcoal">

      <ProgressRail active={activeStep} />

      <div className="bg-white pb-6 pt-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden items-center text-sm text-gray-500 md:flex" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="font-medium text-gray-700">Humanoid Robotics Deployment</span>
          </nav>
        </div>
      </div>

      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0 point-cloud-bg opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-accent-green">Humanoid Robotics Deployment</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              We don&rsquo;t sell{" "}
              <span className="relative inline-block">
                <span className="relative z-10">humanoid robots.</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent-green/40" />
              </span>
              <br />
              We deploy{" "}
              <span className="text-accent-green">the system</span>{" "}
              your factory floor runs on.
            </h1>
            <div className="mb-8 max-w-3xl space-y-5 text-lg text-white/80 md:text-xl">
              <p>
                AIdeology partners with industrial teams to bring humanoid robotics into real production cells —
                designed and trained inside{" "}
                <span className="font-semibold text-white">NVIDIA Omniverse</span>, deployed and operated on{" "}
                <span className="font-semibold text-white">NVIDIA AI Enterprise</span>.
              </p>
              <p>
                The result is{" "}
                <span className="font-semibold text-white">
                  not a tradeshow demo, but a production humanoid skill
                </span>{" "}
                running inside your line — safe, observable, and built to grow into a global fleet.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-white hover:text-charcoal">
                <Link href="/book-discovery-call?type=consultation">Book a deployment session</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/5 text-white hover:bg-white hover:text-charcoal"
              >
                <Link href="#humanoid-robotics-journey">
                  Explore the process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="humanoid-robotics-journey" className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8 2xl:px-12">
          <div className="space-y-10">
            {blocks.map((block) => {
              const StepIcon = block.stepIcon

              if (block.id === "block-01") {
                return (
                  <section
                    key={block.id}
                    ref={step01Ref}
                    id="scene-01"
                    className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#f9f9f9] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
                  >
                    {/* top strip */}
                    <div className="border-b border-black/5 bg-charcoal px-8 py-6 md:px-10">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
                          <StepIcon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">{block.label}</span>
                      </div>
                      <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{block.title}</h2>
                      <p className="mt-3 max-w-2xl text-base text-white/60">{block.summary}</p>
                    </div>

                    {/* body: bullets + table */}
                    <div className="relative grid gap-8 p-6 md:p-8 xl:grid-cols-[280px_1fr] xl:items-start xl:gap-10">

                      {/* text message — slides in from left, covers the bullets column */}
                      <div
                        data-left-panel
                        className="absolute bottom-6 left-6 top-6 z-10 hidden w-[280px] flex-col justify-center gap-4 rounded-2xl bg-[#f4f5f2] px-7 py-8 md:bottom-8 md:left-8 md:top-8 xl:flex"
                        style={{ transform: "translateX(-140%)" }}
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">How we prioritise</p>
                        <p className="text-xl font-bold leading-snug text-charcoal">
                          Highest hours,<br />simplest cells first.
                        </p>
                        <p className="text-sm leading-relaxed text-gray-500">
                          We walk the floor and mark every cell on the blueprint — then nominate the ones that absorb the most operator hours and have the cleanest geometry for the humanoid pilot.
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                          <span className="text-xs font-medium text-accent-green">STG-A1 &amp; STG-A2 nominated</span>
                        </div>
                      </div>

                      {/* compact bullet list */}
                      <div className="space-y-3">
                        {block.bullets.map(({ icon: BulletIcon, text }) => (
                          <div key={text} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                              <BulletIcon className="h-4 w-4" />
                            </div>
                            <span className="text-sm leading-relaxed text-gray-700">{text}</span>
                          </div>
                        ))}
                      </div>

                      {/* floor plan blueprint */}
                      <FloorPlanBlueprint />
                    </div>
                  </section>
                )
              }

              // ── Step 02: special layout with feasibility graphic ──
              if (block.id === "block-02") {
                return (
                  <section
                    key={block.id}
                    ref={step02Ref}
                    id="scene-02"
                    className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#f9f9f9] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
                  >
                    {/* dark step header */}
                    <div className="bg-charcoal p-6 md:p-8">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
                          <StepIcon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">{block.label}</span>
                      </div>
                      <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{block.title}</h2>
                      <p className="mt-3 max-w-2xl text-base text-white/60">{block.summary}</p>
                    </div>

                    {/* body: bullets + feasibility graphic */}
                    <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[280px_1fr] xl:items-start xl:gap-10">
                      <div className="space-y-3">
                        {block.bullets.map(({ icon: BulletIcon, text }) => (
                          <div key={text} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                              <BulletIcon className="h-4 w-4" />
                            </div>
                            <span className="text-sm leading-relaxed text-gray-700">{text}</span>
                          </div>
                        ))}
                      </div>
                      <FeasibilityAssessment />
                    </div>
                  </section>
                )
              }

              // ── Scenes 4, 5, 6: scrollytelling pinned scenes ──
              if (block.id === "block-04") {
                return <Scene4MultiAgent key={block.id} sceneRef={scene04Ref} block={block} />
              }
              if (block.id === "block-05") {
                return <Scene5Experience key={block.id} sceneRef={scene05Ref} block={block} />
              }
              if (block.id === "block-06") {
                return <Scene6Scale key={block.id} sceneRef={scene06Ref} block={block} />
              }

              return block.featured ? (
                <SalesAgentPilot key={block.id} sceneRef={step03Ref} block={block} />
              ) : null
            })}
          </div>
        </div>
      </section>

      {/* ── Closing CTA block ── */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-white md:py-28">
        <div className="absolute inset-0 point-cloud-bg opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent-green">End Result</p>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-5xl">
                Not another tradeshow demo.<br />A humanoid working inside your line.
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-white/70 md:text-xl">
                From the floor walk to a global humanoid fleet — robots that earn their cycle inside your
                production, not videos that stay on a stage.
              </p>
            </div>

            {/* outcome cards */}
            <div className="mt-14 grid items-stretch gap-4 md:grid-cols-3">
              {[
                {
                  icon: Rocket,
                  title: "Production, not prototypes",
                  desc: "Humanoid skills deployed into real cells with real operators — measurable on cycle time, success rate, and safety from day one.",
                },
                {
                  icon: TrendingUp,
                  title: "Built to scale on NVIDIA AI Enterprise",
                  desc: "From one cell to a global humanoid fleet — managed centrally, with OTA policy updates and continuous learning across sites.",
                },
                {
                  icon: ShieldCheck,
                  title: "Safe, controllable, auditable",
                  desc: "Safety interlocks, force and speed limits, supervisor approvals, and full sensor replay — designed in from the first sim run.",
                },
              ].map(({ icon: OutIcon, title, desc }) => (
                <div
                  key={title}
                  className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-green/40 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green transition-transform duration-300 group-hover:scale-110">
                    <OutIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-14 flex flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center md:p-12">
              <div>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Ready to bring humanoids into your first cell?
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
                  We start with a deployment session, walk one cell on-site, and quickly move it into Omniverse —
                  with a production humanoid skill as the goal, not a tradeshow demo.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-white">
                  <Link href="/book-discovery-call?type=consultation" className="flex items-center gap-2">
                    <PhoneCall className="h-5 w-5" />
                    Book a deployment session
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-transparent text-white hover:bg-white hover:text-charcoal"
                >
                  <Link href="/#solutions" className="flex items-center gap-2">
                    Explore our services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
