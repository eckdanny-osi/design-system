import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faCircleNotch,
  faEllipsisV,
  faExclamationTriangle,
  faInfoCircle,
  faLightbulb,
  faMinus,
  faPlus,
  faPlusCircle,
  faSearch,
  faSpinner,
  faTimes,
  faUpload,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

// Seed Icon Library
export default () => {
  library.add(
    faCheck,
    faTimes,
    faUser,
    faSearch,
    faSpinner,
    faUpload,
    faCircleNotch,
    faCheckCircle,
    faPlusCircle,
    faInfoCircle,
    faExclamationTriangle,
    faChevronDown,
    faEllipsisV,
    faPlus,
    faMinus,
    faLightbulb,
    faArrowUp
  );
};
