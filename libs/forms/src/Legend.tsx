import React from "react";
import cn from "classnames";
import Styles from "./Legend.module.scss";

interface LegendProps {
  className?: string;
}

export default ({ className, ...props }: LegendProps) => {
  return <legend className={cn(Styles.Legend, className)} {...props} />;
};
