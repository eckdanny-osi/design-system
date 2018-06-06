import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Icon from '../Icon';
import styles from './PageHeader.module.scss';

class PageHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    cta: PropTypes.func,
  };
  static defaultProps = {
    title: '',
  };
  render() {
    const { title, cta } = this.props;
    return (
      <div className={cn(styles.PageHeader)}>
        <Container>
          <Row>
            <Col>
              <h1 className={cn(styles.PageTitle)}>
                {'function' === typeof title ? title() : title}
              </h1>
            </Col>
            {cta && (
              <Col xs="3" className={cn(styles.ActionsContainer)}>
                {cta()}
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
