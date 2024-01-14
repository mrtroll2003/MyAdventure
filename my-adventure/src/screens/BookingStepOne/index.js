import React from "react";
import Header from "../../component/Header/index";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import IntroBackground from "../../component/IntroBackground/IntroBackground";
import { motion } from "framer-motion";
import { Maldives, Mongolia, Morocco, IntBG } from "../../assets/images";
import styles from  "./styles.module.css";
import TourSearch from "../../component/TourSearch/TourSearch";
import StarRatings from 'react-star-ratings';
import Footer from "../../component/Footer/Footer";
import RecommendedTripCard from "../../component/RecommendedTripCard/RecommendedTripCard";
import ArrowRight from "../../assets/icons/arrowRight.png";
import BlackArrowRight from "../../assets/icons/blackArrowRight.png";
import Place01 from "../../assets/images/card/Card/place01.png";
import Place02 from "../../assets/images/card/Card/place02.png";
import Place03 from "../../assets/images/card/Card/place03.png";

const BookingStepOne = () => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className={styles.welcome}><mark className={styles.highlight}>Welcome To Our</mark></h2>
          <h2 className={styles.myadventure}><mark className={styles.highlight}>My Adventure</mark></h2>
          <h2 className={styles.booking}><mark className={styles.highlight}>Booking your favorite tour to discover amazing places!</mark></h2>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "9vh"}}>
          <TourSearch/> 
        </div>

        <div style={{marginTop: "11vh", fontWeight: "500",}}>
        <div style={{marginLeft: '10vw', fontSize: "6vh", color: "black", fontWeight: "bold",}}>Domestic Tours</div>
          <div className={styles.titleRowView}>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#6E7491",
                }}
              >
                Explore unique{" "}
                <span style={{ color: "#4ABFB9" }}>places to stay</span>
              </p>
                <div style={{display: "flex", flexDirection: 'row'}}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "NunitoSans",
                      color: "#27273F",
                    }}
                  >
                    All
                  </p>
                  <motion.img
                    src={BlackArrowRight}
                    alt="black arrow right"
                    style={{ alignSelf: "center", width: '1.5vw' }}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  />
              </div>
            </div>
          <motion.div className={styles.imageBox}>
            <div className={styles.recTripView}>
              <RecommendedTripCard
                image={Place01}
                titleRow={"Stay among the atolls in"}
                titleRowPlace={"Maldives"}
                text={
                  "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages."
                }
              />
              <RecommendedTripCard
                image={Place02}
                titleRow={"Experience the Ourika Valley in "}
                titleRowPlace={"Morocco"}
                text={
                  "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East."
                }
              />
              <RecommendedTripCard
                image={Place03}
                titleRow={"Live traditionally in "}
                titleRowPlace={"Mongolia"}
                text={
                  "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel."
                }
              />
            </div>
          </motion.div>
        </div>


      <motion.div
        style={{ backgroundImage: `url(${IntBG})`, flexDirection: "column", marginTop: "20vh", paddingTop: "2vh", paddingBottom: "3vh"}}
      >
        <div style={{margin: "0vw", paddingBottom: "2vw"}}>
          <div style={{marginLeft: '10vw', fontSize: "6vh", color: "#F6F893", fontWeight: "bold",}}>International Tours</div>
          <div className={styles.titleRowView}>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#6E7491",
                }}
              >
                Explore unique{" "}
                <span style={{ color: "#4ABFB9" }}>places to stay</span>
              </p>
                <div style={{display: "flex", flexDirection: 'row'}}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "NunitoSans",
                      color: "#27273F",
                    }}
                  >
                    All
                  </p>
                  <motion.img
                    src={BlackArrowRight}
                    alt="black arrow right"
                    style={{ alignSelf: "center", width: '1.5vw' }}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  />
              </div>
            </div>
          <motion.div className={styles.imageBox}>
            <div className={styles.recTripView}>
              <RecommendedTripCard
                image={Place01}
                titleRow={"Stay among the atolls in"}
                titleRowPlace={"Maldives"}
                text={
                  "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages."
                }
              />
              <RecommendedTripCard
                image={Place02}
                titleRow={"Experience the Ourika Valley in "}
                titleRowPlace={"Morocco"}
                text={
                  "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East."
                }
              />
              <RecommendedTripCard
                image={Place03}
                titleRow={"Live traditionally in "}
                titleRowPlace={"Mongolia"}
                text={
                  "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel."
                }
              />
            </div>
          </motion.div>
          </div> 
        </motion.div>

          <div style={{marginTop: "11vh"}}>
            <div style={{marginLeft: '10vw', fontSize: "6vh", color: "black", fontWeight: "bold",}}>Customer's Feedback</div>
            <div className={styles.titleRowView}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#6E7491",
                  }}
                >
                  Explore unique{" "}
                  <span style={{ color: "#4ABFB9" }}>places to stay</span>
                </p>
                  <div style={{display: "flex", flexDirection: 'row'}}>
                    <p
                      style={{
                        fontSize: "18px",
                        fontFamily: "NunitoSans",
                        color: "#27273F",
                      }}
                    >
                      All
                    </p>
                    <motion.img
                      src={BlackArrowRight}
                      alt="black arrow right"
                      style={{ alignSelf: "center", width: '1.5vw' }}
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                    />
                </div>
              </div>

              <motion.div className={styles.reviewContainer}>
                <motion.div className={styles.reviewGrid}>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
                <motion.div className={styles.reviewGrid}>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
                <motion.div className={styles.reviewGrid}>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
                <motion.div className={styles.reviewGrid}>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
                <motion.div className={styles.reviewGrid}>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
                <motion.div className={styles.reviewGrid}>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
              </motion.div>

          </div>
          <Footer/>
        </div>
    </div>
  );
};

export default BookingStepOne;
