import React from 'react';
import Styles from './IconList.module.css';

export default ({ icons, render }) => {
  return (
    <ul className={Styles.IconList}>
      {icons.map(icon => {
        return (
          <li className={Styles.IconListItem} key={icon}>
            {render(icon)}
            <span className={Styles.Label}>{icon}</span>
          </li>
        );
      })}
    </ul>
  );
};
