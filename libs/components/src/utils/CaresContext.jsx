import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash.pick'

export const CaresContext = React.createContext()

const CaresProvider = ({ children, ...configs }) => (
  <CaresContext.Provider value={configs}>{children}</CaresContext.Provider>
)

CaresProvider.propTypes = {
  children: PropTypes.node,
  // breadcrumbRenderer: PropTypes.func,
  // appBarUserMenu: PropTypes.func,
  // appBarBrand: PropTypes.func,
}
CaresProvider.defaultProps = {
  // breadcrumbRenderer: () => {},
  // appBarUserMenu: () => {},
  // appBarBrand: () => {},
  // AppBarBrand,
}

export default CaresProvider

export const withCaresConfig = (Component, subcomponents) => props => (
  <CaresContext.Consumer>
    {context => {
      const subs = pick(context, subcomponents)
      return <Component {...subs} {...props} />
    }}
  </CaresContext.Consumer>
)

// import BreadcrumbTrail from '../BreadcrumbTrail'
// import Logo from '../Logo'
// import Avatar from '../Avatar'
// import {
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from '@cwds/reactstrap'

// const breadcrumbRenderer = breadcrumb => {
//   return !Array.isArray(breadcrumb) ? (
//     <em>Welcome to CARES!</em>
//   ) : (
//     <BreadcrumbTrail items={breadcrumb} />
//   )
// }

// const appBarBrand = () => (
//   <a href="/">
//     <Logo />
//   </a>
// )

// const appBarUserMenu = () => (
//   <UncontrolledDropdown>
//     <DropdownToggle className="bg-transparent border-0 text-white" tag="button">
//       <span className="mr-2 text-capitalize">Guest</span>
//       <Avatar invert size="sm" />
//     </DropdownToggle>
//     <DropdownMenu right>
//       <DropdownItem>Logout</DropdownItem>
//     </DropdownMenu>
//   </UncontrolledDropdown>
// )

// export const defaultConfig = {
//   breadcrumbRenderer,
//   appBarUserMenu,
//   appBarBrand,
// }

// const context = React.createContext(defaultConfig)

// export default context

// export const CaresProvider = context.Provider
