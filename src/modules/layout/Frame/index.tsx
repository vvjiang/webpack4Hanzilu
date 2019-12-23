import React from 'react'
import Header from '../Header/index'
import Footer from '../Footer/index'
import styles from './index.css'

interface FrameProps {
  children: React.ReactNode;
  history: any;
}

const Frame = (props: FrameProps) => {
  return <div className={styles.container}>
    <Header title="前端技术测试站点" history={props.history} />
    <div className={styles.content}>
      {props.children}
    </div>
    <Footer auther="韩子卢" />
  </div>
}

export default Frame
