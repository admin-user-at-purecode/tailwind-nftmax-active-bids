import React, { useContext, useEffect } from "react";
import {
  ChevronsRight,
  Gavel,
  Heart,
  LayoutDashboard,
  LogOut,
  Mail,
  ShoppingCart,
  Star,
  Store,
  Wallet,
  History,
  User,
  Settings,
} from "lucide-react";
import darklogo from "../../assets/images/darkLogo.png";
import logo from "../../assets/images/logo.png";
import DarkModeContext from "../Contexts/DarkModeContext";

export default function Sidebar({ sidebar, action }) {
  const darkMode = useContext(DarkModeContext);
  useEffect(() => {
    const title = document.querySelectorAll(".menu-setting-items .heading");
    if (sidebar) {
      title.forEach((elm) => {
        elm.classList.add("active");
      });
    } else {
      title.forEach((elm) => {
        elm.classList.remove("active");
      });
    }
  });
  return (
    <div className="w-full h-full">
      <div
        className={`w-full flex items-center transition-all duration-300 ease-in-out ${
          sidebar ? "justify-between  mb-14" : "justify-center"
        }`}
      >
        <div className={`sidebar-logo ${sidebar ? "enter" : ""}`}>
          {darkMode.theme === "light" ? (
            <img src={logo} alt="nft" />
          ) : (
            <img src={darklogo} alt="nft" />
          )}
        </div>
        <span onClick={action}>
          <ChevronsRight color="#c026d3" size={45} strokeWidth={3} />
        </span>
      </div>
      <div className="menu-setting-items mb-11">
        <div
          className={`menu-item transition-all duration-300 ease-in-out ${
            sidebar ? "mb-14" : ""
          }`}
        >
          <div className="heading mb-5">
            <h1 className="title text-xl font-bold text-purple">Menu</h1>
          </div>
          <div className="items">
            <ul className="flex flex-col space-y-6">
              <li className="item group">
                <a
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  } `}
                  to="/"
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <LayoutDashboard size={15} fill="#000000" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Dashboard
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/active-bids"
                  className={`nav-item flex items-center  ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <Gavel size={15} fill="#000000" />
                  </span>
                  <span
                    className={`item-content relative group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Active Bids
                    <span className="absolute left-24 -top-1 text-sm flex justify-center items-center w-5 h-5 primary-gradient rounded-full text-white">
                      19
                    </span>
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/market-place"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <Store size={15} fill="#000000" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Marketplace
                    <span className="absolute left-28 -top-1 text-sm flex justify-center items-center w-5 h-5 bg-purple rounded-full text-white">
                      09
                    </span>
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/my-wallet"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <Wallet size={15} fill="#000000" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    My Wallet
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/my-collection"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <Star size={15} fill="#000000" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    My collections
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/sell"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <ShoppingCart size={15} fill="#000000" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Sell
                    <span className="absolute left-10 -top-1 text-sm flex justify-center items-center w-5 h-5 bg-green-700 rounded-full text-white">
                      4k
                    </span>
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/saved"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <Heart size={15} fill="#000000" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Saved
                    <span className="absolute left-14 -top-1 text-sm flex justify-center items-center w-5 h-5 bg-red-500 rounded-full text-white">
                      32
                    </span>
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/message"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <Mail size={15} color="#ffffff" fill="#000000" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Message
                    <span className="absolute left-20 -top-1 text-sm flex justify-center items-center w-5 h-5 bg-pink rounded-full text-white">
                      19
                    </span>
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/history"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <History size={15} color="#ffffff" fill="#000000" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    History
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="setting-item mb-11">
          <div className="heading mb-5">
            <h1 className="title text-xl font-bold text-purple">Settings</h1>
          </div>
          <div className="items">
            <ul className="flex flex-col space-y-6">
              <li className="item group">
                <a
                  to="/profile"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <User size={18} strokeWidth={3} />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    My Profile
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/settings"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <Settings fill="#000000" size={16} />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="accounts-item">
          <div className="heading mb-5">
            <h1 className="title text-xl font-bold text-purple">Accounts</h1>
          </div>
          <div className="items">
            <ul className="flex flex-col space-y-6">
              <li className="item group">
                <a
                  to="/login"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <User size={18} strokeWidth={3} />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Login
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/signup"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <User size={18} strokeWidth={3} />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Signup
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/forgot-password"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <User size={18} strokeWidth={3} />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Forgot Password?
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/update-password"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-graydark:text-lighter-gray">
                    <User size={18} strokeWidth={3} />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Update Password
                  </span>
                </a>
              </li>
              <li className="item group">
                <a
                  to="/verify-you"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-lighter-gray">
                    <User size={18} strokeWidth={3} />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Verify you
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {sidebar ? (
        <div className="pb-5">
          <button
            type="button"
            className="signout-btn flex items-center space-x-1  p-2.5 w-2/3 h-[52px] bg-purple transition duration-300 ease-in-out hover:bg-gray-900 rounded-full"
          >
            <span>
              <LogOut color="#ffffff" strokeWidth={3} />
            </span>
            <span
              className={`signout-btn-content text-white text-xl font-bold ${
                sidebar ? "active" : ""
              }`}
            >
              Signout
            </span>
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="signout-btn w-full flex items-center justify-center"
        >
          <span className="">
          <LogOut color="#6e269e" strokeWidth={3} size={20} />
          </span>
        </button>
      )}
    </div>
  );
}
