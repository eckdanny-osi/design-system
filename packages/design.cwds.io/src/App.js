import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/tag';
import '@cwds/components/lib/global/styles.css';
import 'react-select/dist/react-select.css';

import JumpToTop from '@cwds/components/lib/JumpToTop';
import componentMap from './components/MDXComponentProviderMappings';

import ScrollToTop from './ScrollToTop';
import Status from './modules/status';
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
      <MDXProvider components={componentMap}>
        <Router>
          <ScrollToTop>
            <Fragment>
              <Route exact path="/" component={Home} />
              <Route path="/page-layouts" component={PageLayouts} />
              <Route path="/core-style" component={CorePage} />
              <Route path="/principles" component={PrinciplesPage} />
              <Route path="/labs" component={LabsPage} />
              <Route path="/components-prev" component={ComponentBrowser} />
              <Route path="/components" component={Components} />
              <Route path="/status" component={Status} />
              <JumpToTop />
            </Fragment>
          </ScrollToTop>
        </Router>
      </MDXProvider>
    );
  }
}

export default App;
