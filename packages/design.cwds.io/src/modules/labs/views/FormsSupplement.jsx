import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <h4>asdlfkj</h4>
    <p>alsdjflkasjdf</p>
    <h4>
      When to use <tt>X</tt> vs <tt>Y</tt>?
    </h4>
    <h5>
      <tt>Select</tt> vs <tt>CheckboxBank</tt>
    </h5>
    <p>
      Determination of whether to use a <tt>Select</tt> or a{' '}
      <tt>CheckboxBank</tt> should be based on the type of content. Sets of
      options which are of <em>known composition</em> (e.g.; States in the US,
      counties in California, Months of the year...) may be represented in the
      visually compact <tt>Select</tt> element to save space and mouse
      scrolling. This is especially helpful for long lists.
    </p>
    <p>
      When the enumerated options are <em>NOT</em> of known-composiiton (e.g.;
      arbitrary bucketing, specialized jargon, highly dynamic content), the{' '}
      <tt>CheckboxBank</tt> is a better option.
    </p>
    <h5>
      <tt>Checkbox</tt> vs <tt>RadioGroup</tt>
    </h5>
    <p>
      Some specifications of the software may require a user to interact with a
      particular control (no skipping allowed). If this need is realized, a{' '}
      <tt>Checkbox</tt> may not be appropriate. The <tt>Checkbox</tt> control
      inherently supposes an initialValue (checked or not checked).
    </p>
    <p>
      The <tt>RadioGroup</tt> control, however, can be both required{' '}
      <em>and</em> skip initialValue problem.
    </p>
  </Fragment>
);
