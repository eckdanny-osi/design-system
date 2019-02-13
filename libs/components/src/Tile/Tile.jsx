import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Card, CardBody, CardHeader, CardTitle } from '@cwds/reactstrap'

const Tile = ({ children, className, Menu, Icon, title }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="border-bottom-0 p-2 d-flex justify-content-between">
        <div
          className="flex-grow-1"
          style={{
            maxHeight: '4rem',
            overflowY: 'hidden',
          }}
        >
          <CardTitle>
            {Icon &&
              React.cloneElement(Icon, {
                className: cn(Icon.props.className, 'mr-2'),
              })}
            {title}
          </CardTitle>
        </div>
        {Menu}
      </CardHeader>
      <CardBody className="p-2">{children}</CardBody>
    </Card>
  )
}

Tile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  Menu: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  title: PropTypes.string,
  Title: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}
Tile.defaultProps = {}

export default Tile
