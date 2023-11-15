//haven't add any navigation to this screen, delete when done
import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import CustomerTextBox from "../../components/CustomerTextBox";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/Footer/Footer";

const CancelSuccessfulBooking = () => {
    const navigate = useNavigate();
    let user = {
        name: "Lê Thị Bích Hằng",
      };
    let tour = {
        id: "1234",
        departure: "Sài Gòn",
        destination: "Sapa",
        date: "05/10/2003",
        status_code: 2,
        status: ["Cancelled", "Waiting for handling", "Paid", "Confirmed"],
      };
    let statusBackgroundColor;
      if (tour.status_code == 0) {
        statusBackgroundColor = "#FF8139";
      } else if (tour.status_code == 1) {
        statusBackgroundColor = "#FFED8C";
      } else if (tour.status_code == 2) {
        statusBackgroundColor = "#66F235";
      } else if (tour.status_code == 3) {
        statusBackgroundColor = "#F5AE45";
      }
    
      // method:
    const handleTransportChange = (event) => {};
    
    const handleHotelChange = (event) => {};
    
    const handleTourChange = (event) => {};
    
    const handleAddressChange = (event) => {};
    
    const setDeparturetDate = (event) => {};

    return (
        <div className={styles.container}>
            <div className={styles.hi}>
                Hi, <span className={styles.mark}>{user.name}</span>
            </div>
            <div className={styles.welcome}>
                We are happy that you have chosen our company for your upcoming trips.
                We thank you very much and wish you a rewarding experience at
                MyAdventure!
            </div>
            <div className={styles.mainContentContainer}>
                <div className={styles.title}>Your Booking #{tour.id}</div>

                <div className={styles.title} style={{ fontSize: "4vh" }}>
                    {tour.departure} - {tour.destination}
                </div>

                <div
                    className={styles.title}
                    style={{
                    textTransform: "capitalize",
                    fontSize: "3vh",
                }}>
                    Booking Date: {tour.date}
                </div>

                <div
                    className={styles.statusContainer}
                    style={{ backgroundColor: statusBackgroundColor }}
                >
                    {tour.status[tour.status_code]}
                </div>
                <div className={styles.warnings}>
                    ARE YOU SURE TO CANCEL?
                </div>
                <div className={styles.caution}>
                If you cancel this booking, you will lose:<br></br>
                    <b>8% fee</b> charged <b>2 weeks to 1 month</b> before departure date<br></br>
                    <b>20% fee</b> charged <b>2 weeks</b> before departure date<br></br><br></br>


                    If you accept our company policy, please fill in below information to be received fee from this booking cancellation.

                </div>
                <div className={styles.infoBox}>
                    Bank name:
                    <motion.select id="bankname" name="bankname" className={styles.box} required>
                        <motion.option value="" disabled selected>--Choose an option--</motion.option>
                        <motion.option value="bidv">BIDV</motion.option>
                        <motion.option value="tpb">TPBank</motion.option>
                    </motion.select>
                </div>
                <div className={styles.infoBox}>
                    Bank account number:
                    <motion.input type="text" id="banknum" name="banknum" className={styles.box} required/>
                </div>
                <div className={styles.infoBox}>
                    Account holder:
                    <motion.input type="text" id="accholder" name="accholder" className={styles.box} required/>
                </div>
            </div>
            <div className={styles.welcome}>
            When you click “Submit” button, it will takes about 1 week or 2 weeks to handle this refund. 
            </div>
            //re-navigation needed
            <motion.button className={styles.buttonContainer} whileTap={{scale: 0.8}} onClick={() => navigate ('/detail-booking')}>
                <div className={styles.button}>Submit</div>
            </motion.button>
        </div>
    );
};

export default CancelSuccessfulBooking;