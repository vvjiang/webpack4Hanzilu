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
   * 是否隐藏阅读设置
   */
  isHiddenReaderConfig: true,
  /**
   * 是否夜间
   */
  isNight: false,
  /**
   * 背景色
   */
  bgColor: '#fff'
};

const readerHandleReducer = handleActions({
  // 隐藏阅读操作面板
  [T.HIDE_READER_HANDLE]: (state) => {
    return {
      ...state,
      isHiddenReaderHandle: true,
      isHiddenReaderConfig: true,
    };
  },
  // 显示阅读操作面板
  [T.SHOW_READER_HANDLE]: (state) => {
    return {
      ...state,
      isHiddenReaderHandle: false,
    };
  },
  // 隐藏阅读设置面板
  [T.HIDE_READER_CONFIG]: (state) => {
    return {
      ...state,
      isHiddenReaderConfig: true,
    };
  },
  // 显示阅读设置面板
  [T.SHOW_READER_CONFIG]: (state) => {
    return {
      ...state,
      isHiddenReaderConfig: false,
    };
  },
  // 显示目录
  [T.SHOW_CATELOG]: (state) => {
    console.info('真的隐藏了')
    return {
      ...state,
      isHiddenCatelog: false,
      isHiddenReaderHandle: true,
      isHiddenReaderConfig: true,
    };
  },
  // 隐藏目录
  [T.HIDE_CATELOG]: (state) => {
    return {
      ...state,
      isHiddenCatelog: true,
      isHiddenReaderHandle: true,
      isHiddenReaderConfig: true,
    };
  },
  // 切换白天黑夜
  [T.TOGGLE_NIGHT]: (state) => {
    console.info(!state.isNight)
    return {
      ...state,
      isNight: !state.isNight,
      isHiddenReaderConfig: true,
    };
  },
  // 设置背景色
  [T.SET_BG_COLOR]: (state, action) => {
    return {
      ...state,
      isNight: false,
      bgColor: action.payload
    };
  },
}, initialState);

export default readerHandleReducer;
