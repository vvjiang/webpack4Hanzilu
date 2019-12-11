import React from 'react';
import moment from 'moment'
import { connect } from 'dva';
import Chart from './Chart'
import Compute from './Compute'

const mapStateToProps = ({ pageMainModel }) => {
  return {
    fundDatas: pageMainModel.fundDatas,
  };
}

/**
 * 首页
 */
class PageMain extends React.Component {
  state = {
    rangeValue: [moment().subtract(3, 'years'), moment()],
    fundCode: '100038'
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

    this.props.dispatch({
      type: 'pageMainModel/getDatas',
      payload: { fundCode, startDate, endDate, pageSize }
    })
  }

  handleChange = (params) => {
    this.setState(params, this.getList)
  }

  render() {
    const { fundDatas } = this.props
    const { rangeValue, fundCode } = this.state
    return (
      <div>
        {fundDatas.length && <Chart dataSource={fundDatas} />}
        <Compute dataSource={fundDatas} onChange={this.handleChange} rangeValue={rangeValue} fundCode={fundCode} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(PageMain)
