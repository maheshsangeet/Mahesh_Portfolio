import Head from 'next/head'
import Layout from '../components/Layout'
import styles from "../styles/contact.module.css"
import { useState } from 'react'
import BackgroundAnimation from '../components/BackgroundAnimation'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link'

const Contact = () => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")

  function handleSubmit(e){
   setName("")
   setEmail("")
   setMessage("")
  }

  return (
    <div>
      <Head>
        <title>contact | Mahesh Portfolio</title>
        <meta name="description"content="Mahesh Sangeet's detailed information build by using Next.js"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <section className={styles.leftSection}>
            <div className={styles.leftSectionContainer}>
              <div className={styles.content}>
                <h1>Let's talk.</h1>
                <p>Get in touch via the form below, or by emailing <a href=''>maheshsangeet0@gmail.com.</a></p>
              </div>
              <form>
                <div className={styles.inputContainer}>
                  <label className="">Name:</label>
                  <input
                  type="text"
                  className="text lg:w-3/4 p-2 bg-transparent border border-gray-400 text-gray-200"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                  placeholder='Enter your name'
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label className="text-base font-bold mb-2  text-gray-400 mt-8">Your Email:</label>
                  <input
                  type="email"
                  className="text lg:w-3/4 p-2 bg-transparent border border-gray-400 text-gray-200"
                  required
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                  placeholder='Enter your email address'
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label className="text-base font-bold mb-2   text-gray-400 mt-8">Your Message:</label>
                    <textarea
                    rows="5"
                    // cols="50"
                    className="lg:w-3/4 bg-transparent border border-gray-400 text-gray-200"
                    required
                    onChange={(e)=>setMessage(e.target.value)}
                    value={message}
                    placeholder='Enter your message'
                    />
                </div>
                <div ><button onClick={handleSubmit} className={styles.submitBtn}>Submit</button></div>
              </form>
            </div>
          </section>
          <section className={styles.rightSection}>
            <div className={styles.bgAnimation}>
              <BackgroundAnimation />
            </div>
          </section>
        </main>

        <div className={styles.socialMedia}>
          <div className={styles.socialMediaContainer}>
            <div className={`${styles.media} ${styles.ribbon}`}>

              <Link href="https://github.com/maheshsangeet/">
                <a target="_blank" rel="noopener noreferrer" style={{background: "#333333"}}>
                  <FaGithub className={styles.icon} />
                </a>
              </Link>
              <Link href="https://github.com/maheshsangeet/">
                <a target="_blank" rel="noopener noreferrer" style={{background:  "#0D76A8"}}>
                  <FaLinkedinIn className={styles.icon}  />
                </a>
              </Link>
              <Link href="https://github.com/maheshsangeet/">
                <a target="_blank" rel="noopener noreferrer" style={{background: "#EA4335"}}>
                  <FaGoogle className={styles.icon}  />
                </a>
              </Link>

            </div>
            {/* <div className={styles.media}>
            </div> */}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact