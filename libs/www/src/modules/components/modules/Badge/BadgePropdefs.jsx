import React from 'react'
import PropTable from '../../../../components/PropTable'
import docgenComposed from '../../../../macros/docgen-composed.macro'
const docgenInfo = docgenComposed('reactstrap/src/Badge.js')

export default () => <PropTable propDefs={docgenInfo} />
