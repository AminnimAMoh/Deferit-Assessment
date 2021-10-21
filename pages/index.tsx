import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const RecieptsList=dynamic(()=> import('./RecieptsList'))

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deferit Assessment</title>
        <meta name="description" content="Deferit Technical Assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <RecieptsList/>
      </main>

    </div>
  )
}

export default Home
