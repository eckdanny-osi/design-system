import cssModule from '@cwds/core/scss/bootstrap-cares.module.scss'
import { Util } from 'reactstrap'

Util.ROTATION = {
  RIGHT: 90,
  FLIP: 180,
  LEFT: 270,
}

Util.setGlobalCssModule(cssModule)

export { Util }
