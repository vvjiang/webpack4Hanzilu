import { createAction } from 'redux-actions';
import * as T from './actionTypes';

/**
 * 获取书籍信息
 */
export const getBookList = createAction(T.LIST_BOOK, () => {
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
});

/**
 * 删除书籍
 */
export const deleteBook = createAction(T.DELETE_BOOK, (id) => {
  console.info(`删除id为${id}的Book`);
  return { id };
});
