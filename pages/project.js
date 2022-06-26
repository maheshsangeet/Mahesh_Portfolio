import Layout from "../components/Layout";
import ProjectData from "../components/Data";
import Image from "next/image";
import styles from "../styles/project.module.css"
import animationGif from "/public/static/web-unscreen.gif"
import Link from "next/link";


const Project = () => {

  return (
    <Layout>
      <div className={styles.project}>
        
        <section className={styles.projectIntroduction}>
          <div className={styles.leftSection} >
            <Image  width={500} height={350}  alt="animation" src={animationGif} />
          </div>
          <div className={styles.rightSection}>
            <h1>Projects</h1>
            <p>My projects make use of a vast variety of latest technology tools. My best experience is to create Frontend Projects.. <br /> <br /> Below are some of my recent works.</p>
          </div>
        </section>
        
        <section className={styles.projectContainer}>
          {ProjectData.map((data, i) => {
            return (
                <div className={styles.projectCard}>
                  <Image  width={400} height={250}  alt="project" src={data.img} />
                  <div className={styles.projectDetails}>
                    <h3>{data.title}</h3>
                    <p>
                      {data.description}
                    </p>
                    <h4 style={{textDecoration:"underline"}}>Stack</h4>
                    <ul>
                      {data.tech.map((d, i) => {
                        return <li>{d}</li>;
                      })}
                    </ul>
                  </div>
                </div>
            );
          })}
        </section>

        
        <div className={styles.github} style={{ color: "rgb(25, 45, 56)", position: "relative", bottom: "0px", right: "0px"}}>
          <Link href="https://github.com/maheshsangeet/">
              <a target="_blank" rel="noopener noreferrer" style={{background: "#333333"}}>
                <svg data-v-553b04e0="" width="100" height="100" viewBox="0 0 250 250" aria-hidden="true" style={{ fill: "rgb(30, 218, 255)",color: "rgb(17, 17, 17)", position: "absolute", bottom: "0px", border: "0px", right: "0px", zIndex:"10" }}>
                  <path data-v-553b04e0="" d="M0,0 L120,120 L115,115 L142,142 L250,250 L250,0 Z"></path>

                  <path data-v-553b04e0="" d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" className={styles.tail} style={{transformOrigin: "130px 106px"}}></path>
                  <path data-v-553b04e0="" d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className={styles.body}></path>
                </svg>
              </a>
          </Link>
        </div>

      </div>
    </Layout>
  );
}
export default Project;