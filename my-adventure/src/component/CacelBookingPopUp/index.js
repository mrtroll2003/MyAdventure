import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CancelBooking(props) {
  const navigate = useNavigate()

  const UpdateTourStatus = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      tourID: props.tourID,
      isCancel: true
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/tour/update-status", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const CancelBooking = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      tourID: props.tourID,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/booking/cancel-booking", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  const handleAcceptClick = () => {
    UpdateTourStatus()
    CancelBooking()
    if(props.isVNTour === true) {
        navigate("/company/vietnam-tours")
    }
    else 
        navigate("/company/international-tours")
  }


  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>ARE YOU ENSURE TO CANCEL THIS TOUR?</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: "5%",
          }}
        >
          <motion.button
            className={styles.acceptChoice}
            whileTap={{ scale: 1.2 }}
            whileHover={{ opacity: 0.7, scale: 0.9 }}
            onClick={handleAcceptClick}
          >
            Accept
          </motion.button>
          <motion.button
            className={styles.cancelChoice}
            whileTap={{ scale: 1.2 }}
            whileHover={{ opacity: 0.7, scale: 0.9 }}
            onClick={props.onClick}
          >
            Cancel
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default CancelBooking;
