import {createSelector} from 'reselect';
import {initialState} from './AppReducer';

const selectAppContainerDomain = (state: RootState) => state.appReducer || initialState

const selectUsername = createSelector(selectAppContainerDomain, (substate) => substate.username);
const selectLoading = createSelector(selectAppContainerDomain, (substate) => substate.loading);
const selectError = createSelector(selectAppContainerDomain, (substate) => substate.error);

export {
  selectUsername,
  selectLoading,
  selectError
}
