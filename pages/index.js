import Head from 'next/head'
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
        <p>coming soon, see community links below!</p>
        <p>turn any piece of land into an ecological, regenerative ark</p>
        <p><em>ark:</em> something affording protection; safety, shelter, refuge</p>
        <p>
	  <a className={styles.highlight} href="/link/email">email list signup</a>
	  &nbsp;&nbsp;|&nbsp;&nbsp;
	  <a className={styles.highlight} href="/link/discord">discord</a>
	</p>
      </main>
    </div>
  )
}
