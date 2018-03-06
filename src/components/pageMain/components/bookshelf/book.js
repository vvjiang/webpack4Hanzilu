import React from 'react';
import { withRouter } from 'react-router-dom';
import { List } from 'antd-mobile';
import BookHandle from './bookHandle';

import './index.css';

const { Item } = List;
const { Brief } = Item;
/**
 * 书架中的书籍组件
 */
class Book extends React.Component {
  componentDidMount() {

  }
  /**
   * 进入阅读页面
   * @param {书号} bookCode
   */
  gotoBookReader = () => {
    this.props.history.push(`/reader?bookCode=${this.props.bookCode}`);
  }
  render() {
    return (
      <Item
        align="top"
        onClick={this.gotoBookReader}
        extra={<BookHandle bookCode={this.props.bookCode} />}
        thumb="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"
        multipleLine
      >
        {this.props.title}
        <Brief>{this.props.description}</Brief>
      </Item>
    );
  }
}
export default withRouter(Book);
