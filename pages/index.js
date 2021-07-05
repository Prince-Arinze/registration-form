import Head from 'next/head'
import Banner from '../components/Banner';
import Register from '../components/RegisterForm'
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
      <div>
          <Head>
            <title>Travel4College</title>
            <meta name="description" content="Travel for college accessment" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
           <main>
               <div className={styles.register_container}>
                        <Banner>
                            <h1>Hello!</h1>
                            <p>Welcome to Trav4College where we make sure your College dreams come true</p>
                        </Banner>
                      <Register />
               </div>
              
              </main>
      </div>
  )
}
