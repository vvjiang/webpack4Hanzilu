import React from 'react';
import { connect } from 'react-redux';
import { hideCatelog } from '../actions';

/**
 * 阅读设置
 */
class ReaderConfig extends React.Component {
  /**
   * 隐藏阅读设置
   */
  closeReaderConfig = (event) => {
    this.props.hideReaderConfig();
    event.stopPropagation();
  }

  render() {
    const style = {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      zIndex: 2,
      top: 0,
    };
    return (
      <div style={style} className={this.props.isHiddenReaderConfig ? 'hide' : null}>
        <div className="mask" role="button" style={{ height: 'calc(100vh - 300px)' }} onClick={this.closeReaderConfig} />
        <div style={{ height: '300px', backgroundColor: '#fff' }}>
          我是设置
        </div>
      </div >
    );
  }
}

export default connect(
  (state) => {
    return {
      isHiddenReaderConfig: state.pageReader.isHiddenReaderConfig,
    };
  },
  {
    hideCatelog,
  },
)(ReaderConfig);
