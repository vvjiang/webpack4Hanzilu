import { createAction } from 'redux-actions';
import * as T from './actionTypes';


export const hideReaderHandle = createAction(T.HIDE_READER_HANDLE);
export const showReaderHandle = createAction(T.SHOW_READER_HANDLE);
