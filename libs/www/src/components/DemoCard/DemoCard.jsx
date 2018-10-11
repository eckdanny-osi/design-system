import React from 'react';
import './DemoCard.css';

export default props => (
  <div {...props} className={`${props.className} DemoCard mt-2 mb-4 p-3`}>
    <div style={{ position: 'relative' }}>
      {React.cloneElement(props.children, { className: 'mb-0' })}
    </div>
  </div>
);
