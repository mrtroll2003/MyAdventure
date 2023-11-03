import React from "react";
import { MyLogo } from "../../assets/logos";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

class Tabbar extends React.Component {
  render() {
    return (
      <div className={styles.contentView1}>
        <img src={MyLogo} alt="LOGO" className={styles.logo}/>
        <motion.div className={styles.container}>
          <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            style={{ marginLeft: "25em" }}
            >
            Home
          </motion.div>

          <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            >
            Travel
          </motion.div>

          <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            >
            Contacts
          </motion.div>

          <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            >
            Sign In
          </motion.div>

          <motion.button
            className={styles.button}
            whileHover={{scale: "1.1"}}
            >
            Sign Up
          </motion.button>

          {/* <motion.img src={User} alt="icon" className={styles.icon} whileHover={{ scale: 1.5 }}/> */}
        </motion.div>
      </div>
    );
  }
}

export default Tabbar;