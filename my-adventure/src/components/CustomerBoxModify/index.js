import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const CustomerBoxModify = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sex, setSex] = useState(props.sex);

  const [fullName, setFullName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [citizenID, setCitizenID] = useState(props.ID);
  const [phone, setPhone] = useState(props.phone);
  const [birthDate, setBirthDate] =  useState(moment(props.dob, 'DD-MM-YYYY').toDate())
  const [selectedFile, setSelectedFile] = useState(props.file);


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

  useEffect(() => {
    if (props.type === 'adult') {
      const data = {
        id : props.id,
        name: fullName,
        email: email,
        sex: sex,
        ID: citizenID,
        phone: phone,
        dob: birthDate,
      };
      props.onSave(data);
      return;
    }

    const data = {
      id: props.id,
      name: fullName,
      sex: sex,
      dob: birthDate,
      birthCert: selectedFile,
    };

    props.onSave(data);
  }, [fullName, email, sex, citizenID, phone, birthDate, selectedFile]);

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
              props.type === "child"
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
                  name={`radio-${props.index}`}
                  value="Male"
                  checked={sex === "Male"}
                  onChange={handleChange}
                /> Male
              </label>
              <label>
                <input
                  disabled= {false}
                  type="radio"
                  name={`radio-${props.index}`}
                  value="Female"
                  checked={sex === "Female"}
                  onChange={handleChange}
                  style={{ marginLeft: "2vw" }}
                /> Female
              </label>
          </div>

          
        </div>

        
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
          <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} dateFormat="dd/MM/yyyy" className={styles.datePicker}/>
        </div>

        {props.type === "adult"  ? (
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
            <input style={{marginLeft: "2vw"}} type="file" onChange={handleFileChange}/>
          </div>
        )}

          {
            props.type !== "adult" ? null : (
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
              style={{width: "30vw", height: "6vh", borderRadius: "0.5vw", fontSize:"1.2vw", paddingLeft: "2vw", border: "0.2vh solid black"}}
            />
        </div>
              </div>
            )
          }
      </div>
    </div>
    </div>
  );
};

export default CustomerBoxModify;
