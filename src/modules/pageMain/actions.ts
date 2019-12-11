import { createAction, ActionFunction4, Action } from 'redux-actions';
import axios, { AxiosResponse } from 'axios'
import * as T from './actionTypes';

/**
 * 获取基金数据
 */
export const getDataList = createAction(T.GET_DATA_LIST, (fundCode: string, startDate: string, endDate: string, pageSize: number) => {
  return axios.get(`http://localhost:8011/getList?fundCode=${fundCode}&startDate=${startDate}&endDate=${endDate}&pageSize=${pageSize}`)
});

export type ActionTypeGetDataList = ActionFunction4<string, string, string, number, Action<Promise<AxiosResponse<any>>>>
