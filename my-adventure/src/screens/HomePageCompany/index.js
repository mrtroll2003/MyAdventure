import React from "react";

import RecommendedTripCard from "../../component/RecommendedTripCard/RecommendedTripCard";
import HolidayTypeCircle from "../../component/HolidayTypeCircle/HolidayTypeCircle";
import Footer from "../../component/Footer/Footer";

import GreenGlobe from "../../assets/icons/green_globe.png";
import MessageBubble from "../../assets/icons/message_bubble.png";
import Flag from "../../assets/icons/flag.png";
import ArrowRight from "../../assets/icons/arrowRight.png";
import CityIcon from "../../assets/icons/city.png";
import SafariIcon from "../../assets/icons/safari.png";
import BeachIcon from "../../assets/icons/beach.png";
import AdventureIcon from "../../assets/icons/adventure.png";
import HoneymoonIcon from "../../assets/icons/honeymoon.png";

import Place01 from "../../assets/images/card/Card/place01.png";
import Place02 from "../../assets/images/card/Card/place02.png";
import Place03 from "../../assets/images/card/Card/place03.png";
import HappyCustomer01 from "../../assets/images/happy_customer_01.png";
import HappyCustomer02 from "../../assets/images/happy_customer_02.png";

// import SmallMainBackground from "../../assets/images/small_main_background.png";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const HomePageCompany = () => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className={styles.welcome}><mark className={styles.highlight}>Welcome To Our</mark></h2>
          <h2 className={styles.myadventure}><mark className={styles.highlight}>My Adventure</mark></h2>
          <h2 className={styles.booking}><mark className={styles.highlight}>Enjoy your dream vacation, discover amazing places at exclusive details</mark></h2>
        </div>
        <div style={{marginTop: "20vh"}}>
          <div className={styles.boldStatement}>WHY WE ARE THE BEST?</div>
          <div className={styles.normalText}>
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video you want to add.
          </div>
          <div className={styles.subContentView}>
            <div className={styles.subContent}>
              <img src={GreenGlobe} alt="Green Globe" className={styles.icon} />
              <div className={styles.subContentText}>Amazing Travel</div>
              <div className={styles.subContentMainText}>
                When you click Online Video, you can
                paste in the embed code for the
                video you want to add.
              </div>
            </div>
            {/*  */}
            <div className={styles.subContent}>
              <img src={Flag} alt="Flag" className={styles.icon}/>
              <div className={styles.subContentText}>Book Your Trip</div>
              <div className={styles.subContentMainText}>
                When you click Online Video, you can
                paste in the embed code for the
                video you want to add.
              </div>
            </div>
            {/*  */}
            <div className={styles.subContent}>
              <img src={MessageBubble} alt="Message Bubble" className={styles.icon} />
              <div className={styles.subContentText}>Nice Support</div>
              <div className={styles.subContentMainText}>
                When you click Online Video, you can
                paste in the embed code for the
                video you want to add.
              </div>
            </div>
            {/*  */}
          </div>
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default HomePageCompany;
