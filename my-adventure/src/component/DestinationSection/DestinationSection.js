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
      items: 4,
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

  const handleClick = (destination) => {
    // console.log('Clicked:', id);
    const url = `/destination-detail?destination=${encodeURIComponent(destination)}`;
    navigate(url);
  };

  // const handleClick = () => {
  //   navigate(`/destination-detail`)
  // }

  return (
    <div>
      <div className={styles.destinationSectionView}>
        <h1 className={styles.destinationSectionTitle}>{props.children}</h1>
        <p className={styles.destinationSectionText}>{props.text}</p>
      </div>
      {
        props.img && props.img.length > 0 && (
          <>
          <Carousel className={styles.carouselContainer}  responsive={responsive}>
          {
            props.img && props.img.map((image) => (
              <>
              <div className={styles.illustContainer}>
                <img
                  alt={image?.name}
                  src={image?.images[0]}
                  id={image?.name}
                  onClick={() => navigate("/tour-detail")}
                  style={{
                    objectFit: "cover",
                    height: "25vw",
                    width: "100%",
                  }}
                />
                <motion.div className={styles.illustOverlay}>
                  <p className={styles.illustOverlayText}>{image?.name}</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ opacity: 0.5, scale: 0.9 }}
                    className={styles.illustOverlayButton}
                    onClick={() => handleClick(image?.name)}
                  >
                    View more
                  </motion.button>
                </motion.div>
              </div>
              </>
            ))
          }
        </Carousel>
          </>
        )
      }
    </div>
  );
};
export default DestinationSection;
