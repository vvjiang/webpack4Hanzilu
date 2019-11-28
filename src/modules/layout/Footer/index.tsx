import React from 'react';
import styles from './index.css'

interface FooterProps {
  auther: string;
}

/**
 * 页脚
 */
const Footer = (props: FooterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        {`${props.auther}@${new Date().getFullYear()}`}
      </div>
    </div>
  );
};
export default Footer;
