/* eslint-disable */

const React = require('react').default || require('react')
const { createElement, createFactory } = require('react')

module.exports = function({ factories={} }) {
  const {
    a = createFactory('a'),
    h1 = createFactory('h1'),
    h2 = createFactory('h2'),
    li = createFactory('li'),
    p = createFactory('p'),
    ul = createFactory('ul'),
    wrapper = createFactory('div'),
  } = factories

  return wrapper({},

h1({"id": "Overview"},
  "Overview",
),
p({},
  "DesignOps is using ",
  a({"href": "https://www.agilealliance.org/what-is-scrumban/"},
    "ScrumBan",
  ),
  ", which is essentially Kanban work queues with Scrum ceremonies (oversimplified).",
),
h2({"id": "Swim-Lanes"},
  "Swim Lanes",
),
p({},
  "We will be working several queues or swim lanes that are currently based on high-level discipline:",
),
ul({},
  li({},
    "Design",
  ),
  li({},
    "Design-based Research",
  ),
  li({},
    "Product Discovery Research",
  ),
  li({},
    "Component Library",
  ),
  li({},
    "Organization",
  ),
),
h2({"id": "Cadence"},
  "Cadence",
),
p({},
  "We observe the same cadence as the other Digital Service teams: 2 week sprints",
),
h2({"id": "Ceremonies-Sessions"},
  "Ceremonies / Sessions",
),
p({},
  "View our schedule of ceremonies & sessions ",
  a({"href": "https://github.com/ca-cwds/research-design/wiki/Ceremonies,-Sessions-&-Communication-Channels"},
    "here",
  ),
)

  )
}
