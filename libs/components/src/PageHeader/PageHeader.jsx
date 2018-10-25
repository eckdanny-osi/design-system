import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container, Row, Col } from 'reactstrap'
import Icon from '@cwds/icons'
import styles from './PageHeader.module.scss'

class PageHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    cta: PropTypes.func,
  }
  static defaultProps = {
    title: '',
  }
  render() {
    const { title, cta } = this.props
    return (
      <div className={cn(styles.PageHeader, 'd-flex', 'align-items-center')}>
        <div className={cn('flex-grow-1')}>
          <h1 className={cn(styles.PageTitle, 'm-0')}>
            {'function' === typeof title ? title() : title}
          </h1>
        </div>

        {cta && <div className={cn('pr-2')}>{cta()}</div>}
      </div>
    )
  }
}

export default PageHeader
