import React from "react";
import Header from "../../component/Header";
import Tabbar from "../../component/Tabbar/Tabbar";
import IntroBackground from "../../component/IntroBackground/IntroBackground";
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
      </div>
    </div>
  );
};

export default HomePageNotSign;
