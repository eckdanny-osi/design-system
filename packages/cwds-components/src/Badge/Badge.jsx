import BadgeUnstyled from 'reactstrap/lib/Badge';
import Styles from './Badge.module.scss';
import { withCssModule } from '../utils';

const Badge = withCssModule(BadgeUnstyled, Styles);

export { Badge, BadgeUnstyled };

export default Badge;
