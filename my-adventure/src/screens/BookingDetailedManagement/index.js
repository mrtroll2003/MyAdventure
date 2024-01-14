import React from 'react'
import Header from '../../component/Header'
import MainTabbar from '../../component/MainTabbar/MainTabbar'
import styles from './styles.module.css'
import CustomerTextBox from '../../components/CustomerTextBox'

export default function BookingDetailedManagement() {
  return (
    <div>
      <Header/>
      <MainTabbar/>
      <div className = {styles.main}>
        Booking Detail #1234
      </div>
      <div className={styles.alignCenter}>
        <div className={styles.statusText}>Waiting for handling</div>
      </div>
      <div className={styles.date}>Booking Date: 01/09/2023</div>
      <div  className={styles.buttonBox}>
        <button className={styles.buttonText}>Making arrangement</button>
      </div>
      <div style={{marginTop: "15vh", display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: "3vh", flexDirection: 'column'}}>
        <div className={styles.horizon}>
          <div className={styles.label}>Departure-Destination: </div>
          <div >Sài Gòn-Sapa </div>
        </div>

        <div className={styles.horizon}>
          <div className={styles.label}>Time can start: </div>
          <div >30/09/2023 - 15/10/2023</div>
        </div>

        <div className={styles.horizon}>
          <div className={styles.label}>Expected departure time: </div>
          <div >05/10/2023</div>
        </div>

        <div className={styles.horizon}>
          <div className={styles.label}>Kind of transportation: </div>
          <div >Plane</div>
        </div>

        <div className={styles.horizon}>
          <div className={styles.label}>Range of hotel: </div>
          <div >3 stars</div>
        </div>

        <div className={styles.horizon}>
          <div className={styles.label}>Kind of tour: </div>
          <div >Economy</div>
        </div>

        <div className={styles.horizon}>
          <div className={styles.label}>Pickup address: </div>
          <div >123 Dinh Bo Linh, ward 6, Binh Thanh Dis, HCM City</div>
        </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '10vh', paddingBottom: "10vh"}}>
        <div style={{width: 'auto'}}>
          <div className={styles.heading1}>Customer's Information</div>
            <div className={styles.heading2}>a. Adult</div>
            <div className={styles.infoTag}>
              <CustomerTextBox name="Adult 1" type="adult" />
              <CustomerTextBox name="Adult 2" type="adult"/>
            </div>
            <div className={styles.heading2}>b. Children</div>
            <div className={styles.infoTag}>
              <CustomerTextBox name="Children 1"/>
              <CustomerTextBox name="Children 2"/>
            </div>
        </div>
      </div>
    </div>
  )
}
