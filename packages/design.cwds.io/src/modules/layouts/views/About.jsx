import React from 'react';
import imgCenter from '../media/centered-content.jpg';
import imgHeaderElems from '../media/header-elems.jpg';
import imgLayout13 from '../media/layout13.jpg';
import imgLayout31 from '../media/layout31.jpg';

export default () => (
  <div>
    <h3>About</h3>
    <figure style={{ display: 'inline-block' }}>
      <img
        alt="layout"
        src={imgCenter}
        height="250px"
        style={{ border: '1px solid #dee2e6', padding: '4px' }}
      />
      <figcaption style={{ textAlign: 'center' }}>alksdjfalksdjf</figcaption>
    </figure>
    <p>alksdjflkasjdf</p>
    <figure style={{ display: 'inline-block' }}>
      <img
        alt="layout"
        src={imgHeaderElems}
        height="250px"
        style={{ border: '1px solid #dee2e6', padding: '4px' }}
      />
      <figcaption style={{ textAlign: 'center' }}>alksdjfalksdjf</figcaption>
    </figure>
    <figure style={{ display: 'inline-block' }}>
      <img
        alt="layout"
        src={imgLayout13}
        height="250px"
        style={{ border: '1px solid #dee2e6', padding: '4px' }}
      />
      <figcaption style={{ textAlign: 'center' }}>alksdjfalksdjf</figcaption>
    </figure>
    <figure style={{ display: 'inline-block' }}>
      <img
        alt="layout"
        src={imgLayout31}
        height="250px"
        style={{ border: '1px solid #dee2e6', padding: '4px' }}
      />
      <figcaption style={{ textAlign: 'center' }}>alksdjfalksdjf</figcaption>
    </figure>
  </div>
);
