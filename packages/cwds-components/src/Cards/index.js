// import Card from './Card';
// export { Card };
import Card from 'reactstrap/lib/Card';
import CardHeader from 'reactstrap/lib/CardHeader';
import CardFooter from 'reactstrap/lib/CardFooter';
import { setGlobalCssModule } from 'reactstrap/lib/utils';
import styles from '../global/styles.module.scss';
// console.log(styles);
setGlobalCssModule(styles);
export { Card };

// export { default as CardHeader } from './CardHeader';
export { CardHeader };
export { CardFooter };
// export { default as CardFooter } from './CardFooter';
export { default as CardBody } from './CardBody';
export { default as CardDeck } from './CardDeck';
export default Card;
