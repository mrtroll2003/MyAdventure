import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import TourContainerCompany from "../../component/TourContainerCompany";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../../constant/formatDate";

const CustomerList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tourID = searchParams.get("tourID");
  const [tour, setTour] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adultList, setAdultList] = useState([]);
  const [childList, setChildList] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedStatus, setSelectedStatus] = useState("all bookings");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:3001/booking/tour?tourID=${tourID}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setBookings(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));

    fetch(`http://localhost:3001/tour/id?id=${tourID}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setTour(result))
      .catch((error) => console.log("error", error));
  }, [tourID]);

  useEffect(() => {
    const fetchAdultLists = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const fetchedAdultLists = [];

        for (const booking of bookings) {
          const response = await fetch(
            `http://localhost:3001/adult/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`,
            requestOptions
          );
          const result = await response.json();
          fetchedAdultLists.push(result);
        }

        setAdultList(fetchedAdultLists);
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

        const fetchedChildrenLists = [];

        for (const booking of bookings) {
          const response = await fetch(
            `http://localhost:3001/children/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`,
            requestOptions
          );
          const result = await response.json();
          fetchedChildrenLists.push(result);
        }

        setChildList(fetchedChildrenLists);
        console.log("Children Lists:", adultList);
      } catch (error) {
        console.log("Error:", error);
        setChildList([]);
      }
    };

    fetchAdultLists();
    fetchChildrenLists();
  }, [bookings]);

  const handleSortOrderChange = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  const filterBookings = bookings
    .filter(
      (item) =>
        selectedStatus === "all bookings" || item.status === selectedStatus
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.date.localeCompare(b.date);
      } else {
        return b.date.localeCompare(a.date);
      }
    });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className={styles.welcome}>
            <mark className={styles.highlight}>Welcome To Our</mark>
          </h2>
          <h2 className={styles.myadventure}>
            <mark className={styles.highlight}>My Adventure</mark>
          </h2>
          <h2 className={styles.booking}>
            <mark className={styles.highlight}>
              Enjoy your dream vacation, discover amazing places at exclusive
              details
            </mark>
          </h2>
        </div>
        <div className={styles.content1}>
          <div id={styles.bookingManagementBoldStatement}>CUSTOMER LIST</div>

          <div className={styles.place}>
            {tour.departure} - {tour.destination}
          </div>

          <div className={styles.time}>
            {formatDate(tour.departureDate)} - {formatDate(tour.returnDate)}
          </div>
          <div className={styles.horizon} id={styles.filterSection}>
            <motion.select
              id="depart"
              name="depart"
              className={styles.box}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <motion.option value="all bookings" selected>
                All Booking
              </motion.option>
              <motion.option value="Waiting for handling">
                Waiting for handling
              </motion.option>
              <motion.option value="Waiting for checking">
                Waiting for checking
              </motion.option>
              <motion.option value="Confirmed">Confirmed</motion.option>
              <motion.option value="Paid">Paid</motion.option>
              <motion.option value="Finish">Finish</motion.option>
              <motion.option value="Cancelled">Cancelled</motion.option>
            </motion.select>

            <motion.button
              className={styles.horizon1}
              whileTap={{ scale: 0.8 }}
              onClick={handleSortOrderChange}
            >
              <div className={styles.filterText}>Filter Date</div>
              <img
                className={styles.icon}
                src={require("../../assets/icons/filter.png")}
                alt="tick"
              />
            </motion.button>
          </div>

          <div style={{ paddingBottom: "5vw" }}>
            {filterBookings.map((booking, index) => (
              <TourContainerCompany
                key={booking._id}
                id={booking._id}
                destination={booking.destination}
                departure={booking.departure}
                fullName={booking.name}
                phone={booking.phone}
                numAdult={adultList[index]?.length || 0}
                numChild={childList[index]?.length || 0}
                tourStatus={booking.status}
                bookingDate={booking.date}
                color={index % 2 === 1 ? "white" : "rgba(135, 244, 224, 0.8)"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerList;
