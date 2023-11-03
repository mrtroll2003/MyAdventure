import React from "react";
import { MyLogo } from "../../assets/logos";
import Icon from "./icon.png";
import User from "./userIcon.png";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class MainTabbar extends React.Component {
  render() {
    return (
      <div className={styles.contentView1}>
        <img src={MyLogo} alt="LOGO" className={styles.logo} />
        <motion.div className={styles.container}>
          <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            style={{ marginLeft: "25em" }}
            >
            <Link to="/">Home</Link>
          </motion.div>

          <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            >
            <Link to="/booking">Booking</Link>
          </motion.div>

          {/* <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            >
            <motion.label>Travel
              <select>
                <option value="vietnam">Vietnam Tour</option>
                <option value="international">International Tour</option>
              </select>
            </motion.label>
          </motion.div> */}

          <motion.div className={styles.dropdown}>
            <motion.button className={styles.contentText}>Travel</motion.button>
            <motion.div className={styles.dropdownContent}>
              <a href="/vietnam-tours">Vietnam Tours</a>
              <a href="/international-tours">International Tours</a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            >
            <Link to="/yourbooking">Your Booking</Link>
          </motion.div>

          <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            >
            Contacts
          </motion.div>

          <motion.img src={User} alt="icon" className={styles.icon} whileHover={{ scale: 1.5 }}/>
        </motion.div>
      </div>
    );
  }
}

export default MainTabbar;