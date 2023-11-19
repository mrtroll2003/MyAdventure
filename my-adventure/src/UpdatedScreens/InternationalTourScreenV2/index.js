import React from "react";
import DestinationSection from "../../component/DestinationSection/DestinationSection";
import Footer from "../../component/Footer/Footer";
import PricedTripCard from "../../component/PricedTripCard/PricedTripCard";

import Header from "../../component/Header";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import { Maldives } from "../../assets/images";

import styles from "./styles.module.css";

class InternationalTourScreenCompany extends React.Component {
  render() {
    return (
      <div>
        {/* Viet Nam Tour Intro */}
        <div className={styles.vnTourIntroBackground}>
          <div className={styles.vnTourIntroLayer}>
            <h1 className={styles.vnTourIntroText}>INTERNATIONAL TOURS</h1>
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

export default InternationalTourScreenCompany;
