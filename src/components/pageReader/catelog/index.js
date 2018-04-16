import React from 'react';
import { connect } from 'react-redux';
import { PullToRefresh } from 'antd-mobile';
import { hideCatelog } from '../actions';

/**
 * 目录
 */
class Catelog extends React.Component {
  state = {
    refreshing: false,
  }
  /**
   * 隐藏目录
   */
  closeCatelog = (event) => {
    this.props.hideCatelog();
    event.stopPropagation();
  }

  render() {
    const style = {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      zIndex: 2,
      top: 0,
    };
    return (
      <div style={style} className={this.props.isHiddenCatelog ? 'hide' : null}>
        <div style={{ float: 'right', width: '300px', height: '100vh', backgroundColor: '#fff' }}>
          <h2>目录</h2>
          <PullToRefresh
            style={{
              height: 'calc(100vh - 60px)',
              overflow: 'auto',
            }}
            direction="up"
            refreshing={this.state.refreshing}
            onRefresh={() => {
              this.setState({ refreshing: true });
              setTimeout(() => {
                this.setState({ refreshing: false });
              }, 1000);
            }}
          >
            <ul>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据1</li>
              <li>测试数据12345</li>
            </ul>
          </PullToRefresh>
        </div>
        <div className="mask" role="button" style={{ height: '100vh', marginRight: '300px' }} onClick={this.closeCatelog} />
      </div >
    );
  }
}

export default connect(
  (state) => {
    return {
      isHiddenCatelog: state.pageReader.isHiddenCatelog,
    };
  },
  {
    hideCatelog,
  },
)(Catelog);
