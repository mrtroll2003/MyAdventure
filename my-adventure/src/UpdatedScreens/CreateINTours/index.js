import React from "react";
import DestinationSection from "../../component/DestinationSection/DestinationSection";
import Footer from "../../component/Footer/Footer";
import PricedTripCard from "../../component/PricedTripCard/PricedTripCard";
import { motion } from "framer-motion";

import Header from "../../component/Header";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import { Maldives } from "../../assets/images";
import FilterIC from "../../assets/icons/filter.png";

import styles from "./styles.module.css";

class CreateInternationalTourScreen extends React.Component {
  render() {
    return (
      <div>
        {/* Viet Nam Tour Intro */}
        <div className={styles.vnTourIntroBackground}>
          <div className={styles.vnTourIntroLayer}>
            <h1 className={styles.vnTourIntroText}>INTERNATIONAL TOURS</h1>
          </div>
        </div>
        <h1 className={styles.vnHeadText}>CREATE A NEW TOUR</h1>
        <div className={styles.tourContainer}>
          <div className={styles.gridText}>Departure:</div>
          <input type="text" className={styles.enterInput}></input>
          <div className={styles.gridText}>Destination:</div>
          <input type="text" className={styles.enterInput}></input>
          <div className={styles.accordion} style={{ fontSize: "2em" }}>
            Transportation
          </div>
          <div className={styles.gridText}>Transportation’s brand:</div>
          <input type="text" className={styles.enterInput}></input>
          <div className={styles.gridText}>Departure Date:</div>
          <motion.input
            type="date"
            id="dtime"
            name="dtime"
            className={styles.enterInput}
          />
          <div className={styles.gridText}>Departure Time:</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <motion.input
              type="number"
              id="dtime_hr"
              name="dtime_hr"
              placeholder="hr"
              className={styles.enterInput}
              min="0"
              max="12"
              style={{ width: "5vw" }}
            />
            <motion.input
              type="number"
              id="dtime_min"
              name="dtime_min"
              placeholder="min"
              className={styles.enterInput}
              min="0"
              max="59"
              style={{ width: "5vw" }}
            />
            <motion.select
              className={styles.enterInput}
              name="dtime_daylight"
              style={{ width: "5vw" }}
            >
              <motion.option value="am">am</motion.option>
              <motion.option value="pm">pm</motion.option>
            </motion.select>
          </div>
          <div className={styles.gridText}>Return Date:</div>
          <motion.input
            type="date"
            id="rtime"
            name="rtime"
            className={styles.enterInput}
          />
          <div className={styles.gridText}>Return Time:</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <motion.input
              type="number"
              id="rtime_hr"
              name="rtime_hr"
              placeholder="hr"
              className={styles.enterInput}
              min="0"
              max="12"
              style={{ width: "5vw" }}
            />
            <motion.input
              type="number"
              id="rtime_min"
              name="rtime_min"
              placeholder="min"
              className={styles.enterInput}
              min="0"
              max="59"
              style={{ width: "5vw" }}
            />
            <motion.select
              className={styles.enterInput}
              name="rtime_daylight"
              style={{ width: "5vw" }}
            >
              <motion.option value="am">am</motion.option>
              <motion.option value="pm">pm</motion.option>
            </motion.select>
          </div>
          <div className={styles.accordion} style={{ fontSize: "2em" }}>
            Accommodation
          </div>
          <div className={styles.gridText}>Accommodation’s name:</div>
          <input type="text" className={styles.enterInput}></input>
          <div className={styles.gridText}>Checkin Date:</div>
          <motion.input
            type="date"
            id="citime"
            name="citime"
            className={styles.enterInput}
          />
          <div className={styles.gridText}>Checkin Time:</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <motion.input
              type="number"
              id="citime_hr"
              name="citime_hr"
              placeholder="hr"
              className={styles.enterInput}
              min="0"
              max="12"
              style={{ width: "5vw" }}
            />
            <motion.input
              type="number"
              id="citime_min"
              name="citime_min"
              placeholder="min"
              className={styles.enterInput}
              min="0"
              max="59"
              style={{ width: "5vw" }}
            />
            <motion.select
              className={styles.enterInput}
              name="citime_daylight"
              style={{ width: "5vw" }}
            >
              <motion.option value="am">am</motion.option>
              <motion.option value="pm">pm</motion.option>
            </motion.select>
          </div>
          <div className={styles.gridText}>Checkout Date:</div>
          <motion.input
            type="date"
            id="cotime"
            name="cotime"
            className={styles.enterInput}
          />
          <div className={styles.gridText}>Checkout Time:</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <motion.input
              type="number"
              id="cotime_hr"
              name="cotime_hr"
              placeholder="hr"
              className={styles.enterInput}
              min="0"
              max="12"
              style={{ width: "5vw" }}
            />{" "}
            -
            <motion.input
              type="number"
              id="cotime_min"
              name="cotime_min"
              placeholder="min"
              className={styles.enterInput}
              min="0"
              max="59"
              style={{ width: "5vw" }}
            />
            <motion.select
              className={styles.enterInput}
              name="cotime_daylight"
              style={{ width: "5vw" }}
            >
              <motion.option value="am">am</motion.option>
              <motion.option value="pm">pm</motion.option>
            </motion.select>
          </div>
          <div className={styles.gridText}>Type and quantity of room:</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <motion.input
              type="number"
              id="sroom"
              name="sroom"
              placeholder="0"
              className={styles.enterInput}
              min="0"
              style={{ width: "5vw" }}
            />
            <div className={styles.gridText} style={{ textAlign: "left" }}>
              Single room ( 1-2 adult)
            </div>
          </div>
          <div></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <motion.input
              type="number"
              id="droom"
              name="droom"
              placeholder="0"
              className={styles.enterInput}
              min="0"
              style={{ width: "5vw" }}
            />
            <div className={styles.gridText} style={{ textAlign: "left" }}>
              Double room ( 3-4 adult)
            </div>
          </div>
          <div></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <motion.input
              type="number"
              id="froom"
              name="froom"
              placeholder="0"
              className={styles.enterInput}
              min="0"
              style={{ width: "5vw" }}
            />
            <div className={styles.gridText} style={{ textAlign: "left" }}>
              Family room ( 2 adults and 2 children)
            </div>
          </div>
          <div
            style={{
              fontWeight: "bolder",
              fontSize: "2.5em",
              textAlign: "right",
              marginRight: "10%",
            }}
          >
            PRICE
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <motion.input
              type="text"
              id="price"
              name="price"
              className={styles.enterInput}
              inputmode="numeric"
            />
            <div
              className={styles.gridText}
              style={{ textAlign: "left", fontWeight: "bold" }}
            >
              VND
            </div>
          </div>
          <div className={styles.accordion} style={{ fontSize: "2em" }}>
            Schedule Detail:
          </div>
          <motion.textarea
            id="detail"
            name="detail"
            className={styles.bigInput}
            rows="10"
            cols="20"
            placeholder="Type the detailed schedule for each day"
          ></motion.textarea>
        </div>
        <motion.button
          className={styles.button}
          whileTap={{ opacity: 0.5, transition: { duration: 0.1 } }}
        >
          Create
        </motion.button>
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default CreateInternationalTourScreen;
