export enum Size {
  XSMALL,
  SMALL,
  MEDIUM,
  LARGE,
}

export function getSizeStyles(size: Size) {
  switch (size) {
    case Size.XSMALL:
      return 'px-2 py-0.5 rounded shadow'
    case Size.SMALL:
      return 'px-4 py-1 rounded shadow-md'
    case Size.MEDIUM:
      return 'px-6 py-1.5 rounded-md shadow-lg'
    case Size.LARGE:
      return 'px-8 py-2 rounded-lg shadow-xl'
  }
}

export function getInputSizeStyles(size: Size) {
  switch (size) {
    case Size.XSMALL:
      return 'px-1 py-0.5 rounded shadow'
    case Size.SMALL:
      return 'px-2 py-1 rounded shadow'
    case Size.MEDIUM:
      return 'px-2 py-1 rounded shadow'
    case Size.LARGE:
      return 'px-2 py-1 rounded shadow'
  }
}
