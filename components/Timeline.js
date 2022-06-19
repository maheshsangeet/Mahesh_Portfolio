import React, { useState, useRef, useEffect } from "react";
import styles from '../styles/timeline.module.css'
import { TimeLineData } from "../components/Constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef();

    const scroll = (window, left) => {
        return window.scrollTo({ left, behavior: "smooth" });
    };

    const handleClick = (e, i) => {
      e.preventDefault();

      if (carouselRef.current) {
        const scrollLeft = Math.floor(
          carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
        );

        scroll(carouselRef.current, scrollLeft);
      }
    };

    const handleScroll = () => {
      if (carouselRef.current) {
        const index = Math.round(
          (carouselRef.current.scrollLeft /
            (carouselRef.current.scrollWidth * 0.7)) *
            TimeLineData.length
        );

        setActiveItem(index);
      }
    };

    // snap back to beginning of scroll when window is resized
    // avoids a bug where content is covered up if coming from smaller screen
    useEffect(() => {
      const handleResize = () => {
        scroll(carouselRef.current, 0);
      };

      window.addEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles.historyContainer}>
          <section className={styles.carousel}>
            <ul ref={carouselRef} onScroll={handleScroll}>
              <>
                {TimeLineData.map((item, index) => (
                  <div
                    key={index}
                    final={index === TOTAL_CAROUSEL_COUNT - 1}
                  >
                    <div
                      className={styles.carouselItem}
                      index={index}
                      id={`carousel__item-${index}`}
                      active={activeItem}
                      onClick={(e) => handleClick(e, index)}
                    >
                      <h4 className={styles.carouselItemTitle}>
                        {item.year}
                        <svg 
                          className={styles.carouselItemImg}
                          width="208"
                          // height="6"
                          viewBox="0 0 208 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                            fill="url(#paint0_linear)"
                            fill-opacity="0.33"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear"
                              x1="-4.30412e-10"
                              y1="0.5"
                              x2="208"
                              y2="0.500295"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="white" />
                              <stop
                                offset="0.79478"
                                stop-color="white"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </h4>
                      <p className={styles.carouselItemText}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </>
            </ul>
            <div className={styles.carouselButtons}>
              {TimeLineData.map((item, index) => (
                <button
                  className={styles.carouselButton}
                  key={index}
                  index={index}
                  active={activeItem}
                  onClick={(e) => handleClick(e, index)}
                  type="button"
                >
                  <div className={styles.carouselButtonDot} active={activeItem} />
                </button>
              ))}
            </div>
            {/* <div className={styles.sectionDivider}></div> */}
          </section>
        </div>
    )
}

export default Timeline;