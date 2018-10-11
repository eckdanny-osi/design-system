import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/dist/AppBar';
import Logo from '@cwds/components/dist/Logo';
import Badge from '@cwds/components/dist/Badge';
// import status from './modules/status/status';

// const libVersion = status.lerna.find(d => d.name === '@cwds/components')
//   .version;

//
// Configure Components
//
AppBar.config({
  brand: _ => (
    <React.Fragment>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/status" className="d-none d-sm-inline-block">
        <Badge color="primary" className="ml-2">
          {'version?'}
        </Badge>
      </Link>
    </React.Fragment>
  ),
});
