import { useEffect } from "react";
import Head from "next/head";
import photo from "/public/static/pic1 (1).png";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";
import AOS from "aos";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Head>
        <title>Mahesh Portfolio</title>
        <meta
          name="description"
          content="Mahesh Sangeet's detailed information build by using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <section className={styles.leftSection}>
            <div className={styles.introduction}>
              <h2 data-aos="zoom-out" data-aos-duration="2000">
                <strong className={styles.line}>Hi There 👋,</strong>
                <strong className={styles.line}>I am</strong>
              </h2>

              <div className={styles.nameSection}>
                <div className={styles.name}>
                  <h1 className={styles.words}>
                    <span>M</span>
                    <span>a</span>
                    <span>h</span>
                    <span>e</span>
                    <span>s</span>
                    <span>h</span>
                  </h1>
                  <h3 data-aos="fade-up">Front end developer</h3>
                </div>
                <div className={styles.about}>
                  <p>
                    Mahesh Sangeet, a passionate Front end developer who always
                    thrive to work on end to end products which develop
                    sustainable and high-impact applications..
                    <br />
                    <br />
                    {/* Currently working as a front end developer at Samarth
                    Meditech Pvt Ltd Karnataka.  */}
                    Recently worked as a Front End Developer at Algonomy Software Pvt Ltd Karnataka.
                    Currently, my focus is on mastering React.js and Next.js and I'm a life long learner,
                    always eager to learn new technologies and apply them.
                  </p>
                  <Link href="/about" passHref>
                    <p
                      style={{
                        color: "#f77b42",
                        cursor: "pointer",
                        border: "1px solid #f77b42",
                        padding: "4px 10px",
                        borderRadius: "10px",
                      }}
                    >
                      More details &#10153;
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.rightSection}>
            <div className={styles.img}>
              <Image src={photo} alt="Picture of hero" data-aos="zoom-in" />
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
export default Home;
