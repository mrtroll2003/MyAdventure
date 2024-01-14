import React, { Component } from "react";
import styles from "./styles.module.css";
import PhoneIcon from "../../assets/icons/phone.png";
import MailIcon from "../../assets/icons/mail.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import AboutUsIcon from "../../assets/icons/about_us.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
export default class Header extends Component {
  render() {
    const handleMailTo = () => {
      window.location.href = 'mailto:myadvanture@gmail.com';
    }

    const handlePhoneClick = () => {
      window.location.href = 'tel:+89123456789';
    }

    const handleFacebookClick = () => {
      window.location.href = 'https://www.facebook.com/ltbhang';
    };
    return (
      <div className={styles.header}>
        <motion.div className={styles.container}  whileHover={{ color: "blue" }}>
          <motion.img
            src={PhoneIcon}
            className={styles.phoneIcon}
            alt="PhoneIcon.png"
          />
          <motion.p
            className={styles.text}
            whileTap={{ opacity: 0.5, transition: { duration: 0.1 } }}
            onClick={handlePhoneClick}
          >
            (+89) 123456789
          </motion.p>
        </motion.div>
        <div className={styles.container}>
          <motion.img
            src={MailIcon}
            className={styles.mailIcon}
            alt="MailIcon.png"
          />
          <motion.p
            className={styles.text}
            whileHover={{ color: "blue" }}
            whileTap={{ opacity: 0.5, transition: { duration: 0.1 } }}
            onClick={handleMailTo}
          >
            myadvanture@gmail.com
          </motion.p>
        </div>
        <Link
          className={styles.container}
          to="/about-us"
          style={{ marginLeft: "20vw" }}
        >
          <motion.img
            src={AboutUsIcon}
            className={styles.aboutUsIcon}
            alt="AboutUsIcon.png"
          />
          <motion.p
            className={styles.text}
            whileHover={{ color: "blue" }}
            whileTap={{ opacity: 0.5, transition: { duration: 0.1 } }}
          >
            Get to know us
          </motion.p>
        </Link>
        <a href="https://www.facebook.com/ltbhang" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={FacebookIcon}
            className={styles.facebookIcon}
            alt="FacebookIcon.png"
            whileHover={{ scale: 1.5 }}
            whileTap={{ opacity: 0.5, transition: { duration: 0.1 } }}
            style={{ cursor: 'pointer' }}
          />
        </a>
        <a href="https://www.instagram.com/beolee123/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={InstagramIcon}
            className={styles.instagramIcon}
            alt="InstagramIcon.png"
            whileHover={{ scale: 1.5 }}
            whileTap={{ opacity: 0.5, transition: { duration: 0.1 } }}
            style={{ cursor: 'pointer' }}
          />
        </a>
      </div>
    );
  }
}
