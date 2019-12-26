import React from 'react';
import moment from 'moment'
import { Empty } from 'antd'
import { connect } from 'dva';
import styles from './index.css'
import FundChart from './FundChart'
import Compute, { IComputeChangeValue } from './Compute'
import { RangePickerValue } from 'antd/lib/date-picker/interface';

interface DataItems {
  netValueDate: string;
  netValue: string;
  totalNetValue: string;
  dayOfGrowth: string;
}

interface IPageMainProps {
  fundDatas: DataItems[];
  funds: [string, string, string][];
  dispatch: any;
}

interface IPageMainState {
  rangeValue: RangePickerValue,
  fundCode: string
}

const mapStateToProps = ({ fundModel }) => {
  return {
    fundDatas: fundModel.fundDatas,
    funds: fundModel.funds
  };
}

/**
 * 首页
 */
@connect(mapStateToProps)
export default class PageMain extends React.Component<IPageMainProps, IPageMainState> {
  state = {
    rangeValue: [moment().subtract(3, 'years'), moment()] as RangePickerValue,
    fundCode: '100038'
  }
  componentDidMount() {
    this.getFunds()
    this.getList()
  }

  // 获取所有基金的信息（包括名字和基金代码）
  getFunds = () => {
    this.props.dispatch({
      type: 'fundModel/getFunds'
    })
  }

  // 获取基金数据
  getList = () => {
    const { rangeValue, fundCode } = this.state
    const startDate = rangeValue[0].format('YYYY-MM-DD')
    const endDate = rangeValue[1].format('YYYY-MM-DD')
    const pageSize = rangeValue[1].diff(rangeValue[0], 'days')

    this.props.dispatch({
      type: 'fundModel/getDatas',
      payload: { fundCode, startDate, endDate, pageSize }
    })
  }

  handleChange = (params: IComputeChangeValue) => {
    this.setState({
      ...this.state,
      ...params
    }, this.getList)
  }

  // 渲染图表
  renderChart = () => {
    const { fundDatas } = this.props
    if (fundDatas.length === 0) {
      return <Empty className={styles['empty-container']} />
    }
    return <FundChart dataSource={fundDatas} />
  }

  render() {
    const { fundDatas, funds } = this.props
    const { rangeValue, fundCode } = this.state
    return (
      <div className={styles['container']}>
        {this.renderChart()}
        <Compute dataSource={fundDatas} onChange={this.handleChange} rangeValue={rangeValue} funds={funds} fundCode={fundCode} />
      </div>
    );
  }
}
