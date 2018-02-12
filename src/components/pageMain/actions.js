import actionTypes from './actionTypes';

const getBookList = () => {
  return {
    type: actionTypes.BOOK_LIST_GET,
  };
};

export default {
  getBookList,
};
