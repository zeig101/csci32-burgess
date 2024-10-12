'use client'

import { ReactNode } from 'react'
import { getSizeStyles, Size } from './size'
import { getVariantBackgroundStyles, getVariantOutlineStyles, Variant, getVariantButtonTextStyles } from './variant'
import { getCommonStyles } from './tokens'

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
  const sizeCssClasses = getSizeStyles(size)
  const variantButtonTextCssClasses = getVariantButtonTextStyles(variant)
  const variantBackgroundCssClasses = getVariantBackgroundStyles(variant)
  const variantOutlineCssClasses = getVariantOutlineStyles(variant)
  const commonCssClasses = getCommonStyles()

  const completedCssClasses = `${sizeCssClasses} ${variantBackgroundCssClasses} ${variantOutlineCssClasses} ${commonCssClasses} ${variantButtonTextCssClasses} ${className}`
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
