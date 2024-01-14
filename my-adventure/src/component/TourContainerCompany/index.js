import React from "react";
import styles from "./styles.module.css";
import Departure from "../../assets/icons/departure.png";
import Location from "../../assets/icons/location.png";
import FullName from "../../assets/icons/fullName.png";
import Phone from "../../assets/icons/phone.png";
import AdultNum from "../../assets/icons/adultNum.png";
import ChildNum from "../../assets/icons/childNum.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDate } from "../../constant/formatDate";

function TourContainerCompany(props) {
  const navigate = useNavigate();
  const {
    departure,
    destination,
    departureDate,
    returnDate,
    numAdult,
    numChild,
    tourStatus,
    bookingDate,
    color,
    fullName,
    phone,
    type,
    key,
  } = props;
  const BUTTON_STATUS = {
    "Waiting for handling": (
      <div className={styles.button} style={{ backgroundColor: "#FFED8C" }}>
        <div className={styles.buttonText}>Waiting for handling</div>
      </div>
    ),
    "Waiting for checking": (
      <div className={styles.button} style={{ backgroundColor: "#F5AE45" }}>
        <div className={styles.buttonText}>Waiting for checking</div>
      </div>
    ),
    Confirmed: (
      <div className={styles.button} style={{ backgroundColor: "#99FFCD" }}>
        <div className={styles.buttonText}>Confirmed</div>
      </div>
    ),
    Paid: (
      <div className={styles.button} style={{ backgroundColor: "#2CF594" }}>
        <div className={styles.buttonText}>Paid</div>
      </div>
    ),
    Finish: (
      <div className={styles.button} style={{ backgroundColor: "#22EAAA" }}>
        <div className={styles.buttonText}>Finish</div>
      </div>
    ),
    Cancelled: (
      <div className={styles.button} style={{ backgroundColor: "#FF4A4A" }}>
        <div className={styles.buttonText}>Cancelled</div>
      </div>
    ),
  };

  const handleClick = () => {
    const url = `/company/detail-booking?id=${encodeURIComponent(props.id)}`;
    navigate(url);
  };
  return (
    <motion.button
      className={styles.mainView}
      whileTap={{ scale: 0.8 }}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <div className={styles.column}>
        {type === "booking" && (
          <div className={styles.horizon}>
            <div className={styles.horizon1}>
              <img className={styles.img} src={Location} alt="location"></img>
              <div className={styles.label}>Departure and Destination:</div>
            </div>
            <div className={styles.content}>
              {departure} - {destination}
            </div>
          </div>
        )}

        {type === "booking" && (
          <div className={styles.horizon} style={{ marginTop: "3vh" }}>
            <div className={styles.horizon1}>
              <img className={styles.img} src={Departure} alt="departure"></img>
              <div className={styles.label}>Expected time:</div>
            </div>
            <div className={styles.content}>
              {formatDate(departureDate)} - {formatDate(returnDate)}
            </div>
          </div>
        )}

        <div className={styles.horizon} style={{ marginTop: "3vh" }}>
          <div className={styles.horizon1}>
            <img className={styles.img} src={FullName} alt="location"></img>
            <div className={styles.label}>Full name:</div>
          </div>
          <div className={styles.content}>{fullName}</div>
        </div>

        <div className={styles.horizon} style={{ marginTop: "3vh" }}>
          <div className={styles.horizon1}>
            <img className={styles.img} src={Phone} alt="location"></img>
            <div className={styles.label}>Phone:</div>
          </div>
          <div className={styles.content}>{phone}</div>
        </div>

        <div className={styles.horizon} style={{ marginTop: "3vh" }}>
          <div className={styles.horizon1}>
            <img className={styles.img} src={AdultNum} alt="adultNum"></img>
            <div className={styles.label}>Number of adults:</div>
          </div>
          <div className={styles.column1}>
            <div className={styles.content} style={{ fontWeight: "bold" }}>
              {numAdult}
            </div>
            {/* <ul className={styles.content} style={{width: "20vw", textAlign: "left"}}>{AdultList}</ul> */}
          </div>
        </div>

        <div className={styles.horizon} style={{ marginTop: "3vh" }}>
          <div className={styles.horizon1}>
            <img className={styles.img} src={ChildNum} alt="childNum"></img>
            <div className={styles.label}>Number of children:</div>
          </div>
          <div className={styles.column1}>
            <div className={styles.content} style={{ fontWeight: "bold" }}>
              {numChild}
            </div>
            {/* <ul className={styles.content}>{ChildList}</ul> */}
          </div>
        </div>
      </div>

      <div>
        <div>
          {/* <div  className={styles.bookingID}>#{bookingID}</div> */}
          <div className={styles.bookingDate}>{formatDate(bookingDate)}</div>
        </div>
        <button style={{ marginTop: "5vh" }}>
          {BUTTON_STATUS[tourStatus]}
        </button>
      </div>
    </motion.button>
  );
}
export default TourContainerCompany;
