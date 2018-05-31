import React, { createElement, createFactory } from 'react'

export default function({ factories={} }) {
  const {
    a = createFactory('a'),
    p = createFactory('p'),
    strong = createFactory('strong'),
    wrapper = createFactory('div'),
  } = factories

  return wrapper({},

p({},
  strong({},
    "Understanding the Child Welfare System in California",
  ),
  "  \n",
  a({"href": "http://www.phi.org/uploads/application/files/h31ef4xly0mtt9oa4lsv07oko48r6kg19g6fisdm62qmymwbs5.pdf"},
    "http://www.phi.org/uploads/application/files/h31ef4xly0mtt9oa4lsv07oko48r6kg19g6fisdm62qmymwbs5.pdf",
  ),
),
p({},
  strong({},
    "California child welfare indicators project",
  ),
  "  \n",
  a({"href": "http://cssr.berkeley.edu/ucb_childwelfare/"},
    "http://cssr.berkeley.edu/ucb_childwelfare/",
  ),
),
p({},
  strong({},
    "A Child Welfare Leader’s Desk Guide to Building a High-Performing Agency",
  ),
  "  \n",
  a({"href": "http://www.aecf.org/resources/10-practices-part-one/"},
    "http://www.aecf.org/resources/10-practices-part-one/",
  ),
),
p({},
  strong({},
    "Casey family programs – Resource Library",
  ),
  "  \n",
  a({"href": "https://www.casey.org/resources/"},
    "https://www.casey.org/resources/",
  ),
)

  )
}

export const meta = {}

