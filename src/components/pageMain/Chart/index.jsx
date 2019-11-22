import React from 'react';
import echarts from 'echarts';
import styles from './index.css'


export default class Chart extends React.Component {
  componentDidMount() {
    this.initEcharts()
    this.refreshEcharts()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.myChart.resize);
  }

  componentDidUpdate() {
    const { dataSource } = this.props
    if (dataSource.length === 0) {
      return
    }
    this.refreshEcharts()
  }

  refreshEcharts() {
    const { dataSource } = this.props
    const chartSource = dataSource.map((item) => ({
      name: item.netValueDate,
      value: Number.parseFloat(item.netValue),
      totalNetValue: item.totalNetValue,
      dayOfGrowth: item.dayOfGrowth
    }))
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '动态数据 + 时间坐标轴'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          var data = params.data;
          return `${data.name}<br /> 单位净值 ${data.value}<br /> 累计净值 ${data.totalNetValue}<br /> 日涨幅 ${Number.parseFloat(data.dayOfGrowth)}%`;
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'category',
        data: chartSource.map((item) => item.name)
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        type: 'line',
        data: chartSource
      }]
    }
    // 使用刚指定的配置项和数据显示图表。
    this.myChart.setOption(option);
  }

  initEcharts() {

    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById('echart_1'));


    window.addEventListener("resize", this.myChart.resize, false);
  }

  render() {
    const { dataSource } = this.props
    if (dataSource.length === 0) {
      return '暂无数据'
    }
    return (
      <div id='echart_1' className={styles['echarts-container']}></div>
    );
  }
}
