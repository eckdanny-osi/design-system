import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowUp,
  faBell,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faCircleNotch,
  faClipboard,
  faClock,
  faCog,
  faEllipsisV,
  faExclamationTriangle,
  faExternalLinkAlt,
  faFlag,
  faInfoCircle,
  faMapMarkerAlt,
  faPrint,
  faSearch,
  faTimes,
  faUpload,
  faUser,
  faCommentAlt as fasFaCommentAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt as farFaCommentAlt } from '@fortawesome/free-regular-svg-icons'

library.add(
  faArrowUp,
  faBell,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faCircleNotch,
  faClipboard,
  faClock,
  faCog,
  faEllipsisV,
  faExclamationTriangle,
  faExternalLinkAlt,
  faFlag,
  faInfoCircle,
  faMapMarkerAlt,
  faPrint,
  faSearch,
  faTimes,
  faUpload,
  faUser,
  fasFaCommentAlt,
  farFaCommentAlt
)

export const ICON_NAMES = [
  ...Object.keys(library.definitions['fas']).map(name => ['fas', name]),
  [farFaCommentAlt.prefix, farFaCommentAlt.iconName],
]

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
