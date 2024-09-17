'use client'

import { ReactNode } from 'react'
import { Size } from './size'
import { Variant } from './variant'

interface ButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  size?: Size
  variant?: Variant
}

export const Button = ({
  children,
  className,
  href,
  onClick,
  size = Size.MEDIUM,
  variant = Variant.PRIMARY,
}: ButtonProps) => {
  let sizeCssClasses = ''
  switch (size) {
    case Size.SMALL:
      sizeCssClasses = 'px-4 py-1 rounded shadow-md'
      break
    case Size.MEDIUM:
      sizeCssClasses = 'px-6 py-1.5 rounded-md shadow-lg'
      break
    case Size.LARGE:
      sizeCssClasses = 'px-8 py-2 rounded-lg shadow-xl'
      break
  }
  let variantCssClasses = ''
  switch (variant) {
    case Variant.PRIMARY:
      variantCssClasses = 'bg-slate-600 outline-black hover:bg-slate-700 active:bg-slate-800'
      break
    case Variant.SECONDARY:
      variantCssClasses = 'bg-emerald-600 outline-purple-600 hover:bg-emerald-700 active:bg-emerald-800'
      break
    case Variant.TERTIARY:
      variantCssClasses = 'bg-purple-600 outline-emerald-600 hover:bg-purple-700 active:bg-purple-800'
      break
  }

  const commonCssCLasses = 'flex items-center justify-center text-white hover:outline outline-offset-4 transition-colors'

  const completedCssClasses = `${sizeCssClasses} ${variantCssClasses} ${commonCssCLasses} ${className}`
  return href ? (
    <a href={href} className={completedCssClasses}>
      {children}
    </a>
  ) : (
    <button className={completedCssClasses} onClick={onClick}>
      {children}
    </button>
  )
}
