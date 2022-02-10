import React from 'react'
import styles from './index.module.scss'
//import styles from './index.module.scss'
//import styles from "./index.module.css";
//import styles from "./index.module.less";
//import { a } from 'airmusic-com-a'
import { Demo } from './Demo'
import svgImage from './img/logo.svg'
import pngImage from './img/png.png'
import jpgImage from './img/jpg.jpg'

export interface UiProps {
  title?: string | React.ReactNode
  children?: React.ReactNode
}

export const Ui = ({ title }: UiProps) => {
  //a()
  return (
    <div className={styles.aa}>
      ui-----{title || ''}
      <Demo />
      <img className={styles.img} src={svgImage} alt="svg" />
      <img className={styles.img} src={pngImage} alt="png" />
      <img className={styles.img} src={jpgImage} alt="jpg" />
      <div className={styles.bg}>jpg bg</div>
    </div>
  )
}
