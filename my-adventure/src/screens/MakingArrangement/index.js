import React from 'react'
import Header from '../../component/Header'
import SignedInTabbar from '../../component/SignedInTabbar'
import MainTabbar from '../../component/MainTabbar/MainTabbar'
import CustomerTextBox from '../../components/CustomerTextBox'
import CustomerBox from '../../components/CustomerBox/CustomerBox'
import styles from './styles.css'
import { motion } from 'framer-motion'

export const MakingArrangement = () => {
  return (
    <>
        <Header></Header>
        <SignedInTabbar></SignedInTabbar>

        <div className='makingArrangementHeaderText' id='defineFont'>
            MAKING ARRANGEMENT #1234
        </div>

        <div className='makingArrangementDate' id='defineFont'>
            Booking Date: 01/09/2023
        </div>

        <div className='makingArrangementTourDetailContainer' id='defineFont'>
            <div className='makingArrangementTourDetailInformation'>
                <div className='makingArrangementTourDetailInformationLabel'>Departure - Destination: </div>
                <div style={{marginLeft:"150px"}}>Sài Gòn-Sapa </div>
            </div>

            <div className='makingArrangementTourDetailInformation'>
                <div className='makingArrangementTourDetailInformationLabel'>Time can start: </div>
                <div style={{marginLeft:"150px"}}>30/09/2023 - 15/10/2023 </div>
            </div>

            <div className='makingArrangementTourDetailInformation'>
                <div className='makingArrangementTourDetailInformationLabel'>Expected departure time: </div>
                <div style={{marginLeft:"150px"}}>05/10/2023 </div>
            </div>

            <div className='makingArrangementTourDetailInformation'>
                <div className='makingArrangementTourDetailInformationLabel'>Kind of transportation: </div>
                <div style={{marginLeft:"150px"}}>Plane </div>
            </div>

            <div className='makingArrangementTourDetailInformation'>
                <div className='makingArrangementTourDetailInformationLabel'>Range of hotel: </div>
                <div style={{marginLeft:"150px"}}>3 stars </div>
            </div>

            <div className='makingArrangementTourDetailInformation'>
                <div className='makingArrangementTourDetailInformationLabel'>Kind of tour: </div>
                <div style={{marginLeft:"150px"}}>Economy </div>
            </div>

            <div className='makingArrangementTourDetailInformation'>
                <div className='makingArrangementTourDetailInformationLabel'>Pickup address: </div>
                <div style={{marginLeft:"150px"}}>123 Dinh Bo Linh, ward 6, Binh Thanh Dis, HCM City</div>
            </div>
        </div>

        <div className='makingArrangementCustomerInfoContainer'>
            <div>
                <div className='makingArrangementBigHeading' id='defineFont'>Customer's Information</div>
                <div className='makingArrangementSmallHeading' id='defineFont'>a. Adult</div>
                <div style={{marginTop:"50px"}}>
                    <CustomerTextBox name="Adult 1" type="adult" />
                    <CustomerTextBox name="Adult 2" type="adult" />
                </div>
                <div className='makingArrangementSmallHeading' id='defineFont'>b. Children</div>
                <div style={{marginTop:"50px"}}>
                    <CustomerTextBox name="Children 1" type="children" />
                    <CustomerTextBox name="Children 2" type="children" />
                </div>
            </div>
        </div>
    </>
  )
}
