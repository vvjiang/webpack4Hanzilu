import React from 'react';
import { Button, List } from 'antd-mobile';
import IconFA from '../../../common/iconFA';
import './index.less';

const { Item } = List;
const { Brief } = Item;

/**
 * 搜索列表书籍组件
 */
class BookListItem extends React.Component {
  state = {
    loading: false,
    text: '加入书架',
    icon: null,
    disabled: false,
  }
  /**
     * 把书加入书架
     */
  addBookToShelf = () => {
    this.setState({
      loading: true,
      text: '加入中',
      disabled: true,
    });
    localStorage.setItem(`book${this.props.dataSource.id}`, JSON.stringify(this.props.dataSource));
    setTimeout(() => {
      this.setState({
        loading: false,
        text: '已在书架',
        icon: (<IconFA color="#0d6" value="check-circle" />),
      });
    }, 3000);
  }
  render() {
    const { id, title, description } = this.props.dataSource;
    const btn = (
      <Button icon={this.state.icon} disabled={this.state.disabled} size="small" loading={this.state.loading} onClick={this.addBookToShelf}>
        {this.state.text}
      </Button >
    );
    return (
      <Item
        key={id}
        extra={btn}
        thumb="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"
        multipleLine
      >
        {title}
        <Brief > {description}</Brief >
      </Item >
    );
  }
}
export default BookListItem;
