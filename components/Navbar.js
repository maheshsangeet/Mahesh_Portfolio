import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} ${styles.navContainer}`}>
        <input type="checkbox" />
        <div className={styles.humburger}>
          <div className={`${styles.bar} ${styles.first}`}></div>
          <div className={`${styles.bar} ${styles.second}`}></div>
          <div className={`${styles.bar} ${styles.third}`}></div>
        </div>

        {/* <p  className={styles.brand}>Mahesh Sangeet</p> */}
        <div className={styles.brandName}>
          <Link href="/">
            <span>Mahi</span>
          </Link>
        </div>

        <ul className={styles.navList}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/project">
              <a>Project</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

// <nav id="Navbar">
//     <div className = "nav-content" >
//         <p  className="brand"><Link to = 'Home' smooth = {true} duration = {2000}> Mahesh Sangeet</Link></p>
//         <div class="bars">
//             <div class="first"></div>
//             <div class="second"></div>
//             <div class="third"></div>
//         </div>
//     </div>
//     <Link to = 'Home' className="brand-name" smooth = {true} duration = {2000}> Mahi </Link>
//     <ul className = "nav-list" >
//         <li className="Home  active"><Link to ='Home'  smooth = {true} duration = {1000}>About</Link></li>
//         <li className="Experience"><Link to ='Experience' smooth = {true} duration = {1000}>Experience</Link></li>
//         <li className="Skills"><Link to ='Skills' smooth = {true} duration = {1000}>Skills</Link></li>
//         <li className="Education"><Link to ='Education' smooth = {true} duration = {1000}>Education</Link></li>
//         <li className="Contact"><Link to ='Contact' smooth = {true} duration = {1000}>Contact</Link></li>
//     </ul>
// </nav>
