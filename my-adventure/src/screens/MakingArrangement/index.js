import React from "react";
import Header from "../../component/Header";
import SignedInTabbar from "../../component/SignedInTabbar";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import CustomerTextBox from "../../components/CustomerTextBox";
import DatePicker from "react-datepicker";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export const MakingArrangement = () => {
  return (
    <>
      <div className={styles.makingArrangementHeaderText} id="defineFont">
        MAKING ARRANGEMENT #1234
      </div>

      <div className={styles.makingArrangementDate} id="defineFont">
        Booking Date: 01/09/2023
      </div>

      <div
        className={styles.makingArrangementTourDetailContainer}
        id="defineFont"
      >
        <div className={styles.makingArrangementTourDetailInformation}>
          <div className={styles.makingArrangementTourDetailInformationLabel}>
            Departure - Destination:{" "}
          </div>
          <div style={{ marginLeft: "150px" }}>Sài Gòn-Sapa </div>
        </div>

        <div className={styles.makingArrangementTourDetailInformation}>
          <div className={styles.makingArrangementTourDetailInformationLabel}>
            Time can start:{" "}
          </div>
          <div style={{ marginLeft: "150px" }}>30/09/2023 - 15/10/2023 </div>
        </div>

        <div className={styles.makingArrangementTourDetailInformation}>
          <div className={styles.makingArrangementTourDetailInformationLabel}>
            Expected departure time:{" "}
          </div>
          <div style={{ marginLeft: "150px" }}>05/10/2023 </div>
        </div>

        <div className={styles.makingArrangementTourDetailInformation}>
          <div className={styles.makingArrangementTourDetailInformationLabel}>
            Kind of transportation:{" "}
          </div>
          <div style={{ marginLeft: "150px" }}>Plane </div>
        </div>

        <div className={styles.makingArrangementTourDetailInformation}>
          <div className={styles.makingArrangementTourDetailInformationLabel}>
            Range of hotel:{" "}
          </div>
          <div style={{ marginLeft: "150px" }}>3 stars </div>
        </div>

        <div className={styles.makingArrangementTourDetailInformation}>
          <div className={styles.makingArrangementTourDetailInformationLabel}>
            Kind of tour:{" "}
          </div>
          <div style={{ marginLeft: "150px" }}>Economy </div>
        </div>

        <div className={styles.makingArrangementTourDetailInformation}>
          <div className={styles.makingArrangementTourDetailInformationLabel}>
            Pickup address:{" "}
          </div>
          <div style={{ marginLeft: "150px" }}>
            123 Dinh Bo Linh, ward 6, Binh Thanh Dis, HCM City
          </div>
        </div>
      </div>

      <div className={styles.makingArrangementCustomerInfoContainer}>
        <div>
          <div className={styles.makingArrangementBigHeading} id="defineFont">
            Customer's Information
          </div>
          <div className={styles.makingArrangementSmallHeading} id="defineFont">
            a. Adult
          </div>
          <div style={{ marginTop: "50px" }}>
            <CustomerTextBox name="Adult 1" type="adult" />
            <CustomerTextBox name="Adult 2" type="adult" />
          </div>
          <div className={styles.makingArrangementSmallHeading} id="defineFont">
            b. Children
          </div>
          <div style={{ marginTop: "50px" }}>
            <CustomerTextBox name="Children 1" type="children" />
            <CustomerTextBox name="Children 2" type="children" />
          </div>
        </div>
      </div>
      <div className={styles.makingArrangementRecommendContainer}>
        RECOMMENDED ARRANGEMENT
      </div>
      <div className={styles.makingArrangementRecommendCriteriaContainer}>
        <div style={{ fontSize: "4vh", fontWeight: "bold" }}>
          Transportation:{" "}
        </div>
        <div className={styles.makingArrangementRecommendCriteriaInformation}>
          <div
            className={
              styles.makingArrangementRecommendCriteriaInformationLabel
            }
          >
            Transportation's brand:{" "}
          </div>
          <input
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            type="text"
            placeholder="Enter Brand"
          ></input>
        </div>

        <div className={styles.makingArrangementRecommendCriteriaInformation}>
          <div
            className={
              styles.makingArrangementRecommendCriteriaInformationLabel
            }
          >
            Departure Date:{" "}
          </div>
          <DatePicker
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            popupStyle={{ zIndex: 9999, position: "fixed" }}
            dateFormat={"dd/MM/yyyy"}
          ></DatePicker>
        </div>

        <div className={styles.makingArrangementRecommendCriteriaInformation}>
          <div
            className={
              styles.makingArrangementRecommendCriteriaInformationLabel
            }
          >
            Departure Time:{" "}
          </div>
          <input
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            type="number"
            style={{ width: "8vw" }}
          ></input>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              marginLeft: "2%",
              marginRight: "2%",
            }}
          >
            h
          </div>
          <input
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            type="number"
            style={{ width: "8vw" }}
          ></input>
          <select
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            style={{ width: "8vw", marginLeft: "2%" }}
          >
            <option>am</option>
            <option>pm</option>
          </select>
        </div>

        <div className={styles.makingArrangementRecommendCriteriaInformation}>
          <div
            className={
              styles.makingArrangementRecommendCriteriaInformationLabel
            }
          >
            Return Date:{" "}
          </div>
          <DatePicker
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            popupStyle={{ zIndex: 9999, position: "fixed" }}
            dateFormat={"dd/MM/yyyy"}
          ></DatePicker>
        </div>

        <div className={styles.makingArrangementRecommendCriteriaInformation}>
          <div
            className={
              styles.makingArrangementRecommendCriteriaInformationLabel
            }
          >
            Return Time:{" "}
          </div>
          <input
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            type="number"
            style={{ width: "8vw" }}
          ></input>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              marginLeft: "2%",
              marginRight: "2%",
            }}
          >
            h
          </div>
          <input
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            type="number"
            style={{ width: "8vw" }}
          ></input>
          <select
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            style={{ width: "8vw", marginLeft: "2%" }}
          >
            <option>am</option>
            <option>pm</option>
          </select>
        </div>
      </div>

      <div className={styles.makingArrangementRecommendCriteriaContainer}>
        <div style={{ fontSize: "4vh", fontWeight: "bold" }}>
          Accommodation:{" "}
        </div>
        <div className={styles.makingArrangementRecommendCriteriaInformation}>
          <div
            className={
              styles.makingArrangementRecommendCriteriaInformationLabel
            }
          >
            Accommodation's name:{" "}
          </div>
          <input
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            type="text"
            placeholder="Enter Name"
          ></input>
        </div>

        <div className={styles.makingArrangementRecommendCriteriaInformation}>
          <div
            className={
              styles.makingArrangementRecommendCriteriaInformationLabel
            }
          >
            Checkin Date:{" "}
          </div>
          <DatePicker
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            popupStyle={{ zIndex: 9999, position: "fixed" }}
            dateFormat={"dd/MM/yyyy"}
          ></DatePicker>
        </div>

        <div className={styles.makingArrangementRecommendCriteriaInformation}>
          <div
            className={
              styles.makingArrangementRecommendCriteriaInformationLabel
            }
          >
            Checkin Time:{" "}
          </div>
          <input
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            type="number"
            style={{ width: "8vw" }}
          ></input>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              marginLeft: "2%",
              marginRight: "2%",
            }}
          >
            h
          </div>
          <input
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            type="number"
            style={{ width: "8vw" }}
          ></input>
          <select
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            style={{ width: "8vw", marginLeft: "2%" }}
          >
            <option>am</option>
            <option>pm</option>
          </select>
        </div>

        <div className={styles.makingArrangementRecommendCriteriaInformation}>
          <div
            className={
              styles.makingArrangementRecommendCriteriaInformationLabel
            }
          >
            Checkout Date:{" "}
          </div>
          <DatePicker
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            popupStyle={{ zIndex: 9999, position: "fixed" }}
            dateFormat={"dd/MM/yyyy"}
          ></DatePicker>
        </div>

        <div className={styles.makingArrangementRecommendCriteriaInformation}>
          <div
            className={
              styles.makingArrangementRecommendCriteriaInformationLabel
            }
          >
            Checkout Time:{" "}
          </div>
          <input
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            type="number"
            style={{ width: "8vw" }}
          ></input>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              marginLeft: "2%",
              marginRight: "2%",
            }}
          >
            h
          </div>
          <input
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            type="number"
            style={{ width: "8vw" }}
          ></input>
          <select
            className={
              styles.makingArrangementRecommendCriteriaInformationInput
            }
            style={{ width: "8vw", marginLeft: "2%" }}
          >
            <option>am</option>
            <option>pm</option>
          </select>
        </div>

        <div className={styles.makingArrangementRecommendCriteriaInformation}>
          <div
            className={
              styles.makingArrangementRecommendCriteriaInformationLabel
            }
          >
            Type and quantity of room:{" "}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "50vw",
                alignItems: "center",
                marginTop: "3vh",
              }}
            >
              <input
                className={
                  styles.makingArrangementRecommendCriteriaInformationInput
                }
                type="number"
                style={{ width: "8vw" }}
              ></input>
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginLeft: "2%",
                  marginRight: "2%",
                }}
              >
                Single room (1 - 2 adults){" "}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "50vw",
                alignItems: "center",
                marginTop: "3vh",
              }}
            >
              <input
                className={
                  styles.makingArrangementRecommendCriteriaInformationInput
                }
                type="number"
                style={{ width: "8vw" }}
              ></input>
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginLeft: "2%",
                  marginRight: "2%",
                }}
              >
                Double room (3 - 4 adults){" "}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "50vw",
                alignItems: "center",
                marginTop: "3vh",
              }}
            >
              <input
                className={
                  styles.makingArrangementRecommendCriteriaInformationInput
                }
                type="number"
                style={{ width: "8vw" }}
              ></input>
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginLeft: "2%",
                  marginRight: "2%",
                }}
              >
                Family room (2 adults and 2 children){" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.makingArrangementRecommendCriteriaContainer}>
        <div style={{ fontSize: "4vh", fontWeight: "bold" }}>
          Schedule detail:{" "}
        </div>
        <textarea
          className={styles.makingArrangementRecommendSchedule}
          style={{ width: "90vw", height: "80vh" }}
          type="text"
          placeholder="Type the detailed schedule for each day"
        ></textarea>
      </div>

      <div className={styles.makingArrangementRecommendNoteText}>
        Press "Arrange" button to notify to customer about recommended
        arrangement!{" "}
      </div>

      <motion.button
        className={styles.makingArrangementRecommendButton}
        whileHover={{ scale: 1.2 }}
        whileTap={{ rotate: 5, scale: 0.8 }}
        transition={{ duration: 0.1 }}
      >
        Arrange
      </motion.button>
    </>
  );
};
