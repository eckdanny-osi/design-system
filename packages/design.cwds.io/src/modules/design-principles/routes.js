import React from 'react';
import Card from '@cwds/components/lib/Cards';

import ExperienceValues from './wiki/ExperienceValues';
import HumanCenteredDesign from './wiki/HumanCenteredDesign';
import AboutChildWelfare from './wiki/AboutChildWelfare';
import DesignOpsScrumBan from './wiki/DesignOpsScrumban';
import DefinitionOfReadyAndDone from './wiki/DefinitionOfReadyAndDone';
import CeremoniesSessionsAndCommunicationChannels from './wiki/CeremoniesSessionsAndCommunicationChannels';
import DesignReview from './wiki/DesignReview';
import Components from './wiki/ComponentLibrary';
import Contributing from './wiki/ContributionGuidelines';
import TechnicalDesignBrief from './wiki/TechnicalDesignBrief';
import UxUiPrinciples from './wiki/UxUiPrinciples';
import AccessibleDesign from './wiki/AccessibleDesign';
import ContentStrategy from './wiki/ContentStrategy';
import TechnologyApproach from './wiki/TechnologyApproach';

export default [
  {
    title: 'About',
    slug: 'about',
    component: () => <h2>About</h2>,
    active: true,
    children: [
      {
        title: 'Experience Values',
        slug: 'experience-values',
        active: true,
        component: () => (
          <Card>
            <Card.Header>Experience Values</Card.Header>
            <Card.Body>
              <ExperienceValues />
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Human-Centered Design',
        slug: 'human-centered-design',
        component: () => (
          <Card>
            <Card.Header>Human-Centered Design</Card.Header>
            <Card.Body>
              <HumanCenteredDesign />
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'About Child Welfare',
        slug: 'about-child-welfare',
        component: () => (
          <Card>
            <Card.Header>About Child Welfare</Card.Header>
            <Card.Body>
              <AboutChildWelfare />
            </Card.Body>
          </Card>
        ),
      },
    ],
  },
  {
    title: 'ScrumBan',
    slug: 'scrumban',
    component: () => <h2>ScrumBan</h2>,
    children: [
      {
        title: 'DesignOps ScrumBan',
        slug: 'design-ops-scrumban',
        component: () => (
          <Card>
            <Card.Header>DesignOps ScrumBan</Card.Header>
            <Card.Body>
              <DesignOpsScrumBan />
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Definition of Ready/Done',
        slug: 'definition-of-ready-done',
        component: () => (
          <Card>
            <Card.Header>Definition of Ready/Done</Card.Header>
            <Card.Body>
              <DefinitionOfReadyAndDone />
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Ceremonies, Sessions, and Communication Channels',
        slug: 'c-a-and-cc',
        component: () => (
          <Card>
            <Card.Header>
              Ceremonies, Sessions, and Communication Channels
            </Card.Header>
            <Card.Body>
              <CeremoniesSessionsAndCommunicationChannels />
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Reviews',
        slug: 'reviews',
        component: () => (
          <Card>
            <Card.Header>Reviews</Card.Header>
            <Card.Body>
              <DesignReview />
            </Card.Body>
          </Card>
        ),
      },
    ],
  },
  {
    title: 'Component Library',
    slug: 'component-library',
    component: () => <h2>Component Library</h2>,
    children: [
      {
        title: 'Components',
        slug: 'components',
        component: () => (
          <Card>
            <Card.Header>Components</Card.Header>
            <Card.Body>
              <p>alsdkfjalksdfj</p>components
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Contributing...',
        slug: 'contributing',
        component: () => (
          <Card>
            <Card.Header>Contributing...</Card.Header>
            <Card.Body>
              <Contributing />
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Technical Design Brief',
        slug: 'technical-design-brief',
        component: () => (
          <Card>
            <Card.Header>Technical Design Brief</Card.Header>
            <Card.Body>
              <TechnicalDesignBrief />
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'ux/ui principles',
        slug: 'uxui-principles',
        component: () => (
          <Card>
            <Card.Header>ux/ui principles</Card.Header>
            <Card.Body>
              <UxUiPrinciples />
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'accessible design',
        slug: 'accessible-design',
        component: () => (
          <Card>
            <Card.Header>Accessible Design</Card.Header>
            <Card.Body>
              <AccessibleDesign />
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Content Strategy',
        slug: 'content-strategy',
        component: () => (
          <Card>
            <Card.Header>Content Strategy</Card.Header>
            <Card.Body>
              <ContentStrategy />
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Technical Approach',
        slug: 'technical-approach',
        component: () => (
          <Card>
            <Card.Header>Technology Approach</Card.Header>
            <Card.Body>
              <TechnologyApproach />
            </Card.Body>
          </Card>
        ),
      },
    ],
  },
  {
    title: 'Research',
    slug: 'research',
    component: () => <h2>Research</h2>,
    children: [
      {
        title: 'Discovery',
        slug: 'discovery-research',
        component: () => (
          <Card>
            <Card.Header>Discovery</Card.Header>
            <Card.Body>
              <p>alsdkfjalksdfj</p>Discovery Research...
            </Card.Body>
          </Card>
        ),
      },
    ],
  },
  {
    title: 'The Team',
    slug: 'team',
    component: () => <h2>The Team</h2>,
    children: [
      {
        title: 'Purpose',
        slug: 'purpose',
        component: () => (
          <Card>
            <Card.Header>Purpose</Card.Header>
            <Card.Body>
              <p>alsdkfjalksdfj</p>Purpose
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Focus',
        slug: 'focus',
        component: () => (
          <Card>
            <Card.Header>Focus</Card.Header>
            <Card.Body>
              <p>alsdkfjalksdfj</p>Focus...
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Perception',
        slug: 'perception',
        component: () => (
          <Card>
            <Card.Header>Perception</Card.Header>
            <Card.Body>
              <p>alsdkfjalksdfj</p>Perceptions...
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'How we Work',
        slug: 'how-we-work',
        component: () => (
          <Card>
            <Card.Header>How we Work</Card.Header>
            <Card.Body>
              <p>alsdkfjalksdfj</p>How we Work...
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Working with Us',
        slug: 'working-with-us',
        component: () => (
          <Card>
            <Card.Header>Working with Us</Card.Header>
            <Card.Body>
              <p>alsdkfjalksdfj</p>Working with Design Ops
            </Card.Body>
          </Card>
        ),
      },
      {
        title: 'Tools',
        slug: 'tools',
        component: () => (
          <Card>
            <Card.Header>Tools</Card.Header>
            <Card.Body>
              <p>alsdkfjalksdfj</p>Tools...
            </Card.Body>
          </Card>
        ),
      },
    ],
  },
];
