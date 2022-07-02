import Head from '../components/Head'
import Layout from '../components/Layout'
import styles from "../styles/contact.module.css"
import { useState, useEffect } from 'react'
import BackgroundAnimation from '../components/BackgroundAnimation'
import SocialMedia from '../components/SocialMedia'
import emailjs from 'emailjs-com'
import AOS from "aos";


const Result =() =>{
  return(
    <p className={styles.result}>Your Message Has Been Sent Successfully 🎉🎉
      <br />
      I will Contact You Soon 😊
    </p>
  );
};


const Contact = () => {
  const [result, showResult]=useState(false);

  function sendEmail (e) {
    e.preventDefault(); 

    emailjs.sendForm( 
      'service_p3r7byg',
      'template_gmq8deg',
      e.target,
      "Org7jcVI0fpeXb_C7").then(res=>{console.log(res);}).catch(error=> console.log(error));

      e.target.reset();
      showResult(true);
  }


  setTimeout(()=>{
    showResult(false)
  },5000)


  useEffect(() => {
    AOS.init({
      duration : 3000
    }); 
    AOS.refresh();
  }, [])

  return (
    <div>
      <Head title="contact" />
      <Layout>
        <main className={styles.main}>
          <section className={styles.leftSection}>
            <div className={styles.leftSectionContainer}>
              <div className={styles.content}>
                <h1 data-aos="flip-up">Lets talk.</h1>
                <p data-aos="flip-up">Get in touch via the form below, or by emailing <a href='mailto:maheshsangeet0@gmail.com'>maheshsangeet0@gmail.com.</a></p>
              </div>

              <form onSubmit={sendEmail} >
                <div className={styles.inputContainer}>
                  <label>Name:</label>
                  <input
                  type="text"
                  required
                  name='name'
                  placeholder='Enter your name'
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label>Your Email:</label>
                  <input
                  type="email"
                  required
                  name='user_email'
                  placeholder='Enter your email address'
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label className="text-base font-bold mb-2   text-gray-400 mt-8">Your Message:</label>
                    <textarea
                    rows="5"
                    required
                    name='message'
                    placeholder='Enter your message'
                    />
                </div>

                <div>{ result ? <Result/> : null} </div>

                <div>
                  <button className={styles.submitBtn}>Submit</button>
                </div>
              </form>
            </div>
          </section>

          <section className={styles.rightSection}>
            <div className={styles.bgAnimation}>
              <BackgroundAnimation />
            </div>
          </section>
          <section>
            <SocialMedia />
          </section>         
        </main>
      </Layout>
    </div>
  )
}

export default Contact