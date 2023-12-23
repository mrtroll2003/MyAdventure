import "./App.css";
import VietNamTourScreen from "./screens/VietNamTourScreen";
import DetailBookingScreen from "./screens/DetailBookingScreen";
import ModifyBookingScreen from "./screens/ModifyBookingScreen";
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
import CreateInternationalTourScreen from "./UpdatedScreens/CreateINTours";
import CreateVietNamTourScreen from "./UpdatedScreens/CreateVNTours";
import BookingStatusScreen from "./UpdatedScreens/BookingStatusScreen/BookingStatusScreen";

import MakeBookingScreen from "./UpdatedScreens/MakeBooking/index.js";
import VietNamTourCustomer from "./UpdatedScreens/VietNamTourCustomer/index.js";

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
import { useState, useEffect } from "react";
import Tabbar from "./component/Tabbar/Tabbar.js";
import "./index.css";
import HomePage from "./screens/HomePage/index.js";
import Cookies from "js-cookie";
import SignedInTabbar from "./component/SignedInTabbar/index.js";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const handleLogin = (login, user) => {
    setIsLogin(login);
    setIsAdmin(user);
    Cookies.set("signedIn", login.toString(), { expires: 365 });
    localStorage.setItem("isAdmin", user.toString());
  };

  useEffect(() => {
    const signedInStatus = Cookies.get("signedIn");
    if (signedInStatus === "true") {
      setIsLogin(true);
      const isAdminValue = localStorage.getItem("isAdmin");
      setIsAdmin(isAdminValue === "true");
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="fixed-header">
        <Header />
        {isLogin ? (
          isAdmin ? (
            <SignedInTabbar onLogin={handleLogin} />
          ) : (
            <MainTabbar onLogin={handleLogin} />
          )
        ) : (
          <Tabbar />
        )}
      </div>
      <div className="content"></div>
      <Routes>
        <Route>
          <Route path="sign-in" element={<SignIn onLogin={handleLogin} />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="about-us" element={<AboutUsScreen />} />
          <Route path="home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="tour-detail" element={<TourDetail />} />
          <Route path="booking" element={<MakeBookingScreen />} />
          <Route path="successful-booking" element={<SuccessfulBooking />} />
          <Route path="yourbooking" element={<YourBooking />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="vietnam-tours" element={<VietNamTourScreen />} />
          <Route
            path="international-tours"
            element={<InternationalTourScreen />}
          />
          <Route path="booking-status" element={<BookingStatusScreen />} />
          <Route path="destination-detail" element={<DestinationDetail />} />

          <Route path="company/home" element={<HomePageCompany />} />
          <Route
            path="company/vietnam-tours"
            element={<VietNamTourScreenCompany />}
          />
          <Route
            path="company/international-tours"
            element={<InternationalTourScreenCompany />}
          />

          <Route path="booking-step-two" element={<BookingStepTwo />} />
          <Route path="booking-step-three" element={<BookingStepThree />} />

          <Route
            path="create-vietnam-tours"
            element={<CreateVietNamTourScreen />}
          />
          <Route
            path="create-intl-tours"
            element={<CreateInternationalTourScreen />}
          />
          <Route
            path="international-tours"
            element={<InternationalTourScreen />}
          />

          <Route path="detail-booking" element={<DetailBookingScreen />} />
          <Route
            path="detail-booking-modify"
            element={<ModifyBookingScreen />}
          />
        </Route>

        <Route
          path="confirmed-detail-booking"
          element={<ConfirmedDetailBookingScreen />}
        />

        <Route path="cancel" element={<CancelSuccessfulBooking />} />
        <Route path="make-booking" element={<MakeBookingScreen />} />
        <Route path="vietnam-tour-customer" element={<VietNamTourCustomer />} />

        <Route path="/phucthinh" element={<MakeBookingScreen />} />

        <Route path="/booking-management" element={<BookingManagement />} />
      </Routes>
    </BrowserRouter>
    // <SignIn/>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
