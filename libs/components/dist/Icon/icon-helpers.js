import { ICON_NAMES } from './Icon';
import { CONTEXT } from '../utils/design-system';
export const getIcon = context => {
  switch (context) {
    case CONTEXT.SUCCESS:
      return ICON_NAMES.checkCircle;

    case CONTEXT.INFO:
      return ICON_NAMES.infoCircle;

    case CONTEXT.WARNING:
    case CONTEXT.DANGER:
      return ICON_NAMES.error;

    default:
      return ICON_NAMES.check;
  }
};