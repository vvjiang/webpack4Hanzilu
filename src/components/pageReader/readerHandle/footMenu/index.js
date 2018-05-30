import React from 'react';
import { connect } from 'react-redux';
import styles from './index.css';
import { showCatelog, toggleNight, showReaderConfig } from '../../actions';

const FootMenu = (props) => {
  /**
   * 打开目录
   */
  const openCatelog = (event) => {
    props.showCatelog();
    event.stopPropagation();
  };

  /**
   * 打开阅读设置
   */
  const openReaderConfig = (event) => {
    props.showReaderConfig();
    event.stopPropagation();
  };

  /**
   * 切换夜间模式
   */
  const switchNight = (event) => {
    props.toggleNight();
    event.stopPropagation();
  };
  return (
    <div className={styles['footer-menu']}>
      <span role="button" className={styles['footer-menu-item']} onClick={openCatelog}>目录</span>
      <span role="button" className={styles['footer-menu-item']} onClick={openReaderConfig}>设置</span>
      <span role="button" className={styles['footer-menu-item']} onClick={switchNight}>{props.isNight ? '白天' : '夜晚'}</span>
    </div>
  );
};
export default connect((store) => {
  return {
    isNight: store.pageReader.isNight
  };
}, {
    showCatelog,
    toggleNight,
    showReaderConfig,
  })(FootMenu);
