import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-brand-grey-border rounded-lg hover:border-brand-orange hover:shadow-md transition-all duration-200',
        className
      )}
    >
      {children}
    </div>
  )
}
