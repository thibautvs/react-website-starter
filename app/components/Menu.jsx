import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Menu.scss';

export default React.createClass({
  render() {
    return (
      <nav id='main-menu'>
        <IndexLink to='/' activeClassName='active'>Home</IndexLink>
        <Link to='/about' activeClassName='active'>About</Link>
      </nav>
    );
  }
});
