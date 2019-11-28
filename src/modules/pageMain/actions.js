import { createAction } from 'redux-actions';
import axios from 'axios'
import * as T from './actionTypes';

/**
 * 获取基金数据
 */
export const getDataList = createAction(T.GET_DATA_LIST, (fundCode, startDate, endDate, pageSize) => {
  return axios.get(`http://localhost:8011/getList?fundCode=${fundCode}&startDate=${startDate}&endDate=${endDate}&pageSize=${pageSize}`)
});
