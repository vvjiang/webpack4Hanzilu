import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import { hideReaderHandle } from '../actions';
/**
 * 阅读控制界面
 */
class ReaderHandle extends React.Component {
  componentWillUnmount() {
    this.props.hideReaderHandle();
  }
  /**
   * 返回首页
   */
  gobackToHome = () => {
    this.props.history.push('/');
  }
  /**
   * 隐藏阅读操作页
   */
  hideReaderHandle = (event) => {
    this.props.hideReaderHandle();
    event.stopPropagation();
  }
  render() {
    const styles = {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      zIndex: 1,
      top: 0,
    };
    return (
      <div style={styles} className={this.props.hidden ? 'hide' : null}>
        <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={this.gobackToHome} />
        <div role="button" style={{ height: 'calc(100vh - 100px)' }} onClick={this.hideReaderHandle} >
          测试demo
        </div>
        <div>
          <span>目录</span>
          <span>设置</span>
          <span>白天</span>
        </div>
      </div >
    );
  }
}

export default withRouter(connect(
  (state) => {
    return {
      hidden: state.pageReader.isHiddenReaderHandle,
    };
  },
  {
    hideReaderHandle,
  },
)(ReaderHandle));
