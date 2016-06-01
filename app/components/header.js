import React from 'react';
import './header.css';

export default React.createClass({
  render() {
    return (
      <header>{this.props.title}</header>
    );
  }
});
