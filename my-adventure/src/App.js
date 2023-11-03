import "./App.css";
import BookingStepOne from "./screens/BookingStepOne";
import HomePageNotSign from "./screens/HomePageNotSign";
import BookingStepTwo from "./screens/BookingStepTwo";
import HomePageSignedIn from "./screens/HomePageSignedIn";
import BookingStepThree from "./screens/BookingStepThree.js";
import CustomerTextBox from "./components/CustomerTextBox";
import CustomerBox from "./components/CustomerBox/CustomerBox";
import TourSearch from "./component/TourSearch/TourSearch";
import MainTabbar from "./component/MainTabbar/MainTabbar";
import InternationalTourScreen from "./screens/InternationalTourScreen";
import VietNamTourScreen from "./screens/VietNamTourScreen";
import YourBooking from "./screens/YourBooking";
import BookingDetailedManagement from "./screens/BookingDetailedManagement";
import Header from "./component/Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./screens/SignIn/index.js";
import SignUp from "./screens/SignUp/index.js";
import ForgotPassword from "./screens/ForgotPassword/index.js";

export default function App() {
  return (
    // <BrowserRouter>
    //   <Header/>
    //   <MainTabbar/>
    //   <Routes>
    //     <Route>
    //       <Route path="/" element={<HomePageSignedIn/>} />
    //       <Route path="booking" element={<BookingStepOne />} />
    //       <Route path="vietnam-tours" element={<VietNamTourScreen />} />
    //       <Route path="international-tours" element={<InternationalTourScreen />} />
    //       <Route path="yourbooking" element={<YourBooking />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <ForgotPassword/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
