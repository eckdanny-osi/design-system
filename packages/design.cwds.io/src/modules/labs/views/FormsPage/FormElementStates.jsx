import React, { Fragment } from 'react';
import { Row, Col } from '@cwds/components/lib/Grid';
import Figure from '../../../../components/Figure';

import imgPristine from './media/pristine.png';
import imgFocused from './media/focused.png';
import imgChange from './media/change.png';
import imgInvalidFocus from './media/invalid.focus.png';
import imgInvalidBlur from './media/invalid.blur.png';

const FormControlEventStateInfo = ({
  header,
  description,
  img,
  caption,
  alt,
}) => (
  <section>
    {header}
    <Row>
      <Col xs={{ size: 12, order: 2 }} md={{ size: 7, order: 1 }}>
        {description}
      </Col>
      <Col xs={{ size: 12, order: 1 }} md={{ size: 5, order: 2 }}>
        <Figure src={img} caption={caption} alt={alt} />
      </Col>
    </Row>
  </section>
);

export default () => (
  <Fragment>
    <h4>Form Control Events and State</h4>
    <p className="mb-4">
      Here's a quick rundown of the relevant states and events in the lifecycle
      of a form element:
    </p>
    {getContent().map((infoProps, i) => (
      <FormControlEventStateInfo {...infoProps} key={i} />
    ))}
  </Fragment>
);

//
//
//

function getContent() {
  return [
    {
      img: imgPristine,
      caption: 'Untouched (pristine)',
      alt: '',
      header: <h5>Pristine</h5>,
      description: <div>alksdfj</div>,
    },
    {
      img: imgFocused,
      caption: 'Focused',
      alt: '',
      header: <h5>Focused</h5>,
      description: <div>lskdfj</div>,
    },
    {
      img: imgChange,
      caption: 'After a change event',
      alt: '',
      header: <h5>Changed</h5>,
      description: <div>alksdjf</div>,
    },
    {
      img: imgInvalidFocus,
      caption: 'Invalid (focused)',
      alt: '',
      header: <h5>Invalid (Focus)</h5>,
      description: <div>alksdfj</div>,
    },
    {
      img: imgInvalidBlur,
      caption: 'Invalid (blurred)',
      alt: '',
      header: <h5>Invalid (Blurred)</h5>,
      description: <div>alksdfj</div>,
    },
  ];
}
