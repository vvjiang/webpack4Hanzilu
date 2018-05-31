import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './index.less';

/**
 * 目录
 */
class Catelog extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (document.getElementsByClassName(classes.active).length === 1) {
        document.getElementsByClassName(classes.active)[0].scrollIntoView();
      }
    }, 500);
  }
  componentWillReceiveProps() {
    if (document.getElementsByClassName(classes.active).length === 1) {
      document.getElementsByClassName(classes.active)[0].scrollIntoView();
    }
  }
  /**
   * 隐藏目录
   */
  closeCatelog = (event) => {
    this.props.hideCatelog();
    event.stopPropagation();
  }

  goToChapter = (e) => {
    e.stopPropagation();
    const { link } = e.target.dataset;
    const storeId = `book${this.props.bookid}`;

    const bookInfo = JSON.parse(localStorage.getItem(storeId));
    bookInfo.currentChapter = link;

    localStorage.setItem(storeId, JSON.stringify(bookInfo));
    this.props.history.push(`/reader/${this.props.bookid}/${encodeURIComponent(link)}`);
    // this.props.onChangeChapter(link);
    this.props.hideCatelog();
  }

  render() {
    const style = {
      position: 'fixed',
      zIndex: 2,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    };
    return (
      <div onClick={(e) => { e.stopPropagation(); }} style={style} className={this.props.isHiddenCatelog ? 'hide' : null}>
        <div className={classes['catalog-container']} >
          <h2>目录</h2>
          <ul onClick={this.goToChapter}>
            {
              this.props.dataSource.map((chapter) => {
                return (
                  <li id={chapter.link} key={chapter.link} className={this.props.link === chapter.link ? classes.active : ''} data-link={chapter.link}>
                    {chapter.title}
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className="mask" role="button" style={{ height: '100vh', marginRight: '300px' }} onClick={this.closeCatelog} />
      </div >
    );
  }
}

export default withRouter(Catelog);
