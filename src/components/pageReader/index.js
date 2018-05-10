import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showReaderHandle, hideReaderHandle } from './actions';
import ReaderHandle from './readerHandle';
import Catelog from './catelog';
import ReaderConfig from './readerConfig';
/**
 * 阅读页面
 */
class PageReader extends React.Component {
  state = {
    currentContent: '这个一个antd测试程序，这个一个antd测试程序，这个一个antd测试程序，这个一个antd测试程序，这个一个antd测试程序，这个一个antd测试程序，这个一个antd测试程序，这个一个antd测试程序，这个一个antd测试程序，',
  }
  /**
   * 返回首页
   */
  backToHome = () => {
    this.props.history.goBack();
  }
  /**
   * 展开阅读操作界面
   */
  clickOpenReaderHandle = (event) => {
    this.props.showReaderHandle();
    event.stopPropagation();
  }
  render() {
    const readStyle = {
      color: '#333',
      backgroundColor: this.props.bgColor,
    };
    if (this.props.isNight) {
      readStyle.color = '#fff';
      readStyle.backgroundColor = '#333';
    }

    return (
      <div style={{ minHeight: '100vh', width: '100vw', ...readStyle }} role="button" onClick={this.clickOpenReaderHandle}>
        {this.state.currentContent}
        <ReaderHandle />
        <Catelog />
        <ReaderConfig />
      </div>
    );
  }
}

export default withRouter(connect((state) => {
  return {
    isNight: state.pageReader.isNight,
    bgColor: state.pageReader.bgColor,
  };
}, {
  showReaderHandle,
  hideReaderHandle,
})(PageReader));
