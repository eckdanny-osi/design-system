import React from 'react'
import { ReactPropTable } from '../ReactPropTable'
import { propDefsFunc } from '../ReactPropTable'
import docgenComposed from '../../macros/docgen-composed.macro'
const docgenInfo = docgenComposed('reactstrap/src/Badge.js')

const BadgePropDefs = () => (
  <ReactPropTable propDefinitions={propDefsFunc(docgenInfo.props)} />
)

export default BadgePropDefs
