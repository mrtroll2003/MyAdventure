import React, { useState } from "react";
import "./CustomerBox.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomerBox = ({ type, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [startDate, setStartDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [citizenID, setCitizenID] = useState("");
  const [phone, setPhone] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNameChange = (event) => {
    setFullName(event.target.value);
    setDisplayName(event.target.value);
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
    <div className={`customer-box ${isOpen ? "open" : ""}`}>
      <div
        className="box-container"
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
          <div style={{ marginLeft: "2vw", fontSize: "3vh" }}>
            {displayName}
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
          {isOpen ? (
            <img
              src={require("../../assets/icons/dropdownOpen.png")}
              alt="open"
              className="button1"
            />
          ) : (
            <img
              src={require("../../assets/icons/dropdownClose.png")}
              alt="close"
              className="button1"
            />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="details">
          <div className="row">
            <div style={{ fontSize: "2.5vh" }}>
              Full Name<span style={{ color: "red" }}>*</span>:
            </div>
            <input
              value={fullName}
              onChange={handleNameChange}
              type="text"
              style={{
                width: "30vw",
                height: "6vh",
                borderRadius: "10vh",
                fontSize: "2.3vh",
                paddingLeft: "2vw",
                border: "0.2vh solid black",
              }}
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
            <div style={{ fontSize: "2.5vh" }}>
              Sex<span style={{ color: "red" }}>*</span>:
            </div>
            <div style={{ fontSize: "2.5vh", marginLeft: "13.5vw" }}>
              <input
                type="radio"
                name="option"
                value="Male"
                checked={selectedOption === "Male"}
                onChange={handleChange}
              />{" "}
              Male
              <input
                type="radio"
                name="option"
                value="Female"
                checked={selectedOption === "Female"}
                onChange={handleChange}
                style={{ marginLeft: "5vw" }}
              />{" "}
              Female
            </div>
          </div>
          <div
            className="row"
            style={{ marginTop: "2vh", overflow: "visible" }}
          >
            <div style={{ fontSize: "2.5vh" }}>
              Date of Birthday<span style={{ color: "red" }}>*</span>:
            </div>
            <div>
              <DatePicker
                popupStyle={{ zIndex: 9999, position: "fixed" }}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat={"dd/MM/yyyy"}
                className="datePicker"
              />
            </div>
          </div>

          {type === "adult" ? (
            <div className="row" style={{ marginTop: "2vh" }}>
              <div style={{ fontSize: "2.5vh" }}>
                Citizen ID<span style={{ color: "red" }}>*</span>:
              </div>
              <input
                type="text"
                value={citizenID}
                onChange={handleCitizenIDChange}
                style={{
                  width: "30vw",
                  height: "6vh",
                  borderRadius: "10vh",
                  fontSize: "2.3vh",
                  paddingLeft: "2vw",
                  border: "0.2vh solid black",
                }}
              />
            </div>
          ) : (
            <div
              className="row"
              style={{
                marginTop: "3vh",
                marginBottom: "1vh",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ fontSize: "2.5vh" }}>
                Birth Certificate<span style={{ color: "red" }}>*</span>:
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                style={{ marginLeft: "7.5vw" }}
              />
              {/* <button onClick={handleUploadClick}>Upload</button> */}
            </div>
          )}

          <div className="row" style={{ marginTop: "2vh" }}>
            <div style={{ fontSize: "2.5vh" }}>
              Phone Number<span style={{ color: "red" }}>*</span>:
            </div>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              style={{
                width: "30vw",
                height: "6vh",
                borderRadius: "10vh",
                fontSize: "2.3vh",
                paddingLeft: "2vw",
                border: "0.2vh solid black",
              }}
            />
          </div>

          <div className="row" style={{ marginTop: "2vh" }}>
            <div style={{ fontSize: "2.5vh" }}>Email:</div>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              style={{
                width: "30vw",
                height: "6vh",
                borderRadius: "10vh",
                fontSize: "2.3vh",
                paddingLeft: "2vw",
                border: "0.2vh solid black",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerBox;
