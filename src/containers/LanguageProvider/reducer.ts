/*
 *
 * LanguageProvider reducer
 *
 */
import { createActions } from 'reduxsauce';
import produce from 'immer';
import { DEFAULT_LOCALE } from '../../i18n';

export const { Types: languageProviderTypes, Creators: languageProviderActions } = createActions({
  changeLocale: ['locale']
});

export const initialState = {
  locale: DEFAULT_LOCALE
};

/* eslint-disable default-case, no-param-reassign */
export const languageProviderReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case languageProviderTypes.CHANGE_LOCALE:
        draft.locale = action.locale;
        break;
      default:
        return state;
    }
  });

export default languageProviderReducer;
