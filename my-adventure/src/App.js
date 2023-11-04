import "./App.css";
import VietNamTourScreen from "./screens/VietNamTourScreen";
import DetailBookingScreen from "./screens/DetailBookingScreen";
import ModifyBookingScreen from "./screens/ModifyBookingScreen";
import BookingStepTwo from "./screens/BookingStepTwo";
import BookingStepThree from "./screens/BookingStepThree";
import CustomerTextBox from "./components/CustomerTextBox";
import TourSearch from "./component/TourSearch/TourSearch";
import MainTabbar from "./component/MainTabbar/MainTabbar";
import InternationalTourScreen from "./screens/InternationalTourScreen";
import YourBooking from "./screens/YourBooking";
import BookingDetailedManagement from "./screens/BookingDetailedManagement";
import Header from "./component/Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./screens/SignIn/index.js";
import SignUp from "./screens/SignUp/index.js";
import ForgotPassword from "./screens/ForgotPassword/index.js";
import HomePageSignedIn from "./screens/HomePageSignedIn/index.js";
import BookingStepOne from "./screens/BookingStepOne/index.js";
import BookingManagement from "./screens/BookingManagement/index.js";
import TourDetail from "./screens/TourDetail/index.js";
import SuccessfulBooking from "./screens/SuccessfulBooking/index.js";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MainTabbar/>
      <Routes>
        <Route>
          <Route path="/" element={<HomePageSignedIn/>} />
          <Route path="booking" element={<BookingStepOne/>} />
          <Route path="booking-step-two" element={<BookingStepTwo/>} />
          <Route path="booking-step-three" element={<BookingStepThree/>} />
          <Route path="vietnam-tours" element={<VietNamTourScreen />} />
          <Route path="international-tours" element={<InternationalTourScreen />} />
          <Route path="tour-detail" element={<TourDetail />} />
          <Route path="yourbooking" element={<YourBooking />} />
          <Route path="detail-booking" element={<DetailBookingScreen />} />
          <Route path="detail-booking-modify" element={<ModifyBookingScreen />} />
          <Route path="successful-booking" element={<SuccessfulBooking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
