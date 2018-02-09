import React from 'react';
import { List, Badge, NoticeBar } from 'antd-mobile';
import './index.css';

const { Item } = List;
const { Brief } = Item;
/**
 * 书架组件
 */
const Bookshelf = (props) => {
  const notice = () => {
    return (
      <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
        请使用Chrome浏览器
      </NoticeBar>
    );
  };
  const itemList = props.dataSource.map((item) => {
    return (
      <Item key={item.id} extra={<Badge text="更" />} thumb="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" multipleLine>
        {item.title}
        <Brief>{item.description}</Brief>
      </Item>
    );
  });
  return (
    <List renderHeader={notice} className="book-shelf">
      {itemList}
    </List>
  );
};
export default Bookshelf;
