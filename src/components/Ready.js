import React from "react";
import Carousel from "./Carousel";
import styles from "../styles/Ready.module.css";
//  flex-col-reverse sm:flex-row
function Ready() {
  return (
    <div className={styles.Ready}>
      <div className={styles.content1}>
        <h1 className={styles.head}>
          Ready to Pack <br />
          Your Bags?
        </h1>{" "}
        {/*FONT FAMILY HAS TO BE STORYBOOK*/}
        <div className={styles.ReadyText}>
          <p>
            {" "}
            {/*FONT FAMILY HAS TO BE GILROY*/}
            Exploring the world as a college student has never been this easy,
            affordable, or fun. Your adventure begins with "Our Planning Your
            Experience." Start planning your dream trip today and turn your
            college years into a global adventure you'll cherish forever. Ready
            to embark on the journey of a lifetime? Let's get started!
          </p>
          <div className={styles.learn}>
            <a href="">Learn More</a>
            <svg
              width="36"
              height="28"
              viewBox="0 0 36 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1791 12.8379H7.66406C6.83906 12.8379 6.16406 13.3629 6.16406 14.0046C6.16406 14.6462 6.83906 15.1712 7.66406 15.1712H24.1791V17.2596C24.1791 17.7846 24.9891 18.0412 25.4541 17.6679L29.6241 14.4129C29.9091 14.1796 29.9091 13.8179 29.6241 13.5846L25.4541 10.3296C24.9891 9.95623 24.1791 10.2246 24.1791 10.7379V12.8379Z"
                fill="#163247"
              />
            </svg>
          </div>
        </div>
      </div>
      <Carousel className={styles.ReadyCarousel} />
    </div>
  );
}

export default Ready;
