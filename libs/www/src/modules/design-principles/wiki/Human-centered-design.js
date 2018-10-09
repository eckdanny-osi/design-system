/* eslint-disable */

const React = require('react').default || require('react')
const { createElement, createFactory } = require('react')

module.exports = function({ factories={} }) {
  const {
    a = createFactory('a'),
    em = createFactory('em'),
    h2 = createFactory('h2'),
    li = createFactory('li'),
    ol = createFactory('ol'),
    p = createFactory('p'),
    strong = createFactory('strong'),
    wrapper = createFactory('div'),
  } = factories

  return wrapper({},

p({},
  em({},
    "Human-centered design",
  ),
  ". ",
  em({},
    "User-centered design",
  ),
  ". ",
  em({},
    "Design thinking",
  ),
  ". ",
  em({},
    "UX",
  ),
  ".",
),
p({},
  "These terms are often used interchangeably but serve a common purpose: ",
  strong({},
    "understand true human needs to spark excellent innovation or simple design, or both.",
  ),
),
p({},
  "By directly observing human experience and understanding peoples goals, needs, pain points, and attitudes, we can analyze situations and define opportunities. It allows us to change the future in meaningful ways.",
),
h2({"id": "Human-centered-design-values"},
  "Human centered design values",
),
ol({},
  li({},
    "Design for user needs.",
  ),
  li({},
    "Radically do the work to understand those needs in order to find true opportunities.",
  ),
  li({},
    "Share insights with the whole team (or even better, involve the whole team in research).",
  ),
  li({},
    "Regularly validate your design with real users.",
  ),
),
h2({"id": "Additional-resources"},
  "Additional resources",
),
p({},
  a({"href": "https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs"},
    "Gov.uk Service Manual",
  ),
)

  )
}
