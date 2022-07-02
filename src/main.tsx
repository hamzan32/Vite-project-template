import './index.scss';
import 'antd/dist/antd.less';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClickToComponent } from 'click-to-react-component';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <ClickToComponent /> */}
  </React.StrictMode>
);
