import { lazy } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';

const App = lazy(() => import('./components/App'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
