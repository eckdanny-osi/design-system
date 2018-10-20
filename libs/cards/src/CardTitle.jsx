import React from 'react';
import { CardTitle as CardTitleUnstyled } from 'reactstrap';
import Styles from './Cards.module.scss';

const CardTitle = props => <CardTitleUnstyled {...props} />;
CardTitle.propTypes = { ...CardTitleUnstyled.propTypes };
CardTitle.defaultProps = { ...CardTitle.defaultProps, cssModule: Styles };

export default CardTitle;
