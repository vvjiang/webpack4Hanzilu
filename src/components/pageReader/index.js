import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
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
    currentContent: '',
    title: ''
  }
  componentDidMount() {
    axios.get(`http://novel.juhe.im/chapters/${encodeURIComponent(this.props.match.params.link)}`).then(({ data: result }) => {
      if (result.ok) {
        this.setState({
          currentContent: result.chapter.cpContent,
          title: result.chapter.title
        });
      }
    });
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
        <div style={{ whiteSpace: 'pre-wrap' }}>
          <p>{this.state.title}</p>
          {this.state.currentContent}
        </div>
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
