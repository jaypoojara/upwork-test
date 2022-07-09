import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const { store } = configureStore({});
const enTranslationMessages = require('./translations/en.json');

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider messages={enTranslationMessages} locale={'en'}>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
