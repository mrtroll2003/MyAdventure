import React from "react";

import Header from "../../component/Header";
import MainTabbar from "../../component/MainTabbar/MainTabbar";

import { motion } from "framer-motion";
import styles from "./styles.module.css";

class DetailBookingScreen extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainTabbar option={"Your Booking"} />
      </div>
    );
  }
}

export default DetailBookingScreen;
