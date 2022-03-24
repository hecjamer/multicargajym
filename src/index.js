import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

import App from './components/App';


  const contenedor = document.getElementById('app');

  ReactDOM.render(<App />, contenedor);