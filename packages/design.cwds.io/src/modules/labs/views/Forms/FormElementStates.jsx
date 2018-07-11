import React, { Fragment } from 'react';
import { Row, Col } from '@cwds/components';
import Figure from '../../../../components/Figure';

import imgPristine from './media/pristine.png';
import imgFocused from './media/focused.png';
import imgChange from './media/change.png';
import imgInvalidFocus from './media/invalid.focus.png';
import imgInvalidBlur from './media/invalid.blur.png';

export default () => (
  <Fragment>
    <h3>Form Control States</h3>
    {[
      {
        img: imgPristine,
        caption: 'Untouched (pristine)',
        alt: '',
        header: () => (
          <h5>
            The <tt>Pristing</tt> State
          </h5>
        ),
        description: () => <div>alksdfj</div>,
      },
      {
        img: imgFocused,
        caption: 'Focused',
        alt: '',
        header: () => <h5>Focused</h5>,
        description: () => <div>lskdfj</div>,
      },
      {
        img: imgChange,
        caption: 'After a change event',
        alt: '',
        header: () => <h5>Changed</h5>,
        description: () => <div>alksdjf</div>,
      },
      {
        img: imgInvalidFocus,
        caption: 'Invalid (focused)',
        alt: '',
        header: () => <h5>Invalid (Focus)</h5>,
        description: () => <div>alksdfj</div>,
      },
      {
        img: imgInvalidBlur,
        caption: 'Invalid (blurred)',
        alt: '',
        header: () => <h5>Invalid (Blurred)</h5>,
        description: () => <div>alksdfj</div>,
      },
    ].map(({ img, caption, alt, header, description }, i) => (
      <Row key={i}>
        <Col md={7}>
          {header()}
          {description()}
        </Col>
        <Col md={5}>
          <Figure src={img} caption={caption} alt={alt} />
        </Col>
      </Row>
    ))}
  </Fragment>
);
