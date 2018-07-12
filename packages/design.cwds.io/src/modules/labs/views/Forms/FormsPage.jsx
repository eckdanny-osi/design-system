import React from 'react';
import UseageChoices from './UseageChoices';
import { ContactForm } from './FormContacts';
import FormElementStates from './FormElementStates';

export default () => (
  <div>
    <h3>Forms</h3>
    <p>Forms are a big part of CARES. Check out the examples below:</p>
    <ul>
      <li>
        <a href="#form-element-states">FormControl Elements and State</a>
      </li>
      <li>
        <a href="#appropriate-use-cases-of-formelements">
          Appropriate Use Cases of FormElements
        </a>
      </li>
      <li>
        <a href="#validation">Validation</a>
      </li>
      <li>
        <a href="#implementing-a-contacts-form">Implementing a Contacts Form</a>
      </li>
    </ul>
    <hr className="my-3" />
    <h4>Introducting the CWDS FormElements...</h4>
    <p>alskdjfalsdfj</p>
    <h5>asldkfj</h5>
    <p>alsdjfk</p>
    <hr className="my-3" />
    <div id="form-element-states">
      <FormElementStates />
    </div>
    <hr className="my-3" />
    <div id="appropriate-use-cases-of-formelements">
      <UseageChoices />
    </div>
    <hr className="my-3" />
    <div id="validation">
      <h4>Validation</h4>
      <p>...</p>
    </div>
    <hr className="my-3" />
    <div id="implementing-a-contacts-form">
      <h4>Implementing a Contacts Form</h4>
      <p>alsdfjasdf</p>
      <ContactForm />
    </div>
    <hr className="my-3" />
    <p>alskdfj</p>
    <hr className="my-3" />
    <p>alksdjflaskdjf</p>
  </div>
);
