import React from 'react';
import { List, Button } from 'antd-mobile';
import './index.less';

const { Item } = List;
const { Brief } = Item;
/**
 * 书架组件
 */
const BookList = (props) => {
  /**
   * 把书加入书架
   */
  const addBookToShelf = (item) => {
    localStorage.setItem(`book${item.id}`, JSON.stringify(item));
  };
  const itemList = props.dataSource.map((item) => {
    const btn = (<Button onClick={() => { addBookToShelf(item); }}>加入书架</Button>);
    return (
      <Item
        key={item.id}
        extra={btn}
        thumb="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"
        multipleLine
      >
        {item.title}
        <Brief > {item.description}</Brief >
      </Item >
    );
  });
  return (
    <List className="book-list" onClick>
      {itemList}
    </List>
  );
};
export default BookList;
