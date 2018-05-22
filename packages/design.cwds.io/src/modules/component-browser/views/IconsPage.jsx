import React from 'react';
import { Card, CardBody } from '@cwds/components/lib/Cards';
import Icon, { ICON_NAMES } from '@cwds/components/lib/Icon';

export default () => {
  return (
    <div>
      <Card>
        <CardBody>
          <h3>Icons</h3>
          <ul
            style={{
              listStyleType: 'none',
              paddingLeft: 0,
              clear: 'left',
            }}
          >
            {Object.keys(ICON_NAMES).map(d => (
              <li
                key={d}
                style={{
                  backgroundColor: '#EEE',
                  textAlign: 'center',
                  padding: '10px',
                  marginBottom: '12px',
                  marginRight: '12px',
                  width: '12%',
                  float: 'left',
                }}
              >
                <Icon icon={d} size="3x" />
                <code
                  style={{
                    marginTop: '10px',
                    display: 'block',
                    fontSize: '10px',
                  }}
                >
                  {d}
                </code>
              </li>
            ))}
          </ul>
        </CardBody>
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
