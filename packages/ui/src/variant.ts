export enum Variant {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}

export function getVariantBackgroundStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'bg-slate-600 hover:bg-slate-700 active:bg-slate-800'
    case Variant.SECONDARY:
      return 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800'
    case Variant.TERTIARY:
      return 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800'
  }
}

export function getVariantOutlineStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'outline-black'
    case Variant.SECONDARY:
      return 'outline-purple-600'
    case Variant.TERTIARY:
      return 'outline-emerald-600'
  }
}

export function getVariantInputTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-slate-900'
    case Variant.SECONDARY:
      return 'text-slate-900'
    case Variant.TERTIARY:
      return 'text-slate-900'
  }
}

export function getVariantBorderStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'border-2 border-slate-600'
    case Variant.SECONDARY:
      return 'border-2 border-emerald-600'
    case Variant.TERTIARY:
      return 'border-2 border-purple-600'
  }
}

export function getVariantButtonTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-white'
    case Variant.SECONDARY:
      return 'text-white'
    case Variant.TERTIARY:
      return 'text-white'
  }
}
