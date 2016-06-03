import React from 'react';
import imgLogo from '../assets/images/logo.svg';
import './Header.scss';

export default React.createClass({
  render() {
    return (
      <header>
        <img src={imgLogo} />
        <span>{this.props.title}</span>
      </header>
    );
  }
});
