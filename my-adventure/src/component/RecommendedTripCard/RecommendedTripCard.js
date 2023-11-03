import React from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.css";
class RecommendedTripCard extends React.Component {
  state = {
    image: "",
    titleRow: "",
    titleRowPlace: "",
    text: "",
  };
  render() {
    return (
      <motion.div
        class={styles.recTCView}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={this.props.image} alt="Place01" className={styles.recTCImage} />
        <p className={styles.recTCTitleRow}>
          {this.props.titleRow}{" "}
          <span style={{ color: "#5C90D6" }}>{this.props.titleRowPlace}</span>
        </p>
        <p className={styles.recTCContentText}>{this.props.text}</p>
      </motion.div>
    );
  }
}
export default RecommendedTripCard;
