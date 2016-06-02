import React from 'react';
import './Header.scss';

export default React.createClass({
  render() {
    return (
      <header>{this.props.title}</header>
    );
  }
});
