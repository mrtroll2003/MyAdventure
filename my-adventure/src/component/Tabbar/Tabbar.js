import React from "react";
import { MyLogo } from "../../assets/logos";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";

class Tabbar extends React.Component {
  render() {
    return (
      <div className={styles.contentView1}>
        <Link to="/"><img src={MyLogo} alt="LOGO" className={styles.logo} /></Link>
        <motion.div className={styles.container}>
          <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            style={{ marginLeft: "25em" }}
            >
            <Link to="/">Home</Link>
          </motion.div>

          <motion.div className={styles.dropdown}>
            <motion.button className={styles.contentText}>Travel</motion.button>
            <motion.div className={styles.dropdownContent}>
              <Link to="/vietnam-tours">Vietnam Tours</Link>
              <Link to="/international-tours">International Tours</Link>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            >
            <Link to="/contact">Contacts</Link>
          </motion.div>

          <motion.div
            className={styles.contentText}
            whileHover={{ color: "#5CD6C0" }}
            >
            <Link to="/sign-in">Sign In</Link>
          </motion.div>

          <motion.button
            className={styles.button}
            whileHover={{scale: "1.1"}}
            >
            <Link to="/sign-up">Sign Up</Link>
          </motion.button>

          {/* <motion.img src={User} alt="icon" className={styles.icon} whileHover={{ scale: 1.5 }}/> */}
        </motion.div>
      </div>
    );
  }
}

export default Tabbar;