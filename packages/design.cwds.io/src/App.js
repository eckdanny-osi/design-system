import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import ComponentsPage from './Components';
import '@cwds/components/lib/global/global.css';

const About = () => <div>About</div>;

const Topics = () => <div>Topics</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/components" component={ComponentsPage} />
        </div>
      </Router>
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
