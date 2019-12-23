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
  return axios.get(`http://localhost:3000/getList?fundCode=${fundCode}&startDate=${startDate}&endDate=${endDate}&pageSize=${pageSize}`)
};

/**
 *  获取所有基金的信息（包括名字和基金代码）
 */
export const getFunds = () => {
  return axios.get('http://localhost:3000/getFunds')
};
