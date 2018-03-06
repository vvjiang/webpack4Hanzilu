import React from 'react';
import { List } from 'antd-mobile';
import BookListItem from './bookListItem';
import './index.less';

/**
 * 书架组件
 */
const BookList = (props) => {
  const itemList = props.dataSource.map((item) => {
    return (<BookListItem key={item.id} dataSource={item} />);
  });
  return (
    <List className="book-list">
      {itemList}
    </List>
  );
};
export default BookList;
