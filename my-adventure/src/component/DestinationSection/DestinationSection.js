import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const DestinationSection = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const navigate = useNavigate();
  return (
    <div className={styles.destinationSectionView}>
      <h1 className={styles.destinationSectionTitle}>{props.children}</h1>
      <p className={styles.destinationSectionText}>{props.text}</p>
      <Carousel className={styles.carouselContainer} responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
      <div className={styles.illustrationView}>
        <div className={styles.illustContainer}>
          <motion.img
            alt="illus01"
            src={props.img[0]}
            id="illusImage"
            whileHover={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            whileTap={{ opacity: 0.75 }}
            onClick={() => navigate("/tour-detail")}
          />
          <motion.div className={styles.illustOverlay}>
            <p className={styles.illustOverlayText}>Ha Long Bay</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ opacity: 0.5, scale: 0.9 }}
              className={styles.illustOverlayButton}
            >
              Detail
            </motion.button>
          </motion.div>
        </div>

        <div className={styles.illustContainer}>
          <motion.img
            alt="illus02"
            src={props.img[1]}
            id="illusImage"
            whileHover={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            whileTap={{ opacity: 0.75 }}
            onClick={() => navigate("/tour-detail")}
          />
          <motion.div className={styles.illustOverlay}>
            <p className={styles.illustOverlayText}>Ha Long Bay</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ opacity: 0.5, scale: 0.9 }}
              className={styles.illustOverlayButton}
            >
              Detail
            </motion.button>
          </motion.div>
        </div>

        <div className={styles.illustContainer}>
          <motion.img
            alt="illus03"
            src={props.img[2]}
            id="illusImage"
            whileHover={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            whileTap={{ opacity: 0.75 }}
            onClick={() => navigate("/tour-detail")}
          />
          <motion.div className={styles.illustOverlay}>
            <p className={styles.illustOverlayText}>Ha Long Bay</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ opacity: 0.5, scale: 0.9 }}
              className={styles.illustOverlayButton}
            >
              Detail
            </motion.button>
          </motion.div>
        </div>

        <div className={styles.illustContainer}>
          <motion.img
            alt="illus04"
            src={props.img[3]}
            id="illusImage"
            whileHover={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            whileTap={{ opacity: 0.75 }}
            onClick={() => navigate("/tour-detail")}
          />
          <motion.div className={styles.illustOverlay}>
            <p className={styles.illustOverlayText}>Ha Long Bay</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ opacity: 0.5, scale: 0.9 }}
              className={styles.illustOverlayButton}
            >
              Detail
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default DestinationSection;
