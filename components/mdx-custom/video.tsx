interface VideoProps {
  src: string
  title?: string
  width?: string | number
  height?: string | number
  poster?: string
  caption?: string
}

export function Video({ src, title, width = "100%", height = "auto", poster, caption }: VideoProps) {
  return (
    <figure className="my-8">
      <div className="relative rounded-lg overflow-hidden bg-gray-100">
        <video className="w-full" controls width={width} height={height} poster={poster} title={title}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && <figcaption className="text-sm text-gray-500 mt-2 text-center">{caption}</figcaption>}
    </figure>
  )
}
