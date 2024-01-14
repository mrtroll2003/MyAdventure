import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate, formatHour } from "../../constant/formatDate";
import CustomerTextBox from "../../components/CustomerTextBox";
import CancelPopUp from "../../component/CancelPopUp";
import ImagePopUp from "../../component/ImagePopUp";

const BookingDetail = (props) => {
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
  const [showCancelBox, setShowCancelBox] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [bank, setBank] = useState();
  const [zoom1, setZoom1] = useState(false);
  const [link, setLink] = useState("")
  const handleZoom = () => {
    setZoom(!zoom);
  };
  const handleZoom1 = (image) => {
    setLink(image)
    setZoom1(!zoom1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      fetch(
        `http://localhost:3001/banking-account/booking?bookingID=${booking._id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setBank(data);
        })
        .catch((error) => console.log("error", error));
    }
  }, [booking]);

  useEffect(() => {
    if (booking && booking._id) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `http://localhost:3001/children/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setChildren(result))
        .catch((error) => console.log("error", error));

      fetch(
        `http://localhost:3001/adult/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setAdult(result))
        .catch((error) => console.log("error", error));
    }
  }, [booking]);

  const setBg = (status) => {
    var backgroundColor = "#FFED8C";
    if (status === "Finish") {
      backgroundColor = "#22EAAA";
    } else if (status === "Waiting for handling") {
      backgroundColor = "#FFED8C";
    } else if (status === "Waiting for checking") {
      backgroundColor = "#F5AE45";
    } else if (status === "Confirmed") {
      backgroundColor = "#99FFCD";
    } else if (status === "Paid") {
      backgroundColor = "#2CF594";
    } else if (status === "Cancelled") {
      backgroundColor = "#FF4A4A";
    }
    return backgroundColor;
  };

  const handleChangeClick = () => {
    const url = `/company/booking-detail-modify?id=${encodeURIComponent(id)}`;
    navigate(url);
    return;
  };

  const handleCancelClick = () => {
    setShowCancelBox(!showCancelBox);
  };

  const UpdateStatus = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:3001/booking/update-status",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const status = await response.status;
      return status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleConfirmClick = async (e) => {
    e.preventDefault();

    const data = {
      bookingID: id,
      status: "Confirmed",
    };

    try {
      const response = await UpdateStatus(data);

      if (response === 200) {
        window.location.href = `/company/detail-booking?id=${encodeURIComponent(
          id
        )}`;
        window.location.reload();
      } else if (response === 401) {
        console.log("No found booking");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleConfirmPaymentClick = async (e) => {
    e.preventDefault();

    const data = {
      bookingID: id,
      status: "Paid",
    };

    try {
      const response = await UpdateStatus(data);

      if (response === 200) {
        window.location.href = `/company/detail-booking?id=${encodeURIComponent(
          id
        )}`;
        window.location.reload();
      } else if (response === 401) {
        console.log("No found booking");
      }
    } catch (error) {
      console.log(error);
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
        <div className={styles.titleText}>BOOKING DETAIL</div>

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
            <div className={styles.text2}>{booking.name}</div>
          </div>

          <div className={styles.horizontal}>
            <div className={styles.text1}>Phone Number: </div>
            <div className={styles.text2}>{booking.phone}</div>
          </div>

          <div className={styles.horizontal}>
            <div className={styles.text1}>Nationality: </div>
            <div className={styles.text2}>{booking.nationality}</div>
          </div>

          <div className={styles.horizontal}>
            <div className={styles.text1}>Address: </div>
            <div className={styles.text2}>{booking.address}</div>
          </div>
        </div>

        <div
          className={styles.text1}
          style={{ marginTop: "2.5vw", marginLeft: "3vw" }}
        >
          a. Adult
        </div>

        {adult.map((adult) => (
          <>
            <CustomerTextBox
              name={adult.name}
              type="adult"
              sex={adult.sex}
              dob={formatDate(adult.dob)}
              ID={adult.ID}
              phone={adult.phone}
              email={adult.email}
            />
          </>
        ))}

        <div
          className={styles.text1}
          style={{ marginTop: "2.5vw", marginLeft: "3vw" }}
        >
          b. Children
        </div>

        {children.map((child) => (
          <>
            <CustomerTextBox
              name={child.name}
              type="children"
              sex={child.sex}
              dob={formatDate(child.dob)}
              birthCert = {child.birthCert}
              onClick={() => handleZoom1(child.birthCert)}
            />
          </>
        ))}

        <div className={styles.horizontal} style={{ marginTop: "3vw" }}>
          <div className={styles.text1}>Additional Note: </div>
          <div className={styles.text2}>{booking.note}</div>
        </div>

        {booking.payment !== "test" && booking.payment && (
          <div
            className={styles.horizontal}
            style={{ marginTop: "3vw", alignItems: "center" }}
          >
            <div className={styles.text1}>Payment's evidence: </div>
            <motion.button onClick={handleZoom}>
              <img
                className={styles.birthCertImg}
                src={booking.payment}
                alt="payment"
                style={{ width: "8vw" }}
              ></img>
            </motion.button>
          </div>
        )}

        {bank && bank.bookingID && (
          <>
            <div className={styles.horizontal} style={{ marginTop: "3vw" }}>
              <div className={styles.text1}>Bank name: </div>
              <div className={styles.text2}>{bank.bankName}</div>
            </div>

            <div className={styles.horizontal} style={{ marginTop: "3vw" }}>
              <div className={styles.text1}>Bank account: </div>
              <div className={styles.text2}>{bank.bankAccount}</div>
            </div>

            <div className={styles.horizontal} style={{ marginTop: "3vw" }}>
              <div className={styles.text1}>Bank holder: </div>
              <div className={styles.text2}>{bank.bankHolder}</div>
            </div>
          </>
        )}

        {booking.status === "Waiting for handling" && (
          <div
            className={styles.horizontal}
            style={{ justifyContent: "space-between", marginTop: "5vw" }}
          >
            <motion.button
              className={styles.changeBtn}
              whileHover={{ scale: 0.95 }}
              onClick={handleChangeClick}
            >
              Change
            </motion.button>
            <motion.button
              className={styles.confirmBtn}
              whileHover={{ scale: 0.95 }}
              onClick={handleConfirmClick}
            >
              Confirmed
            </motion.button>
            <motion.button
              className={styles.cancelBtn}
              whileHover={{ scale: 0.95 }}
              onClick={handleCancelClick}
            >
              Cancel
            </motion.button>
          </div>
        )}

        {booking.status === "Waiting for checking" && (
          <div className={styles.horizontal1} style={{}}>
            <motion.button
              className={styles.changeBtn}
              whileHover={{ scale: 0.95 }}
              onClick={handleChangeClick}
            >
              Change
            </motion.button>
            <motion.button
              className={styles.confirmBtn}
              whileHover={{ scale: 0.95 }}
              onClick={handleConfirmPaymentClick}
            >
              Confirmed
            </motion.button>
            <motion.button
              className={styles.cancelBtn}
              whileHover={{ scale: 0.95 }}
              onClick={handleCancelClick}
            >
              Cancel
            </motion.button>
          </div>
        )}

        {(booking.status === "Confirmed" || booking.status === "Paid") && (
          <div
            className={styles.horizontal}
            style={{ justifyContent: "space-between", marginTop: "5vw" }}
          >
            <motion.button
              className={styles.changeBtn}
              whileHover={{ scale: 0.95 }}
              onClick={handleChangeClick}
            >
              Change
            </motion.button>
            <motion.button
              className={styles.cancelBtn}
              whileHover={{ scale: 0.95 }}
              onClick={handleCancelClick}
            >
              Cancel
            </motion.button>
          </div>
        )}

        {showCancelBox && (
          <div className={styles.overlay}>
            <CancelPopUp
              className={styles.loader}
              onClick={handleCancelClick}
              bookingID={id}
              type="company"
            ></CancelPopUp>
          </div>
        )}

        {zoom && (
          <div
            className={styles.overlay}
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          >
            <ImagePopUp imageUrl={booking.payment} onClick={handleZoom} />
          </div>
        )}

        {zoom1 && (
          <div
            className={styles.overlay}
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          >
          {/* {console.log("Image URLLLLL: ", link)} */}
            <ImagePopUp imageUrl={link} onClick={handleZoom1} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDetail;
