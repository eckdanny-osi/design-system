import React from 'react';
import PropTypes from 'prop-types';
import Styles from "../Layout.module.css";
import Banner from '../Banner';
import Body from '../Body';

const Page = ({
  title,
  sidenav,
  main,
  breadcrumb,
  layout,
  cta
}) => {
  const bannerProps = {
    title,
    breadcrumb,
    cta
  };
  const bodyProps = {
    main,
    sidenav,
    layout
  };
  return React.createElement("div", {
    className: Styles['Page']
  }, React.createElement(Banner, bannerProps), React.createElement(Body, bodyProps));
};

export default Page;