import React from 'react'
import SignedInTabbar from '../../component/SignedInTabbar'
import IntroBackground from '../../component/IntroBackground/IntroBackground'
import BlackDropDownIcon from '../../assets/icons/black_drop_down.png'
import fillData from './fillData'
import TourContainer from '../../component/YourBookingContainer'
import UpDownIcon from '../../assets/icons/up_down_icon.png'

import { motion } from 'framer-motion'

import styles from "./styles.module.css";
import TourContainerCompany from '../../component/TourContainerCompany'

const BookingManagement = () => {
  return (
    <>
    <SignedInTabbar></SignedInTabbar>
    {/* <IntroBackground></IntroBackground> */}
    <div className={styles.content}>
        <div className={styles.title}>
            <h2 className={styles.welcome}><mark className={styles.highlight}>Welcome To Our</mark></h2>
            <h2 className={styles.myadventure}><mark className={styles.highlight}>My Adventure</mark></h2>
            <h2 className={styles.booking}><mark className={styles.highlight}>Enjoy your dream vacation, discover amazing places at exclusive details</mark></h2>
        </div>
        <div id={styles.bookingManagementBoldStatement}>
            BOOKING MANAGEMENT
        </div>
        {/* <div className={styles.bookingManagementFilterContainer}>
            <div className={styles.bookingManagementDropDownContainer}>
                All Booking
                <motion.img src={BlackDropDownIcon} 
                            alt='DropDown.png' 
                            id={styles.bookingManagementDropDownIcon}
                            whileHover={{scale: 1.2}}>
                </motion.img>
                <div className={styles.bookingManagementDropDownMenu}>
                    <ul>
                        <DropDownItem text = {"Waiting for handling"}></DropDownItem>
                        <DropDownItem text = {"Confirmed Booking"}></DropDownItem>
                        <DropDownItem text = {"Paid Booking"}></DropDownItem>
                        <DropDownItem text = {"Successful Booking"}></DropDownItem>
                    </ul>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection:'row', marginLeft:'200px'}}>
                <p className={styles.bookingManagementNormalFont}>Filter Date</p>
                <motion.img src={UpDownIcon} whileHover={{scale: 1.2}} className={styles.bookingManagementUpDownIcon}/> 
            </div>
        </div> */}

        <div className={styles.horizon} style={{padding: "0 10vw", justifyContent:'space-between', marginTop: "7vh", marginBottom: "7vh"}}>
            <motion.select id="depart" name="depart" className={styles.box}>
                <motion.option value="" selected>All Booking</motion.option>
                <motion.option value="waiting">Waiting for handling</motion.option>
                <motion.option value="confirmed">Confirmed booking</motion.option>
                <motion.option value="paid">Paid booking</motion.option>
                <motion.option value="successful">Successful booking</motion.option>
            </motion.select>

            <motion.button className={styles.horizon} whileTap={{scale: 0.8}}>
                <div className={styles.filterText}>Filter Date</div>
                <img className={styles.icon} src={require("../../assets/icons/filter.png")} alt='tick'/>
            </motion.button>
        </div>

        {fillData.map((booking, index) => (
            <TourContainerCompany
            key={booking.id}
            expectedTime={booking.expectedTime}
            route={booking.route}
            numAdult={booking.numAdult}
            nameA={booking.nameA}
            numChild={booking.numChild}
            nameC={booking.nameC}
            tourStatus={booking.tourStatus}
            bookingID = {booking.bookingID}
            bookingDate = {booking.bookingDate}
            color={index % 2 === 1 ? 'white' : 'rgba(135, 244, 224, 0.8)'}
            />
            ))}
    </div>
    </>
  )
}

// function DropDownItem(props){
//     return (
//         <li>
//             <p>{props.text}</p>
//         </li>
//     )
// }

export default BookingManagement