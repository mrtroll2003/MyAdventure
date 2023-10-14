import React from "react";
import { motion } from "framer-motion";

import { MyLogo } from "../../assets/logos";
import WhiteFacebookIcon from "../../assets/icons/white_facebook.png";
import WhiteMailIcon from "../../assets/icons/white_mail.png";
import WhiteInstagramIcon from "../../assets/icons/white_instagram.png";
import WhitePhoneIcon from "../../assets/icons/white_phone.png";

import "./styles.css";
class Footer extends React.Component {
  render() {
    return (
      <div className="footerView">
        <div className="footerLogoView">
          <img src={MyLogo} alt="My Logo" width={"100%"} />
          <h2
            style={{
              fontFamily: "NunitoSans",
              color: "#F6F893",
              fontSize: "25px",
              marginTop: "5%",
            }}
          >
            Your Ideal Vacation Planner
          </h2>
        </div>
        <div className="footerOtherView">
          <h2 id="footerBoldText">USEFUL LINK</h2>
          <p id="footerNormalText">Get to know us</p>
          <motion.div
            className="footerIconAndText"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={WhiteFacebookIcon}
              alt="white facebook ic"
              className="footerIconView"
            />
            <p id="footerNormalText">Facebook</p>
          </motion.div>
          <motion.div
            className="footerIconAndText"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={WhiteInstagramIcon}
              alt="white insta ic"
              className="footerIconView"
            />
            <p id="footerNormalText">Instagram</p>
          </motion.div>
        </div>
        <div className="footerOtherView">
          <h2 id="footerBoldText">ALL PRODUCTS</h2>
          <p id="footerNormalText">Travel</p>
          <p id="footerNormalText">Travel Protection</p>
        </div>
        <div className="footerOtherView">
          <h2 id="footerBoldText">LET'S CONTACT</h2>
          <motion.div
            className="footerIconAndText"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={WhitePhoneIcon}
              alt="white phone ic"
              className="footerIconView"
            />
            <p id="footerNormalText">(+89)123456789</p>
          </motion.div>
          <motion.div
            className="footerIconAndText"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={WhiteMailIcon}
              alt="white mail ic"
              className="footerIconView"
            />
            <p id="footerNormalText">myadventure@gmail.com</p>
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Footer;
