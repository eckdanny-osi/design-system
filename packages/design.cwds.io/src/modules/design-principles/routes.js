import React from 'react';

// import AlertsPage from './views/AlertsPage';
// import AvatarsPage from './views/AvatarsPage';
// import BadgesPage from './views/BadgesPage';
// import ButtonsPage from './views/ButtonsPage';
// import TogglesPage from './views/TogglesPage';
// import BreadcrumbsPage from './views/BreadcrumbsPage';
// import CardsPage from './views/CardsPage';
// import IconsPage from './views/IconsPage';

export default [
  {
    title: 'About',
    slug: 'about',
    component: () => (
      <div>
        <h3>Some Title</h3>
        <p>alsdkfjalksdfj</p>About
      </div>
    ),
    active: true,
    children: [
      {
        title: 'Experience Values',
        slug: 'experience-values',
        active: true,
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>experience-values
          </div>
        ),
      },
      {
        title: 'Human-Centered Design',
        slug: 'human-centered-design',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>human-centered-design
          </div>
        ),
      },
      {
        title: 'About Child Welfare',
        slug: 'about-child-welfare',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>about-child-welfare
          </div>
        ),
      },
    ],
  },
  {
    title: 'ScrumBan',
    slug: 'scrumban',
    component: () => (
      <div>
        <h3>Some Title</h3>
        <p>alsdkfjalksdfj</p>ScrumBan
      </div>
    ),
    children: [
      {
        title: 'DesignOps ScrumBan',
        slug: 'design-ops-scrumban',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Scrumband stuff
          </div>
        ),
      },
      {
        title: 'Definition of Ready/Done',
        slug: 'definition-of-ready-done',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>DoD
          </div>
        ),
      },
      {
        title: 'Ceremonies, Sessions, and Communication Channels',
        slug: 'c-a-and-cc',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>C A and CCs
          </div>
        ),
      },
      {
        title: 'Reviews',
        slug: 'reviews',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Reviews...
          </div>
        ),
      },
    ],
  },
  {
    title: 'Component Library',
    slug: 'component-library',
    component: () => (
      <div>
        <h3>Some Title</h3>
        <p>alsdkfjalksdfj</p>asdlkfj
      </div>
    ),
    children: [
      {
        title: 'components',
        slug: 'components',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>components
          </div>
        ),
      },
      {
        title: 'Contributing...',
        slug: 'contributing',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Contributing...
          </div>
        ),
      },
      {
        title: 'Technical Design Brief',
        slug: 'technical-design-brief',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>technical design brief
          </div>
        ),
      },
      {
        title: 'ux/ui principles',
        slug: 'uxui-principles',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>design principles
          </div>
        ),
      },
      {
        title: 'accessible design',
        slug: 'accessible-design',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Accessible Design stuff here...
          </div>
        ),
      },
      {
        title: 'Content Strategy',
        slug: 'content-strategy',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Content Strategy
          </div>
        ),
      },
      {
        title: 'Technical Approach',
        slug: 'technical approach',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Technical Approach
          </div>
        ),
      },
    ],
  },
  {
    title: 'Research',
    slug: 'research',
    component: () => (
      <div>
        <h3>Some Title</h3>
        <p>alsdkfjalksdfj</p>Research
      </div>
    ),
    children: [
      {
        title: 'Discovery',
        slug: 'discovery-research',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Discovery Research...
          </div>
        ),
      },
    ],
  },
  {
    title: 'The Team',
    slug: 'team',
    component: () => (
      <div>
        <h3>Some Title</h3>
        <p>alsdkfjalksdfj</p>The Team
      </div>
    ),
    children: [
      {
        title: 'Purpose',
        slug: 'purpose',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Purpose
          </div>
        ),
      },
      {
        title: 'Focus',
        slug: 'focus',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Focus...
          </div>
        ),
      },
      {
        title: 'Perception',
        slug: 'perception',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Perceptions...
          </div>
        ),
      },
      {
        title: 'How we Work',
        slug: 'how-we-work',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>How we Work...
          </div>
        ),
      },
      {
        title: 'Working with Us',
        slug: 'working-with-us',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Working with Design Ops
          </div>
        ),
      },
      {
        title: 'Tools',
        slug: 'tools',
        component: () => (
          <div>
            <h3>Some Title</h3>
            <p>alsdkfjalksdfj</p>Tools...
          </div>
        ),
      },
    ],
  },
];
