import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  href?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange'

  const variants = {
    primary: 'bg-brand-orange text-white hover:bg-brand-orange-dark',
    outline:
      'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white',
    ghost: 'text-brand-grey hover:text-brand-orange',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded',
    md: 'px-6 py-3 text-sm rounded',
    lg: 'px-8 py-4 text-base rounded',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
