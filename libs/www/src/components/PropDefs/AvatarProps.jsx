import React from 'react'
import { ReactPropTable } from '../ReactPropTable'
import { propDefsFunc } from '../ReactPropTable'
import docgenComposed from '../../macros/docgen-composed.macro'

const docgenInfo = docgenComposed('@cwds/components/src/Avatar/Avatar.jsx')
const AvtarProps = () => (
  <ReactPropTable propDefinitions={propDefsFunc(docgenInfo.props)} />
)

export default AvtarProps
