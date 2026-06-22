'use client'

export function SiteBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-bg relative min-h-screen overflow-x-hidden transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.02))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02))]" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
