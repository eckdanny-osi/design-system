import React from 'react';
import { CardBody as CardBodyUnstyled } from 'reactstrap';
import Styles from './Cards.module.scss';

const CardBody = props => <CardBodyUnstyled {...props} />;
CardBody.propTypes = { ...CardBodyUnstyled.propTypes };
CardBody.defaultProps = { ...CardBody.defaultProps, cssModule: Styles };

export default CardBody;
