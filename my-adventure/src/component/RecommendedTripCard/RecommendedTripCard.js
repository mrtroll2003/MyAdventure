import React from "react";

import Star from "../../assets/icons/star.png";
import { motion } from "framer-motion";

import styles from "./styles.module.css";
const RecommendedTripCard = (props) => {
  return (
    <motion.div
      class={styles.recTCView}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={props.onClick}
    >
      <img src={props.image} alt="Place01" className={styles.recTCImage} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <p className={styles.recTCTitleRow}>
          {props.departure}
          {" - "}
          {props.destination}
        </p>
        <div
          className={styles.recTCTitleRow}
          style={{ display: "flex", flexDirection: "row", marginRight: "5%" , alignItems: "baseline"}}
        >
          <img
            src={Star}
            style={{ width: "15px", height: "15px", marginRight: "5px" }}
            alt=""
          />
          <div>{props.rating}</div>
        </div>
      </div>
      <p
        className={styles.recTCTitleRow}
        style={{
          marginTop: "1vh",
          fontWeight: "400",
          color: "rgba(0,0,0,0.47)",
        }}
      >
        {props.departure_date}
        {" - "}
        {props.return_date}
      </p>
      <p className={styles.recTCTitleRow} style={{ marginTop: "1vh" }}>
        {props.price}$
      </p>
    </motion.div>
  );
};
export default RecommendedTripCard;
