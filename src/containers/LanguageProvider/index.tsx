/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { IntlGlobalProvider } from '../../components/IntlGlobalProvider';
import { makeSelectLocale } from './selectors';

type Props = {
  locale: string;
  messages: any;
  children: JSX.Element;
}

export function LanguageProvider(props: Props) {
  return (
    <IntlProvider locale={props.locale} key={props.locale} messages={props.messages[props.locale]}>
      <IntlGlobalProvider>{React.Children.only(props.children)}</IntlGlobalProvider>
    </IntlProvider>
  );
}

const mapStateToProps = createSelector(makeSelectLocale(), (locale) => ({
  locale
}));

function mapDispatchToProps(dispatch: any) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
