import {createRoot} from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

const container = document.getElementById('root');
const root = createRoot(container); // 
root.render(
<Provider store={store}>
  <App />
</Provider>
);