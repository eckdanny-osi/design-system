import React from 'react'
import Styles from './Cards.module.scss'

const CardSectionGroup = ({ children }) => {
  return <div className={Styles.CardSectionGroup}>{children}</div>
}

export default CardSectionGroup
