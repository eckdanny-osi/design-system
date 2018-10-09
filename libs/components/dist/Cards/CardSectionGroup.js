import React from 'react';
import Styles from "./Cards.module.css";

const CardSectionGroup = ({
  children
}) => {
  return React.createElement("div", {
    className: Styles.CardSectionGroup
  }, children);
};

export default CardSectionGroup;