import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/tag'
import '@cwds/core/dist/styles.css'
import { Utils } from '@cwds/components'
import componentMap from './components/MDXComponentProviderMappings'

import ScrollToTop from './ScrollToTop'
import Status from './modules/status'
import Home from './modules/home'
import CoreStyles from './modules/core-style'
import LabsPage from './modules/labs'
import Components from './modules/components'

import CaresConfig from './config'
const { CaresProvider } = Utils

class App extends Component {
  render() {
    return (
      <MDXProvider components={componentMap}>
        {/* <CaresProvider value={CaresConfig}> */}
        <Router>
          <ScrollToTop>
            <Fragment>
              <Route exact path="/" component={Home} />
              <Route path="/core-style" component={CoreStyles} />
              <Route path="/labs" component={LabsPage} />
              <Route path="/components" component={Components} />
              <Route path="/status" component={Status} />
            </Fragment>
          </ScrollToTop>
        </Router>
        {/* </CaresProvider> */}
      </MDXProvider>
    )
  }
}

export default App
