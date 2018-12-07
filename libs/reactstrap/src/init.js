export function setGlobalCssModule(Util, cssModule) {
  Util.setGlobalCssModule(cssModule)
}

export function addKeyCodes(Util) {
  Util.keyCodes['p'] = 80
  Util.keyCodes['n'] = 78
  Util.keyCodes['home'] = 36
  Util.keyCodes['end'] = 35
}

export function setDefaultTag(Component, tag = 'div') {
  // see https://github.com/reactstrap/reactstrap/issues/1297
  Component.defaultProps = Component.defaultProps || {}
  Component.defaultProps.tag = tag
}
