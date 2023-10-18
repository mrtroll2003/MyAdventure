import React from "react";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import Header from "../../component/Header";
import DestinationSection from "../../component/DestinationSection/DestinationSection";
import Footer from "../../component/Footer/Footer";

import Illustration01 from "../../assets/images/illustration/illustration01.png";
import Illustration02 from "../../assets/images/illustration/illustration02.png";
import Illustration03 from "../../assets/images/illustration/illustration03.png";
import Illustration04 from "../../assets/images/illustration/illustration04.png";

import "./styles.css";

class VietNamTourScreen extends React.Component {
  render() {
    let images = [
      Illustration01,
      Illustration02,
      Illustration03,
      Illustration04,
    ];
    return (
      <div>
        <Header />
        <MainTabbar option={"Your Booking"} />
        {/* Viet Nam Tour Intro */}
        <div className="vnTourIntroBackground">
          <div className="vnTourIntroLayer">
            <h1 className="vnTourIntroText">OUR VIETNAM TOURS</h1>
          </div>
        </div>
        {/* DESTINATIONS IN NORTHERN VIETNAM */}
        <DestinationSection
          text={
            "Awe-inspiring landscapes characterised by limestone mountains and vibrant green rice paddies, diverse local cultures and exhilarating adventures; this is Northern Vietnam."
          }
          img={images}
        >
          {"DESTINATIONS IN NORTHERN VIETNAM"}
        </DestinationSection>
        {/* DESTINATIONS IN CENTRAL VIETNAM */}
        <DestinationSection
          text={
            "Awe-inspiring landscapes characterised by limestone mountains and vibrant green rice paddies, diverse local cultures and exhilarating adventures; this is Northern Vietnam."
          }
          img={images}
        >
          {"DESTINATIONS IN CENTRAL VIETNAM"}
        </DestinationSection>
        {/* DESTINATIONS IN SOUTH VIETNAM */}
        <DestinationSection
          text={
            "Awe-inspiring landscapes characterised by limestone mountains and vibrant green rice paddies, diverse local cultures and exhilarating adventures; this is Northern Vietnam."
          }
          img={images}
        >
          {"DESTINATIONS IN SOUTH VIETNAM"}
        </DestinationSection>
        {/* MYADVENTURE’S TOP DESTINATIONS */}
        <DestinationSection
          text={
            "Awe-inspiring landscapes characterised by limestone mountains and vibrant green rice paddies, diverse local cultures and exhilarating adventures; this is Northern Vietnam."
          }
          img={images}
        >
          {"MYADVENTURE’S TOP DESTINATIONS"}
        </DestinationSection>
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default VietNamTourScreen;
