import React from "react";
import { motion } from "framer-motion";

import { Link, useHistory } from "react-router-dom";
import { MyLogo } from "../../assets/logos";
import WhiteFacebookIcon from "../../assets/icons/white_facebook.png";
import WhiteMailIcon from "../../assets/icons/white_mail.png";
import WhiteInstagramIcon from "../../assets/icons/white_instagram.png";
import WhitePhoneIcon from "../../assets/icons/white_phone.png";

import styles from "./styles.module.css";
class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footerView}>
        <div className={styles.footerLogoView}>
          <img src={MyLogo} alt="My Logo" width={"100%"} />
          <h2
            style={{
              color: "#F6F893",
              fontSize: "3vh",
              marginTop: "5%",
            }}
          >
            Your Ideal Vacation Planner
          </h2>
        </div>
        <div className={styles.footerOtherView}>
          <h2 id={styles.footerBoldText}>USEFUL LINK</h2>
          <p id={styles.footerNormalText}>Get to know us</p>
          <motion.div
            className={styles.footerIconAndText}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={WhiteFacebookIcon}
              alt="white facebook ic"
              className={styles.footerIconView}
            />
            <p id={styles.footerNormalText}>Facebook</p>
          </motion.div>
          <motion.div
            className={styles.footerIconAndText}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={WhiteInstagramIcon}
              alt="white insta ic"
              className={styles.footerIconView}
            />
            <p id={styles.footerNormalText}>Instagram</p>
          </motion.div>
        </div>
        <div className={styles.footerOtherView}>
          <h2 id={styles.footerBoldText}>ALL PRODUCTS</h2>
          <p id={styles.footerNormalText}>Travel</p>
          <p id={styles.footerNormalText}>Travel Protection</p>
        </div>
        <div className={styles.footerOtherView}>
          <h2 id={styles.footerBoldText}>LET'S CONTACT</h2>
          <motion.div
            className={styles.footerIconAndText}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={WhitePhoneIcon}
              alt="white phone ic"
              className={styles.footerIconView}
            />
            <p id={styles.footerNormalText}>(+89)123456789</p>
          </motion.div>
          <motion.div
            className={styles.footerIconAndText}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={WhiteMailIcon}
              alt="white mail ic"
              className={styles.footerIconView}
            />
            <p id={styles.footerNormalText}>myadventure@gmail.com</p>
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Footer;
