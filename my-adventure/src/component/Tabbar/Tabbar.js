import React from "react";
import { MyLogo } from "../../assets/logos";
import { motion } from "framer-motion";
import Icon from "./icon.png";
import "./styles.css";

class Tabbar extends React.Component {
  render() {
    return (
      <div className="contentView">
        <img src={MyLogo} alt="LOGO" className="logo" />
        <motion.div
          className="homeOption contentText"
          style={{ marginLeft: "35em", color: "#007b65" }}
        >
          Home
        </motion.div>
        <motion.div className="contentText">
          Travel
          <motion.img src={Icon} alt="icon" className="icon" />
        </motion.div>
        <motion.div className="contentText">Contacts</motion.div>
        <motion.div className="contentText" whileTap={{ scale: 1.5 }}>
          Sign in
        </motion.div>
        <motion.div className="contentText signUp" whileTap={{ scale: 1.5 }}>
          Sign up
        </motion.div>
      </div>
    );
  }
}

export default Tabbar;
