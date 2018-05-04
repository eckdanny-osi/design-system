import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import ComponentsPage from './Components';
import PageLayouts from './PageLayouts';
import '@cwds/components/lib/global/global.css';
import CorePage from './CorePage';
import PrinciplesPage from './PrinciplesPage';
import 'bootstrap/scss/bootstrap.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/page-layouts" component={PageLayouts} />
            <Route path="/components" component={ComponentsPage} />
            <Route path="/core" component={CorePage} />
            <Route path="/principles" component={PrinciplesPage} />
          </div>
        </ScrollToTop>
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
