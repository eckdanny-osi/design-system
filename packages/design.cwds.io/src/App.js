import React, { Component } from 'react';
import '@cwds/components/lib/global/global.css';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Icon, { ICON_NAMES } from '@cwds/components/lib/Icon';
import Alert from '@cwds/components/lib/Alert';
import Button from '@cwds/components/lib/Button';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from '@cwds/components/lib/Cards';
import Container from '@cwds/components/lib/Container';
import Logo from '@cwds/components/lib/Logo';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <PageHeader>THE PAGE HEADER</PageHeader>
        <Container>
          <h1>Typography</h1>
          <h2>Headers</h2>
          <Card>
            <CardBody>
              <h1>alsdkfj</h1>
              <h2>alksdjf</h2>
              <h3>alskdfj</h3>
              <h4>alskdfj</h4>
              <h5>alskdfj</h5>
            </CardBody>
          </Card>
          <h2>Inline Text Elements</h2>
          <Card>
            <CardBody>
              <p>
                You can use the mark tag to <mark>highlight</mark> text.
              </p>
              <p>
                <del>
                  This line of text is meant to be treated as deleted text.
                </del>
              </p>
              <p>
                <s>
                  This line of text is meant to be treated as no longer
                  accurate.
                </s>
              </p>
              <p>
                <ins>
                  This line of text is meant to be treated as an addition to the
                  document.
                </ins>
              </p>
              <p>
                <u>This line of text will render as underlined</u>
              </p>
              <p>
                <small>
                  This line of text is meant to be treated as fine print.
                </small>
              </p>
              <p>
                <strong>This line rendered as bold text.</strong>
              </p>
              <p>
                <em>This line rendered as italicized text.</em>
              </p>
            </CardBody>
          </Card>
          <h2>Lists</h2>
          <Card>
            <CardBody>
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </CardBody>
          </Card>
          <h1>Alerts</h1>
          <Alert color="primary">alskdfj</Alert>
          <Alert color="info">alskdfjlaskdjf</Alert>
          <Alert color="danger">Danger</Alert>
          <Alert color="success">alksdjf</Alert>
          <h1>Buttons</h1>
          <Button>Default</Button> <Button primary>Primary</Button>{' '}
          <Button warning>Warning</Button>
          <h1>Cards</h1>
          <Card>
            <CardBody>alsdkfjalsdkfj</CardBody>
          </Card>
          <br />
          <Card>
            <CardHeader>Card Header</CardHeader>
            <CardBody>alsdkfjalsdkfj</CardBody>
            <CardFooter>CardFooter</CardFooter>
          </Card>
          <h1>Logo</h1>
          <Logo />
          <h1>Icons</h1>
          <ul
            style={{
              listStyleType: 'none',
              paddingLeft: 0,
              clear: 'left',
            }}
          >
            {Object.keys(ICON_NAMES).map(d => (
              <li
                key={d}
                style={{
                  backgroundColor: '#EEE',
                  textAlign: 'center',
                  padding: '10px',
                  marginBottom: '12px',
                  marginRight: '12px',
                  width: '12%',
                  float: 'left',
                }}
              >
                <Icon icon={d} size="3x" />
                <code
                  style={{
                    marginTop: '10px',
                    display: 'block',
                    fontSize: '10px',
                  }}
                >
                  {d}
                </code>
              </li>
            ))}
          </ul>
          <br style={{ clear: 'left' }} />
          <h2>Animated</h2>
          <Icon icon="circleNotch" spin />
        </Container>
      </div>
    );
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //         <Button>lksdflkasdjf</Button>
  //       </p>
  //     </div>
  //   );
  // }
}

export default App;
