import React from "react";
import { MyLogo } from "../../assets/logos";
import Icon from "./icon.png";
import "./styles.css";

class Tabbar extends React.Component {
  render() {
    return (
      <div className="contentView">
        <img src={MyLogo} alt="LOGO" className="logo" />
        <div className="homeOption contentText" style={{ marginLeft: "35em" }}>
          Home
        </div>
        <div className="contentText">
          Travel
          <img src={Icon} alt="icon" className="icon" />
        </div>

        <div className="contentText">Contacts</div>
        <div className="contentText">Sign in</div>
        <div className="contentText signUp">Sign up</div>
      </div>
    );
  }
}

export default Tabbar;
