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
        <motion.div className="homeOption contentText" whileHover={{ color: "#5CD6C0"}} style={{ marginLeft: "35em" }}>
          Home
        </motion.div>
        <motion.div className="contentText" whileHover={{ color: "#5CD6C0"}}>Booking</motion.div>
        <motion.div className="contentText dropdown" whileHover={{ color: "#5CD6C0"}}>
          Travel
            <motion.img src={Icon} alt="icon" className="icon" />
            <motion.div className="dropdown-content">
                <motion.a href="#" whileHover={{ backgroundColor: "#FFF",color: "#5CD6C0",}}>?</motion.a>
            </motion.div>
        </motion.div>
        <motion.div className="contentText" whileHover={{ color: "#5CD6C0"}}>Travel Protection</motion.div>
        <motion.div className="contentText" whileHover={{ color: "#5CD6C0"}}>Contacts</motion.div> 
        <img src={User} alt="icon" className="icon" />  
      </motion.div>
    );
  }
}

export default MainTabbar;