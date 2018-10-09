import React from 'react';
import Styles from "./Cards.module.css";

const CardSubsectionGroup = ({
  children
}) => {
  return React.createElement("div", {
    className: Styles.CardSubsectionGroup
  }, children);
};

export default CardSubsectionGroup;