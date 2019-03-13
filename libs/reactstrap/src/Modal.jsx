import { Modal } from 'reactstrap'

/**
 * @todo: use `scrollable` prop after reactstrap ships [#1435](https://github.com/reactstrap/reactstrap/pull/1435)
 */
Modal.defaultProps.modalClassName = 'modal-dialog-scrollable'

Modal.defaultProps.centered = true

export default Modal
