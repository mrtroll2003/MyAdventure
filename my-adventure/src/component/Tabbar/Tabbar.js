import React from "react";
import { MyLogo } from "../../assets/logos";

import IC_Drawer from "../../assets/icons/drawer.png";
import IC_Home from "../../assets/icons/home.png";
import IC_Cart from "../../assets/icons/shopping-cart.png";
import IC_Travel from "../../assets/icons/travel.png";
import IC_Contact from "../../assets/icons/contact.png";

import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";

class Tabbar extends React.Component {
  render() {
    return (
      <div>
        {/* Tabbar Mobile & Tablet */}
        <div className={styles.contentView2}>
          <Link to="/home">
            <img src={MyLogo} alt="LOGO" className={styles.logo} />
          </Link>

          <motion.div className={styles.container}>
            <motion.label
              className={styles.drawerIcon}
              htmlFor="display-overlay"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={IC_Drawer} alt="drawer" />
            </motion.label>
            <input
              type="checkbox"
              id="display-overlay"
              className={styles.checkDrawerIcon}
              style={{ display: "none" }}
            />
            <label htmlFor="display-overlay" className={styles.overlay}></label>
            <div className={styles.drawerView}>
              <motion.div className={styles.drawerContainer}>
                {/* <img src={User} alt="LOGO" className={styles.logoDrawer} /> */}
                <motion.div
                  className={styles.optionRow}
                  style={{ marginTop: "2.5vh" }}
                  whileHover={{ backgroundColor: "#5CD6C0" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.img
                    src={IC_Home}
                    alt="home.png"
                    className={styles.optionIcon}
                  />
                  <motion.div
                    className={styles.contentText}
                    style={{ marginLeft: "2.5vw" }}
                  >
                    <Link to="/home">Home</Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={styles.optionRow}
                  whileHover={{ backgroundColor: "#5CD6C0" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.img
                    src={IC_Travel}
                    alt="travel.png"
                    className={styles.optionIcon}
                  />
                  <motion.div className={styles.dropdown}>
                    <motion.button
                      className={styles.contentText}
                      whileInView={{ color: "gray" }}
                      whileHover={{ color: "gray" }}
                      style={{ marginLeft: "2.5vw" }}
                    >
                      Travel
                    </motion.button>
                    <motion.div
                      className={styles.dropdownContent}
                      whileHover={{ color: "gray" }}
                    >
                      <Link to="/vietnam-tours">Vietnam Tours</Link>
                      <Link to="/international-tours">International Tours</Link>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={styles.optionRow}
                  whileHover={{ backgroundColor: "#5CD6C0" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.img
                    src={IC_Contact}
                    alt="contact.png"
                    className={styles.optionIcon}
                  />
                  <motion.div
                    className={styles.contentText}
                    style={{ marginLeft: "2.5vw" }}
                  >
                    <Link to="/contact">Contact</Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={styles.optionRow}
                  whileHover={{ backgroundColor: "#5CD6C0" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div className={styles.contentText}>
                    <Link to="/sign-in">Sign In</Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={styles.optionRow}
                  whileHover={{ backgroundColor: "#5CD6C0" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.button className={styles.contentText}>
                    <Link to="/sign-up">Sign Up</Link>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          {/*  */}
        </div>
        <div className={styles.contentView1}>
          <Link to="/">
            <img src={MyLogo} alt="LOGO" className={styles.logo} />
          </Link>
          <motion.div className={styles.container}>
            <motion.div
              className={styles.contentText}
              whileHover={{ color: "#5CD6C0" }}
              style={{ marginLeft: "25em" }}
            >
              <Link to="/">Home</Link>
            </motion.div>

            <motion.div className={styles.dropdown}>
              <motion.button className={styles.contentText}>
                Travel
              </motion.button>
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
              whileHover={{ scale: "1.1" }}
            >
              <Link to="/sign-up">Sign Up</Link>
            </motion.button>

            {/* <motion.img src={User} alt="icon" className={styles.icon} whileHover={{ scale: 1.5 }}/> */}
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Tabbar;
