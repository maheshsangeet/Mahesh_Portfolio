import React from 'react'
import styles from "../styles/socialMedia.module.css"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link'

const SocialMedia = () => {
  return (
    <section className={styles.socialMedia}>
        <div className={styles.socialMediaContainer}>
            <div className={`${styles.media} ${styles.ribbon}`}>
              <div className={`${styles.iconContainer} ${styles.div1}`}>
                <Link href="https://github.com/maheshsangeet/">
                <a target="_blank" rel="noopener noreferrer" style={{background: "#333333"}}>
                  <FaGithub className={styles.icon} />
                </a>
                </Link>
              </div>
              <div className={`${styles.iconContainer} ${styles.div2}`}> 
                <Link href="https://github.com/maheshsangeet/">
                  <a target="_blank" rel="noopener noreferrer" style={{background:  "#0D76A8"}}>
                    <FaLinkedinIn className={styles.icon}  />
                  </a>
                </Link>
              </div>
              <div className={`${styles.iconContainer} ${styles.div3}`}> 
                <Link href="https://github.com/maheshsangeet/">
                  <a target="_blank" rel="noopener noreferrer" style={{background: "#EA4335"}}>
                    <FaGoogle className={styles.icon}  />
                  </a>
                </Link>
              </div>
            </div>
        </div>
    </section>
  )
}

export default SocialMedia