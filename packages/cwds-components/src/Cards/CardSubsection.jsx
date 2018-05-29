import React from 'react';
import Styles from './Cards.module.scss';

const CardSubsection = ({ children }) => {
  return <div className={Styles.CardSubsection}>{children}</div>;
};

export default CardSubsection;
