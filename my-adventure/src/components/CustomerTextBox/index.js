import React, { useState } from "react";
import styles from "./styles.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import ImagePopUp from "../../component/ImagePopUp";

const CustomerTextBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.customerBox} ${isOpen ? styles.open : ""}`}>
      <div
        className={styles.boxContainer}
        onClick={toggleDropdown}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={
              props.type === "adult"
                ? require("../../assets/icons/adult2.png")
                : require("../../assets/icons/child.png")
            }
            alt="adult2"
            style={{ width: "1.5vw", height: "1.5vw" }}
          ></img>
          <div className={styles.commonText} style={{ marginLeft: "2vw" }}>
            {props.name}
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            marginRight: "2vw",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={require("../../assets/icons/dropdownClose.png")}
            alt="toggleButton"
            className={styles.button}
          />
        </button>
      </div>
      <div className={styles.details}>
        <div
          className={styles.commonText}
          style={{
            marginTop: "2vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ width: "30%" }}>Full Name:</div>
          <div>{props.name}</div>
        </div>
        <div
          className={styles.commonText}
          style={{
            marginTop: "2vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ width: "30%" }}>Sex:</div>
          <div>{props.sex}</div>
        </div>
        <div
          className={styles.commonText}
          style={{
            marginTop: "2vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ width: "30%" }}>Date of Birthday:</div>
          <div>{props.dob}</div>
        </div>

        {props.type === "adult" ? (
          <div
            className={styles.commonText}
            style={{
              marginTop: "2vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ width: "30%" }}>Citizen ID:</div>
            <div>{props.ID}</div>
          </div>
        ) : (
          <div
            className={styles.row}
            style={{
              marginTop: "3vh",
              marginBottom: "1vh",
              justifyContent: "flex-start",
            }}
          >
            <div className={styles.commonText} style={{ width: "30%" }}>
              Birth Certificate:
            </div>
            <motion.button onClick={props.onClick}>
              <img
                src={props.birthCert}
                alt="birthcert"
                style={{ width: "5vw", height: "auto", marginLeft: "7vw" }}
              ></img>
            </motion.button>
            {/* <span style={{ marginLeft: "2vw", fontSize: "1.2vw" }}>
              birthcert.png
            </span> */}
          </div>
        )}

        {props.type === "adult" && (
          <div>
            <div
              className={styles.commonText}
              style={{
                marginTop: "2vh",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ width: "30%" }}>Phone Number:</div>
              <div>{props.phone}</div>
            </div>

            <div
              className={styles.commonText}
              style={{
                marginTop: "2vh",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ width: "30%" }}>Email:</div>
              <div>{props.email}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerTextBox;
