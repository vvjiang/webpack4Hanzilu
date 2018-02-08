import React from 'react';
import { List, Badge, NoticeBar } from 'antd-mobile';
import './index.css';

const { Item } = List;
const { Brief } = Item;

const Bookshelf = () => {
  const notice = () => {
    return (
      <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
        请使用Chrome浏览器
      </NoticeBar>
    );
  };
  return (
    <List renderHeader={notice} className="book-shelf">
      <Item extra={<Badge text="更" />} thumb="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" multipleLine>
        TitlTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitlee
        <Brief>asdasdasdddddddddddddddd哈哈哈ddddddddddddddddddddddddddddddddddddd
        dd阿萨德ddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </Brief>
      </Item>
      <Item thumb="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" >
        TitlTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitlee
        <Brief>asdasdasdddddddddddddddd哈哈哈ddddddddddddddddddddddddd
        ddddddddddddddd阿萨德dddddddddddddddddddddddddddddddddddddddddddddddddddd
        </Brief>
      </Item>
    </List>
  );
};
export default Bookshelf;
