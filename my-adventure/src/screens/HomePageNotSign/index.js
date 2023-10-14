import React from "react";

import Header from "../../component/Header";
import Tabbar from "../../component/Tabbar/Tabbar";
import IntroBackground from "../../component/IntroBackground/IntroBackground";
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
import "./styles.css";

const HomePageNotSign = () => {
  return (
    <div>
      <Header></Header>
      <Tabbar></Tabbar>
      <IntroBackground></IntroBackground>
      <div>
        <div id="boldStatement">WHY WE ARE THE BEST?</div>
        <div id="normalText">
          Video provides a powerful way to help you prove your point. When you
          click Online Video, you
          <br />
          can paste in the embed code for the video you want to add.
        </div>
        <div id="subContentView">
          <div id="subContent">
            <img src={GreenGlobe} alt="Green Globe" />
            <div id="subContentText">Amazing Travel</div>
            <div id="subContentMainText">
              When you click Online Video, you can
              <br />
              paste in the embed code for the
              <br />
              video you want to add.
            </div>
          </div>
          {/*  */}
          <div id="subContent">
            <img src={Flag} alt="Flag" />
            <div id="subContentText">Book Your Trip</div>
            <div id="subContentMainText">
              When you click Online Video, you can
              <br />
              paste in the embed code for the
              <br />
              video you want to add.
            </div>
          </div>
          {/*  */}
          <div id="subContent">
            <img src={MessageBubble} alt="Message Bubble" />
            <div id="subContentText">Nice Support</div>
            <div id="subContentMainText">
              When you click Online Video, you can
              <br />
              paste in the embed code for the
              <br />
              video you want to add.
            </div>
          </div>
          {/*  */}
        </div>
        <div className="packageBackground">
          <div className="packageView">
            <h1 id="packageIntroduction">Summer Vacation Packages</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p id="packageMainText">
                Video provides a powerful way to help you prove your point. When
                you click Online Video, you can paste
                <br />
                in the embed code for the video you want to add. You can also
                type a keyword to search online for the
                <br />
                video that best fits your document.
              </p>
              <motion.button
                id="detailsBtn"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                DETAILS
              </motion.button>
            </div>
            <h1 id="packagePriceView">
              <span id="packagePriceText01">From Only </span>
              <span id="packagePrice">$159.00</span>
              <span id="packagePriceText02"> per person</span>
            </h1>
          </div>
        </div>
        {/*  */}
        <div id="boldStatement">POPULAR TRIP</div>
        <div id="normalText">
          Video provides a powerful way to help you prove your point. When you
          click Online Video, you
          <br />
          can paste in the embed code for the video you want to add.
        </div>
        {/*  */}
        <div className="titleRowView">
          <p
            style={{
              fontFamily: "NunitoSans",
              fontSize: "18px",
              fontWeight: "bold",
              color: "rgb(110, 116, 145)",
            }}
          >
            Explore unique{" "}
            <span style={{ color: "#5C90D6" }}>places to stay</span>
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "NunitoSans",
              color: "#A1B0CC",
              marginLeft: "75%",
              marginRight: "1%",
            }}
          >
            All
          </p>
          <motion.img
            src={ArrowRight}
            alt="arrow right"
            width={"2.5%"}
            height={"2.5%"}
            style={{ alignSelf: "center" }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div className="recTripView">
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
        {/* Happy Customer */}
        <div className="happyCustomerBackground">
          <div className="happyCustomerView">
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
            <div className="happyCustomerContentView">
              <h1 id="whiteBoldStatement">HAPPY CUSTOMERS</h1>
              <p id="whiteNormalText">
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
        <div id="boldStatement">HOLIDAY TYPES</div>
        <div id="normalText">
          Video provides a powerful way to help you prove your point. When you
          click Online Video, you
          <br />
          can paste in the embed code for the video you want to add.
        </div>
        {/*  */}
        <div className="holidayTypeView">
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
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePageNotSign;
