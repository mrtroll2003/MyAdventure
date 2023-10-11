import React from "react";
import { MyLogo } from "../../assets/logos";
import { motion } from "framer-motion";
import Icon from "./icon.png";
import "./styles.css";

class Tabbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isOpen: false, // This is the state of the dropdown on the tabbar
    };
  }

  toggleDropDown = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div className="contentView">
        <img src={MyLogo} alt="LOGO" className="logo" />
        <motion.div
          className="homeOption contentText"
          whileTap={{ scale: 1.5 }}
          style={{ marginLeft: "35em", color: "#007b65" }}
        >
          Home
        </motion.div>
        <motion.div
          className="contentText dropdown"
          whileHover={{ scale: 1.1 }}
        >
          Travel
          <img src={Icon} alt="icon" className="icon" />
          <div className="dropdown-content">
            <a href="#">Option 1</a>
          </div>
        </motion.div>
        <motion.div className="contentText" whileTap={{ scale: 1.5 }}>
          Contacts
        </motion.div>
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
