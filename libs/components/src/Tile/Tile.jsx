import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Card, CardBody, CardHeader, CardTitle } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import { grays } from '@cwds/core'
import Styles from './Tile.module.scss'

const Tile = ({
  children,
  className,
  Menu: ProvidedMenu,
  icon,
  Icon: ProvidedIcon,
  title,
}) => {
  const TileIcon = icon ? (
    <Icon name={icon} className="mr-2" color={grays['700']} />
  ) : (
    ProvidedIcon &&
    React.cloneElement(ProvidedIcon, {
      className: cn(ProvidedIcon.props.className || '', 'mr-2'),
    })
  )
  return (
    <Card className={cn(className)}>
      <CardHeader className="border-bottom-0 pb-0 px-2 pt-2 d-flex justify-content-between">
        <div className={cn('flex-grow-1', Styles.TitleContainer)}>
          <CardTitle>
            {TileIcon}
            {title}
          </CardTitle>
        </div>
        {ProvidedMenu}
      </CardHeader>
      <CardBody className="p-2">{children}</CardBody>
    </Card>
  )
}

Tile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /** String shorthand for icon declaration */
  icon: PropTypes.string,
  /** Longform notation for icon declaration */
  Icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Pass a Menu react node or component */
  Menu: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** String shorthand for Title declaration */
  title: PropTypes.string,
  /** Longform notation for Title declaration */
  Title: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}
Tile.defaultProps = {}

export default Tile

const TilePlaceholder = () => <Card>alksdfj</Card>
