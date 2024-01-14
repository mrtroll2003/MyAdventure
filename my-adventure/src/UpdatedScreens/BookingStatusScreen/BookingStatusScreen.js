import React, { useDebugValue, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import CustomerTextBox from "../../components/CustomerTextBox";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../../constant/formatDate";
import CancelPopUp from "../../component/CancelPopUp";
import StarRatings from "react-star-ratings";
import ImageZoom from "../../component/ImagePopUp";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nkaxnoxocaglizzrfhjw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYXhub3hvY2FnbGl6enJmaGp3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDEyMDI2NCwiZXhwIjoyMDE1Njk2MjY0fQ.6ZNDz2LY3uTglFR2sqJvyPirr00voeSv9BNBRDU_F08";
const supabase = createClient(supabaseUrl, supabaseKey);

const BookingStatusScreen = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const bookingID = searchParams.get("bookingID");
  const [booking, setBooking] = useState();
  const [tour, setTour] = useState();
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [adultList, setAdultList] = useState([]);
  const [childList, setChildList] = useState([]);
  const [showCancelBox, setShowCancelBox] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [tours, setTours] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [rating, setRating] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [bank, setBank] = useState();
  const [zoom1, setZoom1] = useState(false);
  const [link, setLink] = useState("");

  const handleZoom1 = (image) => {
    setLink(image);
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
    fetch(`http://localhost:3001/booking/id?id=${bookingID}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setBooking(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [bookingID]);

  useEffect(() => {
    if (booking && booking.payment) {
      setFile(booking.payment);
    }
  }, [booking]);

  useEffect(() => {
    const fetchAdultLists = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const response = await fetch(
          `http://localhost:3001/adult/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`,
          requestOptions
        );
        const result = await response.json();

        setAdultList(result);
        console.log("Adult Lists:", adultList);
      } catch (error) {
        console.log("Error:", error);
        setAdultList([]);
      }
    };

    const fetchChildrenLists = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const response = await fetch(
          `http://localhost:3001/children/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`,
          requestOptions
        );
        const result = await response.json();

        setChildList(result);
        console.log("Children Lists:", adultList);
      } catch (error) {
        console.log("Error:", error);
        setChildList([]);
      }
    };

    const fetchTourList = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const response = await fetch(
          `http://localhost:3001/tour/place?id=${booking.tourID}`,
          requestOptions
        );
        const result = await response.json();
        setTour(result);
        setLoading1(false);
        console.log("Tour:", tour);
      } catch (error) {
        console.log("Error:", error);
        setTour();
      }
    };

    const fetchBookingList = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const response = await fetch(
          `http://localhost:3001/booking`,
          requestOptions
        );
        const result = await response.json();
        setBookings(result);
      } catch (error) {
        console.log("Error:", error);
        setBookings([]);
      }
    };

    const fetchToursList = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const response = await fetch(
          `http://localhost:3001/tour`,
          requestOptions
        );
        const result = await response.json();
        setTours(result);
      } catch (error) {
        console.log("Error:", error);
        setTours([]);
      }
    };

    const fetchPayment = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const response = await fetch(
          `http://localhost:3001/banking-account/booking?bookingID=${booking._id}`,
          requestOptions
        );
        const result = await response.json();
        setBank(result);
      } catch (error) {
        console.log("Error:", error);
        setTours([]);
      }
    };

    console.log("bbb", booking);

    fetchAdultLists();
    fetchChildrenLists();
    fetchTourList();
    fetchBookingList();
    fetchToursList();
    fetchPayment();
  }, [booking]);

  useEffect(() => {
    const setRating1 = async () => {
      if (booking && booking.rating) {
        await setRating(booking.rating);
      }
    };

    setRating1();
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
  const handleDetailClick = (id) => {
    console.log("Clicked:", id);
    const url = `/tour-detail?id=${encodeURIComponent(id)}`;
    navigate(url);
  };

  const handleModifyClick = (bookingID) => {
    console.log("Clicked:", bookingID);
    const url = `/detail-booking-modify?id=${encodeURIComponent(bookingID)}`;
    navigate(url);
  };

  const calPrice = (list1, list2, price) => {
    const num = list1.length + list2.length;
    return price * num;
  };

  const UpdateRating = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:3001/booking/update-rating",
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

  const UpdateRatingTotal = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/rating/update", {
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

  const handleRatingSubmit = () => {
    const data = {
      bookingID: bookingID,
      rating: rating,
    };
    UpdateRating(data);

    let total = 0;
    let count = 0;

    console.log("bookings", bookings);
    bookings.forEach((aBooking) => {
      tours.forEach((aTour) => {
        if (
          aBooking.tourID === aTour._id &&
          aTour.destination === tour.destination &&
          aBooking._id !== bookingID &&
          aBooking.rating !== 0
        ) {
          total += aBooking.rating;
          console.log("total" + total);
          count++;
        }
      });
    });
    const finalTotal = total + rating;
    console.log("finalTotal" + finalTotal);
    const averageRating = finalTotal / (count + 1);
    console.log("averageRating" + averageRating);

    const data1 = {
      name: tour.destination,
      rating: averageRating,
    };

    UpdateRatingTotal(data1);
    setIsSubmit(true);
  };

  if (loading === true || loading1 === true) {
    return <div>Loading...</div>;
  }

  const handleCancelClick = () => {
    if (
      booking.status !== "Confirmed" &&
      booking.status !== "Waiting for handling"
    ) {
      const url = `/cancel?id=${encodeURIComponent(bookingID)}`;
      navigate(url);
      return;
    }
    setShowCancelBox(!showCancelBox);
  };

  const handleZoom = () => {
    setZoom(!zoom);
  };

  const handlePaymentClick = () => {
    const url = `/make-payment?id=${encodeURIComponent(bookingID)}`;
    navigate(url);
    return;
  };

  async function uploadImage(file) {
    console.log("file " + file);
    const key = `Payment/${uuidv4()}`;
    const { data, error } = await supabase.storage
      .from("myadventure")
      .upload(key, file, {
        cacheControl: "max-age=31536000",
        upsert: false,
        contentType: "image/jpeg",
      });
    if (error) {
      console.error("Error uploading image:", error.message);
      return;
    }
    console.log("Image uploaded successfully:", key);

    const supabaseUrl =
      "https://nkaxnoxocaglizzrfhjw.supabase.co/storage/v1/object/public";
    const imageUrl = `${supabaseUrl}/myadventure/${key}`;
    console.log("Image URL:", imageUrl);
    return imageUrl;
  }

  const updatePayment = (imageUrl) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      _id: bookingID,
      payment: imageUrl,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/booking/update-payment", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    // setFile(selectedFile);

    if (selectedFile) {
      try {
        const imageUrl = await uploadImage(selectedFile);
        if (imageUrl) {
          updatePayment(imageUrl);
          setFile(imageUrl);
          window.location.reload();
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.hi}>
        Hi our beloved customers, <span className={styles.mark}></span>
      </div>
      <div className={styles.welcome}>
        We are happy that you have chosen our company for your upcoming trips.
        We thank you very much and wish you a rewarding experience at
        MyAdventure!
      </div>
      <div className={styles.welcome} style={{ marginBottom: "5vh" }}>
        Here are all your booking and its status!
      </div>

      <div className={styles.mainContentContainer}>
        <div className={styles.title1}>Your Booking Details</div>

        <div className={styles.title2}>
          {tour.departure} - {tour.destination}
        </div>

        <div
          className={styles.title3}
          style={{
            textTransform: "capitalize",
          }}
        >
          {formatDate(tour.departureDate)} - {formatDate(tour.returnDate)}
        </div>

        <div
          className={styles.title3}
          style={{
            textTransform: "capitalize",
          }}
        >
          Booking Date: {formatDate(booking.date)}
        </div>

        <div
          className={styles.statusContainer}
          style={{ backgroundColor: setBg(booking.status) }}
        >
          {booking.status}
        </div>

        <p className={styles.text}>
          We will contact or send notifications to you via this contact:
        </p>
        <motion.div className={styles.accountBox}>
          <img
            src={require("../../assets/icons/account.png")}
            alt="account"
            style={{ width: "2.5vw", height: "2.5vw", marginLeft: "2vw" }}
          />
          <div className={styles.signIn}>
            <div style={{ fontWeight: "600" }}>Lê Thị Bích Hằng</div>
            <div style={{ marginTop: "2vh" }}>{booking.email}</div>
          </div>
        </motion.div>

        <div className={styles.yourDetailBooking}>Your detail booking</div>
        <div className={styles.note}>
          <img
            src={require("../../assets/icons/note.png")}
            alt="note"
            style={{ width: "2.3vw", height: "2.3vw", marginLeft: "2vw" }}
          ></img>
          <div className={styles.noteText}>
            You must check carefully to avoid the information errors
          </div>
        </div>

        <div className={styles.bookingForm} style={{ alignSelf: "center" }}>
          <div className={styles.heading1}>1. Contact Information</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "2vh",
            }}
          >
            <div className={styles.heading2}>Your good name: </div>
            <div className={styles.commonText}>{booking.name}</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "2vh",
            }}
          >
            <div className={styles.heading2}>Phone Number: </div>
            <div className={styles.commonText}>{booking.phone}</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "2vh",
            }}
          >
            <div className={styles.heading2}>Your Nationality: </div>
            <div className={styles.commonText}>{booking.nationality}</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "2vh",
            }}
          >
            <div className={styles.heading2}>Your Address: </div>
            <div className={styles.commonText}>{booking.address}</div>
          </div>

          <div className={styles.heading1}>2. Customer's Information</div>
          <div className={styles.heading2}>a. Adult</div>
          <div className={styles.infoTag}>
            {adultList.map((adult) => (
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
          </div>
          <div className={styles.heading2} style={{ marginTop: "2vh" }}>
            b. Children
          </div>
          <div className={styles.infoTag}>
            {childList.map((child) => (
              <>
                <CustomerTextBox
                  name={child.name}
                  type="children"
                  sex={child.sex}
                  dob={formatDate(child.dob)}
                  birthCert={child.birthCert}
                  onClick={() => handleZoom1(child.birthCert)}
                />
              </>
            ))}
          </div>
        </div>

        <div
          className={styles.heading2}
          style={{
            width: "100%",
            marginLeft: "3vw",
            fontWeight: "600",
            marginTop: "2.5vw",
          }}
        >
          Your additional notion: {booking.note}
        </div>

        <div
          className={styles.heading2}
          style={{
            width: "100%",
            marginLeft: "3vw",
            fontStyle: "italic",
            marginTop: "2.5vw",
          }}
        >
          Details for this trip:{" "}
          <motion.button
            className={styles.title}
            style={{
              fontWeight: "bold",
              fontStyle: "normal",
              textDecoration: "underline",
              marginLeft: "2vw",
              fontSize: "2vw",
            }}
            whileHover={{ scale: 0.9 }}
            onClick={() => handleDetailClick(tour._id)}
          >
            DETAILS
          </motion.button>
        </div>

        <div
          className={styles.heading1}
          style={{ marginTop: "2.5%", marginBottom: "5%", fontSize: "2.5vw" }}
        >
          TOTAL PRICE: ${calPrice(adultList, childList, tour.price)}
        </div>

        {booking.payment && booking.payment !== "test" ? (
          <div className={styles.horizon}>
            <div className={styles.heading2}>
              Evidence of your payment for this tour:
            </div>
            <div className={styles.horizon1}>
              <div>
                {booking.payment && booking.payment !== "test" && (
                  <motion.button onClick={handleZoom}>
                    <img
                      className={styles.birthCertImg}
                      src={file}
                      alt="payment"
                      style={{ width: "8vw" }}
                    ></img>
                  </motion.button>
                )}
              </div>
              <div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                {booking.status === "Waiting for checking" ? (
                  <motion.button
                    className={styles.changeButton}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                  >
                    Change
                  </motion.button>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}

        {bank && bank.bookingID && (
          <div className={styles.bookingForm} style={{ alignSelf: "center" }}>
            <div className={styles.heading1}>Refund Banking Account</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "2vh",
              }}
            >
              <div className={styles.heading2}>Bank name: </div>
              <div className={styles.commonText}>{bank.bankName}</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "2vh",
              }}
            >
              <div className={styles.heading2}>Bank account: </div>
              <div className={styles.commonText}>{bank.bankAccount}</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "2vh",
                paddingBottom: "4vw",
              }}
            >
              <div className={styles.heading2}>Bank holder: </div>
              <div className={styles.commonText}>{bank.bankHolder}</div>
            </div>
          </div>
        )}

        {booking.status === "Finish" ? (
          <>
            <div className={styles.text} style={{ fontStyle: "italic" }}>
              Let’s evaluate for this booking!
            </div>
            {/* Star rating section */}
            <div className={styles.horizon} style={{ marginTop: "2.5%" }}>
              {isSubmit === false && booking.rating === 0 ? (
                <StarRatings
                  rating={rating}
                  starRatedColor="gold"
                  changeRating={(newRating) => setRating(newRating)}
                  numberOfStars={5}
                  starDimension="40px"
                  starSpacing="2px"
                  starHoverColor="gold"
                  isSelectable={true}
                />
              ) : (
                <StarRatings
                  rating={rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="40px"
                  starSpacing="2px"
                  starHoverColor="gold"
                  isSelectable={true}
                />
              )}

              {booking.rating === 0 && isSubmit === false && (
                <motion.button
                  className={styles.submitButton}
                  style={{ marginLeft: "10%" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleRatingSubmit}
                >
                  Submit
                </motion.button>
              )}
            </div>
            {/* We gratefully thanks for your evaluation! */}
            {(booking.rating !== 0 || isSubmit === true) && (
              <div className={styles.text} style={{ fontStyle: "italic" }}>
                We gratefully thanks for your evaluation!
              </div>
            )}
          </>
        ) : null}
      </div>

      <div className={styles.alignCenter}>
        {(booking.status === "Waiting for checking" ||
          booking.status === "Paid") && (
          <motion.button
            className={styles.cancelButton}
            whileHover={{ scale: 0.9 }}
            onClick={handleCancelClick}
          >
            Cancel this booking
          </motion.button>
        )}
      </div>
      {booking.status === "Waiting for handling" && (
        <div
          className={styles.horizon}
          style={{
            justifyContent: "space-between",
            marginTop: "2.5%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          {/* Modify button side */}
          <div className={styles.halfSide}>
            <div className={styles.textBeforeBtn}>
              If you want to change above information, <br />
              please click on “Modify” button!
            </div>
            <motion.button
              className={styles.smallButton}
              style={{ backgroundColor: "#5CD6C0" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleModifyClick(booking._id)}
            >
              Modify
            </motion.button>
          </div>
          {/* Cancel button side */}
          <div className={styles.halfSide}>
            <div className={styles.textBeforeBtn}>
              If you want to cancel this trip, please click on “Cancel” button!
            </div>
            <motion.button
              className={styles.smallButton}
              style={{ backgroundColor: "#FF8139" }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCancelClick}
            >
              Cancel
            </motion.button>
          </div>
        </div>
      )}

      {booking.status === "Confirmed" && (
        <div
          className={styles.horizon}
          style={{
            justifyContent: "space-between",
            marginTop: "2.5%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          {/* Modify button side */}
          <div className={styles.halfSide}>
            <div className={styles.textBeforeBtn} style={{ fontSize: "1.5vw" }}>
              If you want to pay for this booking, <br />
              please click on "Make payment" button!
            </div>
            <motion.button
              className={styles.smallButton}
              style={{ backgroundColor: "#5CD6C0" }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePaymentClick}
            >
              Make Payment
            </motion.button>
          </div>
          {/* Cancel button side */}
          <div className={styles.halfSide}>
            <div className={styles.textBeforeBtn} style={{ fontSize: "1.5vw" }}>
              If you want to cancel this trip, please click on “Cancel” button!
            </div>
            <motion.button
              className={styles.smallButton}
              style={{ backgroundColor: "#FF8139" }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCancelClick}
            >
              Cancel
            </motion.button>
          </div>
        </div>
      )}

      {showCancelBox && (
        <div className={styles.overlay}>
          <CancelPopUp
            className={styles.loader}
            onClick={handleCancelClick}
            bookingID={bookingID}
          ></CancelPopUp>
        </div>
      )}

      {zoom && (
        <div className={styles.overlay}>
          <ImageZoom imageUrl={booking.payment} onClick={handleZoom} />
        </div>
      )}
      {zoom1 && (
        <div
          className={styles.overlay}
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          {/* {console.log("Image URLLLLL: ", link)} */}
          <ImageZoom imageUrl={link} onClick={handleZoom1} />
        </div>
      )}
    </div>
  );
};

export default BookingStatusScreen;
