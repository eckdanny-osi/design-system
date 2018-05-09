import React from 'react';

export default () => (
  <div>
    <p>
      Our Definition of Ready helps us identify when a story has sufficient
      detail that it can be executed. The Definition of Done feeds development
      by designating that a story has been completed and approved, so it can be
      handed off to be built.
    </p>
    <p>
      Because our work includes Design, Research, and Component Library
      development, we have slightly different Definitions of Ready and Done for
      each.
    </p>
    <p>Throughout the life of a story, we will: </p>
    <ul>
      <li>
        Use comments to describe progress and reasons for decisions during the
        process{' '}
      </li>
      <li>Attach artifacts to the story, for review </li>
      <li>Add links to artifacts </li>
    </ul>
    <p>
      DesignOps has several focused areas of work, each represented as Swim
      lanes on our JIRA board (<a href="https://osi-cwds.atlassian.net/secure/RapidBoard.jspa?rapidView=132">
        https://osi-cwds.atlassian.net/secure/RapidBoard.jspa?rapidView=132
      </a>):{' '}
    </p>
    <ul>
      <li>Component library</li>
      <li>Product discovery research </li>
      <li>Design-based research </li>
      <li>Design</li>
    </ul>
    <hr />
    <h1 id="research-stories">Research Stories</h1>
    <p>(Product Discovery Research &amp; Design-Based Research)</p>
    <h2 id="definition-of-ready">Definition of Ready</h2>
    <h3 id="stories-should-specify-">Stories should specify:</h3>
    <ul>
      <li>A clear need or goal</li>
      <li>
        A &quot;Best effort&quot; description of the problem or question to be
        answered, based on the writer&#39;s understanding
      </li>
      <li>If the story is initiated internally (by DesignOps), a hypothesis</li>
      <li>Clear, testable acceptance criteria</li>
      <li>SMEs and/or Subject Area identified</li>
    </ul>
    <h3 id="optional-based-on-the-nature-of-the-story-">
      Optional, based on the nature of the story:
    </h3>
    <ul>
      <li>Recommendations</li>
      <li>Project-relative value of the request</li>
      <li>Background information/context/framing</li>
      <li>
        Timeline - When is this needed? Examples: Before sprint <em>X</em>,
        Before PI <em>Z</em>
      </li>
      <li>Priority: Critical, High, Medium or Low</li>
      <li>Identify the audience for the deliverable</li>
      <li>Identify who will provide Acceptance</li>
    </ul>
    <h2 id="definition-of-done">Definition of Done</h2>
    <h3 id="stories-will-include-">Stories will include:</h3>
    <ul>
      <li>Internal (DesignOps) Peer review</li>
      <li>B-Team/Stakeholder review</li>
      <li>Deliverable completed</li>
      <li>
        Deliverable posted where the acceptor/reviewers can access it to approve
      </li>
    </ul>
    <h3 id="examples-of-research-deliverables-may-include-">
      Examples of Research deliverables may include:
    </h3>
    <ul>
      <li>Findings (Discovery/Learnings)</li>
      <li>Outcome (facts, actionable steps, execution facts)</li>
      <li>Notes</li>
    </ul>
    <hr />
    <h1 id="design-stories">Design stories</h1>
    <h2 id="definition-of-ready">Definition of Ready</h2>
    <h3 id="stories-should-specify-">Stories should specify:</h3>
    <ul>
      <li>A clear need or goal</li>
      <li>
        A &quot;Best effort&quot; description of the problem or question to be
        answered, based on the writer&#39;s understanding
      </li>
      <li>Clear, testable acceptance criteria articulated in the story</li>
      <li>SMEs and/or Subject Area identified</li>
    </ul>
    <h3 id="optional-based-on-the-nature-of-the-story-">
      Optional, based on the nature of the story:
    </h3>
    <ul>
      <li>Recommendations</li>
      <li>Project-relative value of the request</li>
      <li>Background information/context/framing</li>
      <li>
        Timeline - When is this needed? Examples: Before sprint <em>X</em>,
        Before PI <em>Z</em>
      </li>
      <li>Priority: Critical, High, Medium or Low</li>
      <li>Identify the audience for the deliverable</li>
      <li>Identify who will provide Acceptance</li>
    </ul>
    <h2 id="definition-of-done">Definition of Done</h2>
    <h3 id="stories-should-include-">Stories should include:</h3>
    <ul>
      <li>Internal (DesignOps) Peer review</li>
      <li>B-Team/Stakeholder review</li>
      <li>Deliverable completed</li>
      <li>
        Deliverable posted where the acceptor/reviewers can access it to approve
      </li>
    </ul>
    <h3 id="examples-of-design-deliverables-may-include-">
      Examples of Design deliverables may include:
    </h3>
    <ul>
      <li>
        Low fidelity wireframes (based on what we learned through research)
      </li>
      <li>Medium to high fidelity wireframes</li>
      <li>Annotations</li>
      <li>Clickable prototypes</li>
    </ul>
  </div>
);
