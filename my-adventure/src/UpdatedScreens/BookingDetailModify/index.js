import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Footer from "../../component/Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate, formatHour } from "../../constant/formatDate";
import CancelBooking from "../../component/CacelBookingPopUp";
import CustomerTextBox from "../../components/CustomerTextBox";
import CustomerBoxModify from "../../components/CustomerBoxModify";

const BookingDetailModify = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [booking, setBooking] = useState();
  const [tour, setTour] = useState();
  const [adult, setAdult] = useState([]);
  const [children, setChildren] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://localhost:3001/booking/id?id=${encodeURIComponent(id)}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setBooking(data);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    if (booking && booking.tourID) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `http://localhost:3001/tour/id?id=${encodeURIComponent(
          booking.tourID
        )}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setTour(data);
          setLoading1(false);
        })
        .catch((error) => console.log("error", error));
    }
  }, [booking]);

  useEffect(() => {
    console.log("tour", tour);
    if (tour && tour._id) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `http://localhost:3001/children/tour?tourID=${encodeURIComponent(
          tour._id
        )}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setChildren(result))
        .catch((error) => console.log("error", error));

      fetch(
        `http://localhost:3001/adult/tour?tourID=${encodeURIComponent(
          tour._id
        )}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setAdult(result))
        .catch((error) => console.log("error", error));
    }
  }, [tour]);

  useEffect(() => {
    if (booking) {
      setName(booking.name);
      setAddress(booking.address);
      setPhone(booking.phone);
      setNationality(booking.nationality);
      setNote(booking.note);
    }
  }, [booking]);

  const handleAdultDataChange = (index, data) => {
    const updatedAdultList = [...adult];
    updatedAdultList[index] = { ...updatedAdultList[index], ...data };
    setAdult(updatedAdultList);
    console.log("UpdatedAdultList", adult);
  };

  const handleChildrenDataChange = (index, data) => {
    const updatedChildList = [...children];
    updatedChildList[index] = { ...updatedChildList[index], ...data };
    setChildren(updatedChildList);
    console.log("UpdatedChildrenList", children)
  };

  const setBg = (status) => {
    var backgroundColor = "#FFED8C";
    if (status === "Finish") {
      backgroundColor = "#30E742";
    } else if (status === "Waiting for handling") {
      backgroundColor = "#FFED8C";
    } else if (status === "Waiting for checking") {
      backgroundColor = "#F5AE45";
    } else if (status === "Confirmed") {
      backgroundColor = "#E4F61A";
    } else if (status === "Paid") {
      backgroundColor = "#2CF594";
    } else if (status === "Cancelled") {
      backgroundColor = "red";
    }
    return backgroundColor;
  };

  const SaveBooking = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/booking/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const status = await response.status;
      return status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const SaveAdult = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/adult/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const status = await response.status;
      return status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const SaveChildren = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/children/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const status = await response.status;
      return status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();

    if (name === "" || phone === "" || address === "" || nationality === "") {
      setMessage("Please fill in all information");
      setShowMessage(true);
      return;
    }

    const data = {
      bookingID: booking._id,
      name: name,
      phone: phone,
      nationality: nationality,
      address: address,
      note: note,
    };

    setIsLoading(true);

    try {
      const response = await SaveBooking(data);
      for (var adultIndex in adult) {
        var aAdult = adult[adultIndex];
        const response1 = await SaveAdult(aAdult);
        console.log(response1);
        if (response1 === 200) {
          console.log("Add Successfully" + aAdult);
        } else if (response === 401) {
          setMessage("Not found booking information");
          setShowMessage(true);
        }
      }

      for (var childIndex in children) {
        var child = children[childIndex];
        const response2 = await SaveChildren(child);
        console.log(response2);
        if (response2 === 200) {
          console.log("Add Successfully" + child);
        } else if (response === 401) {
          setMessage("Not found booking information");
          setShowMessage(true);
        }
      }

      console.log(response);
      setIsLoading(false);

      if (response === 200) {
        const url = `/company/detail-booking?id=${encodeURIComponent(id)}`;
        navigate(url);
      } else if (response === 401) {
        setMessage("Not found booking information");
        setShowMessage(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  if (loading || loading1) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.mainContent}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className={styles.titleText}>BOOKING DETAIL</h1>

        <div
          className={styles.statusContainer}
          style={{ backgroundColor: setBg(booking.status) }}
        >
          {booking.status}
        </div>

        <h3 className={styles.titleText2}>
          Booking Date: {formatDate(booking.date)}
        </h3>
      </div>
      <div style={{ marginLeft: "15vw", marginRight: "10vw" }}>
        {/* Travel information */}
        <div style={{ marginTop: "4vw" }}>
          <div className={styles.horizontal}>
            <div className={styles.text1}>Departure - Destination: </div>
            <div className={styles.text2}>
              {tour.departure} - {tour.destination}
            </div>
          </div>

          <div className={styles.horizontal}>
            <div className={styles.text1}>Time: </div>
            <div className={styles.text2}>
              {formatDate(tour.departureDate)} - {formatDate(tour.returnDate)}
            </div>
          </div>
        </div>

        <div
          className={styles.text1}
          style={{ fontSize: "1.8vw", marginTop: "2vw", width: "auto" }}
        >
          Customer's Information
        </div>

        <div style={{ marginTop: "1vw" }}>
          <div className={styles.horizontal}>
            <div className={styles.text1}>Full Name: </div>
            <input
              value={name}
              onChange={handleNameChange}
              type="text"
              className={styles.inputStyle}
            />
          </div>

          <div className={styles.horizontal}>
            <div className={styles.text1}>Phone Number: </div>
            <input
              value={phone}
              onChange={handlePhoneChange}
              type="text"
              className={styles.inputStyle}
            />
          </div>

          <div className={styles.horizontal}>
            <div className={styles.text1}>Nationality: </div>
            <input
              value={nationality}
              onChange={handleNationalityChange}
              type="text"
              className={styles.inputStyle}
            />
          </div>

          <div className={styles.horizontal}>
            <div className={styles.text1}>Address: </div>
            <textarea
              value={address}
              onChange={handleAddressChange}
              type="text"
              className={styles.inputStyle}
            />
          </div>
        </div>

        <div
          className={styles.text1}
          style={{ marginTop: "2.5vw", marginLeft: "3vw" }}
        >
          a. Adult
        </div>

        {adult.map((item, index) => (
          <>
            <CustomerBoxModify
              index={index}
              id={item._id}
              name={item.name}
              type="adult"
              sex={item.sex}
              dob={formatDate(item.dob)}
              ID={item.ID}
              phone={item.phone}
              email={item.email}
              onSave={(data) => handleAdultDataChange(index, data)}
            />
          </>
        ))}

        <div
          className={styles.text1}
          style={{ marginTop: "2.5vw", marginLeft: "3vw" }}
        >
          b. Children
        </div>

        {children.map((child, index) => (
          <>
            <CustomerBoxModify
              id={child._id}
              index={index}
              name={child.name}
              type="children"
              sex={child.sex}
              dob={formatDate(child.dob)}
              birthCert={child.birthCert}
              onSave={(data) => handleChildrenDataChange(index, data)}
            />
          </>
        ))}

        <div className={styles.horizontal} style={{ marginTop: "3vw" }}>
          <div className={styles.text1}>Additional Note: </div>
          <textarea
            value={note}
            onChange={handleNoteChange}
            type="text"
            className={styles.inputStyle}
            style={{ height: "10vw" }}
          />
        </div>

        {showMessage ? <div className={styles.errorText}>{message}</div> : null}
      </div>

      <motion.button
        className={styles.submitBtn}
        whileHover={{ scale: 0.95 }}
        onClick={handleSaveClick}
      >
        Save
      </motion.button>

      {isLoading && (
        <div className={styles.overlay}>
          <div className={styles.loader}></div>
        </div>
      )}
    </div>
  );
};

export default BookingDetailModify;
