import produce from 'immer';
import { createActions } from 'reduxsauce';

export const { Types: homeContainerTypes, Creators: homeContainerCreators } = createActions({
  requestGetDemo: ['name'],
  successGetDemo: ['data'],
  failureGetDemo: ['error'],
});

type InitialStateType = {
  name: string | null;
  error: string | null;
  loading: boolean | null;
}

export const initialState: InitialStateType = { name: null, error: null, loading: null };

export const homeContainerReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case homeContainerTypes.REQUEST_GET_DEMO:
        draft.name = null;
        draft.loading = true;
        break;
      case homeContainerTypes.SUCCESS_GET_DEMO:
        draft.name = action.data;
        draft.loading = false;
        break;
      case homeContainerTypes.FAILURE_GET_DEMO:
        draft.name = null;
        draft.error = action.error;
        draft.loading = false;
        break;
      default:
        return state;
    }
  })
export default homeContainerReducer;
