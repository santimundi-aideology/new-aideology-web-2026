"use client"

interface VideoProps {
  src: string
  poster?: string
  className?: string
  title?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  id?: string
}

export default function Video({ 
  src, 
  poster = "/thumbnail.webp", 
  className = "", 
  title,
  style,
  children,
  id 
}: VideoProps) {
  return (
    <div id={id} className={`relative ${className}`} style={style}>
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900 video-poster-zoom">
        <video
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          poster={poster}
          title={title}
          controlsList="nodownload"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional overlay for branding */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        
        {children}
      </div>
    </div>
  )
}
