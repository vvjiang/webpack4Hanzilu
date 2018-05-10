import React from 'react';
import { connect } from 'react-redux';
import { hideReaderConfig, setBGColor } from '../actions';
import classes from './index.css';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

/**
 * 阅读设置
 */
const ReaderConfig = (props) => {
  const style = {
    position: 'fixed',
    width: '100vw',
    zIndex: 2,
    bottom: '56px',
    height: '100px',
    backgroundColor: '#fff',
    color: '#333'
  };
  const colorStyle = [
    'rgb(199,237,204)',
    'rgb(247,238,214)',
    'rgb(87,250,255)',
    'rgb(255,128,128)'
  ];
  return (
    <div style={style} className={props.isHiddenReaderConfig ? 'hide' : null} >
      <p style={{ textAlign: 'center' }}>背景色</p>
      <ul className={classes['color-list']} >
        {
          colorStyle.map((color) => {
            return (<li key={color} onClick={() => { props.setBGColor(color); }} style={{ backgroundColor: color }} />);
          })
        }
      </ul>
    </div >
  );
}

export default connect(
  (state) => {
    return {
      isHiddenReaderConfig: state.pageReader.isHiddenReaderConfig,
    };
  },
  {
    hideReaderConfig,
    setBGColor
  },
)(ReaderConfig);
