import actionTypes from './actionTypes';

const initialState = {
  bookList: [{
    id: '1',
    title: '123',
    description: '123',
  }, {
    id: '2',
    title: '234',
    description: '234',
  }],
};

const pageMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOK_LIST_GET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default pageMainReducer;
