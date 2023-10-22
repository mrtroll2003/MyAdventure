import React from "react";
import { MyLogo } from "../../assets/logos";
import Icon from "./icon.png";
import User from "./userIcon.png";
import "./styles.css";
import { motion } from "framer-motion";

class MainTabbar extends React.Component {
  render() {
    return (
      <motion.div className="contentView">
        <motion.img src={MyLogo} alt="LOGO" className="logo" />
        <motion.div
          className="homeOption contentText"
          whileHover={{ color: "#5CD6C0" }}
          style={{ marginLeft: "25em" }}
        >
          Home
        </motion.div>
        <motion.div className="contentText" whileHover={{ color: "#5CD6C0" }}>
          Booking
        </motion.div>
        <motion.div
          className="contentText dropdown"
          whileHover={{ color: "#5CD6C0" }}
        >
          Travel
          <motion.img src={Icon} alt="icon" className="icon" />
          <motion.div className="dropdown-content">
            <motion.a
              href="#"
              whileHover={{ backgroundColor: "#FFF", color: "#5CD6C0" }}
            >
              ?
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div className="contentText" whileHover={{ color: "#5CD6C0" }}>
          {this.props.option}
        </motion.div>
        <motion.div className="contentText" whileHover={{ color: "#5CD6C0" }}>
          Contacts
        </motion.div>
        <motion.img
          src={User}
          alt="icon"
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.0 }}
          style={{ marginLeft: "5em" }}
        />
      </motion.div>
    );
  }
}

export default MainTabbar;
