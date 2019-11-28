import React from 'react';
import styles from './index.css'

interface HeaderProps {
  title: string;
}

/**
 * 页首
 */
const Header = (props: HeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {props.title}
      </div>
    </div>
  );
};
export default Header;
