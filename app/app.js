import 'normalize.css';
import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

ReactDOM.render(
  <Header title='React Website Starter' />,
  document.querySelector('#main')
);
