import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Marketplace from './pages/MarketPlace/Marketplace';
import NavBar from './pages/NavBar';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <Route exact path='/' component={Home} />
    <Route exact path='/market' component={Marketplace} />
    <Route exact path='/login' component={LoginPage} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();