import React from 'react'
import styles from './index.css'

interface ComputeItemProps {
  label: string;
  children: React.ReactNode;
}

function ComputeItem({ label, children }: ComputeItemProps) {
  return <div className={styles['item']}>
    <div className={styles['label']}>{label}:</div>
    <div className={styles['content']}>{children}</div>
  </div>
}
export default ComputeItem
