/* eslint-disable */

const React = require('react').default || require('react')
const { createElement, createFactory } = require('react')

module.exports = function({ factories={} }) {
  const {
    h2 = createFactory('h2'),
    li = createFactory('li'),
    p = createFactory('p'),
    ul = createFactory('ul'),
    wrapper = createFactory('div'),
  } = factories

  return wrapper({},

h2({"id": "Overview"},
  "Overview",
),
p({},
  "The component library is part of our living style guide and is slated to include React-based components. The Intake, CALS, and Case Management teams discussed the ideal technology approach to defining these, and how digital services team can contribute.",
),
h2({"id": "What's-a-Component"},
  "What’s a Component",
),
ul({},
  li({},
    "React-based, no longer just CSS",
  ),
  li({},
    "Small",
  ),
  li({},
    "Simple",
  ),
  li({},
    "Tested",
  ),
),
h2({"id": "Yet-to-be-determined"},
  "Yet to be determined",
),
ul({},
  li({},
    "Component Code Guidelines (Clarify what the above goals mean when articulated)",
  ),
)

  )
}
