import React, { useState } from 'react'
import { Menu, Icon } from 'antd'
import styles from './index.css'

interface HeaderProps {
  title: string;
  history: any;
}


const getCurrentIndex = (history) => {
  if (history.location.pathname === '/webgis') {
    return 'webgis'
  }
  return 'home'
}

/**
 * 页首
 */
const Header = (props: HeaderProps) => {
  // 点击菜单项
  const handleClick = (menu) => {
    if (menu.key === 'home') {
      props.history.push('/')
      return
    }
    props.history.push(`/${menu.key}`)
  }

  const key = getCurrentIndex(props.history)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {props.title}
      </div>
      <div className={styles.nav}>
        <Menu className={styles['nav-content']} onClick={handleClick} selectedKeys={[key]} mode="horizontal">
          <Menu.Item key="home"><Icon type="mail" />定投模型</Menu.Item>
          <Menu.Item key="webgis"> <Icon type="appstore" />WebGIS</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};
export default Header;
