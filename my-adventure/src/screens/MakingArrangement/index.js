import React from 'react'
import Header from '../../component/Header'
import SignedInTabbar from '../../component/SignedInTabbar'
import MainTabbar from '../../component/MainTabbar/MainTabbar'
import CustomerTextBox from '../../components/CustomerTextBox'
import CustomerBox from '../../components/CustomerBox/CustomerBox'
import DatePicker from "react-datepicker"
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
        <div className='makingArrangementRecommendContainer'>
            RECOMMENDED ARRANGEMENT
        </div>
        <div className='makingArrangementRecommendCriteriaContainer'>

            <div  style={{fontSize:"45px",fontWeight:"bold"}}>Transportation: </div>
            <div className='makingArrangementRecommendCriteriaInformation'>
                <div className='makingArrangementRecommendCriteriaInformationLabel'>Transportation's brand: </div>
                <input className='makingArrangementRecommendCriteriaInformationInput' type='text' placeholder='Enter Brand'></input>
            </div>

            <div className='makingArrangementRecommendCriteriaInformation'>
                <div className='makingArrangementRecommendCriteriaInformationLabel'>Departure Date: </div>
                <DatePicker className='makingArrangementRecommendCriteriaInformationInput' 
                            popupStyle={{ zIndex: 9999, position: "fixed" }}
                            dateFormat={"dd/MM/yyyy"}></DatePicker>
            </div>

            <div className='makingArrangementRecommendCriteriaInformation'>
                <div className='makingArrangementRecommendCriteriaInformationLabel'>Departure Time: </div>
                <input className='makingArrangementRecommendCriteriaInformationInput' type='number' style={{width:"8vw"}}></input>
                <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"2%", marginRight:"2%"}}>h</div>
                <input className='makingArrangementRecommendCriteriaInformationInput' type='number' style={{width:"8vw"}}></input>
                <select className='makingArrangementRecommendCriteriaInformationInput'style={{width:"8vw", marginLeft:"2%"}}>
                    <option>am</option>
                    <option>pm</option>
                </select>
            </div>

            <div className='makingArrangementRecommendCriteriaInformation'>
                <div className='makingArrangementRecommendCriteriaInformationLabel'>Return Date: </div>
                <DatePicker className='makingArrangementRecommendCriteriaInformationInput' 
                            popupStyle={{ zIndex: 9999, position: "fixed" }}
                            dateFormat={"dd/MM/yyyy"}></DatePicker>
            </div>

            <div className='makingArrangementRecommendCriteriaInformation'>
                <div className='makingArrangementRecommendCriteriaInformationLabel'>Return Time: </div>
                <input className='makingArrangementRecommendCriteriaInformationInput' type='number' style={{width:"8vw"}}></input>
                <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"2%", marginRight:"2%"}}>h</div>
                <input className='makingArrangementRecommendCriteriaInformationInput' type='number' style={{width:"8vw"}}></input>
                <select className='makingArrangementRecommendCriteriaInformationInput'style={{width:"8vw", marginLeft:"2%"}}>
                    <option>am</option>
                    <option>pm</option>
                </select>
            </div>
        </div>

        <div className='makingArrangementRecommendCriteriaContainer'>

            <div  style={{fontSize:"45px",fontWeight:"bold"}}>Accommodation: </div>
            <div className='makingArrangementRecommendCriteriaInformation'>
                <div className='makingArrangementRecommendCriteriaInformationLabel'>Accommodation's name: </div>
                <input className='makingArrangementRecommendCriteriaInformationInput' type='text' placeholder='Enter Name'></input>
            </div>

            <div className='makingArrangementRecommendCriteriaInformation'>
                <div className='makingArrangementRecommendCriteriaInformationLabel'>Checkin Date: </div>
                <DatePicker className='makingArrangementRecommendCriteriaInformationInput' 
                            popupStyle={{ zIndex: 9999, position: "fixed" }}
                            dateFormat={"dd/MM/yyyy"}></DatePicker>
            </div>

            <div className='makingArrangementRecommendCriteriaInformation'>
                <div className='makingArrangementRecommendCriteriaInformationLabel'>Checkin Time: </div>
                <input className='makingArrangementRecommendCriteriaInformationInput' type='number' style={{width:"8vw"}}></input>
                <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"2%", marginRight:"2%"}}>h</div>
                <input className='makingArrangementRecommendCriteriaInformationInput' type='number' style={{width:"8vw"}}></input>
                <select className='makingArrangementRecommendCriteriaInformationInput'style={{width:"8vw", marginLeft:"2%"}}>
                    <option>am</option>
                    <option>pm</option>
                </select>
            </div>

            <div className='makingArrangementRecommendCriteriaInformation'>
                <div className='makingArrangementRecommendCriteriaInformationLabel'>Checkout Date: </div>
                <DatePicker className='makingArrangementRecommendCriteriaInformationInput' 
                            popupStyle={{ zIndex: 9999, position: "fixed" }}
                            dateFormat={"dd/MM/yyyy"}></DatePicker>
            </div>

            <div className='makingArrangementRecommendCriteriaInformation'>
                <div className='makingArrangementRecommendCriteriaInformationLabel'>Checkout Time: </div>
                <input className='makingArrangementRecommendCriteriaInformationInput' type='number' style={{width:"8vw"}}></input>
                <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"2%", marginRight:"2%"}}>h</div>
                <input className='makingArrangementRecommendCriteriaInformationInput' type='number' style={{width:"8vw"}}></input>
                <select className='makingArrangementRecommendCriteriaInformationInput'style={{width:"8vw", marginLeft:"2%"}}>
                    <option>am</option>
                    <option>pm</option>
                </select>
            </div>

            <div className='makingArrangementRecommendCriteriaInformation'>
                <div className='makingArrangementRecommendCriteriaInformationLabel'>Type and quantity of room: </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div style={{display:"flex", flexDirection:"row", width:"50vw", alignItems:"center", marginTop:"3vh"}}>
                        <input className='makingArrangementRecommendCriteriaInformationInput' type='number' style={{width:"8vw"}}></input>
                        <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"2%", marginRight:"2%"}}>Single room (1 - 2 adults) </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", width:"50vw", alignItems:"center", marginTop:"3vh"}}>
                        <input className='makingArrangementRecommendCriteriaInformationInput' type='number' style={{width:"8vw"}}></input>
                        <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"2%", marginRight:"2%"}}>Double room (3 - 4 adults) </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"row", width:"50vw", alignItems:"center", marginTop:"3vh"}}>
                        <input className='makingArrangementRecommendCriteriaInformationInput' type='number' style={{width:"8vw"}}></input>
                        <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"2%", marginRight:"2%"}}>Family room (2 adults and 2 children) </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='makingArrangementRecommendCriteriaContainer'>
            <div  style={{fontSize:"45px",fontWeight:"bold"}}>Schedule detail: </div>
            <input className='makingArrangementRecommendSchedule' 
                   style={{width:"90vw", height:"80vh"}}
                   type='text'
                   placeholder='Type the detailed schedule for each day'></input>
        </div>

        <div className='makingArrangementRecommendNoteText'>Press "Arrange" button to notify to customer about recommended arrangement! </div>

        <motion.button className='makingArrangementRecommendButton' 
                       whileHover={{scale:1.2}}
                       whileTap={{rotate: 5, scale: 0.8}}
                       transition={{duration:0.1}}>Arrange</motion.button>
    </>
  )
}
