import React from 'react'
import PropTypes from 'prop-types'
import getDisplayName from 'react-display-name'
import CardUnstyled from 'reactstrap/lib/Card'
import { hasCardComponentStructure, findChildCardStructure } from './card-utils'
// import Styles from './Cards.module.scss'

// @todo(dce): this shouldn't depend on DataGrid for anything
import LoadingText from '../DataGrid/LoadingText'

import {
  Row,
  Col,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  CardSubtitle,
} from 'reactstrap'

import Section from './CardSection'
import SectionGroup from './CardSectionGroup'

const greyOutStyle = {
  backgroundColor: 'whitesmoke',
  textIndent: '-99999px',
}

const LoadingCard = ({ children, ...props }) => (
  <CardUnstyled {...props}>
    {findChildCardStructure(children, Header)}
    <Body>
      <CardBody
        style={{
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <Row>
          <Col lg={6}>
            <p style={greyOutStyle}>placeholder</p>
            <p style={greyOutStyle}>placeholder</p>
            <p style={greyOutStyle}>placeholder</p>
            <p style={greyOutStyle}>placeholder</p>
            <p style={greyOutStyle}>placeholder</p>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <p style={greyOutStyle}>placeholder</p>
            <p style={greyOutStyle}>placeholder</p>
            <p style={greyOutStyle}>placeholder</p>
            <p style={greyOutStyle}>placeholder</p>
            <p style={greyOutStyle}>placeholder</p>
          </Col>
        </Row>
        <LoadingText
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </CardBody>
    </Body>
  </CardUnstyled>
)

const Card = props => {
  const { loading, ...passProps } = props
  if (loading) return <LoadingCard {...passProps} />
  if (!hasCardComponentStructure(props.children)) {
    const { children, ...passProps } = props
    return (
      <CardUnstyled {...passProps}>
        <Body>{children}</Body>
      </CardUnstyled>
    )
  }
  return <CardUnstyled {...props} />
}
Card.propTypes = { ...CardUnstyled.propTypes, loading: PropTypes.bool }
Card.defaultProps = { ...CardUnstyled.defaultProps }
Card.Body = Body
Card.Header = Header
Card.Footer = Footer
Card.Subtitle = Subtitle
Card.Section = Section
Card.Title = Title

export default Card
