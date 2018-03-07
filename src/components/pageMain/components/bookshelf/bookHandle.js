import React from 'react';
import { connect } from 'react-redux';
import { Popover, Toast } from 'antd-mobile';
import { deleteBook } from '../../actions';
import IconFA from '../../../common/iconFA';
import './index.css';

const { Item } = Popover;
/**
 * 书籍的操作组件
 */
class BookHandle extends React.Component {
  state = {
    visible: false,
  }
  onSelect = (info) => {
    if (info.key === '1') {
      this.deleteBook();
    } else if (info.key === '2') {
      this.switchSource();
    }
    this.setState({
      visible: false,
    });
  };
  /**
   * 删除书籍
   */
  deleteBook = () => {
    this.props.deleteBook(this.props.bookCode);
  }
  /**
   * 切换爬书的来源网站
   */
  switchSource = () => {
    Toast.offline('功能暂未开放', 2, null, false);
  }
  render() {
    return (
      // 此处用span包裹是为了阻止点击事件冒泡
      <span role="button" onClick={(e) => { e.stopPropagation(); }}>
        <Popover
          mask
          overlayClassName="fortest"
          overlayStyle={{ color: 'currentColor' }}
          visible={this.state.visible}
          overlay={[
            (<Item key="1" icon={<IconFA value="trash" color="#f00" />}>删除</Item>),
            (<Item key="2" icon={<IconFA value="refresh" />} >切换书源</Item>),
          ]}
          align={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [4, 6],
          }}
          onSelect={this.onSelect}
        >
          {/* 此处存在BUG，必须要用i元素包裹IconFA，否则点击无效 */}
          <IconFA value="ellipsis-v" />
        </Popover>
      </span>
    );
  }
}
export default connect(
  null,
  {
    deleteBook,
  },
)(BookHandle);
