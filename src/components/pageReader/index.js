import React from 'react';
import { connect } from 'react-redux';
import { PullToRefresh } from 'antd-mobile';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { showReaderHandle, hideReaderHandle, getBGColor } from './actions';
import ReaderHandle from './readerHandle';
import Catelog from './catelog';
import ReaderConfig from './readerConfig';

/**
 * 阅读页面
 */
class PageReader extends React.Component {
  state = {
    currentContent: [],
    chapterList: [],
    currentLink: this.props.match.params.link
  }

  componentDidMount() {
    this.props.getBGColor();
    axios.get(`http://novel.juhe.im/chapters/${encodeURIComponent(this.props.match.params.link)}`).then(({ data: result }) => {
      if (result.ok) {
        this.setState({
          currentContent: [result.chapter.body]
        });
      }
    });
    axios.get(`http://novel.juhe.im/book-chapters/${this.props.match.params.bookid}`).then(({ data }) => {
      const currentlink = decodeURIComponent(this.props.match.params.link);
      const chapterIndex = data.chapters.findIndex((item) => {
        return item.link === currentlink;
      });
      this.setState({
        chapterList: data.chapters,
        chapterIndex
      });
    });
  }

  componentWillReceiveProps(preProps) {
    axios.get(`http://novel.juhe.im/chapters/${encodeURIComponent(preProps.match.params.link)}`).then(({ data: result }) => {
      if (result.ok) {
        this.setState({
          currentContent: [result.chapter.body]
        });
        const currentLink = decodeURIComponent(preProps.match.params.link);
        const chapterIndex = this.state.chapterList.findIndex((item) => {
          return item.link === currentLink;
        });
        this.setState({
          currentLink,
          chapterIndex
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
        <div style={{ whiteSpace: 'pre-wrap', lineHeight: 2 }}>
          <PullToRefresh
            style={{
              overflow: 'auto',
            }}
            direction="up"
            refreshing={this.state.refreshing}
            onRefresh={() => {
              const refreshState = { refreshing: true };
              if (this.state.currentContent.length > 2) {
                this.state.currentContent.shift();
                refreshState.currentContent = this.state.currentContent;
              }
              this.setState(refreshState, () => {
                if (this.state.chapterList[this.state.chapterIndex + 1]) {
                  axios.get(`http://novel.juhe.im/chapters/${encodeURIComponent(encodeURIComponent(this.state.chapterList[this.state.chapterIndex + 1].link))}`).then(({ data: result }) => {
                    if (result.ok) {
                      this.setState((prevState) => {
                        prevState.currentContent.push(result.chapter.body);
                        return {
                          chapterIndex: prevState.chapterIndex + 1,
                          currentContent: prevState.currentContent.slice(0),
                          refreshing: false
                        };
                      });
                    }
                  });
                }
              });
            }}
          >
            {this.state.currentContent.map((content, index) => (<p key={index}>{content}</p>))}
          </PullToRefresh>
        </div>
        <ReaderHandle />
        <Catelog link={this.state.currentLink} bookid={this.props.match.params.bookid} dataSource={this.state.chapterList} />
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
    getBGColor
  })(PageReader));
