import React, { useContext } from "react";
import {
  SunMoon,
  Check,
  Box,
  Wallet,
  Plus,
  Bell,
  ShoppingCart,
  UserPlus,
  Trophy,
  User,
  Mail,
  History,
  Settings,
  LogOut,
  ChevronsRight,
} from "lucide-react";
import bank1 from "../../assets/images/bank-1.png";
import profileImg from "../../assets/images/profile-pic.jpg";
import useToggle from "../../hooks/useToggle";
import DarkModeContext from "../Contexts/DarkModeContext";
import SearchCom from "../helpers/SearchCom";

export default function Header({ sidebarHandler }) {
  const [balanceDropdown, setbalanceValue] = useToggle(false);
  const [notificationDropdown, setNotificationValue] = useToggle(false);
  const [userProfileDropdown, setProfileDropdown] = useToggle(false);
  const darkMode = useContext(DarkModeContext);
  const handlerBalance = () => {
    setbalanceValue.toggle();
    if (notificationDropdown) {
      setNotificationValue.toggle();
    }
    if (userProfileDropdown) {
      setProfileDropdown.toggle();
    }
  };
  const handlerNotification = () => {
    setNotificationValue.toggle();
    if (balanceDropdown) {
      setbalanceValue.toggle();
    }
    if (userProfileDropdown) {
      setProfileDropdown.toggle();
    }
  };
  const handlerProfile = () => {
    setProfileDropdown.toggle();
    if (balanceDropdown) {
      setbalanceValue.toggle();
    }
    if (notificationDropdown) {
      setNotificationValue.toggle();
    }
  };
  const clickAwayhandler = () => {
    if (balanceDropdown) {
      setbalanceValue.toggle();
    }
    if (notificationDropdown) {
      setNotificationValue.toggle();
    }
    if (userProfileDropdown) {
      setProfileDropdown.toggle();
    }
  };
  return (
    <>
      <div className="header-wrapper backdrop-blur-sm bg-[#efedfe5e]/60 dark:bg-transparent w-full h-full flex items-center xl:px-0 md:px-10 px-5">
        <div className="flex justify-between items-center w-full">
          <button
            className="xl:hidden block mr-10"
            type="button"
            onClick={sidebarHandler}
          >
            <ChevronsRight color="#c026d3" size={45} strokeWidth={3} />
          </button>
          <div className="search-bar lg:block hidden w-[376px] pl-5">
            <SearchCom />
          </div>
          <div className="user-info flex items-center justify-end w-full xl:space-x-7 space-x-2 z-10 ">
            <button
              onClick={darkMode.handleThemeSwitch}
              type="button"
              className="xl:w-[176px] w-[52px] h-[52px] dark:bg-white bg-dark-gray border border-pink rounded-full flex justify-center items-center"
            >
              <div className="flex space-x-2.5 items-center">
                <span className="dark:text-dark-gray text-white">
                  <SunMoon />
                </span>
                <span className="dark:text-dark-gray font-medium text-white xl:block hidden">
                  {darkMode.theme === "light" ? "Dark" : "Light"} Mode
                </span>
              </div>
            </button>
            <div className="lg:flex hidden user-balance cursor-pointer lg:w-[252px] w-[150px] h-[48px]  items-center rounded-full relative  bg-purple pr-1.5 pl-4">
              <div
                onClick={() => handlerBalance()}
                className="flex items-center lg:justify-between justify-center w-full h-full"
              >
                <span className="lg:block hidden">
                  <Wallet fill="#ffffff" color="#ffffff" size={35} />
                </span>
                <p className="lg:text-xl text-lg font-bold text-white">
                  $ 234,435.34
                </p>
                <span className="lg:block hidden min-h-[30px] min-w-[30px] flex justify-center items-center rounded-full bg-white p-1">
                  <Plus color="#5356fb" strokeWidth={3} />
                </span>
              </div>
              <div
                className={`balance-dropdown w-96 z-30 bg-white dark:bg-dark-white   absolute -left-24 rounded-lg cursor-pointer ${
                  balanceDropdown ? "active" : ""
                }`}
              >
                <div className="heading border-b dark:border-[#5356fb29]  border-light-purple px-7 py-6">
                  <h3 className="text-xl font-bold   text-dark-gray dark:text-white">
                    Your Balance
                  </h3>
                </div>
                <div className="content px-7 pb-7">
                  <ul>
                    <li className="content-item py-4 border-b dark:border-[#5356fb29]  border-light-purple hover:border-purple dark:hover:border-purple">
                      <div className="sm:flex justify-between items-center">
                        <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                          <div className=" w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple dark:bg-dark-light-purple ">
                            <img src={bank1} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-base text-dark-gray dark:text-white font-medium">
                              MetaMask
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="eth text-xl font-bold text-purple">
                            75,320 ETH
                          </p>
                          <p className="usd text-base text-thin-light-gray text-right">
                            (773.69 USD)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-4 border-b dark:border-[#5356fb29]  border-light-purple hover:border-purple dark:hover:border-purple">
                      <div className="sm:flex justify-between items-center">
                        <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                          <div className=" w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple dark:bg-dark-light-purple ">
                            <img src={bank1} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-base text-dark-gray dark:text-white font-medium">
                              Coinbase Wallet
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="eth text-xl font-bold text-purple">
                            56,124 ETH
                          </p>
                          <p className="usd text-base text-thin-light-gray text-right">
                            (773.69 USD)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-4 border-b dark:border-[#5356fb29]  border-light-purple hover:border-purple dark:hover:border-purple">
                      <div className="sm:flex justify-between items-center">
                        <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                          <div className=" w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple dark:bg-dark-light-purple ">
                            <img src={bank1} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-base text-dark-gray dark:text-white font-medium">
                              Bitski
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="eth text-xl font-bold text-purple">
                            99,123 ETH
                          </p>
                          <p className="usd text-base text-thin-light-gray text-right">
                            (773.69 USD)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-5">
                      <div className="sm:flex justify-between items-center">
                        <div className="account-name flex space-x-4 items-center mb-2 sm:mb-0">
                          <div className=" w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple dark:bg-dark-light-purple ">
                            <img src={bank1} alt="" />
                          </div>
                          <div className="name">
                            <p className="text-base text-dark-gray dark:text-white font-medium">
                              WalletConnect
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="eth text-xl font-bold text-purple">
                            43,728 ETH
                          </p>
                          <p className="usd text-base text-thin-light-gray text-right">
                            (773.69 USD)
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="add-money-btn flex justify-center items-center">
                    <button
                      type="button"
                      className="w-[122px] h-11 flex justify-center items-center btn-gradient text-base rounded-full text-white"
                    >
                      Add Money
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden flex user-balance cursor-pointer lg:w-[252px] w-[150px] h-[48px]  items-center rounded-full relative  bg-purple">
              <div className="flex items-center lg:justify-between justify-center w-full h-full">
                <p className="lg:text-xl text-lg font-bold text-white">
                  $ 234,435.34
                </p>
              </div>
            </div>
            <div className="lg:hidden block"></div>
            <div className="user-notification lg:block hidden relative">
              <div
                onClick={() => handlerNotification()}
                className="lg:w-[48px] lg:h-[48px] w-[38px] h-[38px] bg-white   flex justify-center items-center rounded-full overflow-hidden relative"
              >
                <span className="lg:block hidden min-h-[30px] min-w-[30px] rounded-full bg-white p-1">
                  <Bell color="#5356fb" strokeWidth={3} />
                </span>
                <span className="absolute right-2 top-2 z-10 text-xs lg:w-5 lg:h-5 w-4 h-4 flex justify-center items-center rounded-full primary-gradient text-white">
                  10
                </span>
              </div>
              <div
                className={`notification-dropdown z-30 w-96 bg-white dark:bg-dark-white   absolute -right-12 rounded-lg cursor-pointer ${
                  notificationDropdown ? "active" : ""
                }`}
              >
                <div className="heading border-b dark:border-[#5356fb29]  border-light-purple px-7 py-6">
                  <h3 className="text-xl font-bold   text-dark-gray dark:text-white">
                    Recent Notifications
                  </h3>
                </div>
                <div className="content px-7 pb-7">
                  <ul>
                    <li className="content-item py-4 border-b dark:border-[#5356fb29]  border-light-purple hover:border-purple dark:hover:border-purple">
                      <div className="notifications flex space-x-4 items-center">
                        <div
                          className=" min-w-[50px]
                            min-h-[50px] rounded-full flex justify-center items-center bg-green-500"
                        >
                          <Check
                            color="#ffffff"
                            fill="#27AE60"
                            strokeWidth={3}
                            size={25}
                          />
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray dark:text-white font-medium mb-2">
                            Your Account has been created
                            <span className="ml-1 font-bold">
                              successfully done
                            </span>
                          </p>
                          <p className="text-sm text-thin-light-gray font-medium">
                            23 house ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-4 border-b dark:border-[#5356fb29]  border-light-purple hover:border-purple dark:hover:border-purple">
                      <div className="notifications flex space-x-4 items-center">
                        <div
                          className="min-w-[50px]
                            min-h-[50px] rounded-full flex justify-center items-center bg-[#7c3aed]"
                        >
                          <Box color="#ffffff" strokeWidth={3} size={25} />
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray dark:text-white font-medium mb-2">
                            You upload your frast product
                            <span className="ml-1 font-bold">
                              successfully done
                            </span>
                          </p>
                          <p className="text-sm text-thin-light-gray font-medium">
                            23 house ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-4 border-b dark:border-[#5356fb29]  border-light-purple hover:border-purple dark:hover:border-purple">
                      <div className="notifications flex space-x-4 items-center">
                        <div
                          className="min-w-[50px]
                            min-h-[50px] rounded-full flex justify-center items-center bg-[#ec4899]"
                        >
                          <ShoppingCart
                            color="#ffffff"
                            strokeWidth={3}
                            size={25}
                          />
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray dark:text-white font-medium mb-2">
                            <span className="ml-1 font-bold">Thank you !</span>
                            you made your frast sell
                            <span className="ml-1 font-bold">232.98 ETH</span>
                          </p>
                          <p className="text-sm text-thin-light-gray font-medium">
                            23 house ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-4 border-b dark:border-[#5356fb29]  border-light-purple hover:border-purple dark:hover:border-purple">
                      <div className="notifications flex space-x-4 items-center">
                        <div
                          className="min-w-[50px]
                            min-h-[50px] rounded-full flex justify-center items-center bg-[#56CCF2]"
                        >
                          <UserPlus color="#ffffff" strokeWidth={3} size={25} />
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray dark:text-white font-medium mb-2">
                            Your Account has been created
                            <span className="ml-1 font-bold">
                              successfully done
                            </span>
                          </p>
                          <p className="text-sm text-thin-light-gray font-medium">
                            23 house ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="content-item py-5">
                      <div className="notifications flex space-x-4 items-center">
                        <div
                          className="min-w-[50px]
                            min-h-[50px] rounded-full flex justify-center items-center bg-[#9B51E0]"
                        >
                          <Trophy color="#ffffff" strokeWidth={3} size={25} />
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray dark:text-white font-medium mb-2">
                            Your Account has been created
                            <span className="ml-1 font-bold">
                              successfully done
                            </span>
                          </p>
                          <p className="text-sm text-thin-light-gray font-medium">
                            23 house ago
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="add-money-btn flex justify-center items-center">
                    <a
                      to="/notification"
                      className="text-purple text-sm font-medium"
                    >
                      See all Notification
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden block">
              <a
                to="/notification"
                className="lg:w-[48px] lg:h-[48px] w-[38px] h-[38px] bg-white   flex justify-center items-center rounded-full overflow-hidden relative"
              >
                <span className=" min-h-[30px] min-w-[30px] rounded-full bg-white p-1">
                  <Bell color="#5356fb" strokeWidth={3} />
                </span>
                <span className="absolute right-2 top-2 z-10 text-xs lg:w-5 lg:h-5 w-4 h-4 flex justify-center items-center rounded-full primary-gradient text-white">
                  10
                </span>
              </a>
            </div>
            <div className="user-profile relative lg:block hidden">
              <div
                onClick={() => handlerProfile()}
                className="flex items-center space-x-3.5"
              >
                <div className="lg:w-[62px] lg:h-[62px] w-[50px] h-[50px] rounded-full overflow-hidden">
                  <img
                    src={profileImg}
                    alt="profile"
                    className="w-full h-full"
                  />
                </div>
                <div className="lg:block hidden">
                  <h1 className="text-xl font-bold   text-dark-gray dark:text-white">
                    Brokln Simons
                  </h1>
                  <p className="text-sm text-thin-light-gray">
                    @broklinslam_75
                  </p>
                </div>
              </div>
              <div
                className={`profile-dropdown w-[293px] z-30 bg-white dark:bg-dark-white   absolute lg:right-16 -right-[16px]  rounded-lg cursor-pointer ${
                  userProfileDropdown ? "active" : ""
                }`}
              >
                <div className="heading border-b dark:border-[#5356fb29]  border-light-purple px-7 py-6">
                  <h3 className="text-xl font-bold   text-dark-gray dark:text-white">
                    My Profile
                  </h3>
                </div>
                <div className="content px-7">
                  <ul>
                    <li className="content-item py-4 border-b dark:border-[#5356fb29]  border-light-purple hover:border-purple dark:hover:border-purple">
                      <a
                        to="/profile"
                        className="notifications flex space-x-4 items-center"
                      >
                        <div className="min-w-[40px] min-h-[40px] flex justify-center items-center bg-[#56CCF2] rounded-full">
                          <User fill="#56CCF2" size={20} />
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray dark:text-white font-medium mb-2">
                            My Profile
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="content-item py-4 border-b dark:border-[#5356fb29]  border-light-purple hover:border-purple dark:hover:border-purple">
                      <a
                        to="/message"
                        className="notifications flex space-x-4 items-center"
                      >
                        <div className="min-w-[40px] min-h-[40px] flex justify-center items-center bg-[#f472b6] rounded-full">
                          <Mail size={20} />
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray dark:text-white font-medium mb-2">
                            Message
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="content-item py-4 border-b dark:border-[#5356fb29]  border-light-purple hover:border-purple dark:hover:border-purple">
                      <a
                        to="/history"
                        className="notifications flex space-x-4 items-center"
                      >
                        <div className="min-w-[40px] min-h-[40px] flex justify-center items-center bg-[#27AE60] rounded-full">
                          <History size={20} />
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray dark:text-white font-medium mb-2">
                            History
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="content-item py-4 border-b dark:border-[#5356fb29]  border-light-purple hover:border-purple dark:hover:border-purple">
                      <a
                        to="/settings"
                        className="notifications flex space-x-4 items-center"
                      >
                        <div className="min-w-[40px] min-h-[40px] flex justify-center items-center bg-[#5356FB] rounded-full">
                          <Settings size={20} />
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray dark:text-white font-medium mb-2">
                            Setting
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="content-item py-5">
                      <div className="notifications flex space-x-4 items-center">
                        <div className="min-w-[40px] min-h-[40px] flex justify-center items-center bg-[#EB5757] rounded-full">
                          <LogOut size={20} />
                        </div>
                        <div className="name">
                          <p className="text-base text-dark-gray dark:text-white font-medium mb-2">
                            Log Out
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="for-mobile-profile lg:hidden block">
              <a
                to="/profile"
                className="lg:w-[62px] lg:h-[62px] w-[50px] h-[50px] rounded-full overflow-hidden block"
              >
                <img src={profileImg} alt="profile" className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {balanceDropdown || notificationDropdown || userProfileDropdown ? (
        <div
          onClick={clickAwayhandler}
          className="w-full h-screen fixed left-0"
          style={{ zIndex: "-1" }}
        ></div>
      ) : (
        ""
      )}
    </>
  );
}
