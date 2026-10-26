import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: React.ReactNode
  subtitle?: string
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  /** Call-to-action shown beside the title on large screens; forces left alignment */
  action?: React.ReactNode
}

export function SectionHeader({ title, subtitle, tone = 'dark', align = 'center', action }: SectionHeaderProps) {
  const isCenter = align === 'center' && !action

  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-8 sm:mb-16',
        action && 'lg:flex-row lg:items-end lg:justify-between',
        isCenter ? 'items-center text-center' : 'items-start text-left'
      )}
    >
      <div className={cn('flex max-w-3xl flex-col gap-5', isCenter && 'items-center')}>
        <h2
          className={cn(
            'heading-display text-balance text-3xl sm:text-4xl lg:text-5xl',
            tone === 'dark' ? 'text-white' : 'text-black'
          )}
        >
          {title}
        </h2>
        <span className="h-1 w-16 rounded-full bg-brand shadow-glow-sm" />
        {subtitle && (
          <p
            className={cn(
              'max-w-2xl text-base leading-relaxed sm:text-lg',
              tone === 'dark' ? 'text-white/70' : 'text-neutral-600'
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
