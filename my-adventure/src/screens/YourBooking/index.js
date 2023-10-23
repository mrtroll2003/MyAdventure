import React from "react";
import Header from "../../component/Header";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import data from "./fillData"
import TourContainer from "../../component/YourBookingContainer";
import "./styles.css"

const YourBooking = () => {
    return (
      <div className="container">
        <Header></Header>
        <MainTabbar option={"Your Booking"}></MainTabbar>
        {data.map(booking => (
        <TourContainer
          key={booking.id}
          expectedTime={booking.expectedTime}
          route={booking.route}
          numAdult={booking.numAdult}
          nameA={booking.nameA}
          numChild={booking.numChild}
          nameC={booking.nameC}
          tourStatus={booking.tourStatus}
        />
      ))}
      </div>
    );
  };
  
  export default YourBooking;