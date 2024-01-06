import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Delete from "../../assets/icons/delete.png";

function ImagePopUp(props) {
  return (
    <>
      <div className={styles.container}>
        <img src={props.imageUrl} alt="payment" className={styles.image}></img>
        <motion.button className={styles.closeIc} onClick={props.onClick}>
            <img src={Delete} alt="delte"></img>
        </motion.button>
      </div>
    </>
  );
}

export default ImagePopUp;


