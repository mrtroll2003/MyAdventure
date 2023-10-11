import React from "react";
import { motion } from "framer-motion";
import MainBackground from "../../assets/images/Main_Background.png";
import "./styles.css";

class IntroBackground extends React.Component {
  render() {
    return (
      <div className="view">
        <div id="welcome" className="introContentView">
          Welcome To Our
        </div>
        <div id="companyName" className="introContentView">
          My Adventure
        </div>
        <div id="introStatement" className="introContentView">
          Enjoy your dream vacation, discover amazing places at exclusive
          details
        </div>
      </div>
    );
  }
}

export default IntroBackground;
