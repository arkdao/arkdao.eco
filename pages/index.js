import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ArkDAO</title>
        <meta name="description" content="ArkDAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ArkDAO
        </h1>
        <p>coming soon</p>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
