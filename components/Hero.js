import Head from 'next/head'
import photo from "../public/images/pic1 (1).png"
import styles from "../styles/Hero.module.css"
import Image from 'next/image'
import Layout from './Layout'

function Hero() {
    return (
        <div>
            <Head>
            <title>Mahesh Portfolio</title>
            <meta name="description"content="Mahesh Sangeet's detailed information build by using Next.js"/>
            <link rel="icon" href="/favicon.ico" />
            </Head> 
    
            <Layout>
                <main className={styles.main}>
                    <section className={styles.leftSection}>
                        <div className={styles.introduction}>
                            <h2>
                                <strong className={styles.line} >Hi There👋,</strong>
                                <strong className={styles.line} >I am</strong>
                            </h2>
                        
                            <div className={styles.nameSection}>
                                <div className={styles.name}>
                                    <h1 className={styles.words} >
                                        <span>M</span>
                                        <span>a</span>
                                        <span>h</span>
                                        <span>e</span>
                                        <span>s</span>
                                        <span>h</span>
                                    </h1>
                                    <h3 data-aos="fade-up" data-aos-duration="3000">
                                        Front end developer
                                    </h3>
                                </div>
                                <div className={styles.about}>
                                    <p>Mahesh Sangeet, a Front end developer who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact. Life long learner, Started as a Trainee at Sri Guru Enterprises, Hubli. After that joined to Trillium Flow Technology, Hubli. Carried out project on “Productivity Improvement of 
                                    a manual assembly line”. I was responsible for Co-ordinate with production department to review the routing and cycle time planned Vs actual and finalizing process flow and setting routing of 
                                    individual parts as well as assembly parts. Currently, I am a Web developer intern at Sathvik Softech, Hubli. My responsibility include designing and developing UI for the websites and integrating it with back-end system.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.rightSection}>
                        <div className={styles.img}>
                            <Image src={photo} alt="Picture of hero"></Image>
                        </div>
                    </section>
                
                </main>
            </Layout>
        
        
        </div>
    )
  }
  export default Hero;