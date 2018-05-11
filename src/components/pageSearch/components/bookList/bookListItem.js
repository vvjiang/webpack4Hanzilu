import React from 'react';
import axios from 'axios';
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
    const storeInfo = {
      title: this.props.dataSource.title,
      shortIntro: this.props.dataSource.shortIntro,
      cover: this.props.dataSource.cover,
      lastChapter: this.props.dataSource.lastChapter,
      author: this.props.dataSource.author
    };
    axios.get('http://novel.juhe.im/book-sources', {
      params: {
        view: 'summary',
        book: this.props.dataSource._id
      }
    }).then(({ data: sourceArray }) => {
      storeInfo._id = sourceArray[0]._id; // 在这里默认不选追书神器的ID
      axios.get(`http://novel.juhe.im/book-chapters/${storeInfo._id}`).then(({ data }) => {
        storeInfo.currentChapter = data.chapters[0].link;
        localStorage.setItem(`book${this.props.dataSource._id}`, JSON.stringify(storeInfo));
        this.setState({
          loading: false,
          text: '已在书架',
          icon: (<IconFA color="#0d6" value="check-circle" />),
        });
      });
    });
  }
  render() {
    const { title, shortIntro, cover } = this.props.dataSource;
    const btn = (
      <Button icon={this.state.icon} disabled={this.state.disabled} size="small" loading={this.state.loading} onClick={this.addBookToShelf}>
        {this.state.text}
      </Button >
    );
    return (
      <Item
        extra={btn}
        thumb={`http://statics.zhuishushenqi.com${cover}`}
        multipleLine
        wrap
      >
        {title}
        <Brief > {shortIntro}</Brief >
      </Item >
    );
  }
}
export default BookListItem;
