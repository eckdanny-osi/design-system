import { library } from '@fortawesome/fontawesome-svg-core'

const ICONS = [
  'faArrowUp',
  'faBell',
  'faCheck',
  'faCheckCircle',
  'faChevronDown',
  'faCircleNotch',
  'faClipboard',
  'faClock',
  'faCog',
  'faEllipsisV',
  'faExclamationTriangle',
  'faExternalLinkAlt',
  'faFlag',
  'faInfoCircle',
  'faMapMarkerAlt',
  'faPrint',
  'faSearch',
  'faTimes',
  'faUpload',
  'faUser',
]

const { iconPack, iconNames: ICON_NAMES } = loadIcons(ICONS)

// Seed Icon Library
export default () => {
  library.add(iconPack)
}

export { ICON_NAMES }

export const getIconFromContext = context => {
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

function loadIcons(icons) {
  const iconPack = {}
  let iconNames = []
  icons.forEach(name => {
    const mod = require(`@fortawesome/free-solid-svg-icons/${name}`)
    iconPack[name] = mod.definition
    iconNames.push(mod.iconName)
  })
  return { iconPack, iconNames }
}
