import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { a } from 'airmusic-com-a'
import { Ui } from 'airmusic-com-ui'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Ui title={'demo'} />
    </div>
  )
}

export default Home
