import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import pick from 'lodash.pick'
import Styles from './PageHeader.module.scss'
import PageTitle from '../PageTitle'
import PageActions from '../PageActions'

const PageHeader = ({
  PageTitle,
  getPageTitleProps,
  PageActions,
  getPageActionsProps,
  ...restProps
}) => {
  return (
    <div className={cn(Styles.PageHeader)}>
      <div className={cn('pr-2', Styles.PageTitleContainer)}>
        <PageTitle {...getPageTitleProps(restProps)} />
      </div>
      <div className={cn(Styles.PageActionsContainer)}>
        {React.isValidElement(PageActions) ? (
          <Fragment>{PageActions}</Fragment>
        ) : (
          <PageActions {...getPageActionsProps(restProps)} />
        )}
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  PageTitle: PropTypes.func.isRequired,
  getPageTitleProps: PropTypes.func.isRequired,
  PageActions: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  getPageActionsProps: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
}
PageHeader.defaultProps = {
  PageTitle,
  getPageTitleProps: props => pick(props, ['title']),
  PageActions,
  getPageActionsProps: props => pick(props, []),
}

export default PageHeader
