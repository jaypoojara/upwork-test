import React from 'react';
import { render } from '@testing-library/react';
import { FormattedMessage, defineMessages } from 'react-intl';
import { Provider } from 'react-redux';

import ConnectedLanguageProvider, { LanguageProvider } from '../index';
import configureStore from '../../../configureStore';

import { translationMessages } from '../../../i18n';

const messages = defineMessages({
  someMessage: {
    id: 'some.id',
    defaultMessage: 'This is some default message',
    en: 'This is some en message'
  }
});

describe('<LanguageProvider /> tests', () => {
  it('should render its children', () => {
    const children = <h1>Test</h1>;
    const { container } = render(
      <LanguageProvider messages={messages} locale="en">
        {children}
      </LanguageProvider>
    );
    expect(container.firstChild).not.toBeNull();
  });
});

describe('<ConnectedLanguageProvider /> tests', () => {
  let store: any;

  beforeAll(() => {
    store = configureStore({}).store;
  });

  it('should render the default language messages', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ConnectedLanguageProvider messages={translationMessages}>
          <FormattedMessage {...messages.someMessage} />
        </ConnectedLanguageProvider>
      </Provider>
    );
    expect(getByText(messages.someMessage.defaultMessage)).not.toBeNull();
  });
});
