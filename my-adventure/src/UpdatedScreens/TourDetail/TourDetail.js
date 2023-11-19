import React from "react";
import { motion } from "framer-motion";

const TourDetail = (props) => {
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
    checkin_time: "11:00 am",
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
      <div>Tour Detail</div>
    </div>
  );
};

export default TourDetail;
