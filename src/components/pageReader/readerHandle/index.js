import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { hideReaderHandle } from '../actions';
/**
 * 阅读控制界面
 */
class ReaderHandle extends React.Component {
  state = {
    hidden: true,
  }
  /**
   * 返回首页
   */
  gobackToHome = () => {
    this.props.history.push('/');
  }

  render() {
    const styles = {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      zIndex: 1,
      top: 0,
    };
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    return (
      <div style={styles} className={this.props.hidden ? 'hide' : null}>
        <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={this.gobackToHome} />
        <div style={{ height: 'calc(100vh - 100px)' }} onClick={this.} >
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

export default withRouter(
  connect(
    (state) => {
      hidden: state.pageReader.hidden
    },
    {
      hideReaderHandle
    }
  )(ReaderHandle)
);
