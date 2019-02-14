import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash.pick'

export const CaresContext = React.createContext()

const CaresProvider = ({ children, ...configs }) => (
  <CaresContext.Provider value={configs}>{children}</CaresContext.Provider>
)

CaresProvider.propTypes = { children: PropTypes.node }
CaresProvider.defaultProps = {}

export default CaresProvider

export const withCaresConfig = (Component, subcomponents) => props => (
  <CaresContext.Consumer>
    {context => <Component {...pick(context, subcomponents)} {...props} />}
    {/* {context => <Component {...props} {...pick(context, subcomponents)} />} */}
  </CaresContext.Consumer>
)
