import React from "react";
import Header from "../../component/Header";
import Tabbar from "../../component/Tabbar/Tabbar";
import IntroBackground from "../../component/IntroBackground/IntroBackground";
import GreenGlobe from "../../assets/icons/green_globe.png";
import MessageBubble from "../../assets/icons/message_bubble.png";
import Flag from "../../assets/icons/flag.png";
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
      </div>
    </div>
  );
};

export default HomePageNotSign;
