import React from 'react';
import axios from 'axios';
import ReaderHandle from './readerHandle';
/**
 * 阅读页面
 */
class PageReader extends React.Component {
  state = {
    isHiddenReaderHandle: true,
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
  clickOpenReaderHandle = () => {
    this.setState({ isHiddenReaderHandle: false });
  }
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw' }} role="button" onClick={this.clickOpenReaderHandle}>
        {this.state.currentContent}
        <ReaderHandle hidden={this.state.isHiddenReaderHandle} />
      </div>
    );
  }
}

export default PageReader;
