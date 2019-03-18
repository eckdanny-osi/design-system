import React from "react";
import cn from "classnames";
import Styles from "./Fieldset.module.scss";

export default ({ className, ...props }) => {
  return <fieldset className={cn(Styles.Fieldset)} {...props} />;
};
