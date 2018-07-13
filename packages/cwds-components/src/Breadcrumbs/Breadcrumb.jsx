import BreadcrumbUnstyled from 'reactstrap/lib/Breadcrumb';
import { withCssModule } from '../utils';
import Styles from './Breadcrumbs.module.scss';

const Breadcrumb = withCssModule(BreadcrumbUnstyled, Styles);

export { Breadcrumb, BreadcrumbUnstyled };
export default Breadcrumb;
