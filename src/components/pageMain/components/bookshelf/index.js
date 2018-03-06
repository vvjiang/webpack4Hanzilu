import React from 'react';
import { List, NoticeBar } from 'antd-mobile';
import Book from './book';
import './index.css';

/**
 * 书架组件
 */
class Bookshelf extends React.Component {
  componentWillMount() {

  }
  render() {
    const notice = () => {
      return (
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
          请使用Chrome浏览器
        </NoticeBar>
      );
    };
    const itemList = this.props.dataSource.map((item) => {
      return (
        <Book key={item.id} bookCode={item.id} title={item.title} description={item.description} />
      );
    });
    return (
      <List renderHeader={notice} className="book-shelf">
        {itemList}
      </List>
    );
  }
}
export default Bookshelf;
