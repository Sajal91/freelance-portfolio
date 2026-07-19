import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

interface ButtonAsButton extends ButtonBaseProps {
  to?: undefined
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

interface ButtonAsLink extends ButtonBaseProps {
  to: string
  href?: undefined
  type?: undefined
  onClick?: () => void
  disabled?: undefined
}

interface ButtonAsAnchor extends ButtonBaseProps {
  href: string
  to?: undefined
  type?: undefined
  onClick?: undefined
  disabled?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'text-cream border border-navy/60 bg-[linear-gradient(180deg,#2d3f56_0%,#1e2a3b_100%)] shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_8px_20px_-8px_rgba(30,42,59,0.5)] hover:shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_14px_30px_-10px_rgba(30,42,59,0.55)] hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-surface text-navy border border-border shadow-soft hover:border-navy/25 hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'bg-transparent text-navy hover:bg-cream-dark border border-transparent',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

/** Reusable button - renders as <button>, <Link>, or <a> depending on props */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if ('to' in props && props.to) {
    const { to, onClick } = props as ButtonAsLink
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  const { type = 'button', onClick, disabled } = props as ButtonAsButton

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
