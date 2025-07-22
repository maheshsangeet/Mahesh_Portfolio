import React from "react";
import styles from "../styles/socialMedia.module.css";
import { FaGithub, FaPhone } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const SocialMedia = () => {
  const [showMedia, setShowMedia] = useState("none");
  const [hideButton, setHideButton] = useState("block");
  const SocialMedia = () => {
    setShowMedia("block");
    setHideButton("none");
  };

  return (
    <section className={styles.socialMedia}>
      <div className={styles.socialMediaContainer}>
        <div style={{ display: `${showMedia}` }}>
          <div className={styles.media}>
            <div className={`${styles.iconContainer} ${styles.div1}`}>
              <Link href="mailto:maheshsangeet0@gmail.com">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "#EA4335" }}
                >
                  <FaGoogle className={styles.icon} />
                </a>
              </Link>
            </div>
            <div className={`${styles.iconContainer} ${styles.div2}`}>
              <Link href="https://github.com/maheshsangeet/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "#333333" }}
                >
                  <FaGithub className={styles.icon} />
                </a>
              </Link>
            </div>
            <div className={`${styles.iconContainer} ${styles.div3}`}>
              <Link href="https://www.linkedin.com/in/mahesh-sangeet/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "#0D76A8" }}
                >
                  <FaLinkedinIn className={styles.icon} />
                </a>
              </Link>
            </div>
            <div className={`${styles.iconContainer} ${styles.div4}`}>
              <Link href="tel:8660804309">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "rgb(12, 152, 103)" }}
                >
                  <FaPhone className={styles.icon} />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={styles.cornerSocialMedia}
          style={{
            color: "rgb(25, 45, 56)",
            position: "absolute",
            bottom: "0px",
            right: "0px",
            display: `${hideButton}`,
          }}
          onClick={SocialMedia}
        >
          <svg
            data-v-553b04e0=""
            width="80"
            height="80"
            viewBox="0 0 250 250"
            aria-hidden="true"
            style={{
              fill: "rgb(30, 218, 255)",
              position: "absolute",
              bottom: "0px",
              border: "0px",
              right: "0px",
              zIndex: "10",
            }}
          >
            <path
              data-v-553b04e0=""
              d="M0,0 L120,120 L115,115 L142,142 L250,250 L250,0 Z"
            ></path>
          </svg>
          <div className={styles.click}>Click me</div>
        </div>
      </div>
    </section>
  );
};
export default SocialMedia;
