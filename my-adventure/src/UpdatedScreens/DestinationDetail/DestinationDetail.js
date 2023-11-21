import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

import RecommendedTripCard from "../../component/RecommendedTripCard/RecommendedTripCard";

import HaLongBay from "../../assets/images/HaLongBayBg.png";
import FilterIC from "../../assets/icons/filter.png";
import Footer from "../../component/Footer/Footer";

import data from "./data";

const DestinationDetail = () => {
  const numRows = Math.ceil(data.length / 3);
  const rows = Array.from({ length: numRows }, (_, index) =>
    data.slice(index * 3, (index + 1) * 3)
  );
  return (
    <div
      className={styles.screenFont}
      style={{ margin: "0px", padding: "0px" }}
    >
      {/* Intro Background */}
      <div className={styles.introBackground}>
        <div className={styles.introBackgroundLayer}>
          <h1 className={styles.introBackgroundText}>HA LONG BAY</h1>
        </div>
      </div>
      {/* Some text */}
      <div style={{ marginLeft: "5%", marginTop: "2.5%", fontSize: "22px" }}>
        We introduce you all tours that have the destination is Ha Long Bay!
      </div>
      {/* Filter section */}
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
        className={styles.displayHorizon}
        style={{
          padding: "0 5%",
          justifyContent: "space-between",
        }}
      >
        <motion.select className={styles.filterBox} name="departure">
          <motion.option value="all departure">All departure</motion.option>
          <motion.option value="option 2">Option 2</motion.option>
          <motion.option value="option 3">Option 3</motion.option>
          <motion.option value="option 4">Option 4</motion.option>
          <motion.option value="option 5">Option 5</motion.option>
        </motion.select>

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
      {/* Tour Card Section */}
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: "5%",
          }}
        >
          {row.map((item) => (
            <RecommendedTripCard
              key={item.id}
              image={item.image}
              departure={item.departure}
              destination={item.destination}
              departure_date={item.departure_date}
              return_date={item.return_date}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      ))}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DestinationDetail;
