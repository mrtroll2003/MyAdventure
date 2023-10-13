import React from "react";
import Header from "../../component/Header/index";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import IntroBackground from "../../component/IntroBackground/IntroBackground";
import { TourSearch } from "../../component/TourSearch/TourSearch";
import { motion } from "framer-motion";
import "./styles.css";

const BookingStepOne = () => {
  return (
    <div>
      <Header></Header>
      <MainTabbar></MainTabbar>
      <div>
        <IntroBackground style="position:absolute;"></IntroBackground>
        <TourSearch style="position:absolute;z-index:4;"></TourSearch>
      </div>
      <motion.h1>&nbsp;&nbsp;&nbsp;&nbsp;Domestic Tours</motion.h1>
      <motion.div >

      </motion.div>
    </div>
  );
};

export default BookingStepOne;