import React from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const DestinationSection = (props) =>{
  const navigate=useNavigate();
  return (
    <div className={styles.destinationSectionView}>
      <h1 className={styles.destinationSectionTitle}>{props.children}</h1>
      <p className={styles.destinationSectionText}>{props.text}</p>
      <div className={styles.illustrationView}>
        <motion.img
          alt="illus01"
          src={props.img[0]}
          id="illusImage"
          whileHover={{
            scale: 0.95,
            transition: { duration: 0.1 },
          }}
          whileTap={{ opacity: 0.75 }}
          onClick={() => navigate('/tour-detail')}
        />
        <motion.img
          alt="illus02"
          src={props.img[1]}
          id="illusImage"
          whileHover={{
            scale: 0.95,
            transition: { duration: 0.1 },
          }}
          whileTap={{ opacity: 0.75 }}
          onClick={() => navigate('/tour-detail')}
        />
        <motion.img
          alt="illus03"
          src={props.img[2]}
          id="illusImage"
          whileHover={{
            scale: 0.95,
            transition: { duration: 0.1 },
          }}
          whileTap={{ opacity: 0.75 }}
          onClick={() => navigate('/tour-detail')}
        />
        <motion.img
          alt="illus04"
          src={props.img[3]}
          id="illusImage"
          whileHover={{
            scale: 0.95,
            transition: { duration: 0.1 },
          }}
          whileTap={{ opacity: 0.75 }}
          onClick={() => navigate('/tour-detail')}
        />
      </div>
    </div>
  );
}
export default DestinationSection;
