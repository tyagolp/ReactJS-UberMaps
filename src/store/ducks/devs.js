/**
 * Types
 */
export const Types = {
  ADD_DEV_REQUEST: 'devs/ADD_DEV_REQUEST',
  ADD_DEV_SUCCESS: 'devs/ADD_DEV_SUCCESS',
  ADD_DEV_FAILURE: 'devs/ADD_DEV_FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  user: [],
  error: null,
};

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_DEV_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_DEV_SUCCESS:
      return { ...state, loading: false };
    case Types.ADD_DEV_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addDevsRequest: data => ({
    type: Types.ADD_DEV_REQUEST,
    payload: { data },
  }),
  addDevsSuccess: data => ({
    type: Types.ADD_DEV_SUCCESS,
    payload: { data },
  }),
  addDevsFailure: error => ({
    type: Types.ADD_DEV_FAILURE,
    payload: { error },
  }),
};
