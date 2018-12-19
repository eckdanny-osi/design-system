import docgenComposed from '../../../macros/docgen-composed.macro'

export default {
  Alert: docgenComposed('reactstrap/src/Alert.js'),
  Avatar: docgenComposed('@cwds/components/src/Avatar/Avatar.jsx'),
  Badge: docgenComposed('reactstrap/src/Badge.js'),
  Button: docgenComposed('reactstrap/src/Button.js'),
  ButtonGroup: docgenComposed('reactstrap/src/ButtonGroup.js'),
  Card: docgenComposed('reactstrap/src/Card.js'),
  Col: docgenComposed('reactstrap/src/Col.js'),
  Container: docgenComposed('reactstrap/src/Container.js'),
  Menu: docgenComposed('reactstrap/src/Dropdown.js'),
  MenuItem: docgenComposed('reactstrap/src/DropdownMenu.js'),
  Row: docgenComposed('reactstrap/src/Row.js'),
  Icon: docgenComposed(
    '@cwds/icons/src/Icon.jsx',
    '@cwds/icons/src/fontawesome.props'
  ),
  Tooltip: docgenComposed('reactstrap/src/Tooltip.js'),
  Modal: docgenComposed('reactstrap/src/Modal.js'),
}
