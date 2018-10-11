import { configure } from '@storybook/react';
import '../libs/core/src/styles.scss';

const req = require.context('../libs/components/src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
