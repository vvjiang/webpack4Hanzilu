import axios from 'axios'

interface IGetFundParams {
  fundCode: string,
  startDate: string,
  endDate: string,
  pageSize: number
}

/**
 * 获取指定基金在指定时间段内的数据
 */
export const getFundData = (params: IGetFundParams) => {
  const { fundCode, startDate, endDate, pageSize } = params
  return axios.get(`http://localhost:8011/getList?fundCode=${fundCode}&startDate=${startDate}&endDate=${endDate}&pageSize=${pageSize}`)
};
