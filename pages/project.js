import Layout from "../components/Layout";
import ProjectData from "../components/Data";
import Image from "next/image";
import styles from "../styles/project.module.css"
import animationGif from "/public/static/web-unscreen.gif"
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

      </div>
    </Layout>
  );
}
export default Project;