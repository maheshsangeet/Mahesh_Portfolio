import React, { useEffect } from "react";
import Head from "../components/Head";
import styles from "../styles/about.module.css";
import Layout from "../components/Layout";
import { FaLinux, FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMedium } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiGatsby } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiPwa } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import Timeline from "../components/Timeline";
import { EducationData, ExperienceData } from "../components/Data";
import AOS from "aos";

const About = () => {
  //   const [gear1, setGear1] = useState("")
  //   const [gear2, setGear2] = useState("")

  //   const rotate = () => {
  //     setGear1(rotate( + (window.scrollY * 2.5) + deg))
  //     setGear2(rotate(- + (window.scrollY * 2.5) + deg))
  //   }

  // useEffect(() => {
  //   window.addEventListener('scroll', rotate);

  // }, []);
  useEffect(() => {    
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Head title="about" />
      <Layout>
        <main className={styles.main}>
          <div className={styles.container}>
            <section className={styles.leftSection}>
              <div className={styles.aboutImg} data-aos="zoom-in-right">
                <svg
                  id="b52d7e2d-d80f-4111-b6ed-d15502ee1edd"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 711.1879 669.68268"
                >
                  <polygon
                    points="516.326 380.018 516.326 565.013 547.27 615.443 549.625 619.279 671.722 619.279 674.189 380.018 516.326 380.018"
                    fill="#e6e6e6"
                  ></polygon>
                  <polygon
                    points="516.326 380.018 516.326 565.013 547.27 615.443 549.169 380.018 516.326 380.018"
                    opacity="0.1"
                  ></polygon>
                  <polygon
                    points="221.566 375.084 221.566 560.08 190.622 610.51 188.267 614.345 66.17 614.345 63.703 375.084 221.566 375.084"
                    fill="#e6e6e6"
                  ></polygon>
                  <polygon
                    points="221.566 375.084 221.566 560.08 190.622 610.51 188.723 375.084 221.566 375.084"
                    opacity="0.1"
                  ></polygon>
                  <polygon
                    points="711.188 371.385 711.188 382.484 47.67 382.484 47.67 366.451 109.335 334.385 656.923 334.385 711.188 371.385"
                    fill="#e6e6e6"
                  ></polygon>
                  <polygon
                    points="711.188 371.385 711.188 382.484 47.67 382.484 47.67 366.451 711.188 371.385"
                    opacity="0.1"
                  ></polygon>
                  <polygon
                    points="142.635 426.883 113.035 426.883 100.702 418.25 156.201 418.25 142.635 426.883"
                    fill="#001C55"
                  ></polygon>
                  <polygon
                    points="142.635 462.649 113.035 462.649 100.702 454.016 156.201 454.016 142.635 462.649"
                    fill="#001C55"
                  ></polygon>
                  <polygon
                    points="142.635 513.215 113.035 513.215 100.702 504.581 156.201 504.581 142.635 513.215"
                    fill="#001C55"
                  ></polygon>
                  <polygon
                    points="142.635 563.78 113.035 563.78 100.702 555.147 156.201 555.147 142.635 563.78"
                    fill="#001C55"
                  ></polygon>
                  <polygon
                    points="595.257 431.816 624.857 431.816 637.19 423.183 581.691 423.183 595.257 431.816"
                    fill="#001C55"
                  ></polygon>
                  <polygon
                    points="595.257 467.582 624.857 467.582 637.19 458.949 581.691 458.949 595.257 467.582"
                    fill="#001C55"
                  ></polygon>
                  <polygon
                    points="595.257 518.148 624.857 518.148 637.19 509.515 581.691 509.515 595.257 518.148"
                    fill="#001C55"
                  ></polygon>
                  <polygon
                    points="595.257 568.713 624.857 568.713 637.19 560.08 581.691 560.08 595.257 568.713"
                    fill="#001C55"
                  ></polygon>
                  <path
                    d="M859.81989,235.61493H610.63446a9.4227,9.4227,0,0,0-9.42389,9.42389V412.89655a9.4227,9.4227,0,0,0,9.42389,9.42388h94.5929l-3.54389,22.62623s-20.25281,10.75927-6.01251,11.07574,81.32764,0,81.32764,0,12.97448,0-7.59479-11.39221l-3.33362-22.30976h93.7497a9.42266,9.42266,0,0,0,9.42388-9.42388V245.03882A9.42266,9.42266,0,0,0,859.81989,235.61493Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#001C55"
                  ></path>
                  <rect
                    x="365.82336"
                    y="130.42445"
                    width="249.99557"
                    height="139.87094"
                    fill="#f2f2f2"
                  ></rect>
                  <circle
                    cx="490.82114"
                    cy="125.99415"
                    r="1.58225"
                    fill="#f2f2f2"
                  ></circle>
                  <circle
                    cx="490.82114"
                    cy="294.34559"
                    r="6.01255"
                    fill="#f2f2f2"
                  ></circle>
                  <polygon
                    points="481.452 357.952 481.452 361.117 311.202 361.117 311.202 358.585 311.436 357.952 315.632 346.56 477.971 346.56 481.452 357.952"
                    fill="#001C55"
                  ></polygon>
                  <path
                    d="M791.37558,470.01266c-.31011,1.3259-1.481,2.72467-4.1265,4.04741-9.4935,4.74675-28.797-1.2658-28.797-1.2658s-14.87315-2.53161-14.87315-9.17706a11.86592,11.86592,0,0,1,1.30377-.77528c3.99133-2.11163,17.2253-7.32222,40.69051.22062a9.78618,9.78618,0,0,1,4.46035,2.923A4.667,4.667,0,0,1,791.37558,470.01266Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#001C55"
                  ></path>
                  <path
                    d="M791.37558,470.01266c-11.62,4.45247-21.97744,4.78472-32.607-2.59805a23.34328,23.34328,0,0,0-13.88583-4.57268c3.99133-2.11163,17.2253-7.32222,40.69051.22062a9.78618,9.78618,0,0,1,4.46035,2.923A4.667,4.667,0,0,1,791.37558,470.01266Z"
                    transform="translate(-244.40605 -115.15866)"
                    opacity="0.1"
                  ></path>
                  <ellipse
                    cx="532.40017"
                    cy="350.99016"
                    rx="4.11385"
                    ry="1.2658"
                    fill="#f2f2f2"
                  ></ellipse>
                  <polygon
                    points="481.452 357.952 481.452 361.117 311.202 361.117 311.202 358.585 311.436 357.952 481.452 357.952"
                    opacity="0.1"
                  ></polygon>
                  <path
                    d="M339.06751,115.15881a8.55394,8.55394,0,0,0-4.96126,1.1083c-1.476,1.0108-2.40629,2.78162-3.35588,4.42947a52.98576,52.98576,0,0,1-14.43428,16.30464c-4.28894,3.142-9.74169,7.05966-9.00789,12.85269a17.37163,17.37163,0,0,0,2.09058,5.4255c3.9566,7.987,14.75357,14.15926,13.69156,23.27309,3.931-6.58092-1.327-9.835,2.604-16.41586,1.87205-3.134,5.12412-6.67168,7.95054-4.70353.94637.659,1.56777,1.84095,2.55314,2.41917,2.35122,1.37972,4.85259-1.258,6.93387-3.12633,7.17685-6.44263,17.383-4.7548,26.31387-2.74743,4.21624.94767,8.8473,2.191,11.33971,6.2207,3.277,5.29821-3.11344,11.02034-4.72807,17.01049a3.264,3.264,0,0,0,3.50293,4.06214c2.67975-.26434,5.8542-.481,6.01278-1.65694,3.37154.12,7.50269-.26181,8.94728-3.7725a14.76216,14.76216,0,0,0,.69252-4.29319c.5302-5.89718,3.0331-11.27719,4.69119-16.88993s2.37906-12.1905-.41909-17.1668a19.86362,19.86362,0,0,0-3.666-4.45557C379.94,117.67017,359.06259,115.136,339.06751,115.15881Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#00072D"
                  ></path>
                  <path
                    d="M326.54375,190.06386s3.4534,28.7784-9.20909,31.08068,11.51136,41.4409,11.51136,41.4409l57.55681,6.90682-13.81364-46.04545s-9.20909-3.45341-3.4534-26.47613S326.54375,190.06386,326.54375,190.06386Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#ffb8b8"
                  ></path>
                  <polygon
                    points="47.028 569.318 51.633 632.631 75.806 632.631 68.9 569.318 47.028 569.318"
                    fill="#ffb8b8"
                  ></polygon>
                  <polygon
                    points="224.303 449.6 227.756 502.552 254.233 491.041 243.872 447.298 224.303 449.6"
                    fill="#ffb8b8"
                  ></polygon>
                  <path
                    d="M274.16705,442.73826s1.15113,66.7659,8.058,88.63749,5.75568,23.02272,4.60455,26.47613-2.30228,1.15114-2.30228,6.90682-2.30227,96.69544,0,104.7534-6.90681,21.87159,0,23.02272,39.13863,0,40.28977-6.90682-9.20909-9.20909-4.60454-13.81363,11.51136-98.99772,11.51136-98.99772l16.11591-65.61476,29.92954-34.53409H441.0818l19.56932,75.975s-8.058,21.87159-2.30228,21.87159,40.28977,6.90682,40.28977-18.41818S487.12725,451.94735,484.825,449.64508s1.15113-10.36023-2.30228-13.81364-43.74317-27.62727-58.70794-32.23181S387.857,393.51476,387.857,393.51476Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#00072D"
                  ></path>
                  <path
                    d="M498.63861,596.99051s-17.267-5.75568-25.325,11.51137-4.60454,21.87159-4.60454,21.87159,26.47613,9.20909,31.08068,4.60454c2.00333-2.00334,8.36471-2.69926,14.91273-2.84621,9.97289-.22381,12.62625-14.33323,3.20748-17.61885q-.42145-.147-.85317-.25539C507.8477,611.95529,498.63861,596.99051,498.63861,596.99051Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#00072D"
                  ></path>
                  <circle
                    cx="108.03826"
                    cy="59.36486"
                    r="34.53409"
                    fill="#ffb8b8"
                  ></circle>
                  <path
                    d="M307.55,235.53374s56.40567,11.51136,70.21931-6.90682,19.56931,51.80113,19.56931,51.80113l6.90682,73.67272-10.36023,40.28977s-54.1034,43.74318-71.37044,47.19658-43.74318,5.75569-43.74318,5.75569,8.058-127.77613,8.058-130.0784S307.55,235.53374,307.55,235.53374Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#0E6BA8"
                  ></path>
                  <path
                    d="M324.70433,213.94456s-12.54979-7.18923-16.0032-.28241S273.01591,237.836,269.5625,237.836s6.90682,95.54431,2.30227,107.05567S245.38864,440.436,258.05114,447.34281s3.45341-6.90682,16.11591,10.36022,74.82385,17.267,78.27726,10.36023-27.62727-58.708-21.87159-107.05567,14.96477-115.11362,6.90682-124.32271S324.70433,213.94456,324.70433,213.94456Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#00072D"
                  ></path>
                  <path
                    d="M366.258,221.7201l1.60341-5.518s47.89544,15.87824,50.19772,26.23847,1.15113,82.88181-6.90682,88.63749-19.56932,14.96477-11.51136,28.7784,17.267,28.77841,24.17386,29.92954,19.56931,9.20909,16.1159,17.267-44.89431-6.90682-44.89431-6.90682-27.62727-20.72045-26.47613-52.95227S366.258,221.7201,366.258,221.7201Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#00072D"
                  ></path>
                  <path
                    d="M406.54771,357.55418l-27.62727,51.80113s-40.28976,41.4409-17.267,46.04545,35.68522-37.9875,35.68522-37.9875l29.92955-42.592Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#ffb8b8"
                  ></path>
                  <path
                    d="M340.74981,124.19457a7.83806,7.83806,0,0,0-4.03868.78334,9.41322,9.41322,0,0,0-2.73182,3.13072,39.77267,39.77267,0,0,1-11.7501,11.524c-3.49138,2.22077-7.93014,4.98972-7.3328,9.0842a11.35949,11.35949,0,0,0,1.70182,3.8347,30.16344,30.16344,0,0,1,3.66519,18.80068l9.60011-13.954c1.52393-2.21507,4.17125-4.7155,6.47207-3.32442.77039.46577,1.27623,1.30117,2.07836,1.70985,1.914.97518,3.95021-.88912,5.64447-2.20967,5.84225-4.55361,14.15049-3.36066,21.42059-1.94187,3.43219.66981,7.20207,1.54859,9.231,4.39676,3.37169,4.73311-.149,11.5721,1.81882,17.04a5.02339,5.02339,0,0,0,2.07852-3.31717c2.74457.08484,6.1075-.185,7.28345-2.66638a9.18757,9.18757,0,0,0,.56374-3.03439c.43161-4.16809,2.46907-7.97065,3.81883-11.93769s1.93666-8.61616-.34116-12.13338a14.68107,14.68107,0,0,0-2.98426-3.14917C374.02174,125.96958,357.02664,124.17845,340.74981,124.19457Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#00072D"
                  ></path>
                  <path
                    d="M406.54771,237.836l10.72528,2.84686s24.95995,63.919,19.20427,107.66222-9.20909,34.53409-9.20909,34.53409-9.20909-20.72046-29.92955-16.11591Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#00072D"
                  ></path>
                  <path
                    d="M293.02894,739.422c-2.77592,3.77228-2.21935,9.16459-4.67828,13.15075-2.13144,3.45526-6.14837,5.26695-8.81439,8.32869a22.32616,22.32616,0,0,0-2.26617,3.25987c-2.47311,4.14255-4.4833,9.45174-2.04761,13.61641,1.95936,3.35022,6.07786,4.65961,9.855,5.552,4.77407,1.128,9.73436,2.03071,14.56354,1.16876s9.54882-3.819,11.27067-8.41239a32.50011,32.50011,0,0,1,1.2051-3.4007c2.61747-5.15294,10.82749-5.20864,13.50628-10.33,1.87466-3.584.15138-7.91623-1.57118-11.57578l-5.26109-11.1771c-1.74592-3.70919-8.82362-1.57608-12.51339-2.46492C301.46518,735.97844,296.49084,734.70126,293.02894,739.422Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#00072D"
                  ></path>
                  <path
                    d="M254.59773,380.5769l48.34772,74.82386s29.92954,37.98749,39.13863,20.72045-32.23181-46.04545-32.23181-46.04545L278.77159,372.519Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#ffb8b8"
                  ></path>
                  <path
                    d="M278.77159,240.13828,269.5625,237.836s-18.41818,5.75568-23.02272,29.92954-1.15114,120.86931,4.60454,122.02044,28.42725-16.83663,32.05624-13.02286-7.88238-15.75554-4.429-26.11577S278.77159,240.13828,278.77159,240.13828Z"
                    transform="translate(-244.40605 -115.15866)"
                    fill="#00072D"
                  ></path>
                  <g
                    id="f3c2397c-d780-4cc6-97d8-1503d8277a2c"
                    data-name="Group 13"
                  >
                    <rect
                      id="ad41612f-86f7-46b2-a964-3a5da7bcf3cf"
                      data-name="Rectangle 55"
                      x="437.40692"
                      y="176.36275"
                      width="29.75235"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="b9a0b375-cc2a-4c59-8850-661af54e4f62"
                      data-name="Rectangle 56"
                      x="559.72215"
                      y="176.36275"
                      width="10.46842"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="e174c2ab-9bc5-41ec-b37c-b06fbf8a9878"
                      data-name="Rectangle 57"
                      x="580.65899"
                      y="176.36275"
                      width="10.46842"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="ba2479ac-4c7d-43b4-a028-73b1e20e4002"
                      data-name="Rectangle 58"
                      x="477.62768"
                      y="176.36275"
                      width="71.07506"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="ac60ef86-00f2-480b-8171-28b6fdfc1958"
                      data-name="Rectangle 59"
                      x="399.94099"
                      y="222.6442"
                      width="29.75235"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="b3d8298d-cd65-487a-8b19-4cee946356e7"
                      data-name="Rectangle 60"
                      x="522.25621"
                      y="222.6442"
                      width="10.46842"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="ed27f15f-f0c4-4569-8330-a6688f8e356c"
                      data-name="Rectangle 61"
                      x="543.19305"
                      y="222.6442"
                      width="10.46842"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="f685c005-adaf-4d60-acda-005b037d82a6"
                      data-name="Rectangle 62"
                      x="440.16176"
                      y="222.6442"
                      width="71.07506"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="eca7c7fc-83f8-48ca-a588-6606db47af3f"
                      data-name="Rectangle 63"
                      x="522.80718"
                      y="192.34088"
                      width="29.75235"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="a71b5b2f-f8b9-481d-a301-5e3357e5fe42"
                      data-name="Rectangle 64"
                      x="563.02795"
                      y="192.34088"
                      width="29.75235"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="abb3a25a-f854-41fc-8391-e6ad9fbe2417"
                      data-name="Rectangle 66"
                      x="399.94099"
                      y="192.34088"
                      width="10.46842"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="add2b425-b775-4eb5-9c25-8c4c14f957c9"
                      data-name="Rectangle 67"
                      x="420.87784"
                      y="192.34088"
                      width="10.46842"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="b7159612-3b84-4b0b-a885-612eaab04c06"
                      data-name="Rectangle 68"
                      x="441.81466"
                      y="192.34088"
                      width="71.07506"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="edfc7301-4de5-47dc-80e2-1ae2da982d6d"
                      data-name="Rectangle 69"
                      x="461.09859"
                      y="207.76802"
                      width="29.75235"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="e1009f91-6275-4375-80fa-0d778e331fdc"
                      data-name="Rectangle 70"
                      x="420.87783"
                      y="207.76802"
                      width="29.75235"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="a060fb9f-1f1a-4862-9a69-16dd49199e18"
                      data-name="Rectangle 71"
                      x="399.941"
                      y="207.76802"
                      width="10.46842"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="b6754d5f-104f-449c-b9a9-cf9ac82bf5fe"
                      data-name="Rectangle 73"
                      x="582.31189"
                      y="207.76802"
                      width="10.46842"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                    <rect
                      id="e6ed1ccd-2cfd-450f-a339-07df3a1ee6bb"
                      data-name="Rectangle 74"
                      x="500.76841"
                      y="207.76802"
                      width="71.07506"
                      height="7.1626"
                      fill="#0E6BA8"
                    ></rect>
                  </g>
                </svg>
              </div>
            </section>

            <section className={styles.rightSection}>
              <div className={styles.about}>
                <div className={styles.info} data-aos="fade-up">
                  <p style={{ fontSize: "1.2rem" }}>Hey !</p>
                  <p>
                    I am Mahesh Sangeet,
                    <br /> Originally hailing from the{" "}
                    <strong>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com/maps/place/Hubballi,+Karnataka/@15.3575857,75.0741285,13z/data=!3m1!4b1!4m5!3m4!1s0x3bb8d6d3a2090b17:0xae803e207113397!8m2!3d15.3647083!4d75.1239547"
                      >
                        Hubli,Karnataka.
                      </a>
                    </strong>{" "}
                    Basically I am a Mechanical Engineer graduated from
                    Visvesvaraya Technological University ( VTU ). For the last
                    few years I have been honing my skills in{" "}
                    <strong> Front End Development</strong> building
                    products and application using wide range of front end
                    technolgies. I love to create simple yet beautiful websites
                    with great user experience. Life long learner.
                  </p>

                  <p>I Have done projects using following Web Technologies.</p>
                </div>

                <div className={styles.technologies}>
                  <ul data-aos-duration="10000">
                    <li data-aos="zoom-in">HTML</li>
                    <li data-aos="zoom-in">CSS</li>
                    <li data-aos="zoom-in">JavaScript</li>
                    <li data-aos="zoom-in">React JS</li>
                    <li data-aos="zoom-in">Next JS</li>
                    <li data-aos="zoom-in">React Bootstrap</li>
                    <li data-aos="zoom-in">Gatsby</li>
                    <li data-aos="zoom-in">Material UI</li>
                    <li data-aos="zoom-in">Bootstrap</li>
                    <li data-aos="zoom-in">And D</li>
                    <li data-aos="zoom-in">Tailwind css</li>
                    <li data-aos="zoom-in">PWA</li>
                    <li data-aos="zoom-in">React Use Hook Form</li>
                  </ul>
                </div>

                <div className={styles.cv}>
                  <a
                    href="/static/Mahesh_Sangeet_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button> Download Resume</button>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <Timeline />

          {/* <div className={styles.containerGear}>
              <div className={`${styles.containerGears} ${styles.gears}`}>
                <div className={`${styles.gear} ${styles.gear1}`}></div>
                <div className={`${styles.gear} ${styles.gear2}`}></div>
              </div>
            </div> */}
          {/************************ about info items **************************/}

          <div className={styles.aboutInfoItem}>
            {/****************** skills section ******************/}
            <section className={styles.skillsContainer}>
              <h1
                className={`${styles.sectionDivider}  ${styles.header} ${styles.halfBorder}`}
                data-aos="flip-left"
              >
                My Skills
              </h1>

              <div className={styles.aboutInfoItems}>
                <div className={`${styles.item}  ${styles.mobView}`}>
                  <h2>WebTechnologies</h2>
                  <div className={styles.items}>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <FaHtml5 className={styles.icon} />
                      <p>HTML 5</p>
                    </div>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <FaCss3Alt className={styles.icon} />
                      <p>CSS 3</p>
                    </div>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <SiJavascript className={styles.icon} />
                      <p>JavaScript</p>
                    </div>
                  </div>
                </div>

                <div className={`${styles.item}  ${styles.mobView}`}>
                  <h2>FrameWorks/Libraries</h2>
                  <div className={styles.items}>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <FaReact className={styles.icon} />
                      <p>React.JS</p>
                    </div>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <SiNextdotjs className={styles.icon} />
                      <p>Next.JS</p>
                    </div>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <SiGatsby className={styles.icon} />
                      <p>GatsBy</p>
                    </div>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <FaBootstrap className={styles.icon} />
                      <p>Bootstrap</p>
                    </div>
                    {/* <div className={styles.webTechnologies}>
                      <SiMui className={styles.icon} />
                      <p>Material UI</p>
                    </div> */}
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <SiTailwindcss className={styles.icon} />
                      <p>Tailwind CSS</p>
                    </div>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <SiPwa className={styles.icon} />
                      <p>PWA</p>
                    </div>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <FaNpm className={styles.icon} />
                      <p>NPM</p>
                    </div>
                    {/* <div className={styles.webTechnologies}>
                        <SiJavascript className={styles.icon} />
                        <p>Ant D</p>
                      </div> */}
                  </div>
                </div>

                <div className={`${styles.item}  ${styles.mobView}`}>
                  <h2>Tools</h2>
                  <div className={styles.items}>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <FaGithub className={styles.icon} />
                      <p>Github</p>
                    </div>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <FaLinux className={styles.icon} />
                      <p>Linux</p>
                    </div>
                    <div className={styles.webTechnologies} data-aos="zoom-in">
                      <SiVisualstudiocode className={styles.icon} />
                      <p>VS Code</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/****************** experience section ******************/}
            <section className={styles.experienceContainer}>
              <h1
                className={`${styles.sectionDivider}  ${styles.header} ${styles.halfBorder}`}
                data-aos="flip-left"
              >
                Experience
              </h1>

              <div className={styles.aboutInfoItems}>
                {ExperienceData.map((data, index) => {
                  return (
                    <div key={index} className={styles.item}>
                      <h2>{data.year}</h2>
                      <div className={styles.items}>
                        <p data-aos="flip-up" data-aos-duration="1500">
                          {data.organization}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/****************** education section ******************/}
            <section className={styles.educationContainer}>
              <h1
                className={`${styles.sectionDivider}  ${styles.header} ${styles.halfBorder}`}
                data-aos="flip-left"
              >
                Education
              </h1>

              <div className={styles.aboutInfoItems}>
                {/* <div className={styles.item}>
                  <h2>University</h2>
                  <div className={styles.items}>
                    <p data-aos="flip-up" data-aos-duration="1500">
                      Visvesvaraya Technological University{" "}
                      <span
                        style={{
                          color: "rgb(255, 128, 0)",
                          fontWeight: "bolder",
                        }}
                      >
                        (
                      </span>{" "}
                      VTU{" "}
                      <span
                        style={{
                          color: "rgb(255, 128, 0)",
                          fontWeight: "bolder",
                        }}
                      >
                        )
                      </span>
                    </p>
                  </div>
                </div> */}

                {EducationData?.map((data, index) => {
                  return (
                    <div key={index} className={styles.item}>
                      <h2>{data.institutionType}</h2>
                      <div className={styles.items}>
                        <p data-aos="flip-up" data-aos-duration="1500">
                          {data.institutionName}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
};
export default About;
{
  /* <div className={`${styles.gear} ${styles.gear1}`} style={{transform:{gear1}}}></div>
              <div className={`${styles.gear} ${styles.gear2}`} style={{transform:{gear2}}}></div> */
}
