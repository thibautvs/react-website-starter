import React from 'react'
import ga from 'react-ga'
import imgLogo from './assets/images/logo.svg'
import Menu from './components/Menu'
import './Template.scss'

export default React.createClass({
  componentDidMount() {
    ga.initialize('UA-000000-01')
    return ga.pageview(this.props.location.pathname)
  },
  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      return ga.pageview(newProps.location.pathname)
    }
  },
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
    )
  }
})
