import React, { useState } from 'react';
import styles from './styles.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomerTextBox = ({ type, name  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [startDate, setStartDate] = useState("");
  const [fullName, setFullName] =useState("");
  const [email, setEmail] = useState("");
  const [citizenID, setCitizenID] = useState("");
  const [phone, setPhone] = useState("");

  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

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
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.customerBox} ${isOpen ? 'open' : ''}`}>
      <div className={styles.boxContainer} onClick={toggleDropdown} style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <img src={(type==="adult" ? require("../../assets/icons/adult2.png") : require("../../assets/icons/child.png"))} alt="adult2" style={{width: "1.5vw", height: "1.5vw"}}></img>
          <div style={{marginLeft: "2vw", fontSize: "3vh"}}>{name}</div>
        </div>
          <button onClick={() => setIsOpen(!isOpen)} style={{marginRight: "2vw", justifyContent: "center", alignItems: "center"}}>
            {
              isOpen ? <img src={require("../../assets/icons/dropdownOpen.png")} alt="open" className={styles.button}/> : <img src={require("../../assets/icons/dropdownClose.png")} alt="close" className={styles.button}  />
            }
          </button>
      </div>
      {isOpen && (
        <div className={styles.details}>
          <div style={{marginTop: "2vh", display: "flex", flexDirection: "row", alignItems: "center", fontSize: "2.5vh"}}>
            <div>Full Name:</div>
            <div style = {{marginLeft: "10.3vw"}}>Lê Thị Bích Hằng</div>
          </div>
          <div style={{marginTop: "2vh", display: "flex", flexDirection: "row", alignItems: "center"}}>
            <div style={{fontSize: "2.5vh", }}>Sex:</div>
            <div style={{fontSize: "2.5vh", marginLeft: "13.9vw" }}>
              Female
            </div>
          </div>
          <div style={{marginTop: "2vh", display: "flex", flexDirection: "row", alignItems: "center", fontSize: "2.5vh"}}>
            <div>Date of Birthday:</div>
            <div style = {{marginLeft: "7.2vw"}}>01/01/2003</div>
          </div>

            {
            type === "adult" ? 
            (
                <div style={{marginTop: "2vh", display: "flex", flexDirection: "row", alignItems: "center", fontSize: "2.5vh"}}>
                    <div>Citizen ID:</div>
                    <div style = {{marginLeft: "10.5vw"}}>12345678</div>
                </div>
            ) : (
              <div className={styles.row} style={{marginTop: "3vh", marginBottom: "1vh", justifyContent: 'flex-start'}}>
                <div style={{fontSize: "2.5vh",}}>Birth Certificate:</div>
                <img src= {require("../../assets/images/birthcert.png")} alt="birthcert" style={{width:"5vw", height: "auto" , marginLeft: "7vw"}}></img>
                <span style={{marginLeft: "2vw"}}>birthcert.png</span>
              </div>
            )}
          
            <div style={{marginTop: "2vh", display: "flex", flexDirection: "row", alignItems: "center", fontSize: "2.5vh"}}>
            <div>Phone Number:</div>
            <div style = {{marginLeft: "7.5vw"}}>012345678</div>
          </div>


          <div style={{marginTop: "2vh", display: "flex", flexDirection: "row", alignItems: "center", fontSize: "2.5vh"}}>
            <div>Email:</div>
            <div style = {{marginLeft: "12.6vw"}}>21522041@gm.uit.edu.vn</div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default CustomerTextBox;