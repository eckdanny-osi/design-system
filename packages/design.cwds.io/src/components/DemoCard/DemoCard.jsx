import React from 'react';
import './DemoCard.css';

export default props => (
  <div {...props} className={`${props.className} DemoCard`} />
);
