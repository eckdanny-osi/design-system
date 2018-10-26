import React from 'react'
import { ReactPropTable } from '../ReactPropTable'
import { propDefsFunc } from '../ReactPropTable'
import docgenComposed from '../../macros/docgen-composed.macro'

const docgenInfo = docgenComposed('reactstrap/src/Button.js')

const ButtonPropdefs = () => (
  <ReactPropTable propDefinitions={propDefsFunc(docgenInfo.props)} />
)

export default ButtonPropdefs
