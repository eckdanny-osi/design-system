import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@cwds/components/lib/global/styles.css';

import ScrollToTop from './ScrollToTop';
import Home from './Home';
import ComponentsPage from './Components';
import PageLayouts from './modules/layouts';
import CorePage from './CorePage';
import PrinciplesPage from './PrinciplesPage';
import LabsPage from './modules/labs';
import ComponentBrowser from './modules/component-browser';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/page-layouts" component={PageLayouts} />
            <Route path="/components-old" component={ComponentsPage} />
            <Route path="/core" component={CorePage} />
            <Route path="/principles" component={PrinciplesPage} />
            <Route path="/labs" component={LabsPage} />
            <Route path="/components" component={ComponentBrowser} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
