import React, { useState } from "react";
import styles from "./styles.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomerBox = ({ type, name, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(data?.sex);
  // const [startDate, setStartDate] = useState(new Date(data?.startDate));
  const [fullName, setFullName] = useState(data?.fullName);
  const [email, setEmail] = useState(data?.email);
  const [citizenID, setCitizenID] = useState(data?.citizenID);
  const [phone, setPhone] = useState(data?.phone);
  const validDate = data?.startDate && !isNaN(new Date(data.startDate));
  const [startDate, setStartDate] = useState(validDate ? new Date(data.startDate) : new Date());

  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
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
              type === "adult"
                ? require("../../assets/icons/adult2.png")
                : require("../../assets/icons/child.png")
            }
            alt="adult2"
            style={{ width: "1.5vw", height: "1.5vw" }}
          ></img>
          <div style={{ marginLeft: "2vw", fontSize: "3vh" }}>{name}</div>
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
            fontSize: "2.5vh",
          }}
        >
          <div style={{width: "30%"}}>Full Name:</div>
          <input
              value ={fullName}
              onChange={handleNameChange}
              type='text'
              style={{width: "30vw", height: "6vh", borderRadius: "10vh", fontSize:"2.3vh", paddingLeft: "2vw", border: "0.2vh solid black"}}
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
          <div style={{ fontSize: "2.5vh" , width: "30%"}}>Sex:</div>
          <div style={{fontSize: "2.5vh"}}>
              <input type="radio" name="option" value="Male" checked={selectedOption === "Male"} onChange={handleChange} /> Male
              <input type="radio" name="option" value="Female" checked={selectedOption === "Female"} onChange={handleChange} style={{marginLeft: "5vw"}}/> Female
            </div>
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
          <div style={{width:"30%"}}>Date of Birthday:</div>
          <DatePicker popupStyle={{ zIndex: 9999, position: 'fixed' }}  selected={startDate} onChange={(date) => setStartDate(date)} dateFormat={"dd/MM/yyyy"}  className={styles.datePicker}/>
        </div>

        {type === "adult" ? (
          <div
            style={{
              marginTop: "2vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: "2.5vh",
            }}
          >
            <div style={{width: "30%"}}>Citizen ID:</div>
            <input
                  type='text'
                  value={citizenID}
                  onChange={handleCitizenIDChange}
                  style={{width: "30vw", height: "6vh", borderRadius: "10vh", fontSize:"2.3vh", paddingLeft: "2vw", border: "0.2vh solid black"}}
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
            <div style={{ fontSize: "2.5vh" , width: "30%"}}>Birth Certificate:</div>
            <input style={{marginLeft: "2vw"}} type="file" onChange={handleFileChange}/>
          </div>
        )}

        <div
          style={{
            marginTop: "2vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "2.5vh",
          }}
        >
          <div style={{width: "30%"}}>Phone Number:</div>
          <input
              type='text'
              value={phone}
              onChange={handlePhoneChange}
              style={{width: "30vw", height: "6vh", borderRadius: "10vh", fontSize:"2.3vh", paddingLeft: "2vw", border: "0.2vh solid black"}}
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
              style={{width: "30vw", height: "6vh", borderRadius: "10vh", fontSize:"2.3vh", paddingLeft: "2vw", border: "0.2vh solid black"}}
            />
        </div>
      </div>
    </div>
  );
};

export default CustomerBox;
