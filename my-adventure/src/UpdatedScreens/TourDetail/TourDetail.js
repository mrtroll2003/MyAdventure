import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

import HalfDaNang from "../../assets/images/half_danang.png";
import HalfHaLong from "../../assets/images/half_halong.png";

import Footer from "../../component/Footer/Footer";

const TourDetail = (props) => {
  let tour_title = {
    departure: "Da Nang",
    destination: "Ha Long Bay",
    departure_date: "15/11/2023",
    return_date: "20/10/2023",
  };
  let transportation = {
    brand: "Viet Nam Airlines",
    departure_date: "10/10/2023",
    departure_time: "8:00 am",
    return_date: "15/11/2023",
    return_time: "3:00 pm",
  };
  let accommodation = {
    accommodation_name: "Intercoin Hotel",
    checkin_date: "10/10/2023",
    checkin_time: "11:00 am",
    checkout_date: "20/11/2023",
    checkout_time: "11:00 am",
  };
  let content_day1 = [
    "Arrive in Ha Long Bay and check-in to your accommodation.",
    "Settle in and take some time to relax and enjoy the beautiful surroundings.",
    "In the evening, you can explore the local area, dine at a local restaurant, or simply unwind at your accommodation.",
  ];
  let content_day2 = [
    "Board a cruise ship and start your exploration of Ha Long Bay.",
    "Cruise through the stunning limestone karsts and emerald waters.",
    "Visit Lan Ha Bay, a less crowded area known for its pristine beauty.",
    "Enjoy various activities such as swimming, kayaking, or simply relaxing on the deck.",
    "Explore Dark and Bright Cave, where you can kayak through the cave and witness its unique rock formations.",
    "Overnight stay on the cruise ship.",
  ];
  let content_day3 = [
    "Continue your cruise through Ha Long Bay, taking in the breathtaking scenery.",
    "Visit Cat Ba Island, the largest island in the bay.",
    "Explore Cat Ba National Park, known for its diverse flora and fauna.",
    "Take a hike or bike ride through the park to enjoy the lush greenery and panoramic views.",
    "Optional: Relax on one of the pristine beaches on Cat Ba Island.",
    "Overnight stay on the cruise ship.",
  ];
  let content_day4 = [
    "Visit a floating village to get a glimpse of the local way of life on the bay.",
    "Take a traditional rowing boat or kayak to explore the village and interact with the locals.",
    "Enjoy a seafood lunch on the cruise ship while taking in the final views of Ha Long Bay.",
    "Disembark from the cruise ship and transfer back to Hanoi or your next destination.",
  ];
  let details = {
    day1: ["Arrival in Ha Long Bay", content_day1],
    day2: ["Ha Long Bay Cruise - Lan Ha Bay", content_day2],
    day3: ["Ha Long Bay - Cat Ba Island", content_day3],
    day4: ["Ha Long Bay - Floating Village - Departure", content_day4],
  };
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* Left background */}
        <div
          className={styles.halfIntroBackground}
          style={{ backgroundImage: `url(${HalfDaNang})` }}
        >
          <div className={styles.halfIntroBackgroundLayer}>Da Nang</div>
        </div>
        {/* Right background */}
        <div
          className={styles.halfIntroBackground}
          style={{ backgroundImage: `url(${HalfHaLong})` }}
        >
          <div className={styles.halfIntroBackgroundLayer}>Ha Long Bay</div>
        </div>
      </div>
      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className={styles.titleText}
          style={{ fontSize: "70px", marginTop: "2.5%", fontWeight: "800" }}
        >
          Tour details
        </h1>
        <h2
          className={styles.titleText}
          style={{ fontSize: "45px", margin: "0px", fontWeight: "600" }}
        >
          {tour_title.departure}
          {" - "}
          {tour_title.destination}
        </h2>
        <h3
          className={styles.titleText}
          style={{ fontSize: "35px", margin: "0px", fontWeight: "400" }}
        >
          {tour_title.departure_date}
          {" - "}
          {tour_title.return_date}
        </h3>
      </div>
      {/* Transportation */}
      <div
        className={styles.text}
        style={{ marginLeft: "5%", marginTop: "5%" }}
      >
        Transportation:
      </div>
      <div className={styles.horizontal}>
        <div className={styles.firstHalf}>
          <p className={styles.leftText}>Transportation's brand: </p>
          <p className={styles.leftText}>Departure Date: </p>
          <p className={styles.leftText}>Departure Time: </p>
          <p className={styles.leftText}>Return Date: </p>
          <p className={styles.leftText}>Return Time: </p>
        </div>
        <div className={styles.secondHalf}>
          <p className={styles.rightText}>{transportation.brand}</p>
          <p className={styles.rightText}>{transportation.departure_date}</p>
          <p className={styles.rightText}>{transportation.departure_time}</p>
          <p className={styles.rightText}>{transportation.return_date}</p>
          <p className={styles.rightText}>{transportation.return_time}</p>
        </div>
      </div>
      {/* Accommodation */}
      <div
        className={styles.text}
        style={{ marginLeft: "5%", marginTop: "1.5%" }}
      >
        Accommodation:
      </div>
      <div className={styles.horizontal}>
        <div className={styles.firstHalf}>
          <p className={styles.leftText}>Accommodation's name: </p>
          <p className={styles.leftText}>Checkin Date: </p>
          <p className={styles.leftText}>Checkin Time: </p>
          <p className={styles.leftText}>Checkout Date: </p>
          <p className={styles.leftText}>Checkout Time: </p>
        </div>
        <div className={styles.secondHalf}>
          <p className={styles.rightText}>{accommodation.accommodation_name}</p>
          <p className={styles.rightText}>{accommodation.checkin_date}</p>
          <p className={styles.rightText}>{accommodation.checkin_time}</p>
          <p className={styles.rightText}>{accommodation.checkout_date}</p>
          <p className={styles.rightText}>{accommodation.checkout_time}</p>
        </div>
      </div>
      {/* Schedule Details */}
      <div
        className={styles.text}
        style={{ marginLeft: "5%", marginTop: "1.5%" }}
      >
        Schedule Details:
      </div>
      <div className={styles.text}></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TourDetail;
