import React from 'react'
import  './index.scss'
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
    <div className='aa'>
    {/* <div className={styles.aa}> */}
      ui---{title || ''}
      <Demo />
      <img className='img' src={svgImage} alt="svg" />
      <img className='img' src={pngImage} alt="png" />
      <img className='img' src={jpgImage} alt="jpg" />

      <div className='bg'>jpg bg</div>
    </div>
  )
}
