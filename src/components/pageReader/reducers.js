import { handleActions } from 'redux-actions';
import * as T from './actionTypes';


const initialState = {
  /**
   * 是否隐藏阅读操作面板
   */
  isHiddenReaderHandle: true,
};

const readerHandleReducer = handleActions({
  [T.HIDE_READER_HANDLE]: (state) => {
    return {
      ...state,
      isHiddenReaderHandle: true,
    };
  },
}, initialState);

export default readerHandleReducer;
