import { Util } from 'reactstrap'
import cssModule from '@cwds/core/dist/bootstrap-cares.module.css'

// I am not sure why, but a `col` class is created. Must remove it in order to allow the grid globals to fall thru. See https://github.com/ca-cwds/design-system/issues/207
delete cssModule.col

Util.setGlobalCssModule(cssModule)
