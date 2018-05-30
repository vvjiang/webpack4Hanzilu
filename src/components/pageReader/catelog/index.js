import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { hideCatelog } from '../actions';
import classes from './index.less';

/**
 * 目录
 */
class Catelog extends React.Component {
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
                  <li key={chapter.link} className={this.props.link === chapter.link ? classes.active : ''} data-link={chapter.link}>
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

export default connect(
  (state) => {
    return {
      isHiddenCatelog: state.pageReader.isHiddenCatelog,
    };
  },
  {
    hideCatelog,
  }
)(withRouter(Catelog));
