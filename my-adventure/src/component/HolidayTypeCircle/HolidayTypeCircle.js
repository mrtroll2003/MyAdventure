import React from "react";

import Circle from "../../assets/icons/circle.png";

import "./styles.css";

class HolidayTypeCircle extends React.Component {
  render() {
    return (
      <div
        style={{
          //   justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div id="circleView">
          <img src={this.props.image} alt="holiday type img" id="circleImage" />
        </div>
        <h2 style={{ fontFamily: "NunitoSans", fontSize: "3vh", marginTop: "2vh" }}>
          {this.props.holidayTypeName}
        </h2>
      </div>
    );
  }
}

export default HolidayTypeCircle;
