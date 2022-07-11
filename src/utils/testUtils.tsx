import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IntlGlobalProvider } from '../components/IntlGlobalProvider';
import configureStore from '../configureStore';
import { LanguageProvider } from '../containers/LanguageProvider';
import {
  DEFAULT_LOCALE,
  translationMessages
} from '../i18n';
import theme from '../theme/index';

export const renderWithIntl = (children: JSX.Element) =>
  render(
    <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
      <IntlGlobalProvider>{children}</IntlGlobalProvider>
    </IntlProvider>
  );


export const renderProvider = (children: JSX.Element) => {
  const { store } = configureStore({});
  return render(
    <Provider store={store}>
      <LanguageProvider messages={translationMessages} locale={DEFAULT_LOCALE}>
        <ThemeProvider
          theme={theme}
        >
          <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </Provider>
  );
};
