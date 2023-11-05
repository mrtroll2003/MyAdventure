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
import Tabbar from "../../component/Tabbar/Tabbar";

// import SmallMainBackground from "../../assets/images/small_main_background.png";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const HomePageNotSign = () => {
  return (
    <div>
      <Tabbar/>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className={styles.welcome}><mark className='highlight'>Welcome To Our</mark></h2>
          <h2 className={styles.myadventure}><mark className='highlight'>My Adventure</mark></h2>
          <h2 className={styles.booking}><mark className='highlight'>Enjoy your dream vacation, discover amazing places at exclusive details</mark></h2>
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
          <div className={styles.packageBackground}>
            <div className={styles.packageView}>
              <div style={{width: "80%"}}>
                <h1 id={styles.packageIntroduction}>Summer Vacation Packages</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <p id={styles.packageMainText}>
                    Video provides a powerful way to help you prove your point. When
                    you click Online Video, you can paste
                    in the embed code for the video you want to add. You can also
                    type a keyword to search online for the
                    video that best fits your document.
                  </p>

                </div>
                <h1 id={styles.packagePriceView}>
                  <span id={styles.packagePriceText01}>From Only </span>
                  <span id={styles.packagePrice}>$159.00</span>
                  <span id={styles.packagePriceText02}> per person</span>
                </h1>
              </div>

              <motion.button
                  id={styles.detailsBtn}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  DETAILS
                </motion.button>
            </div>
          </div>
          {/*  */}
          <div style={{marginTop: "10vh"}}>
            <div className= {styles.boldStatement}>POPULAR TRIP</div>
            <div className={styles.normalText}>
              Video provides a powerful way to help you prove your point. When you
              click Online Video, you
              can paste in the embed code for the video you want to add.
            </div>
            <div className={styles.titleRowView}>
              <p
                style={{
                  fontFamily: "NunitoSans",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#6E7491",
                }}
              >
                Explore unique{" "}
                <span style={{ color: "#5CD6C0" }}>places to stay</span>
              </p>
                <div style={{display: "flex", flexDirection: 'row'}}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "NunitoSans",
                      color: "#A1B0CC",
                    }}
                  >
                    All
                  </p>
                  <motion.img
                    src={ArrowRight}
                    alt="arrow right"
                    style={{ alignSelf: "center", width: '1.5vw' }}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  />
              </div>
            </div>
            <div className={styles.recTripView}>
              <RecommendedTripCard
                image={Place01}
                titleRow={"Stay among the atolls in"}
                titleRowPlace={"Maldives"}
                text={
                  "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages."
                }
              />
              <RecommendedTripCard
                image={Place02}
                titleRow={"Experience the Ourika Valley in "}
                titleRowPlace={"Morocco"}
                text={
                  "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East."
                }
              />
              <RecommendedTripCard
                image={Place03}
                titleRow={"Live traditionally in "}
                titleRowPlace={"Mongolia"}
                text={
                  "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel."
                }
              />
            </div>
          </div>
          {/* Happy Customer */}
          <div className={styles.happyCustomerBackground}>
            <div className={styles.happyCustomerView}>
              <img
                src={HappyCustomer01}
                alt="happy customer 01"
                style={{ marginLeft: "5%", alignSelf: "flex-end" }}
              />
              <img
                src={HappyCustomer02}
                alt="happy customer 02"
                style={{ marginLeft: "-5%", alignSelf: "flex-end" }}
              />
              <div className={styles.happyCustomerContentView}>
                <h1 id={styles.whiteBoldStatement}>HAPPY CUSTOMERS</h1>
                <p id={styles.whiteNormalText}>
                  Video provides a powerful way to help you prove your point. When
                  you click Online Video, you can paste in the embed code for the
                  video you want to add. You can also type a keyword to search
                  online for the video that best fits your document.
                  <br />
                  <br />
                  Video provides a powerful way to help you prove your point. When
                  you click Online Video, you can paste in the embed code for the
                  video you want to add.
                </p>
              </div>
            </div>
          </div>
          {/* Holiday Types */}
          <div style={{marginTop: "10vh"}}>
            <div className={styles.boldStatement}>HOLIDAY TYPES</div>
            <div className={styles.normalText}>
              Video provides a powerful way to help you prove your point. When you
              click Online Video, you
              <br />
              can paste in the embed code for the video you want to add.
            </div>
            {/*  */}
            <div className={styles.holidayTypeView}>
              <HolidayTypeCircle image={CityIcon} holidayTypeName={"City"} />
              <HolidayTypeCircle image={SafariIcon} holidayTypeName={"Safari"} />
              <HolidayTypeCircle image={BeachIcon} holidayTypeName={"Beach"} />
              <HolidayTypeCircle
                image={AdventureIcon}
                holidayTypeName={"Adventure"}
              />
              <HolidayTypeCircle
                image={HoneymoonIcon}
                holidayTypeName={"Honeymoon"}
              />
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default HomePageNotSign;
