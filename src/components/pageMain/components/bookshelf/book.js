import React from 'react';
import { withRouter } from 'react-router-dom';
import { List } from 'antd-mobile';
import BookHandle from './bookHandle';

const { Item } = List;
const { Brief } = Item;
/**
 * 书架中的书籍组件
 */
class Book extends React.Component {
  /**
   * 进入阅读页面
   * @param {书号} bookCode
   */
  gotoBookReader = () => {
    this.props.history.push(`/reader/${this.props.dataSource._id}/${encodeURIComponent(this.props.dataSource.currentChapter)}`);
  }
  render() {
    const { _id, cover, title, shortIntro } = this.props.dataSource;
    return (
      <Item
        align="top"
        onClick={this.gotoBookReader}
        extra={<BookHandle bookCode={_id} />}
        thumb={`http://statics.zhuishushenqi.com${cover}`}
        multipleLine
      >
        {title}
        <Brief>{shortIntro}</Brief>
      </Item>
    );
  }
}
export default withRouter(Book);
