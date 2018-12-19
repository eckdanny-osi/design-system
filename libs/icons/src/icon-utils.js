export function getIconContrast(color) {
  return [
    'primary',
    'accent',
    'info',
    'warning',
    'danger',
    'success',
    'dark',
  ].indexOf(color) > -1
    ? 'white'
    : 'black'
}

export function getIconFromContext(context) {
  switch (context) {
    case 'success':
      return 'check-circle'
    case 'info':
      return 'info-circle'
    case 'warning':
    case 'danger':
      return 'exclamation-triangle'
    default:
      return false
  }
}
