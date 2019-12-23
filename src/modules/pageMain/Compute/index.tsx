import React from 'react'
import { DatePicker, InputNumber, Input, Row, Col } from 'antd'
import moment from 'moment'
import ComputeItem from './ComputeItem/index'
import styles from './index.css'
import { RangePickerValue } from 'antd/lib/date-picker/interface'

interface DataItems {
  netValueDate: string;
  netValue: string;
  totalNetValue: string;
  dayOfGrowth: string;
}

export interface IComputeChangeValue {
  fundCode?: string;
  money4Day?: number;
  rangeValue?: RangePickerValue;
}

const { RangePicker } = DatePicker;

interface ComputeProps {
  rangeValue: RangePickerValue;
  fundCode: string;
  dataSource: DataItems[];
  funds: [string, string, string][];
  onChange(value: IComputeChangeValue): void;
}

export default class Compute extends React.Component<ComputeProps, Object> {
  state = {
    rangeValue: this.props.rangeValue,
    money4Day: 30, // 每日定投金额
    finalValue: 0
  }

  // 改变定投时间
  handleChangeTime = (rangeValue: RangePickerValue) => {
    this.props.onChange({
      rangeValue
    })
  }
  // 改变每日定投金额
  handleChangeMoney4Day = (money4Day: number) => {
    this.setState({
      money4Day
    })
  }
  // 改变基金代码
  handleChangeFundCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fundCode = e.target.value
    this.props.onChange({
      fundCode
    })

  }


  // 计算收益
  computeResult = () => {
    const { dataSource } = this.props
    const { money4Day } = this.state

    let finalValue = money4Day
    if (dataSource.length > 1) {
      for (let i = 1, len = dataSource.length; i < len; i++) {
        const percent = Number.parseFloat(dataSource[i].dayOfGrowth)
        finalValue = finalValue * (1 + (percent ? percent * 0.01 : 0))

        const day = moment(dataSource[i].netValueDate).day()

        // 周六周日不定投
        if (day !== 6 && day !== 7 && day !== 0) {
          finalValue += money4Day
        }
      }
    }
    return Number.parseFloat(finalValue.toFixed(2))
  }

  // 计算策略收益
  computeStrategyResult = () => {
    const { dataSource } = this.props
    const { money4Day } = this.state

    let finalValue = money4Day
    let inputValue = money4Day

    if (dataSource.length > 1) {
      for (let i = 1, len = dataSource.length; i < len; i++) {
        const percent = Number.parseFloat(dataSource[i].dayOfGrowth)
        finalValue = finalValue * (1 + (percent ? percent * 0.01 : 0))

        const day = moment(dataSource[i].netValueDate).day()

        // 周六周日不定投
        if (day !== 6 && day !== 7 && day !== 0) {
          if (percent < 0) {
            inputValue += money4Day
            finalValue += money4Day
          }
          else if (percent < -1) {
            inputValue += money4Day * 2
            finalValue += money4Day * 2
          }
          else if (percent < -2) {
            inputValue += money4Day * 3
            finalValue += money4Day * 3
          }
        }
      }
    }
    return [Number.parseFloat(inputValue.toFixed(2)), Number.parseFloat(finalValue.toFixed(2))]
  }
  render() {
    const { rangeValue, fundCode, dataSource, funds } = this.props
    const { money4Day } = this.state
    const finalValue = this.computeResult()
    const inputValue = dataSource.length * money4Day
    const percent = ((finalValue / inputValue - 1) * 100).toFixed(2)

    const fundInfo = funds.find(l => l[0] == fundCode)

    const strategyResult = this.computeStrategyResult()
    const strategyPercent = ((strategyResult[1] / strategyResult[0] - 1) * 100).toFixed(2)


    return (
      <div className={styles['container']}>
        <Row>
          <Col span={18}>
            <div className={styles['compute-container']}>
              <ComputeItem label="基金代码">
                <Input onChange={this.handleChangeFundCode} value={fundCode} placeholder='如:100032' style={{ width: 100 }} />
                <span className={styles['fund-name']}>{fundInfo ? fundInfo[2] : '未识别基金'}</span>
              </ComputeItem>
              <ComputeItem label="定投时间区间">
                <RangePicker onChange={this.handleChangeTime} value={rangeValue} />
              </ComputeItem>
              <ComputeItem label="定投金额">
                <InputNumber min={1} onChange={this.handleChangeMoney4Day} value={money4Day} />
              </ComputeItem>
            </div>
          </Col>
          <Col span={6}>
            <ComputeItem label="累计投入">
              {inputValue}
            </ComputeItem>
            <ComputeItem label="最终输出">
              {finalValue}
            </ComputeItem>
            <ComputeItem label="收益率">
              {percent}%
            </ComputeItem>
            <ComputeItem label="策略累计投入">
              {strategyResult[0]}
            </ComputeItem>
            <ComputeItem label="最终输出">
              {strategyResult[1]}
            </ComputeItem>
            <ComputeItem label="收益率">
              {strategyPercent}%
            </ComputeItem>
          </Col>
        </Row>
      </div>
    );
  }
}
