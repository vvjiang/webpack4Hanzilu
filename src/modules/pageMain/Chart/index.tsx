import React, { useRef } from 'react';
import { EChartOption } from 'echarts';
import useEchart from 'utils/hooks/useEchart'
import styles from './index.css'

interface DataItems {
  netValueDate: string;
  netValue: string;
  totalNetValue: string;
  dayOfGrowth: string;
}

interface ChartProps {
  dataSource: DataItems[];
}

export default function FundChart(props: ChartProps) {
  const { dataSource } = props
  const domref = useRef()

  const chartSource = dataSource.map((item) => ({
    name: item.netValueDate,
    value: Number.parseFloat(item.netValue),
    totalNetValue: item.totalNetValue,
    dayOfGrowth: item.dayOfGrowth
  }))

  // 指定图表的配置项和数据
  var options: EChartOption<EChartOption.SeriesLine> = {
    title: {
      text: '动态数据',
      textAlign: 'auto'
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params: any) {
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

  useEchart(domref, options, [chartSource])

  return (
    <div ref={domref} className={styles['echarts-container']}></div>
  );
}
