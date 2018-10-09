import { configure } from '@storybook/react';
import '../libs/core/src/styles.scss';

const req = require.context('../libs/components/src', true, /\.stories\.js$/);

function loadStories() {
  require('../libs/components/src/Button/Button.stories.js');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
