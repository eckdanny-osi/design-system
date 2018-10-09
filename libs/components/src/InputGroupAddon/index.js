import InputGroupAddonUnstyled from 'reactstrap/lib/InputGroupAddon';
import { compose, defaultProps } from 'recompose';
import Styles from '../Forms/Forms.module.scss';

const InputGroupAddon = compose(
  defaultProps({
    ...InputGroupAddonUnstyled.defaultProps,
    cssModule: Styles,
  })
)(InputGroupAddonUnstyled);

export default InputGroupAddon;
