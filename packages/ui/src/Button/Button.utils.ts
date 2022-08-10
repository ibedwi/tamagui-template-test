const resolveTextColor = (type?: string) => {
  if (!type) {
    return '$black'
  }

  switch (type) {
    case 'secondary':
      return '$black'

    case 'primary':
    default:
      return '$white'
  }
}

export { resolveTextColor }
