import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button, Card, Collapse, CardHeader, Util } from '@cwds/reactstrap'
import Icon from '@cwds/icons'
import Styles from './CollapsibleCard.module.scss'

const CollapsibleCard = ({
  CardHeader: CardHeaderComponent,
  onToggle,
  children,
  isOpen,
  ...props
}) => {
  let header
  const panelChildren = []
  React.Children.map(children, child => {
    if (child.type === CardHeaderComponent) {
      header = child
    } else {
      panelChildren.push(child)
    }
  })
  const { children: headerChildren, ...headerProps } = header.props
  return (
    <Card {...props}>
      <CardHeader {...headerProps}>
        <div className={cn(Styles.HeaderWrapper)}>
          <div className={cn(Styles.HeaderChildrenWrapper)}>
            {headerChildren}
          </div>
          <Button className="bg-transparent border-0" onClick={onToggle}>
            <Icon
              name="chevron-down"
              rotation={!isOpen ? undefined : Util.ROTATION.FLIP}
            />
          </Button>
        </div>
      </CardHeader>
      <Collapse isOpen={isOpen}>{panelChildren}</Collapse>
    </Card>
  )
}

CollapsibleCard.propTypes = {
  CardHeader: PropTypes.func,
  isOpen: PropTypes.bool,
}

CollapsibleCard.defaultProps = {
  CardHeader,
  isOpen: true,
}

export default CollapsibleCard
