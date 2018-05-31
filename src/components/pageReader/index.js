import React from 'react';
import { connect } from 'react-redux';
import { PullToRefresh } from 'antd-mobile';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { showReaderHandle, hideReaderHandle, getBGColor, hideCatelog } from './actions';
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

  componentWillMount() {
    this.fullScreen();
  }

  componentDidMount() {
    this.props.getBGColor();
    axios.get(`http://novel.juhe.im/book-chapters/${this.props.match.params.bookid}`).then(({ data }) => {
      const currentlink = decodeURIComponent(this.props.match.params.link);
      const chapterIndex = data.chapters.findIndex((item) => {
        return item.link === currentlink;
      });
      this.setState({
        chapterList: data.chapters,
        chapterIndex
      }, () => {
        axios.get(`http://novel.juhe.im/chapters/${encodeURIComponent(this.props.match.params.link)}`).then(({ data: result }) => {
          if (result.ok) {
            this.setState({
              currentContent: [
                {
                  title: this.state.chapterList[chapterIndex].title,
                  content: result.chapter.body
                }
              ]
            });
          }
        });
      });
    });
  }


  componentWillReceiveProps(preProps) {
    axios.get(`http://novel.juhe.im/chapters/${encodeURIComponent(preProps.match.params.link)}`).then(({ data: result }) => {
      if (result.ok) {
        const currentLink = decodeURIComponent(preProps.match.params.link);
        const chapterIndex = this.state.chapterList.findIndex((item) => {
          return item.link === currentLink;
        });
        const bookInfo = this.state.chapterList[chapterIndex];
        this.setState({
          currentContent: [{
            title: bookInfo ? bookInfo.title : '',
            content: result.chapter.body
          }],
          currentLink,
          chapterIndex
        });
      }
    });
  }

  componentWillUnmount() {
    this.exitFullScreen();
  }

  /**
   * 请求全屏
   */
  fullScreen = () => {
    const el = document.documentElement;
    const rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
      el.mozRequestFullScreen || el.msRequestFullScreen;
    if (typeof rfs !== 'undefined' && rfs) {
      rfs.call(el);
    }
  }
  /**
   * 退出全屏
   */
  exitFullScreen = () => {
    const exitMethod = document.exitFullscreen || document.mozCancelFullScreen ||
      document.webkitExitFullscreen || document.webkitExitFullscreen;
    if (exitMethod) {
      exitMethod.call(document);
    }
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
              height: '100vh'
            }}
            damping={60}
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
                  const newLink = this.state.chapterList[this.state.chapterIndex + 1].link;
                  axios.get(`http://novel.juhe.im/chapters/${encodeURIComponent(encodeURIComponent(newLink))}`).then(({ data: result }) => {
                    if (result.ok) {
                      const storeId = `book${this.props.match.params.bookid}`;

                      const bookInfo = JSON.parse(localStorage.getItem(storeId));
                      bookInfo.currentChapter = newLink;

                      localStorage.setItem(storeId, JSON.stringify(bookInfo));

                      this.setState((prevState) => {
                        prevState.currentContent.push({
                          title: prevState.chapterList[prevState.chapterIndex + 1].title,
                          content: result.chapter.body
                        });
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
            {
              this.state.currentContent.map((item, index) => (
                <div key={item.title}>
                  <p>{item.title || ''}</p>
                  <p>
                    {item.content}
                  </p>
                </div>
              ))
            }
          </PullToRefresh>
        </div>
        <ReaderHandle />
        {!this.props.isHiddenCatelog && <Catelog isHiddenCatelog={this.props.isHiddenCatelog} hideCatelog={this.props.hideCatelog} link={this.state.currentLink} bookid={this.props.match.params.bookid} dataSource={this.state.chapterList} />}
        <ReaderConfig />
      </div >
    );
  }
}

export default withRouter(connect((state) => {
  return {
    isNight: state.pageReader.isNight,
    bgColor: state.pageReader.bgColor,
    isHiddenCatelog: state.pageReader.isHiddenCatelog,
  };
}, {
    showReaderHandle,
    hideReaderHandle,
    getBGColor,
    hideCatelog
  })(PageReader));
