import React from 'react'
import PropTypes from 'prop-types'
import Styles from './Figure.module.scss'

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
}

const Figure = ({ src, alt, caption }) => (
  <div className={Styles.FigureContainer}>
    <figure className={Styles.Figure}>
      <img src={src} alt={alt} />
      {caption && (
        <figcaption className={Styles.FigureCaption}>{caption}</figcaption>
      )}
    </figure>
  </div>
)

Figure.propTypes = propTypes

export default Figure
