import React from 'react';
import Styles from './IconList.module.css';

{
  /* <ul
            style={{
              listStyleType: 'none',
              paddingLeft: 0,
              clear: 'left',
            }}
          >
            {Object.keys(ICON_NAMES).map(d => (
              <li
                key={d}
                style={{
                  backgroundColor: '#EEE',
                  textAlign: 'center',
                  padding: '10px',
                  width: '12%',
                  float: 'left',
                }}
              >
                <Icon icon={d} size="2x" />
                <code
                  style={{
                    marginTop: '10px',
                    display: 'block',
                    fontSize: '10px',
                  }}
                >
                  {d}
                </code>
              </li>
            ))}
          </ul> */
}

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
