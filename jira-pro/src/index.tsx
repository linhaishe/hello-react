import './wdyr';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { loadServer, DevTools } from 'jira-dev-tool';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppProviders from './context';
import 'antd/dist/antd.less';
import { Profiler } from './components/profiler';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
loadServer(() =>
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Profiler
          id='root app'
          phases={['mount']}
        >
          <AppProviders>
            <DevTools />
            <App />
          </AppProviders>
        </Profiler>
      </BrowserRouter>
    </React.StrictMode>,
  ),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
