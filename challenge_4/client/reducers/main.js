import { combineReducers } from 'redux';

const initialState = combineReducers({
  test: 'word',
});

const reducer = (state = initialState, action) => {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
};

export default initialState;
