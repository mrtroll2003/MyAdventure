import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function CancelPopUp({ chooseClose, ChooseAccept }) {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>ARE YOU ENSURE TO CANCEL THIS BOOKING?</h1>
        <p className={styles.information}>
          Video provides a powerful way to help you prove your point. When you
          click Online Video, you can paste in the embed code for the video you
          want to add. You can also type a keyword to search online for the
          video that best fits your document. To make your document look
          professionally produced, Word provides header, footer, cover page, and
          text box designs that complement each other.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: "1%",
          }}
        >
          <motion.button
            className={styles.acceptChoice}
            whileTap={{ scale: 1.2 }}
            whileHover={{ opacity: 0.7, scale: 0.9 }}
            onClick={() => {
              chooseClose(false);
            }}
          >
            Accept
          </motion.button>
          <motion.button
            className={styles.cancelChoice}
            whileTap={{ scale: 1.2 }}
            whileHover={{ opacity: 0.7, scale: 0.9 }}
            onClick={() => {
              chooseClose(false);
            }}
          >
            Cancel
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default CancelPopUp;
