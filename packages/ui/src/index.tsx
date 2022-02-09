import React from 'react'
import styles from './index.module.scss'
//import styles from "./index.module.css";
//import styles from "./index.module.less";
//import { a } from 'airmusic-com-a'
import { Demo } from './Demo'

export interface UiProps {
  title?: string | React.ReactNode
  children?: React.ReactNode
}

export const Ui = ({ title }: UiProps) => {
  //a()
  return (
    <div className={styles.aa}>
      ui---{title || ''}
      <Demo />
    </div>
  )
}
