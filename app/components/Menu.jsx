import React     from 'react';
import Link      from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import './Menu.scss';

export default React.createClass({
  render() {
    return (
      <nav id="main-menu">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="/about" activeClassName="active">About</Link>
      </nav>
    );
  }
});
