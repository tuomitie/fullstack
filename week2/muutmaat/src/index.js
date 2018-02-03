import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'

const promise = axios.get('https://restcountries.eu/rest/v2/all')
console.log(promise)

ReactDOM.render(<App />, document.getElementById('root'));