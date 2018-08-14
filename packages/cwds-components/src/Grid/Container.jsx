import React, { Component } from 'react';
import { defaultProps } from 'recompose';
import ContainerUnstyled from 'reactstrap/lib/Container';
import styles from './Container.module.scss';

export { ContainerUnstyled };
export const Container = defaultProps({ cssModule: styles })(ContainerUnstyled);
export default Container;
