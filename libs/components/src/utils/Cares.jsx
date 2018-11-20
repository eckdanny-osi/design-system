import React from 'react'
import BreadcrumbTrail from '../BreadcrumbTrail'

const context = React.createContext({
  userMenu: () => null,
  breadcrumbRenderer: breadcrumb => {
    return !Array.isArray(breadcrumb) ? (
      <em>Welcome to CARES!</em>
    ) : (
      <BreadcrumbTrail items={breadcrumb} />
    )
  },
})

export default context

export const CaresProvider = context.Provider
