/* eslint-disable */

const React = require('react').default || require('react')
const { createElement, createFactory } = require('react')

module.exports = function({ factories={} }) {
  const {
    p = createFactory('p'),
    wrapper = createFactory('div'),
  } = factories

  return wrapper({},

p({},
  "coming soon",
)

  )
}
