import React from 'react'
import Header from '../../component/Header'
import SignedInTabbar from '../../component/SignedInTabbar'
import IntroBackground from '../../component/IntroBackground/IntroBackground'
import BlackDropDownIcon from '../../assets/icons/black_drop_down.png'
import fillData from './fillData'
import TourContainer from '../../component/YourBookingContainer'
import UpDownIcon from '../../assets/icons/up_down_icon.png'

import { motion } from 'framer-motion'

import "./styles.css";

const BookingManagement = () => {
  return (
    <>
    <Header/>
    <SignedInTabbar></SignedInTabbar>
    <IntroBackground></IntroBackground>
    <div>
        <div id='bookingManagementBoldStatement'>
            Booking Management
        </div>
        <div className='bookingManagementFilterContainer'>
            <div className='bookingManagementDropDownContainer'>
                All Booking
                <motion.img src={BlackDropDownIcon} 
                            alt='DropDown.png' 
                            id='bookingManagementDropDownIcon'
                            whileHover={{scale: 1.2}}>
                </motion.img>
                <div className='bookingManagementDropDownMenu'>
                    <ul>
                        <DropDownItem text = {"Waiting for handling"}></DropDownItem>
                        <DropDownItem text = {"Confirmed Booking"}></DropDownItem>
                        <DropDownItem text = {"Paid Booking"}></DropDownItem>
                        <DropDownItem text = {"Successful Booking"}></DropDownItem>
                    </ul>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection:'row', marginLeft:'200px'}}>
                <p className='bookingManagementNormalFont'>Filter Date</p>
                <motion.img src={UpDownIcon} whileHover={{scale: 1.2}} className='bookingManagementUpDownIcon'/> 
            </div>
        </div>
        {fillData.map(booking => (
            <TourContainer
            key={booking.id}
            expectedTime={booking.expectedTime}
            route={booking.route}
            numAdult={booking.numAdult}
            nameA={booking.nameA}
            numChild={booking.numChild}
            nameC={booking.nameC}
            tourStatus={booking.tourStatus}
            />
            ))}
    </div>
    </>
  )
}

function DropDownItem(props){
    return (
        <li>
            <p>{props.text}</p>
        </li>
    )
}

export default BookingManagement