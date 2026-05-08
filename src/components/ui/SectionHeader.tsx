import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {label && (
        <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-grey leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-brand-grey-light text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
