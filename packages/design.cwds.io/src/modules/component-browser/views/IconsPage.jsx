import React from 'react';
import { Card } from '@cwds/components/lib/Cards';
import Icon, { ICON_NAMES } from '@cwds/components/lib/Icon';
import IconList from '../components/IconList';

export default () => {
  return (
    <div>
      <h2>Icons</h2>
      <Card>
        <Card.Body>
          <IconList
            icons={Object.keys(ICON_NAMES)}
            render={iconName => <Icon icon={iconName} size="2x" />}
          />
        </Card.Body>
      </Card>
      <br />
      <h3>Animated</h3>
      <Icon icon="circleNotch" spin />
    </div>
  );
};

// export default {
//   name: 'Icons',
//   component: IconsPage,
// };
