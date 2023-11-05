import React from "react";

import Header from "../../component/Header";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import DestinationSection from "../../component/DestinationSection/DestinationSection";
import Footer from "../../component/Footer/Footer";

import Illustration01 from "../../assets/images/illustration/illustration01.png";
import Illustration02 from "../../assets/images/illustration/illustration02.png";
import Illustration03 from "../../assets/images/illustration/illustration03.png";
import Illustration04 from "../../assets/images/illustration/illustration04.png";

import styles from "./styles.module.css";

class InternationalTourScreen extends React.Component {
  render() {
    let images = [
      Illustration01,
      Illustration02,
      Illustration03,
      Illustration04,
    ];
    return (
      <div>
        {/* International Tour Intro */}
        <div className={styles.internationalTourIntroBackground}>
          <div className={styles.internationalTourIntroLayer}>
            <h1 className={styles.internationalTourIntroText}>
              INTERNATIONAL TOURS
            </h1>
          </div>
        </div>
        {/* DESTINATIONS IN ASIA */}
        <DestinationSection
          text={
            "Awe-inspiring landscapes characterised by limestone mountains and vibrant green rice paddies, diverse local cultures and exhilarating adventures; this is Northern Vietnam."
          }
          img={images}
        >
          {"DESTINATIONS IN ASIA"}
        </DestinationSection>
        {/* DESTINATIONS IN EUROPE */}
        <DestinationSection
          text={
            "Awe-inspiring landscapes characterised by limestone mountains and vibrant green rice paddies, diverse local cultures and exhilarating adventures; this is Northern Vietnam."
          }
          img={images}
        >
          {"DESTINATIONS IN EUROPE"}
        </DestinationSection>
        {/* DESTINATIONS IN SOUTH AUSTRA */}
        <DestinationSection
          text={
            "Awe-inspiring landscapes characterised by limestone mountains and vibrant green rice paddies, diverse local cultures and exhilarating adventures; this is Northern Vietnam."
          }
          img={images}
        >
          {"DESTINATIONS IN SOUTH AUSTRA"}
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

export default InternationalTourScreen;
