import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import AppBar from '../../AppBar';
import PageHeader from '../../PageHeader';
import { Container } from '../../Grid';
import BreadcrumbTrail from '../../BreadcrumbTrail';
import Styles from '../Layout.module.scss';

const renderBreadcrumb = itemsOrRenderFn => {
  return typeof itemsOrRenderFn === 'function' ? (
    itemsOrRenderFn()
  ) : (
    <BreadcrumbTrail items={itemsOrRenderFn} />
  );
};

const Banner = ({
  AppBar,
  PageHeader,
  BreadcrumbTrail,
  title,
  breadcrumb,
  cta,
}) => (
  <div role="banner" className={cn(Styles.Banner)}>
    <div className={cn(Styles.AppBarContainer)}>
      <Container>
        <AppBar />
      </Container>
    </div>
    <div className={cn(Styles.PageHeaderContainer)}>
      <Container>
        <PageHeader title={title} cta={cta} />
      </Container>
    </div>
    {breadcrumb && (
      <div className={cn(Styles.BreadcrumbContainer)}>
        <Container>{renderBreadcrumb(breadcrumb)}</Container>
      </div>
    )}
  </div>
);

Banner.propTypes = {
  AppBar: PropTypes.func,
  PageHeader: PropTypes.func,
  BreadcrumbTrail: PropTypes.func,
  title: PropTypes.string,
  breadcrumbItems: PropTypes.arrayOf(PropTypes.func),
};

Banner.defaultProps = {
  AppBar: AppBar,
  PageHeader: PageHeader,
  BreadcrumbTrail: BreadcrumbTrail,
};

export default Banner;
