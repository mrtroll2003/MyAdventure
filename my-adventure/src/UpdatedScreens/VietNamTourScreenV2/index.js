import React from "react";
import DestinationSection from "../../component/DestinationSection/DestinationSection";
import Footer from "../../component/Footer/Footer";
import PricedTripCard from "../../component/PricedTripCard/PricedTripCard";

import Header from "../../component/Header";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import Illustration01 from "../../assets/images/illustration/illustration01.png";
import Illustration02 from "../../assets/images/illustration/illustration02.png";
import Illustration03 from "../../assets/images/illustration/illustration03.png";
import Illustration04 from "../../assets/images/illustration/illustration04.png";
import { Maldives } from "../../assets/images";

import styles from "./styles.module.css";

class VietNamTourScreenCompany extends React.Component {
  render() {
    let images = [
      Illustration01,
      Illustration02,
      Illustration03,
      Illustration04,
    ];
    return (
      <div>
        {/* Viet Nam Tour Intro */}
        <div className={styles.vnTourIntroBackground}>
          <div className={styles.vnTourIntroLayer}>
            <h1 className={styles.vnTourIntroText}>OUR VIETNAM TOURS</h1>
          </div>
        </div>
        <div className={styles.tourContainer}>
          <PricedTripCard 
          image={Maldives}
          titleRow={"Ho Chi Minh - Ha Long Bay"}
          rating= {"4.9"}
          price={"5,000,000 VND"}
          date={"15/11/2023 - 20/11/2023"}
          >
          </PricedTripCard>
          <PricedTripCard 
          image={Maldives}
          titleRow={"Ho Chi Minh - Ha Long Bay"}
          rating= {"4.9"}
          price={"5,000,000 VND"}
          date={"15/11/2023 - 20/11/2023"}
          >
          </PricedTripCard>
          <PricedTripCard 
          image={Maldives}
          titleRow={"Ho Chi Minh - Ha Long Bay"}
          rating= {"4.9"}
          price={"5,000,000 VND"}
          date={"15/11/2023 - 20/11/2023"}
          >
          </PricedTripCard>
          <PricedTripCard 
          image={Maldives}
          titleRow={"Ho Chi Minh - Ha Long Bay"}
          rating= {"4.9"}
          price={"5,000,000 VND"}
          date={"15/11/2023 - 20/11/2023"}
          >
          </PricedTripCard>
          <PricedTripCard 
          image={Maldives}
          titleRow={"Ho Chi Minh - Ha Long Bay"}
          rating= {"4.9"}
          price={"5,000,000 VND"}
          date={"15/11/2023 - 20/11/2023"}
          >
          </PricedTripCard>
          <PricedTripCard 
          image={Maldives}
          titleRow={"Ho Chi Minh - Ha Long Bay"}
          rating= {"4.9"}
          price={"5,000,000 VND"}
          date={"15/11/2023 - 20/11/2023"}
          >
          </PricedTripCard>
          <PricedTripCard 
          image={Maldives}
          titleRow={"Ho Chi Minh - Ha Long Bay"}
          rating= {"4.9"}
          price={"5,000,000 VND"}
          date={"15/11/2023 - 20/11/2023"}
          >
          </PricedTripCard>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default VietNamTourScreenCompany;
