import React from 'react';
import { CardSubtitle as CardSubtitleUnstyled } from 'reactstrap';
import Styles from './Cards.module.scss';

const CardSubtitle = props => <CardSubtitleUnstyled {...props} />;
CardSubtitle.propTypes = { ...CardSubtitleUnstyled.propTypes };
CardSubtitle.defaultProps = { ...CardSubtitle.defaultProps, cssModule: Styles };

export default CardSubtitle;
