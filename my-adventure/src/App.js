import "./App.css";
import VietNamTourScreen from "./screens/VietNamTourScreen";
import ModifyBookingScreen from "./screens/ModifyBookingScreen";
import MainTabbar from "./component/MainTabbar/MainTabbar";
import InternationalTourScreen from "./screens/InternationalTourScreen";
import YourBooking from "./screens/YourBooking";
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
import Header from "./component/Header";
import {
  BrowserRouter,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import SignIn from "./screens/SignIn/index.js";
import SignUp from "./screens/SignUp/index.js";
import ForgotPassword from "./screens/ForgotPassword/index.js";
import BookingManagement from "./screens/BookingManagement/index.js";
import SuccessfulBooking from "./screens/SuccessfulBooking/index.js";
import AboutUsScreen from "./screens/AboutUsScreen";
import { useState, useEffect } from "react";
import Tabbar from "./component/Tabbar/Tabbar.js";
import "./index.css";
import HomePage from "./screens/HomePage/index.js";
import Cookies from "js-cookie";
import SignedInTabbar from "./component/SignedInTabbar/index.js";
import MakePaymentScreen from "./UpdatedScreens/MakePaymentScreen/index.js";
import CustomerList from "./UpdatedScreens/CustomerList/index.js";
import ModifyTour from "./UpdatedScreens/ModifyTour/index.js";
import BookingDetail from "./UpdatedScreens/BookingDetail/index.js";
import BookingDetailModify from "./UpdatedScreens/BookingDetailModify/index.js";
import Report from "./UpdatedScreens/Report/index.js";
import Chatbot from "./assets/images/chatbot.jpg";

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import DateTourManagement from "./UpdatedScreens/DateTourManagement/index.js";

const chatbotSteps = [
  {
    id: "0",
    message: "Welcome to MyAdventure!",
    trigger: "1",
  },
  {
    id: "1",
    message: "Please write your name",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, how can I help you?",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: 1, label: "Vietnam Tours", trigger: "vietnamTours" },
      { value: 2, label: "International Tours", trigger: "internationalTours" },
      { value: 3, label: "Get to know us", trigger: "getToKnowUs" },
      { value: 4, label: "Contact us", trigger: "contactUs" },
    ],
  },
  {
    id: "vietnamTours",
    message: "You selected Vietnam Tours. Navigating to Vietnam Tours...",
    trigger: "5",
  },
  {
    id: "5",
    // Add the necessary message or question for the Vietnam Tours screen
    message: "Welcome to Vietnam Tours! How can I assist you further?",
    trigger: "4", // Go back to the main menu
  },
  {
    id: "internationalTours",
    message:
      "You selected International Tours. Navigating to International Tours...",
    trigger: "6",
  },
  {
    id: "6",
    // Add the necessary message or question for the International Tours screen
    message: "Welcome to International Tours! How can I assist you further?",
    trigger: "4", // Go back to the main menu
  },
  {
    id: "getToKnowUs",
    message: "You selected Get to know us. Navigating to Get to know us...",
    trigger: "7",
  },
  {
    id: "7",
    // Add the necessary message or question for the Get to know us screen
    message: "Welcome to Get to know us! How can I assist you further?",
    trigger: "4", // Go back to the main menu
  },
  {
    id: "contactUs",
    message: "You selected Contact us. Navigating to Contact us...",
    trigger: "8",
  },
  {
    id: "8",
    // Add the necessary message or question for the Contact us screen
    message: "Welcome to Contact us! How can I assist you further?",
    trigger: "4", // Go back to the main menu
  },
];

// Define your chatbot theme
const chatbotTheme = {
  background: "white",
  headerBgColor: "#5CD6C0",
  headerFontSize: "1.2vw",
  botBubbleColor: "#808080",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#5CD6C0",
  userFontColor: "white",
};

const config = {
  botAvatar: Chatbot,
  floating: true,
};

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
          <Route path="cancel" element={<CancelSuccessfulBooking />} />
          <Route path="make-payment" element={<MakePaymentScreen />} />
          <Route
            path="detail-booking-modify"
            element={<ModifyBookingScreen />}
          />

          <Route path="company/home" element={<HomePage />} />
          <Route
            path="company/vietnam-tours"
            element={<VietNamTourScreenCompany />}
          />
          <Route
            path="company/international-tours"
            element={<InternationalTourScreenCompany />}
          />
          <Route
            path="company/create-vietnam-tours"
            element={<CreateVietNamTourScreen />}
          />
          <Route
            path="company/create-intl-tours"
            element={<CreateInternationalTourScreen />}
          />
          <Route path="company/customer-list" element={<CustomerList />} />
          <Route
            path="company/booking-management"
            element={<BookingManagement />}
          />
          <Route path="company/modify-tour" element={<ModifyTour />} />
          <Route path="company/detail-booking" element={<BookingDetail />} />
          <Route
            path="company/booking-detail-modify"
            element={<BookingDetailModify />}
          />
          <Route path="company/report" element={<Report />} />
          <Route
            path="company/date-tour-management"
            element={<DateTourManagement />}
          />

          <Route
            path="international-tours"
            element={<InternationalTourScreen />}
          />
        </Route>
      </Routes>

      <ThemeProvider theme={chatbotTheme}>
        <ChatBot
          headerTitle="MyAdventure Chatbot"
          steps={chatbotSteps}
          {...config}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}
