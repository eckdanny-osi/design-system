import React from 'react';
import { InputGroup as InputGroupUnstyled } from 'reactstrap';
import Styles from '../Forms/Forms.module.scss';

const InputGroup = props => <InputGroupUnstyled {...props} />;
InputGroup.propTypes = { ...InputGroupUnstyled.propTypes };
InputGroup.defaultProps = {
  ...InputGroupUnstyled.defaultProps,
  cssModule: Styles,
};

export default InputGroup;
