const resolveTextColor = (type?: string) => {
  if (!type) {
    return '$black'
  }

  switch (type) {
    case 'primary':
      return '$white'
    case '$secondary':
    default:
      return '$black'
  }
}

export { resolveTextColor }
