import React from 'react';
import cn from 'classnames';
import Card from '@cwds/components/dist/Cards';
import Styles from './DesignPrinciplesPage.module.css';
import wikiRoutes from './wiki/wiki-routes';

const urlBase = 'https://github.com/eckdanny-osi/design-system/wiki';

export default wikiRoutes.map(addGroupSection);

function addGroupSection(route) {
  return {
    ...route,
    component: _ => <h3>{route.title}</h3>,
    children: route.children.map(addCardThing),
  };
}

function addCardThing(route) {
  // const Component = componentMap[route.title];
  const Component = route.component;
  return {
    ...route,
    component: () => (
      <Card>
        <Card.Header>
          <Card.Title>{route.title}</Card.Title>
          <a
            href={`${urlBase}/${route.file}`}
            target="_blank"
            className={cn(Styles.ExtEditLink, 'asdf')}
          >
            Edit on GitHub
          </a>
        </Card.Header>
        <Card.Body>
          <Component />
        </Card.Body>
      </Card>
    ),
  };
}
