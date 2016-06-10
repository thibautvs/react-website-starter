import React from 'react';
import Menu from './components/Menu';
import imgLogo from './assets/images/logo.svg';
import './Template.scss';

export default React.createClass({
  render() {
    return (
      <div>
        <header id="main-header">
          <img src={imgLogo} />
          <span>React Website Starter</span>
        </header>
        <Menu />
        {this.props.children}
      </div>
    );
  }
});
