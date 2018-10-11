import { InputGroup as InputGroupAddonUnstyled } from 'reactstrap';
import Styles from '../Forms/Forms.module.scss';

const InputGroupAddon = props => <InputGroupAddonUnstyled {...props} />;
InputGroupAddon.propTypes = { ...InputGroupAddonUnstyled.propTypes };
InputGroupAddon.defaultProps = {
  ...InputGroupAddonUnstyled.defaultProps,
  cssModule: Styles,
};

export default InputGroupAddon;
