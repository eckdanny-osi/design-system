/* eslint-disable */

const React = require('react').default || require('react')
const { createElement, createFactory } = require('react')

module.exports = function({ factories={} }) {
  const {
    a = createFactory('a'),
    h2 = createFactory('h2'),
    li = createFactory('li'),
    ul = createFactory('ul'),
    wrapper = createFactory('div'),
  } = factories

  return wrapper({},

h2({"id": "Component-Library-Contribution-Process"},
  "Component Library Contribution Process",
),
ul({},
  li({},
    "A component need or update is identified in a digital service team or in ",
    a({"href": "https://github.com/ca-cwds/research-design/wiki/Wood-Duck"},
      "Wood Duck",
    ),
  ),
  li({},
    "Component story is added, refined and prioritized in the ",
    a({"href": "https://www.pivotaltracker.com/n/projects/1963189"},
      "DesignOps Backlog",
    ),
  ),
  li({},
    "Digital service teams sign up for stories at the DesignOps Story Auction (DOSA) --OR-- by pulling stories directly from the prioritized lots in the ",
    a({"href": "https://www.pivotaltracker.com/n/projects/1963189"},
      "DesignOps Backlog",
    ),
  ),
  li({},
    "Component is implemented and approved (see ",
    a({"href": "https://github.com/ca-cwds/react-wood-duck/wiki"},
      "React Wood Duck",
    ),
    " for the process)",
  ),
)

  )
}
