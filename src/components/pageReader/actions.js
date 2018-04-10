import { createAction } from 'redux-actions';
import * as T from './actionTypes';

// 阅读操作面板
export const hideReaderHandle = createAction(T.HIDE_READER_HANDLE);
export const showReaderHandle = createAction(T.SHOW_READER_HANDLE);
// 目录
export const hideCatelog = createAction(T.HIDE_CATELOG);
export const showCatelog = createAction(T.SHOW_CATELOG);
// 切换白天黑夜
export const toggleNight = createAction(T.TOGGLE_NIGHT);

