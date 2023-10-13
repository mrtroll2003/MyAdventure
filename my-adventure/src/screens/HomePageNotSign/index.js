import React from "react";
import Header from "../../component/Header";
import Tabbar from "../../component/Tabbar/Tabbar";
import IntroBackground from "../../component/IntroBackground/IntroBackground";
import GreenGlobe from "../../assets/icons/green_globe.png";
import MessageBubble from "../../assets/icons/message_bubble.png";
import Flag from "../../assets/icons/flag.png";
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
        <div className="recommendTripView"></div>
      </div>
    </div>
  );
};

export default HomePageNotSign;
