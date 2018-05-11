import React from 'react';
import { List } from 'antd-mobile';
import BookListItem from './bookListItem';
import classes from './index.less';

/**
 * 书架组件
 */
const BookList = (props) => {
  const itemList = props.dataSource.map((item) => {
    return (<BookListItem key={item._id} dataSource={item} />);
  });
  return (
    <List className={classes['book-list']}>
      {itemList}
    </List>
  );
};
export default BookList;
