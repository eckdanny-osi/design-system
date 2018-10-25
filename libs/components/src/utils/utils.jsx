import React, { Component } from 'react'
import omit from 'lodash.omit'

function getProps(props, ...omits) {
  return omit(props, omits)
}
