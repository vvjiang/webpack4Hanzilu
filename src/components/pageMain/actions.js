import { createAction } from 'redux-actions';
import * as T from './actionTypes';

/**
 * 获取书籍信息
 */
export const getBookList = createAction(T.LIST_BOOK, () => {
  const data = Object.entries(localStorage);
  return data.filter(l => l[0].slice(0, 4) === 'book').map(l => JSON.parse(l[1]));
});

/**
 * 删除书籍
 */
export const deleteBook = createAction(T.DELETE_BOOK, (bookCode) => {
  localStorage.removeItem(`book${bookCode}`);
  return { bookCode };
});
