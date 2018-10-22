import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/tag'
import '@cwds/core/dist/styles.css'
import 'react-select/dist/react-select.css'

import { JumpToTop } from '@cwds/components'
import componentMap from './components/MDXComponentProviderMappings'

import ScrollToTop from './ScrollToTop'
import Status from './modules/status'
import Home from './modules/home'
// import PageLayouts from './modules/layouts';
import CoreStyles from './modules/core-style'
import LabsPage from './modules/labs'
import Components from './modules/components'

class App extends Component {
  render() {
    return (
      <MDXProvider components={componentMap}>
        <Router>
          <ScrollToTop>
            <Fragment>
              <Route exact path="/" component={Home} />
              <Route path="/core-style" component={CoreStyles} />
              <Route path="/labs" component={LabsPage} />
              <Route path="/components" component={Components} />
              <Route path="/status" component={Status} />
              <JumpToTop />
            </Fragment>
          </ScrollToTop>
        </Router>
      </MDXProvider>
    )
  }
}

export default App
