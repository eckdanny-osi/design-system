import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, selectV2 } from '@storybook/addon-knobs';

import Avatar from './';

const demoImgUrl =
  'https://upload.wikimedia.org/wikipedia/commons/a/a1/Boudin-eugene-c-face-half.jpg';

storiesOf('Avatars', module)
  .addDecorator(withKnobs)
  .add(
    'Avatar',
    withInfo()(() => {
      const size = selectV2(
        'size',
        {
          xs: 'xs',
          sm: 'sm',
          md: 'md',
          lg: 'lg',
          xl: 'xl',
        },
        'md',
        'IMG_URL'
      );
      return (
        <Avatar
          imgUrl={text('imgUrl', demoImgUrl)}
          size={size}
          text={text('text', 'DE')}
          invert={boolean('invert', false)}
        />
        // <Button
        //   children={text('text', 'Submit')}
        //   size="sm"
        //   href={text('href')}
        //   disabled={boolean('disabled', false)}
        //   onClick={action('clicked')}
        //   color={buttonColor}
        //   outline={boolean('outline', false)}
        //   block={boolean('block', false)}
        //   className="btn-outline-warning btn-warning btn-block"
        // />
      );
    })
  );
