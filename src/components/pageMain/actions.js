import { createActions, createAction } from 'redux-actions';
import actionTypes from './actionTypes';


export default createActions({
  [actionTypes.BOOK_LIST_GET]: () => {
    const bookList = [{
      id: '1',
      title: '123',
      description: '123',
    }, {
      id: '2',
      title: '234',
      description: '234',
    }];
    return bookList;
  },
  [actionTypes.BOOK_DELETE]: (id) => {
    console.info(`删除id为${id}的Book`);
    return { id };
  },
});

// export const bookListGet = createAction(actionTypes.BOOK_LIST_GET, () => {
//   const bookList = [{
//     id: '1',
//     title: '123',
//     description: '123',
//   }, {
//     id: '2',
//     title: '234',
//     description: '234',
//   }];
//   return bookList;
// });
