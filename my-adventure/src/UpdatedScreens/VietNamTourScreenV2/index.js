import React from "react";
import { motion } from "framer-motion";
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
import FilterIC from "../../assets/icons/filter.png";


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
        <div style={{display:"flex",flexDirection:"row"}}>
        <div
        style={{
          marginLeft: "5%",
          marginTop: "2.5%",
          fontSize: "18px",
        }}
      >
        Your departure
      </div>
      <div
        style={{
          marginLeft: "28vh",
          marginTop: "2.5%",
          fontSize: "18px",
        }}
      >
        Destination
      </div>
        </div>
        
        <div
        className={styles.displayHorizon}
        style={{
          padding: "0 5%",
          justifyContent: "space-between",
        }}
        >
          <div style={{display:"flex",flexDirection:"row"}}>
            <motion.select className={styles.filterBox} name="departure">
              <motion.option value="all departure">All departure</motion.option>
              <motion.option value="option 2">Option 2</motion.option>
              <motion.option value="option 3">Option 3</motion.option>
              <motion.option value="option 4">Option 4</motion.option>
              <motion.option value="option 5">Option 5</motion.option>
            </motion.select>
            <motion.select className={styles.filterBox} name="destination">
              <motion.option value="all destination">All destination</motion.option>
              <motion.option value="option 2">Option 2</motion.option>
              <motion.option value="option 3">Option 3</motion.option>
              <motion.option value="option 4">Option 4</motion.option>
              <motion.option value="option 5">Option 5</motion.option>
            </motion.select>
          </div>
          <motion.button
          className={styles.displayHorizon}
          whileTap={{ scale: 0.9 }}
        >
          <div style={{ fontSize: "20px" }}>Filter Date</div>
          <img
            style={{ height: "3vh", marginLeft: "1vw" }}
            src={FilterIC}
            alt="tick"
          />
        </motion.button>
        </div>
        <div
        style={{
          marginLeft: "5%",
          marginTop: "2.5%",
          fontSize: "18px",
        }}
      >
        If you want to make a new tour in the future please click below button!
      </div>
      <motion.button className={styles.button} whileTap={{ opacity: 0.5, transition: { duration: 0.1 } }}>
          + Create a new tour
      </motion.button>
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
