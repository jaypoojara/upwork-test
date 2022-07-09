/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { appContainerReducer } from './AppReducer';
import languageProviderReducer from './containers/LanguageProvider/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const createReducer = (injectedReducer = {}) => {
  return combineReducers({
    ...injectedReducer,
    appReducer: appContainerReducer,
    language: languageProviderReducer
  });
}

export default createReducer;
