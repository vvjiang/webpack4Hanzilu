import React, { useEffect, useRef } from 'react';
import echarts, { ECharts, EChartOption } from 'echarts'

/**
 * 简单使用Echarts的Hook
 * @param domref 容器的Ref对象
 * @param options Echarts的配置项内容
 * @param effcts 数组中的项内容改变后，图表重新设置配置项内容，默认[options]
 */
export default function useEchart(domref: React.RefObject<HTMLDivElement>, options: EChartOption, effcts?: any[]) {
  let myChart: ECharts = null

  const renderChart = () => {
    if (!myChart) {
      myChart = echarts.init(domref.current)
    }
    myChart.setOption(options)
  }
  useEffect(() => {
    renderChart()
  }, effcts || [options])

  useEffect(() => {
    // 卸载代码写在这里而不是上面，是因为放在上面，每次数据改变重新渲染，那么都会先清除echart，再初始化
    return () => {
      if (myChart) {
        myChart.dispose()
        myChart = null
      }
    }
  }, [])
}
