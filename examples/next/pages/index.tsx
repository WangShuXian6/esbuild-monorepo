import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { a } from 'airmusic-com-a'
import { Ui } from 'airmusic-com-ui'

export interface A{
  s:string;
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Ui title={'demo'} />
      123
    </div>
  )
}

export default Home
