import React from 'react';
import AnchorLink from './AnchorLink';

export default {
  h1: props => <AnchorLink {...props} tag="h1" />,
  h2: props => <AnchorLink {...props} tag="h2" />,
  h3: props => <AnchorLink {...props} tag="h3" />,
  h4: props => <AnchorLink {...props} tag="h4" />,
};
