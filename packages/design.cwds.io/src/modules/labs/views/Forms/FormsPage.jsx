import React from 'react';
import UseageChoices from './UseageChoices';
import { ContactForm } from './FormContacts';

export default () => (
  <div>
    <h3>Forms</h3>
    <p>Forms are a big part of CARES. Check out the examples below</p>
    <hr className="my-3" />
    <h4>Introducting the CWDS FormElements...</h4>
    <p>alskdjfalsdfj</p>
    <h5>asldkfj</h5>
    <p>alsdjfk</p>
    {/* <hr className="my-3" />
    <h4>Rules</h4>
    <p>Some rules for forms...</p> */}
    <hr className="my-3" />
    <h4>Using the Most Appropriate FormElement</h4>
    <p>alsdfjasdf</p>
    <UseageChoices />
    <hr className="my-3" />
    <h4>Validation</h4>
    <p>...</p>
    <hr className="my-3" />
    <h4>Implementing a Contacts Form</h4>
    <p>alsdfjasdf</p>
    <ContactForm />
    <hr className="my-3" />
    <p>alskdfj</p>
    <hr className="my-3" />
    <p>alksdjflaskdjf</p>
  </div>
);
