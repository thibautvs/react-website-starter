import React from 'react';
import './header.scss';

export default React.createClass({
  render() {
    return (
      <header>{this.props.title}</header>
    );
  }
});
