import React from 'react';
import PropTypes from 'prop-types';
import UseageChoices from './UseageChoices';
import { ContactForm } from './FormContacts';
import FormElementStates from './FormElementStates';
import slugify from 'slugify';

// const withToC = WrappedComponent => ()

// const LINKS = {
//   CWDS_FORM_ELEMENTS: 'Introducing the CWDS FormElements',
//   FORM_CONTROL_ELEMENTS_AND_STATE: 'Form Control Events and State',
//   USE_CASES_OF_FORM_ELEMENTS: 'Appropriate Use Cases',
//   VALIDATION: 'Validation',
//   CONTACTS_FORM_IMPLEMENTATION: 'Implementing a Contacts Form',
// };

const TOC = ({ links }) => {
  return (
    <ul>
      {links.map(({ title, id }) => (
        <li key={id}>
          <a
            href={`#${id || slugify(title.toLowerCase())}`}
            onClick={e => {
              // e.preventDefault();
              // const el = document.getElementById(id);
              // console.log(el);
              // el.scrollIntoView();
            }}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

// const withTOC = WrappedComponent => props => {
//   return <div>alsdkfj</div>;
// };

const Section = ({ id, title, ...props }) => <section id={id} {...props} />;

class MyTOC extends React.PureComponent {
  static propTypes = {
    renderTOC: PropTypes.func,
  };
  static defaultProps = {
    renderTOC: () => {},
  };
  render() {
    const toc = React.Children.toArray(this.props.children)
      .filter(({ type }) => type === Section)
      .map(({ props }) => ({ title: props.title, id: props.id }));
    return (
      <div>
        {this.props.renderTOC(toc)}
        {this.props.children}
      </div>
    );
  }
}

export default () => (
  <MyTOC renderTOC={links => <TOC links={links} />}>
    <Section id="foo" title="Foo is the Best">
      <h4>Introducing the CWDS FormElements</h4>
      <p>alskdjfalsdfj</p>
      <h5>asldkfj</h5>
      <p>alsdjfk</p>
    </Section>
    <Section id="bar" title="Bar is the Worst">
      <FormElementStates />
    </Section>
    <Section id="quo" title="Quo is everything">
      <UseageChoices />
    </Section>
    <Section id="validation" title="Validation">
      <h4>Validation</h4>
    </Section>
    <Section id="contact-form" title="Implementing a Contact Form">
      <ContactForm />
    </Section>
  </MyTOC>
);
