import React from 'react';
import axios from 'axios';
import { SearchBar } from 'antd-mobile';
import Footer from '../common/footer';
import FullscreenContainer from '../common/fullscreenContainer';
import SearchHeader from './components/searchHeader';
import BookList from './components/bookList';

/**
 * 首页
 */
class PageSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
    };
  }
  /**
   * 搜书
   */
  serachBook = (keyword) => {
    axios.get('http://novel.juhe.im/search', {
      params: {
        keyword,
      },
    }).then(({ data: result }) => {
      if (result.ok) {
        this.setState({
          bookList: result.books,
        });
      } else {
        console.info('搜索失败');
      }
    });
  }
  /**
   * 返回首页
   */
  backToHome = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <SearchHeader onClickLeft={this.backToHome} />
        <FullscreenContainer minusHeight={100}>
          <SearchBar placeholder="请输入书籍名称或作者名" onSubmit={this.serachBook} />
          <BookList dataSource={this.state.bookList} />
        </FullscreenContainer>
        <Footer title="韩子卢" />
      </div>
    );
  }
}

export default PageSearch;
