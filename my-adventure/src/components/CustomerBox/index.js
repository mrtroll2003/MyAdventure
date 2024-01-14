import React, { useState } from "react";
import styles from "./styles.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import DeleteIC from "../../assets/icons/trash.png"

const CustomerBox = ({ type, onDataChange, index, data, onDelete}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sex, setSex] = useState("Male");
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [citizenID, setCitizenID] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  console.log("index", index)

  const handleDataChange = () => {
    const customerInfo = {
      fullName,
      sex,
      isChild,
      email,
      citizenID,
      phone,
      birthDate,
      selectedFile
    };
    onDataChange(index, customerInfo);
  };


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCitizenIDChange = (event) => {
    setCitizenID(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isChild, setIsChild] = useState(false);

  const handleCheckBox = () => {
    setIsChild(!isChild);
  };

  return (
    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
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
              type === "child"
                ? require("../../assets/icons/child.png")
                : require("../../assets/icons/adult2.png")
            }
            alt="adult2"
            style={{ width: "1.5vw", height: "1.5vw" }}
          ></img>
          <div style={{ marginLeft: "2vw", fontSize: "1.2vw" }}>{fullName}</div>
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
          style={{
            marginTop: "2vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "1.2vw",
          }}
        >
          <div style={{width: "30%"}}>Full Name<span style={{color: "red"}}>*</span>:</div>
          <input
              value ={fullName}
              onChange={handleNameChange}
              onBlur={handleDataChange}
              type='text'
              style={{width: "30vw", height: "6vh", borderRadius: "0.5vw", fontSize:"1.2vw", paddingLeft: "2vw", border: "0.2vh solid black"}}
          />
        </div>
        <div
          style={{
            marginTop: "2vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "1.2vw" , width: "30%"}}>Sex<span style={{color: "red"}}>*</span>:</div>
          <div style={{ fontSize: "1.2vw" }}>
              <label>
                <input
                  disabled= {false}
                  type="radio"
                  name={`radio-${index}`}
                  value="Male"
                  checked={sex === "Male"}
                  onChange={handleChange}
                  onBlur={handleDataChange}
                /> Male
              </label>
              <label>
                <input
                  disabled= {false}
                  type="radio"
                  name={`radio-${index}`}
                  value="Female"
                  checked={sex === "Female"}
                  onChange={handleChange}
                  onBlur={handleDataChange}
                  style={{ marginLeft: "2vw" }}
                /> Female
              </label>
          </div>

          
        </div>

          { type === "both" ? (
            <div
          style={{
            marginTop: "2vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "1.2vw",
          }}
        >
          <div style={{width:"30%"}}>Is Children:</div>
          <label>
            <input
              type="checkbox"
              checked={isChild}
              onChange={handleCheckBox}
              onBlur={handleDataChange}
            />
          </label>
        </div>
          ): null}

        <div
          style={{
            marginTop: "2vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "1.2vw",
          }}
        >
          <div style={{width:"30%"}}>Date of Birthday<span style={{color: "red"}}>*</span>:</div>
          <DatePicker popupStyle={{ zIndex: 9999, position: 'fixed' }}  selected={birthDate} onChange={(date) => setBirthDate(date)} dateFormat={"dd/MM/yyyy"}  className={styles.datePicker}/>
        </div>

        {type !== "children"  && isChild !== true? (
          <div
            style={{
              marginTop: "2vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: "1.2vw",
            }}
          >
            <div style={{width: "30%"}}>Citizen ID<span style={{color: "red"}}>*</span>:</div>
            <input
                  type='text'
                  value={citizenID}
                  onChange={handleCitizenIDChange}
                  onBlur={handleDataChange}
                  style={{width: "30vw", height: "6vh", borderRadius: "0.5vw", fontSize:"1.2vw", paddingLeft: "2vw", border: "0.2vh solid black"}}
                />
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
            <div style={{ fontSize: "1.2vw" , width: "30%"}}>Birth Certificate<span style={{color: "red"}}>*</span>:</div>
            <input style={{marginLeft: "2vw"}} type="file" onChange={handleFileChange} onBlur={handleDataChange}/>
          </div>
        )}

          {
            type === "children" || isChild === true ? null : (
              <div>
              <div
          style={{
            marginTop: "2vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "1.2vw",
          }}
        >
          <div style={{width: "30%"}}>Phone Number<span style={{color: "red"}}>*</span>:</div>
          <input
              type='text'
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handleDataChange}
              style={{width: "30vw", height: "6vh", borderRadius: "0.5vw", fontSize:"1.2vw", paddingLeft: "2vw", border: "0.2vh solid black"}}
            />
        </div>

        <div
          style={{
            marginTop: "2vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "2.5vh",
          }}
        >
          <div style={{width: "30%"}}>Email:</div>
          <input
              type='text'
              value={email}
              onChange={handleEmailChange}
              onBlur={handleDataChange}
              style={{width: "30vw", height: "6vh", borderRadius: "0.5vw", fontSize:"1.2vw", paddingLeft: "2vw", border: "0.2vh solid black"}}
            />
        </div>
              </div>
            )
          }
      </div>
    </div>

          <>
          {
            type === "both" ? (
              <motion.img
              src={DeleteIC}
              alt="DeleteIcon.png"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8, opacity: 0.5 }}
              style={{
                marginLeft: "4vw",
                width: "auto",
                height: "3vh",
              }}
              onClick = {onDelete}
            ></motion.img>
            ) :null
          }
          </>
    </div>
  );
};

export default CustomerBox;
