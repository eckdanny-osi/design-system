import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Layout.module.scss';
import Banner from '../Banner';
import Body from '../Body';

//aasdlfjdf
const Page = ({ title, sidenav, main, breadcrumb, layout, cta }) => {
  const bannerProps = { title, breadcrumb, cta };
  const bodyProps = { main, sidenav, layout };
  return (
    <div className={Styles['Page']}>
      <Banner {...bannerProps} />
      <Body {...bodyProps} />
    </div>
  );
};

export default Page;
