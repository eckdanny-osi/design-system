import cssModule from '@cwds/core/dist/bootstrap-cares.module.css'
import { Util } from 'reactstrap'

Util.keyCodes.p = 80
Util.keyCodes.n = 78
Util.keyCodes.home = 36
Util.keyCodes.end = 35

Util.setGlobalCssModule(cssModule)

export { Util }
