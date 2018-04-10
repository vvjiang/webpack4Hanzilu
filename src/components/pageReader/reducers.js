import { handleActions } from 'redux-actions';
import * as T from './actionTypes';


const initialState = {
  /**
   * 是否隐藏阅读操作面板
   */
  isHiddenReaderHandle: true,
  /**
   * 是否隐藏目录
   */
  isHiddenCatelog: true,
  /**
   * 是否夜间
   */
  isNight: false,
};

const readerHandleReducer = handleActions({
  // 隐藏阅读操作面板
  [T.HIDE_READER_HANDLE]: (state) => {
    return {
      ...state,
      isHiddenReaderHandle: true,
    };
  },
  // 显示阅读操作面板
  [T.SHOW_READER_HANDLE]: (state) => {
    return {
      ...state,
      isHiddenReaderHandle: false,
    };
  },
  // 显示目录
  [T.SHOW_CATELOG]: (state) => {
    console.info('真的隐藏了')
    return {
      ...state,
      isHiddenCatelog: false,
      isHiddenReaderHandle: true,
    };
  },
  // 隐藏目录
  [T.HIDE_CATELOG]: (state) => {
    return {
      ...state,
      isHiddenCatelog: true,
      isHiddenReaderHandle: true,
    };
  },
  // 切换白天黑夜
  [T.TOGGLE_NIGHT]: (state) => {
    console.info(!state.isNight)
    return {
      ...state,
      isNight: !state.isNight,
    };
  },
}, initialState);

export default readerHandleReducer;
