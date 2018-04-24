import React from 'react';
import PropTypes from 'prop-types';
import { withCssModule } from '../utils';
import styles from './Card.module.scss';

import Card from 'reactstrap/lib/Card';

export default withCssModule(Card, styles);

// const propTypes = {

// };

// const defaultProps = {

// };

// const Card = props => {
//   return (
//     <div className={cn(styles.Card)}>Hello World</div>
//   );
// }

// Card.propTypes = propTypes;
// Card.defaultProps = defaultProps;

// export default Card;
