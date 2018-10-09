import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import AlertUncontrolled from './AlertUncontrolled';
storiesOf('Alerts', module).addDecorator(withKnobs).add('AlertUncontrolled', withInfo()(() => React.createElement(AlertUncontrolled, null, React.createElement("strong", null, "Success!"), " Your edits have been saved.")));