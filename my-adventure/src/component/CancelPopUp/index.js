import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CancelPopUp(props) {
  const navigate = useNavigate()

  const UpdateStatus = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/booking/update-status", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

        const status = await response.status;
        return status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const navigatePage = () => {
    if(props.type === "company")
    {
      window.location.href = `/company/detail-booking?id=${encodeURIComponent(props.bookingID)}`;
      window.location.reload();
       return;
    }
    else {
      navigate(`/yourbooking`)
      return;
    }
  }

  const handleAcceptClick = async (e) => {
    e.preventDefault();

    const data = {
      bookingID: props.bookingID,
      status: "Cancelled"
    }

    try {
      const response = await UpdateStatus(data)

      if (response === 200 ) {
        navigatePage()
        
      } else if (response === 401) {
        console.log("No found booking")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>ARE YOU ENSURE TO CANCEL THIS BOOKING?</h1>
        {/* <p className={styles.information}>
          Video provides a powerful way to help you prove your point. When you
          click Online Video, you can paste in the embed code for the video you
          want to add. You can also type a keyword to search online for the
          video that best fits your document. To make your document look
          professionally produced, Word provides header, footer, cover page, and
          text box designs that complement each other.
        </p> */}
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

export default CancelPopUp;
