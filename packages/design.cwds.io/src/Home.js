import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Container from '@cwds/components/lib/Container';
import Logo from '@cwds/components/lib/Logo';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardDeck,
} from '@cwds/components/lib/Cards';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';
import Button from '@cwds/components/lib/Button';
import Icon, { ICON_NAMES } from '@cwds/components/lib/Icon';

// import {
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from '@cwds/components/lib/Dropdown';

// import Popover, {
//   PopoverBody,
//   PopoverHeader,
// } from '@cwds/components/lib/Popover';
// import { Popover, PopoverBody } from 'reactstrap';

// const DropdownExample = () => {
//   return (
//     <UncontrolledDropdown>
//       <DropdownToggle
//         tag="button"
//         style={{ border: 'none', backgroundColor: 'transparent' }}
//       >
//         <Icon icon="ellipsis" />
//       </DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem header>Header</DropdownItem>
//         <DropdownItem disabled>Action</DropdownItem>
//         <DropdownItem>Another Action</DropdownItem>
//         <DropdownItem divider />
//         <DropdownItem>Another Action</DropdownItem>
//       </DropdownMenu>
//     </UncontrolledDropdown>
//   );
// };

// class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       popoverOpen: false,
//     };
//   }

//   toggle() {
//     this.setState({
//       popoverOpen: !this.state.popoverOpen,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Button id="Popover1" onClick={this.toggle}>
//           Launch Popover
//         </Button>
//         <Popover
//           placement="bottom"
//           hideArrow={false}
//           isOpen={this.state.popoverOpen}
//           target="Popover1"
//           toggle={this.toggle}
//         >
//           <PopoverHeader>Popover Title</PopoverHeader>
//           <PopoverBody>
//             Sed posuere consectetur est at lobortis. Aenean eu leo quam.
//             Pellentesque ornare sem lacinia quam venenatis vestibulum.
//           </PopoverBody>
//         </Popover>
//       </div>
//     );
//   }
// }

export default () => (
  <div>
    <AppBar
      brand={props => {
        return (
          <Link to="/">
            <Logo />
          </Link>
        );
      }}
    />
    <PageHeader title="Design Guide" />
    <Container>
      <CardDeck>
        <Card>
          <CardHeader>Principles</CardHeader>
          <CardBody>asdflkjasdlkfjasdlfkj</CardBody>
          <CardFooter>
            <Link to="/principles">
              <Button color="primary">Go!</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>Components</CardHeader>
          <CardBody>alskdfj</CardBody>
          <CardFooter>
            <Link to="/components">
              <Button color="primary">Go!</Button>
            </Link>
          </CardFooter>
        </Card>
        <div className="w-100 d-none d-sm-block d-md-none mb-3" />
        <Card>
          <CardHeader>Layouts</CardHeader>
          <CardBody>Common page layouts for CARES</CardBody>
          <CardFooter>
            <Link to="/page-layouts">
              <Button color="primary">Go!</Button>
            </Link>
          </CardFooter>
        </Card>
        <div className="w-100 d-none d-md-block d-lg-none mb-3" />
        <Card>
          <CardHeader>Core</CardHeader>
          <CardBody>asdflkjasdlkfjasdlfkj</CardBody>
          <CardFooter>
            <Link to="/core">
              <Button color="primary">Go!</Button>
            </Link>
          </CardFooter>
        </Card>
        <div className="w-100 d-none d-sm-block d-md-none mb-3" />
        <Card>
          <CardHeader>Labs</CardHeader>
          <CardBody>
            Not everything in here is ready for general use, but it should be
            showcased for the purpose of soliciting feedback!
          </CardBody>
          <CardFooter>
            <Link to="/labs">
              <Button color="primary">Go!</Button>
            </Link>
          </CardFooter>
        </Card>
      </CardDeck>
      {/* <Example />
      <br />
      <DropdownExample /> */}
    </Container>
  </div>
);
