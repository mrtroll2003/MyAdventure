import React from "react";
import { MyLogo } from "../../assets/logos";
import Icon from "./icon.png";
import User from "./userIcon.png";
import "./styles.css";

class MainTabbar extends React.Component {
  render() {
    return (
      <div className="contentView">
        <img src={MyLogo} alt="LOGO" className="logo" />
        <div className="homeOption contentText" style={{ marginLeft: "35em" }}>
          Home
        </div>
        <div className="contentText">Booking</div>
        <div className="contentText dropdown">
          Travel
            <img src={Icon} alt="icon" className="icon" />
            <div className="dropdown-content">
                <a href="#">?</a>
            </div>
        </div>
        <div className="contentText">Travel Protection</div>
        <div className="contentText">Contacts</div> 
        <img src={User} alt="icon" className="icon" />  
      </div>
    );
  }
}

export default MainTabbar;