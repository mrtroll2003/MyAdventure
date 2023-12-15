import React from "react";
import styles from './styles.module.css';
import Departure from "../../assets/icons/departure.png";
import Location from "../../assets/icons/location.png";
import AdultNum from "../../assets/icons/adultNum.png";
import ChildNum from "../../assets/icons/childNum.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDate } from "../../constant/formatDate";

function TourContainer (props) {
  const navigate = useNavigate();
    const { departureDate, returnDate, departure, destination, numAdult, nameA, numChild, nameC, tourStatus } = props;
    const BUTTON_STATUS = {
        "Waiting for handling": <div className={styles.button} style={{backgroundColor:'#FFED8C',}}><div className={styles.buttonText}>Waiting for handling</div></div>,
        "Waiting for checking": <div className={styles.button} style={{backgroundColor:"#F5AE45",}}><div className={styles.buttonText}>Waiting for checking</div></div>,
        "Confirmed": <div className={styles.button} style={{backgroundColor:"#E4F61A",}}><div className={styles.buttonText}>Confirmed</div></div>,
        "Paid": <div className={styles.button} style={{backgroundColor:"#2CF594",}}><div className={styles.buttonText}>Paid</div></div>,
        "Successful": <div className={styles.button} style={{backgroundColor:"#30E742",}}><div className={styles.buttonText}>Successful</div></div>,
        "Cancelled": <div className={styles.button} style={{backgroundColor:"red",}}><div className={styles.buttonText}>Cancelled</div></div>,
        // "Waiting for cancel": <div className={styles.button} style={{backgroundColor:"#F31E38",}}><div className={styles.buttonText}>Waiting for cancel</div></div>,
      }
    var AdultList = nameA?.map((adult) => <li>{adult.name}</li>)
    var ChildList = nameC?.map((child) => <li>{child.name}</li>)

    const handleClick = () => {
      const url = `/booking-status?bookingID=${encodeURIComponent(props.bookingID)}`;
      navigate(url);
    };


        return (
          <motion.button className={styles.mainView} whileTap={{scale: 0.8}} onClick={handleClick}>
            <div className={styles.column}>
              <div className={styles.horizon}>
                <div className={styles.horizon1}>
                  <img className={styles.img} src={Departure} alt="departure"></img>
                  <div className={styles.label}>Expected time:</div>
                </div>
                <div className={styles.content}>{departureDate && formatDate(departureDate)} - { returnDate && formatDate(returnDate)}</div>
              </div>

              <div className={styles.horizon} style={{marginTop: "3vh"}}>
                <div className={styles.horizon1}>
                  <img className={styles.img} src={Location} alt="location"></img>
                  <div className={styles.label}>Departure and Destination:</div>
                </div>
                <div className={styles.content}>{departure} - {destination}</div>
              </div>

              <div className={styles.horizon} style={{marginTop: "3vh"}}>
                <div className={styles.horizon1}>
                  <img className={styles.img} src={AdultNum} alt="adultNum"></img>
                  <div className={styles.label}>Number of adults:</div>
                </div>
                <div className={styles.column1}>
                  <div className={styles.content} style={{fontWeight: "bold"}}>{numAdult}</div>
                  <ul className={styles.content} style={{width: "20vw", textAlign: "left"}}>{AdultList}</ul>
                </div>
              </div>

              <div className={styles.horizon} style={{marginTop: "3vh"}}>
                <div className={styles.horizon1}>
                  <img className={styles.img} src={ChildNum} alt="childNum"></img>
                  <div className={styles.label}>Number of children:</div>
                </div>
                <div className={styles.column1}>
                  <div className={styles.content} style={{fontWeight: "bold"}}>{numChild}</div>
                  <ul className={styles.content}>{ChildList}</ul>
                </div>
              </div>
            </div>

            <button>
              { BUTTON_STATUS[tourStatus] }
            </button>

          </motion.button>
    );
}
export default TourContainer;