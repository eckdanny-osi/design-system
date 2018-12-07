/**
 * Reactstrap Components
 *
 * Omit:
 *   - Alert
 *   - CardBlock
 *   - CardColumns
 *   - CardDeck
 *   - CardGroup
 *   - CardImg
 *   - CardImgOverlay
 *   - CardLink
 *   - CardSubtitle
 *   - CardText
 *   - Carousel
 *   - CarouselCaption
 *   - CarouselControl
 *   - CarouselIndicators
 *   - CarouselItem
 *   - CustomInput
 *   - InputGroupButton
 *   - InputGroupButtonDropdown
 *   - InputGroupText
 *   - Jumbotron
 *   - Media
 *   - Navbar
 *   - NavbarBrand
 *   - NavbarToggler
 *   - NavDropdown
 *   - Pagination
 *   - PaginationItem
 *   - PaginationLink
 *   - PopperContent
 *   - PopperTargetHelper
 *   - Progress
 *   - TabContent
 *   - TabPane
 *   - UncontrolledCarousel
 *   - UncontrolledCollapse
 *   - UncontrolledNavDropdown
 */

import cssModule from '@cwds/core/dist/bootstrap-cares.module.css'
import { CardTitle } from 'reactstrap'
import { Util } from './utils'

Util.setGlobalCssModule(cssModule)
CardTitle.defaultProps.tag = 'div'

export { Util, CardTitle }

export { default as Dropdown } from './Dropdown'
export { default as DropdownItem } from './DropdownItem'

export {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  Container,
  // Dropdown,
  // DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  Row,
  Table,
  Tooltip,
  UncontrolledAlert,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from 'reactstrap'
