import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import riminder from './reducer/rootReducer';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const store = createStore(riminder);
//<Provider store = {store}><App/> </Provider >
//console.log(store);

ReactDOM.render(
<Provider store ={store}><App/></Provider> ,
  document.getElementById('root')
);
