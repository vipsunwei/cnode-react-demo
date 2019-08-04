import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider, LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import store from './redux/store/store'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <LocaleProvider locale={ zh_CN }>
        <ConfigProvider autoInsertSpaceInButton={ false }>
          <App />
        </ConfigProvider>
      </LocaleProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
