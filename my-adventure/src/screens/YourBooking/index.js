import React from "react";
import data from "./fillData"
import TourContainer from "../../component/YourBookingContainer";
import styles from  "./styles.module.css"

const YourBooking = () => {
    return (
      <div className={styles.container}>
        <div className={styles.hi}>Hi, <span className={styles.mark}>Lê Thị Bích Hằng</span></div>
        <div className={styles.welcome}>We are happy that you have chosen our company for your upcoming trips. We thank you very much and wish you a rewarding experience at MyAdventure!</div>
        <div className={styles.welcome} style={{marginBottom: "5vh"}}>Here are all your booking and its status!</div>
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