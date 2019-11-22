import React from 'react'
import styles from './index.css'

export default class ComputeItem extends React.Component {
  render() {
    const { label, children } = this.props
    return <div className={styles['item']}>
      <div className={styles['label']}>{label}:</div>
      <div className={styles['content']}>{children}</div>
    </div>
  }
}
