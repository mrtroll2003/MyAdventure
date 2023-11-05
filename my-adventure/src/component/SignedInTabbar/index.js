import React from "react";
import { MyLogo } from "../../assets/logos";
import Icon from "./icon.png";
import User from "./userIcon.png";
import "./styles.css";
import { motion } from "framer-motion";

class SignedInTabbar extends React.Component {
  render() {
    return (
    <div className="signedInTabbarContentView">
        <img src={MyLogo} alt="LOGO" className="logo" />
        <motion.div
          className="homeOption contentText"
          whileTap={{ scale: 1.5 }}
          whileHover={{color:"#007b65"}}
          style={{ marginLeft: "30em"}}
        >
          Home
        </motion.div>

        <motion.div 
          className="contentText" 
          whileTap={{ scale: 1.5 }} 
          whileHover={{color:"#007b65"}}>
          Booking Management
        </motion.div>
        <motion.div className="contentText" whileTap={{ scale: 1.5 }} whileHover={{color:"#007b65"}}>
          Report
        </motion.div>
        <motion.img
          src={User}
          alt="icon"
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.0 }}
          style={{ marginLeft: "10em" }}
        />
      </div>
    );
  }
}

export default SignedInTabbar;