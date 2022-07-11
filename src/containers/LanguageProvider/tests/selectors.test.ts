import { createSelector } from 'reselect';
import { makeSelectLocale, selectLanguage } from '../selectors';

describe('Tests for LanguageProvider selectors', () => {
  const globalState = {};
  let mockedState: any;
  beforeAll(() => {
    mockedState = {
      language: globalState
    };
  });
  it('should select the global state', () => {
    expect(selectLanguage(mockedState)).toEqual(globalState);
  });

  it('should return the selector', () => {
    const expectedResult = createSelector(selectLanguage, (initialState) => initialState.locale);
    expect(JSON.stringify(makeSelectLocale())).toEqual(JSON.stringify(expectedResult));
  });
});
