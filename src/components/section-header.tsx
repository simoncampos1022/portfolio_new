type Accent = 'blue' | 'teal' | 'purple'

interface SectionHeaderProps {
  title: React.ReactNode
  subtitle?: string
  accent?: Accent
  align?: 'left' | 'center'
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`mb-12 flex flex-col gap-3 sm:mb-14 ${alignClass}`}>
      <h2 className="font-heading text-3xl font-bold tracking-normal text-black dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
