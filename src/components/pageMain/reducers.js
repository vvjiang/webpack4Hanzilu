import { handleActions } from 'redux-actions';
import * as T from './actionTypes';


const initialState = {
  bookList: [],
};

const pageMainReducer = handleActions({
  [T.LIST_BOOK]:
    {
      next(state, action) {
        return {
          ...state,
          bookList: action.payload,
        };
      },
      throw(state) {
        return state;
      },
    },
  [T.DELETE_BOOK]: (state, { payload: { bookCode } }) => {
    return {
      ...state,
      bookList: state.bookList.filter(l => l._id !== bookCode),
    };
  },
}, initialState);

export default pageMainReducer;
