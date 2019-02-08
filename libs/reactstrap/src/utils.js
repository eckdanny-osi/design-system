import cssModule from '@cwds/core/dist/bootstrap-cares.module.css'
import { Util } from 'reactstrap'

Util.ROTATION = {
  RIGHT: 90,
  FLIP: 180,
  LEFT: 270,
}

Util.setGlobalCssModule(cssModule)

export { Util }
