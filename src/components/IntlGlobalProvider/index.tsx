// eslint-disable-next-line
import React from 'react';
import { useIntl } from 'react-intl';
import { IntlShape } from 'react-intl/src/types';

// 'intl' service singleton reference
let intl: IntlShape;

type IntlGlobalProviderType = {
  children: JSX.Element;
}

export function IntlGlobalProvider({ children }: IntlGlobalProviderType) {
  intl = useIntl(); // Keep the 'intl' service reference
  return children;
}

// setter function to set intl value inside tests
export const setIntl = (intlValue: IntlShape) => {
  intl = intlValue;
};

export const translate = (id: string, values = {}) => intl.formatMessage({ id }, values);
