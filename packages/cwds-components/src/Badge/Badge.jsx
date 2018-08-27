import BadgeUnstyled from 'reactstrap/lib/Badge';
import PropTypes from 'prop-types';
import {
  compose,
  defaultProps,
  hoistStatics,
  setDisplayName,
  setPropTypes,
  getDisplayName,
  wrapDisplayName,
} from 'recompose';
import Styles from './Badge.module.scss';
const Badge = compose(
  setDisplayName(getDisplayName(BadgeUnstyled)),
  setPropTypes(BadgeUnstyled.propTypes),
  defaultProps({
    ...BadgeUnstyled.defaultProps,
    cssModule: Styles,
  })
)(BadgeUnstyled);

export { Badge, BadgeUnstyled };
export default Badge;
