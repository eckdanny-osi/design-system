import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import Fade from 'reactstrap/lib/Fade';
import Icon, { ICON_NAMES, getIcon } from '../Icon';
import Styles from './Alert.module.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transition: PropTypes.shape(Fade.propTypes),
};

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  transition: {
    ...Fade.defaultProps,
    unmountOnExit: true,
    appear: false,
    enter: false,
  },
};

function Alert(props) {
  const {
    className,
    closeClassName,
    closeAriaLabel,
    cssModule = Styles,
    tag: Tag,
    color,
    isOpen,
    toggle,
    children,
    transition,
    ...attributes
  } = props;

  const classes = mapToCssModules(
    classNames(className, 'alert', `alert-${color}`, {
      'alert-dismissible': toggle,
    }),
    cssModule
  );

  const closeClasses = mapToCssModules(
    classNames('close', closeClassName),
    Styles
  );

  return (
    <Fade
      {...attributes}
      {...transition}
      tag={Tag}
      className={classes}
      in={isOpen}
      role="alert"
    >
      <div
        className={mapToCssModules(
          classNames('alert-icon-container', {
            'alert-dismissible': !!toggle,
          }),
          Styles
        )}
      >
        <Icon icon={getIcon(color)} style={{ color: 'white' }} />
      </div>
      <div className={mapToCssModules(classNames('alert-body'), Styles)}>
        {toggle ? (
          <button
            type="button"
            className={closeClasses}
            aria-label={closeAriaLabel}
            onClick={toggle}
            style={{ fontSize: '15px', padding: '12px' }}
          >
            <Icon icon="times" />
          </button>
        ) : null}
        {children}
      </div>
    </Fade>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export Alert;
export default Alert;
