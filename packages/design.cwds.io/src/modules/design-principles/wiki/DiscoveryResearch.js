/* eslint-disable */

const React = require('react').default || require('react')
const { createElement, createFactory } = require('react')

module.exports = function({ factories={} }) {
  const {
    a = createFactory('a'),
    h1 = createFactory('h1'),
    h2 = createFactory('h2'),
    h3 = createFactory('h3'),
    li = createFactory('li'),
    p = createFactory('p'),
    ul = createFactory('ul'),
    wrapper = createFactory('div'),
  } = factories

  return wrapper({},

p({},
  "status: DRAFT",
),
h1({"id": "Discovery"},
  "Discovery",
),
h2({"id": "Objective-of-discovery"},
  "Objective of discovery",
),
p({},
  "Discovery ensures you understand and define the right things to design. Too often scope is based on assumptions or does not include enough real world insights to solve the right problems.",
),
h2({"id": "How-to-do-it"},
  "How to do it",
),
h3({"id": "1.-Learn-the-overall-domain.-Do-your-supporting-research."},
  "1. Learn the overall domain. Do your supporting research.",
),
p({},
  "Child welfare is a policy and practice standards based profession. It has evolved over time to ensure thorough and unbiased care of at risk children.",
),
ul({},
  li({},
    "How does policy shape the area you are researching? What are the clear policy standards? What is the history? What is coming in the future? How does policy respond to learnings?",
  ),
  li({},
    "What are expected practice guidelines?",
  ),
  li({},
    "What are legally required outcomes and measures required for tribal, county, state and federal reporting?",
  ),
  li({},
    "What are technical constraints from the legacy systems to consider. How can you understand, articulate and track that best?",
  ),
),
h3({"id": "2.-Plan-your-user-research-with-primary-users."},
  "2. Plan your user research with primary users.",
),
ul({},
  li({},
    "What questions are you trying to answer? What is your goal?",
  ),
  li({},
    "Who are the types of users you need to talk to? How will you find them?",
  ),
  li({},
    "What methods will yield the best information? Shadowing a user? Interviewing them? Card sort? Diary study?",
  ),
  li({},
    "How many researchers do you need onsite? Who will play what role?",
  ),
  li({},
    "How will you capture data?",
  ),
  li({},
    "Talk to your core constituents to allow time to plan a site visit. Remember when visiting workers, you are entering a space where time and safety critical work is underway.",
  ),
),
h3({"id": "3.-Be-prepared-onsite."},
  "3. Be prepared onsite.",
),
ul({},
  li({},
    "Make sure you observe privacy rules. Do not photograph anything that contains Personally Identifying Information (PII). Ask for permission to quote or paraphrase user interviews.",
  ),
  li({},
    "Include your business team and core constituents in research. Teach them how to be researchers themselves.",
  ),
  li({},
    "Arrive as an “empty vessel.” Resist the temptation to offer solutions but to openly gather data.",
  ),
  li({},
    "Follow research best practices: Do not ask leading questions. Ask “why” to get to deeper understanding. Take notes that capture what your observe, not your interpretation. Capture direct quotes as much as possible.",
  ),
),
h3({"id": "4.-Synthesize-research-to-discover-insights"},
  "4. Synthesize research to discover insights",
),
ul({},
  li({},
    "Allow time to synthesize research while the information is still fresh in your mind. Give your team focused 1-3 days for synthesis and a day to capture and articulate insights.",
  ),
  li({},
    "Decide the organizing structure to synthesize the research. It should map to your goals. Do you need to understand user needs, pain points, strengths and attitudes? What users do, think, say and feel? What surprised you? What validated your assumptions? What visualizations help create a shared vision of what you learned? User journey map? Service blueprint?",
  ),
  li({},
    "Group all the observations according to the organizing structures you decided.",
  ),
  li({},
    "What insights or recommendations come from this?",
  ),
  li({},
    "Create a user journey map or service blueprint. Don’t worry about it being polished. Capturing even on sticky notes or a whiteboard will go a long way. Higher fidelity versions can come once you are confident in your research.",
  ),
  li({},
    "What opportunities do you see? What “How might we?” questions come out of this research.",
  ),
  li({},
    "What would you do differently for future discovery research?",
  ),
),
h3({"id": "5.-Share-your-learnings."},
  "5. Share your learnings.",
),
p({},
  "How will you share these insights? Consider different channels. For instance use the team research results template and share that with your full team (business, core constituents, product, development and designers). Schedule a time to talk through the findings. Make a poster and hang in your workspace to remind everyone of the value the team is trying to create.",
),
p({},
  "Post user journey maps and blueprints in your workspace so your team has common artifact to anchor discussions and make sure your team is literally on the same page.",
),
h3({"id": "6.-Use-these-insights-and-understanding-to-inform-product-strategy-and-design."},
  "6. Use these insights and understanding to inform product strategy and design.",
),
p({},
  "Make sure your whole team understands your user goals and needs. Make sure product roadmaps map to user work flows and needs.",
),
h2({"id": "Internal"},
  "Internal",
),
p({},
  "Research Plan and Results templates (One Drive)",
),
h2({"id": "Further-Resources"},
  "Further Resources",
),
ul({},
  li({},
    a({"href": "https://www.gov.uk/service-manual/user-research/user-research-in-discovery"},
      "Gov.uk Service Manual: Discovery",
    ),
  ),
  li({},
    a({"href": "https://methods.18f.gov/"},
      "18F Method Cards",
    ),
  ),
)

  )
}