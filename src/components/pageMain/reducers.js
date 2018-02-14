import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';


const initialState = {
  bookList: [],
};

const pageMainReducer = handleActions({
  [actionTypes.BOOK_LIST_GET]:
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
  [actionTypes.BOOK_DELETE]: (state, { payload: { id } }) => {
    return {
      ...state,
      bookList: state.bookList.filter(l => l.id !== id),
    };
  },
}, initialState);

export default pageMainReducer;
