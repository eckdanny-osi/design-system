import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import Logo from '@cwds/components/lib/Logo';
import Badge from '@cwds/components/lib/Badge';
import status from './modules/status/status';

//
// Configure Components
//
AppBar.config({
  brand: _ => (
    <React.Fragment>
      <Link to="/">
        <Logo />
      </Link>
      <Badge color="info" className="ml-2">
        {status.version}
      </Badge>
    </React.Fragment>
  ),
});
