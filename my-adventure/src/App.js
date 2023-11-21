import "./App.css";
import VietNamTourScreen from "./screens/VietNamTourScreen";
import DetailBookingScreen from "./screens/DetailBookingScreen";
import ModifyBookingScreen from "./screens/ModifyBookingScreen";
import HomePageSignedIn from "./screens/HomePageSignedIn";
import BookingStepOne from "./screens/BookingStepOne";
import BookingStepTwo from "./screens/BookingStepTwo";
import BookingStepThree from "./screens/BookingStepThree";
import CustomerTextBox from "./components/CustomerTextBox";
import TourSearch from "./component/TourSearch/TourSearch";
import MainTabbar from "./component/MainTabbar/MainTabbar";
import InternationalTourScreen from "./screens/InternationalTourScreen";
import YourBooking from "./screens/YourBooking";
import BookingDetailedManagement from "./screens/BookingDetailedManagement";
import ConfirmedDetailBookingScreen from "./screens/ConfirmedDetailBooking/index.js";
import Contacts from "./screens/Contacts";
import CancelSuccessfulBooking from "./screens/CancelSuccessfulBooking";
import VietNamTourScreenCompany from "./UpdatedScreens/VietNamTourScreenV2";
import InternationalTourScreenCompany from "./UpdatedScreens/InternationalTourScreenV2";
import DestinationDetail from "./UpdatedScreens/DestinationDetail/DestinationDetail";
import TourDetail from "./UpdatedScreens/TourDetail/TourDetail";
import BookingStatusScreen from "./UpdatedScreens/BookingStatusScreen/BookingStatusScreen";

import MakeBookingScreen from "./UpdatedScreens/MakeBooking/index.js";

import Header from "./component/Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./screens/SignIn/index.js";
import SignUp from "./screens/SignUp/index.js";
import ForgotPassword from "./screens/ForgotPassword/index.js";
import BookingManagement from "./screens/BookingManagement/index.js";
// import TourDetail from "./screens/TourDetail/index.js"; // old version of tour detail
import SuccessfulBooking from "./screens/SuccessfulBooking/index.js";
import HomePageCompany from "./screens/HomePageCompany/index.js";
import AboutUsScreen from "./screens/AboutUsScreen";
import { MakingArrangement } from "./screens/MakingArrangement/index.js";
import { useState } from "react";
import Tabbar from "./component/Tabbar/Tabbar.js";
import HomePageNotSign from "./screens/HomePageNotSign/index.js";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = (login) => {
    setIsLogin(login);
  };
  return (
    <BrowserRouter>
      <Header />
      {isLogin ? <MainTabbar onLogin={handleLogin} /> : <Tabbar />}
      <Routes>
        <Route>
          <Route path="/" element={<HomePageNotSign />} />
          <Route path="sign-in" element={<SignIn onLogin={handleLogin} />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="home" element={<HomePageSignedIn />} />
          <Route path="booking" element={<BookingStepOne />} />
          <Route path="booking-step-two" element={<BookingStepTwo />} />
          <Route path="booking-step-three" element={<BookingStepThree />} />
          <Route path="vietnam-tours" element={<VietNamTourScreen />} />
          <Route
            path="vietnam-tours-company"
            element={<VietNamTourScreenCompany />}
          />
          <Route
            path="intl-tours-company"
            element={<InternationalTourScreenCompany />}
          />
          <Route
            path="international-tours"
            element={<InternationalTourScreen />}
          />
          <Route path="tour-detail" element={<TourDetail />} />
          <Route path="yourbooking" element={<YourBooking />} />
          <Route path="detail-booking" element={<DetailBookingScreen />} />
          <Route
            path="detail-booking-modify"
            element={<ModifyBookingScreen />}
          />
          <Route path="successful-booking" element={<SuccessfulBooking />} />
        </Route>
        <Route path="about-us" element={<AboutUsScreen />} />
        <Route
          path="confirmed-detail-booking"
          element={<ConfirmedDetailBookingScreen />}
        />
        <Route path="contact" element={<Contacts />} />
        <Route path="cancel" element={<CancelSuccessfulBooking />} />

        <Route path="phucthinh" element={<MakeBookingScreen />} />

        <Route path="/booking-management" element={<BookingManagement />} />
        <Route path="/phuclam" element={<DestinationDetail />} />
        <Route path="/phuclam2" element={<BookingStatusScreen />} />
      </Routes>
    </BrowserRouter>
    // <SignIn/>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
