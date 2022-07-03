import './index.scss';
import 'antd/dist/antd.less';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClickToComponent } from 'click-to-react-component';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '@/redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ClickToComponent />
      </Provider>
    </BrowserRouter>
  </React.Fragment>
);
