import React from 'react'
import cn from 'classnames'
import Styles from './DataGrid.module.scss'
import Icon from '@cwds/icons'

const LoadingText = ({ className, style }) => (
  <div
    className={cn(Styles.LoadingText)}
    style={
      style || {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-20px',
      }
    }
  >
    <Icon
      icon="circle-notch"
      spin
      size="2x"
      className="text-info"
      style={{
        marginRight: '8px',
      }}
    />
    <span>Loading...</span>
  </div>
)

export default LoadingText
