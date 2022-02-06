import React from 'react'
import styles from './index.module.scss'
//import styles from "./index.module.css";
//import styles from "./index.module.less";

export interface UiProps {
  title?: string | React.ReactNode
  children?: React.ReactNode
}

export const Ui = ({ title }: UiProps) => {
  return <div className={styles.aa}>ui---{title || ''}</div>
}
