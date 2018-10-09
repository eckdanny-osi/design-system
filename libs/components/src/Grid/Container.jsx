import React, { Component } from 'react';
import getDisplayName from 'react-display-name';
import ContainerUnstyled from 'reactstrap/lib/Container';
import Styles from './Container.module.scss';

const Container = props => <ContainerUnstyled {...props} />;
Container.displayName = `cares(${getDisplayName(ContainerUnstyled)})`;
Container.propTypes = { ...ContainerUnstyled.propTypes };
Container.defaultPropts = {
  ...ContainerUnstyled.defaultProps,
  cssModule: Styles,
};

export default Container;
