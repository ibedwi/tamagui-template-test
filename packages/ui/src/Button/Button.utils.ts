const resolveTextColor = (type?: string) => {
  if (!type) {
    return '$white'
  }

  switch (type) {
    case '$secondary':
      return '$black'

    case 'primary':
    default:
      return '$white'
  }
}

export { resolveTextColor }
