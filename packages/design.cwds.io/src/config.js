import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Logo } from '@cwds/components';

//
// Configure Components
//
AppBar.config({
  brand: _ => (
    <Link to="/">
      <Logo />
    </Link>
  ),
});
