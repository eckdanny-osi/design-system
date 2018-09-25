import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@cwds/components/lib/global/styles.css';
import 'react-select/dist/react-select.css';

import JumpToTop from '@cwds/components/lib/JumpToTop';

import ScrollToTop from './ScrollToTop';
import Home from './modules/home';
import PageLayouts from './modules/layouts';
import CorePage from './modules/core-styles';
import PrinciplesPage from './modules/design-principles';
import LabsPage from './modules/labs';
import ComponentBrowser from './modules/component-browser';
import Components from './modules/components';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/page-layouts" component={PageLayouts} />
            <Route path="/core-style" component={CorePage} />
            <Route path="/principles" component={PrinciplesPage} />
            <Route path="/labs" component={LabsPage} />
            <Route path="/components-prev" component={ComponentBrowser} />
            <Route path="/components" component={Components} />
            <JumpToTop />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
