import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';
import ListGroup from '@cwds/components/lib/ListGroups';
import { Container, Row, Col } from '@cwds/components/lib/Grid';
import Banner from './Banner';
import Body from './Body';

const Page = ({
  Banner,
  Body,
  title,
  sidenav: SideNav,
  main: Main,
  breadcrumb,
}) => {
  return (
    <Fragment>
      <Banner title={title} breadcrumb={breadcrumb} />
      <Body sidenav={<SideNav />} main={<Main />} />
    </Fragment>
  );
};
Page.propTypes = {
  Banner: PropTypes.func,
  Body: PropTypes.func,
};
Page.defaultProps = {
  Banner: Banner,
  Body: Body,
};

export default Page;
