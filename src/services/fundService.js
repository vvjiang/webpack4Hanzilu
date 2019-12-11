import axios from 'axios'
/**
 * 获取指定基金在指定时间段内的数据
 */
export const getFundData = ({ fundCode, startDate, endDate, pageSize }) => {
  return axios.get(`http://localhost:8011/getList?fundCode=${fundCode}&startDate=${startDate}&endDate=${endDate}&pageSize=${pageSize}`)
};
