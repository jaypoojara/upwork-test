import produce from 'immer';
import { createActions } from 'reduxsauce';

export const { Types: appContainerTypes, Creators: appContainerCreators } = createActions({
  requestUserLogin: ['username', 'password'],
  successUserLogin: ['data'],
  failureUserLogin: ['error'],

  requestLogout: [],

  clearError: [],
});

type InitialStateType = {
  username: string | null;
  error: string | null;
  loading: boolean | null;
}

export const initialState: InitialStateType = { username: null, error: null, loading: null };

export const appContainerReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case appContainerTypes.REQUEST_USER_LOGIN:
        draft.username = null;
        draft.error = null;
        draft.loading = true;
        break;
      case appContainerTypes.SUCCESS_USER_LOGIN:
        draft.username = action.data;
        draft.error = null;
        draft.loading = false;
        break;
      case appContainerTypes.FAILURE_USER_LOGIN:
        draft.username = null;
        draft.error = action.error;
        draft.loading = false;
        break;
      case appContainerTypes.REQUEST_LOGOUT:
        draft.username = null;
        draft.error = null;
        draft.loading = null;
        break;
      case appContainerTypes.CLEAR_ERROR:
        draft.error = null;
        break;
      default:
        return state;
    }
  })

