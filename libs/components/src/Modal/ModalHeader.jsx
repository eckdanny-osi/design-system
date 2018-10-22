// import React, { Component } from 'react';
// import ModalHeaderUnstyled from 'reactstrap/lib/ModalHeader';

// export class Modal extends Component {
//   render() {
//     const { cssModule, ...props } = this.props;
//     return <ModalHeaderUnstyled cssModule={Styles} {...props} />;
//   }
// }

// export { ModalHeaderUnstyled };

// export default Modal;

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from 'reactstrap/lib/utils'
import Icon, { ICON_NAMES } from '../Icon'
import Styles from './Modal.module.scss'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  wrapTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string,
}

const defaultProps = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
}

const ModalHeaderUnstyled = props => {
  let closeButton
  const {
    className,
    cssModule,
    children,
    toggle,
    tag: Tag,
    wrapTag: WrapTag,
    closeAriaLabel,
    closeClassName,
    ...attributes
  } = props

  const classes = mapToCssModules(
    classNames(className, 'modal-header'),
    cssModule
  )

  if (toggle) {
    // closeButton = (
    //   <button
    //     type="button"
    //     onClick={toggle}
    //     className={mapToCssModules('close', cssModule)}
    //     aria-label={closeAriaLabel}
    //   >
    //     <span aria-hidden="true">{String.fromCharCode(215)}</span>
    //   </button>
    // );

    closeButton = (
      <button
        type="button"
        className={mapToCssModules(classNames('close', closeClassName), Styles)}
        aria-label={closeAriaLabel}
        onClick={toggle}
        style={{ fontSize: '15px', padding: '12px' }}
      >
        <Icon icon="times" />
      </button>
    )
  }

  return (
    <WrapTag {...attributes} className={classes}>
      <Tag className={mapToCssModules('modal-title', cssModule)}>
        {children}
      </Tag>
      {closeButton}
    </WrapTag>
  )
}

ModalHeaderUnstyled.propTypes = propTypes
ModalHeaderUnstyled.defaultProps = defaultProps

export class Modal extends Component {
  render() {
    const { cssModule, ...props } = this.props
    return <ModalHeaderUnstyled cssModule={Styles} {...props} />
  }
}

export { ModalHeaderUnstyled }

export default Modal
