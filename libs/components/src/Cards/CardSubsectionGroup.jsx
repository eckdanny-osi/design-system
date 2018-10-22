import React from 'react'
import Styles from './Cards.module.scss'

const CardSubsectionGroup = ({ children }) => {
  return <div className={Styles.CardSubsectionGroup}>{children}</div>
}

export default CardSubsectionGroup
