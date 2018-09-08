import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import Logo from '@cwds/components/lib/Logo';

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
