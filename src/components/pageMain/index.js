import React from 'react';
import { connect } from 'react-redux';
import Footer from '../common/footer';
import FullscreenContainer from '../common/fullscreenContainer';
import MainHeader from './components/mainHeader';
import Bookshelf from './components/bookshelf';
import { getBookList, deleteBook } from './actions';

/**
 * 首页
 */
class PageMain extends React.Component {
  componentDidMount() {
    this.props.getBookList();
  }
  render() {
    return (
      <div>
        <MainHeader title="123" onClickHome={() => { }} />
        <FullscreenContainer minusHeight={100}>
          <Bookshelf onRead={this.gotoBookReader} dataSource={this.props.bookList} />
        </FullscreenContainer>
        <Footer title="韩子卢" />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    bookList: state.pageMain.bookList,
  };
}, { getBookList, deleteBook })(PageMain);
