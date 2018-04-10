import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import FootMenu from './footMenu';
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
    const style = {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      zIndex: 1,
      top: 0,
    };
    return (
      <div style={style} className={this.props.hidden ? 'hide' : null}>
        <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={this.gobackToHome} />
        <div role="button" className="mask" style={{ height: 'calc(100vh - 100px)' }} onClick={this.hideReaderHandle} />
        <FootMenu />
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
