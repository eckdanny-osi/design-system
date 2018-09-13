import InputGroupUnstyled from 'reactstrap/lib/InputGroup';
import { compose, defaultProps } from 'recompose';
import Styles from '../Forms/Forms.module.scss';

const InputGroup = compose(
  defaultProps({
    ...InputGroupUnstyled.defaultProps,
    cssModule: Styles,
  })
)(InputGroupUnstyled);

export default InputGroup;
