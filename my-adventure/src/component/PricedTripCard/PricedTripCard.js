import React from "react";
import { motion } from "framer-motion";
import Star from "../../assets/icons/star.png";

import styles from "./styles.module.css";
class PricedTripCard extends React.Component {
  state = {
    image: "",
    titleRow: "",
    rating: "",
    price: "",
    date:"",
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
        </p>
        <div className={styles.recTCRating}>
            <img src={Star} alt="" ></img>
            {this.props.rating}</div>
        <p className={styles.recTCDate}>{this.props.date}</p>
        <p className={styles.recTCPrice}>{this.props.price}</p>
      </motion.div>
    );
  }
}
export default PricedTripCard;