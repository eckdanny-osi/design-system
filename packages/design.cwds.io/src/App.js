import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Alert from '@cwds/components/lib/Alert';
// import Button from '@cwds/components/lib/Button';
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Logo,
  Row,
} from '@cwds/components';
import '@cwds/components/dist/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundColor: 'blue' }}>
          <Container>
            <Row>
              <Col>alskdfj</Col>
            </Row>
          </Container>
        </div>
        <div style={{ backgroundColor: 'red' }}>
          <Container>
            <Row>
              <Col>Subhead</Col>
            </Row>
          </Container>
        </div>
        <Container>
          <h1>Typography</h1>
          <h2>Headers</h2>
          <Card>
            <h1>alsdkfj</h1>
            <h2>alksdjf</h2>
            <h3>alskdfj</h3>
            <h4>alskdfj</h4>
            <h5>alskdfj</h5>
          </Card>
          <h2>Inline Text Elements</h2>
          <Card>
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
                This line of text is meant to be treated as no longer accurate.
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
          </Card>
          <h2>Lists</h2>
          <Card>
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
          </Card>
          <h1>Alerts</h1>
          <Alert color="info">alskdfjlaskdjf</Alert>
          <Alert color="danger">Danger</Alert>
          <Alert color="success">alksdjf</Alert>
          <h1>Buttons</h1>
          <Button>Hello World</Button> <Button primary>Hello World</Button>{' '}
          <Button warning>Hello World</Button>
          <h1>Cards</h1>
          <Card>alksdjfalksdjf</Card>
          <h1>Logo</h1>
          <Logo />
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
