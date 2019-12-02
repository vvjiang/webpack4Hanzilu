import React from 'react';
import moment, { Moment } from 'moment'
import { connect } from 'react-redux';
import { getDataList, ActionTypeGetDataList } from './actions';
import Chart from './Chart'
import Compute from './Compute'
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { PageReduxState } from '../../store/reducers';
import { DataItems } from './reducers';

interface PageMainProps {
  dataList: DataItems[],
  getDataList: ActionTypeGetDataList
}

interface PageMainState {
  rangeValue: RangePickerValue,
  fundCode: string
}

const mapStateToProps = (state: PageReduxState) => {
  const { pageMain } = state
  return {
    dataList: pageMain.dataList,
  };
}

/**
 * 首页
 */
@connect(mapStateToProps, { getDataList })
export default class PageMain extends React.Component<PageMainProps, PageMainState> {
  state = {
    rangeValue: [moment().subtract(3, 'years'), moment()] as RangePickerValue,
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

    this.props.getDataList(fundCode, startDate, endDate, pageSize)
  }

  handleChange = (params: PageMainState) => {
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
