import React from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import { getDataList } from './actions';
import Chart from './Chart/index.jsx'
import Compute from './Compute/index.jsx'

/**
 * 首页
 */
@connect(({ pageMain }) => {
  return {
    dataList: pageMain.dataList,
  };
}, { getDataList })
export default class PageMain extends React.Component {
  state = {
    rangeValue: [moment().subtract(3, 'years'), moment()],
    fundCode: 100038
  }
  componentDidMount() {
    this.getList()
  }
  // 获取基金数据
  getList = () => {
    const { rangeValue, fundCode } = this.state
    const startDate = rangeValue[0].format('YYYY-MM-DD')
    const endDate = rangeValue[1].format('YYYY-MM-DD')
    const pageSize = rangeValue[1].diff(rangeValue[0], 'days')

    this.props.getDataList(fundCode, startDate, endDate, pageSize)
  }

  handleChange = (params) => {
    this.setState(params, this.getList)
  }

  render() {
    const { dataList } = this.props
    const { rangeValue, fundCode } = this.state
    return (
      <div>
        {dataList.length && <Chart dataSource={dataList} />}
        <Compute dataSource={dataList} onChange={this.handleChange} rangeValue={rangeValue} fundCode={fundCode} />
      </div>
    );
  }
}