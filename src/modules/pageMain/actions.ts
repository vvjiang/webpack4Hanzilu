import { action, createAction } from 'typesafe-actions';
import axios from 'axios'
import * as T from './actionTypes';

/**
 * 获取基金数据
 */
export const getDataList = createAction(T.GET_DATA_LIST, (fundCode: string, startDate: string, endDate: string, pageSize: number) => {
  return axios.get(`http://localhost:8011/getList?fundCode=${fundCode}&startDate=${startDate}&endDate=${endDate}&pageSize=${pageSize}`)
});
