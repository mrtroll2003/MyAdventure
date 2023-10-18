import React from "react";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import Header from "../../component/Header";

import "./styles.css";

class VietNamTourScreen extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainTabbar option={"Your Booking"} />
        <div className="vnTourIntroBackground">
          <div className="vnTourIntroLayer">
            <h1 className="vnTourIntroText">OUR VIETNAM TOURS</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default VietNamTourScreen;
