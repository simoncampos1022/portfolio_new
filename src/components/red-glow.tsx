import { cn } from '@/lib/utils'

/** Soft red radial light that gives the black sections depth. Parent needs `relative isolate`. */
export function RedGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute -z-10 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(230,0,0,0.32)_0%,rgba(230,0,0,0.1)_38%,transparent_70%)]',
        className
      )}
    />
  )
}
