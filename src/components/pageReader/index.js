import React from 'react';
import { connect } from 'react-redux';
import { PullToRefresh } from 'antd-mobile';
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
    currentContent: [],
    chapterList: []
  }

  componentDidMount() {
    axios.get(`http://novel.juhe.im/chapters/${encodeURIComponent(this.props.match.params.link)}`).then(({ data: result }) => {
      if (result.ok) {
        this.setState({
          currentContent: [result.chapter.body]
        });
      }
    });
    axios.get(`http://novel.juhe.im/book-chapters/${this.props.match.params.bookid}`).then(({ data }) => {
      const currentlink = decodeURIComponent(this.props.match.params.link);
      this.chapterIndex = data.chapters.findIndex((item) => {
        return item.link === currentlink;
      });
      this.setState({
        chapterList: data.chapters
      });
    });
  }

  componentWillReceiveProps(preProps) {
    axios.get(`http://novel.juhe.im/chapters/${encodeURIComponent(preProps.match.params.link)}`).then(({ data: result }) => {
      if (result.ok) {
        this.setState({
          currentContent: [result.chapter.body]
        });
        const currentlink = decodeURIComponent(preProps.match.params.link);
        this.chapterIndex = this.state.chapters.findIndex((item) => {
          return item.link === currentlink;
        });
      }
    });
  }

  chapterIndex = 0
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
        <div style={{ whiteSpace: 'pre-wrap', lineHeight: 2 }}>
          <PullToRefresh
            style={{
              overflow: 'auto',
            }}
            direction="up"
            refreshing={this.state.refreshing}
            onRefresh={() => {
              this.setState({ refreshing: true });
              console.info('cool')
              if (this.state.chapterList[this.chapterIndex]) {
                axios.get(`http://novel.juhe.im/chapters/${encodeURIComponent(this.state.chapterList[this.chapterIndex + 1].link)}`).then(({ data: result }) => {
                  if (result.ok) {
                    this.chapterInde += 1;

                    this.setState((prevState) => {
                      prevState.currentContent.push(result.chapter.body);
                      return {
                        currentContent: prevState.currentContent.slice(0),
                        refreshing: false
                      };
                    });
                  }
                });
              }
            }}
          >
            {this.state.currentContent.map((content, index) => (<p key={index}>{content}</p>))}
          </PullToRefresh>
        </div>
        <ReaderHandle />
        <Catelog bookid={this.props.match.params.bookid} dataSource={this.state.chapterList} />
        <ReaderConfig />
      </div >
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
