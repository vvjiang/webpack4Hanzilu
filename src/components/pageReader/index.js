import React from 'react';
import { connect } from 'react-redux';
import { showReaderHandle, hideReaderHandle } from './actions';
import ReaderHandle from './readerHandle';
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
    return (
      <div style={{ height: '100vh', width: '100vw' }} role="button" onClick={this.clickOpenReaderHandle}>
        {this.state.currentContent}
        <ReaderHandle />
      </div>
    );
  }
}

export default connect(
  null,
  {
    showReaderHandle,
    hideReaderHandle
  },
)(PageReader);
