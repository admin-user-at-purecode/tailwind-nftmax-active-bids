import React, { useState } from "react";
import {
  Asterisk,
  Bitcoin,
  ChevronDown,
  Compass,
  RemoveFormatting,
  Sailboat,
  TextCursor,
  Triangle,
  UserPlus,
  X,
  Zap,
} from "lucide-react";
import topCreator1 from "../../assets/images/top-creator-1.png";
import DoughnutChart from "../charts/DoughnutChart";
import MiniLineChart from "../charts/MiniLineChart";
import SelectBox from "../helpers/SelectBox";

export default function RightSideBar() {
  const filterDatas = ["Last 15 days", "Last Month", "Last 6 month"];
  const [filterDataSet, setFilterDataSet] = useState([10, 30, 20, 40]);
  const dataSetHandler = (value) => {
    if (value === "Last 15 days") {
      setFilterDataSet([10, 30, 20, 40]);
    } else if (value === "Last Month") {
      setFilterDataSet([15, 35, 10, 20]);
    } else {
      setFilterDataSet([8, 15, 40, 30]);
    }
  };

  const [selectedRate, setSelectedRate] = useState("ETH");
  const [rateStaticsDropdown, setRateStaticsDropdown] = useState(false);
  const [filterRateStatics, setFilterRateStatics] = useState([50, 30, 90, 20]);
  const rateDataSetHandler = (value) => {
    setSelectedRate(value);
    if (value === "USD") {
      setFilterRateStatics([50, 30, 90, 20]);
    } else if (value === "BTC") {
      setFilterRateStatics([15, 35, 10, 20]);
    } else {
      setFilterRateStatics([8, 15, 20, 30]);
    }
    setRateStaticsDropdown(!filterRateStatics);
  };
  return (
    <>
      <div className="right-sidebar-wrapper overflow-y-scroll overflow-style-none 2xl:fixed 2xl:grid-cols-none 2xl:block grid lg:grid-cols-2 grid-cols-1 xl:gap-7 gap-4 h-full 2xl:pb-96">
        <div className="chart-one bg-white dark:bg-dark-white   rounded-2xl p-8 2xl:w-[268px] w-full 2xl:mb-10 2xl:border-none  border flex flex-col sm:flex-row 2xl:flex-col 2xl:block lg:justify-between sm:items-center space-x-5 2xl:space-x-0 ">
          <div>
            <div className="chart-heading mb-4 xl:flex justify-between items-center">
              <h3 className="text-xl font-bold text-dark-gray dark:text-white">
                Statistics
              </h3>
              <SelectBox datas={filterDatas} action={dataSetHandler} />
            </div>
            <div id="chartjs-tooltip" className="chart relative 2xl:mb-6 ">
              <DoughnutChart dataSets={filterDataSet} />
            </div>
          </div>
          <div className="chart-analysis mt-5">
            <div className="heading text-center">
              <h1 className="text-base font-medium text-dark-gray dark:text-white mb-4">
                Your All Artwork Statistics
              </h1>
            </div>
            <div className="analysis-list">
              <ul>
                <li className="flex items-center mb-3.5">
                  <span className="w-4 h-4 bg-light-purple  rounded-full block mr-2"></span>
                  <div>
                    <span className="text-sm text-thin-light-gray mr-2">
                      Profit :
                    </span>
                    <span className="text-sm text-dark-gray dark:text-white font-bold">
                      {filterDataSet[0]}%
                    </span>
                  </div>
                </li>
                <li className="flex items-center mb-3.5">
                  <span className="w-4 h-4 bg-purple rounded-full block mr-2"></span>
                  <div>
                    <span className="text-sm text-thin-light-gray mr-2">
                      Total Sold :
                    </span>
                    <span className="text-sm text-dark-gray dark:text-white font-bold">
                      {filterDataSet[1]}%
                    </span>
                  </div>
                </li>
                <li className="flex items-center mb-3.5">
                  <span className="w-4 h-4 bg-pink rounded-full block mr-2"></span>
                  <div>
                    <span className="text-sm text-thin-light-gray mr-2">
                      Total Sold :
                    </span>
                    <span className="text-sm text-dark-gray dark:text-white font-bold">
                      {filterDataSet[2]}%
                    </span>
                  </div>
                </li>
                <li className="flex items-center mb-3.5">
                  <span className="w-4 h-4 bg-[#FFCD00] rounded-full block mr-2"></span>
                  <div>
                    <span className="text-sm text-thin-light-gray mr-2">
                      Total Sold :
                    </span>
                    <span className="text-sm text-dark-gray dark:text-white font-bold">
                      {filterDataSet[3]}%
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="chart-two bg-white dark:bg-dark-white   rounded-2xl p-8 2xl:w-[268px] w-full 2xl:mb-10 flex flex-col justify-between  border 2xl:border-none ">
          <div>
            <div className="flex space-x-2 items-center mb-5 relative cursor-pointer">
              <div className="icon-area">
                {selectedRate === "LTC" ? (
                  <span className="flex justify-center items-center rounded-full min-w-[35px] min-h-[35px] bg-[#5183ef]">
                    <TextCursor size={20} color="#ffffff" />
                  </span>
                ) : selectedRate === "USD" ? (
                  <span className="flex justify-center items-center rounded-full min-w-[35px] min-h-[35px] bg-[#22c55e]">
                    <RemoveFormatting size={20} color="#ffffff" />
                  </span>
                ) : selectedRate === "BTC" ? (
                  <span className="flex justify-center items-center rounded-full min-w-[35px] min-h-[35px] bg-[#d933b6]">
                    <Bitcoin size={20} color="#ffffff" />
                  </span>
                ) : (
                  <span className="flex justify-center items-center rounded-full min-w-[35px] min-h-[35px] bg-[#818cf8]">
                    <Compass size={20} color="#ffffff" />
                  </span>
                )}
              </div>
              <div
                className="heading flex space-x-1 items-center"
                onClick={() => setRateStaticsDropdown(!rateStaticsDropdown)}
              >
                <span className="text-xl font-bold   text-dark-gray dark:text-white">
                  {selectedRate} rate
                </span>
                <span className="text-[#374557] dark:text-thin-light-gray">
                  <ChevronDown />
                </span>
              </div>
              <div
                className={`rate-statics-dropdown w-[164px] h-[170px] bg-white dark:bg-dark-white   py-3 px-5 absolute  rounded ${
                  rateStaticsDropdown ? "active" : ""
                }`}
                style={{ boxShadow: "0px 4px 87px 0px #0000002B" }}
              >
                <ul className="flex flex-col justify-between h-full">
                  <li
                    className="flex space-x-2.5 items-center cursor-pointer"
                    onClick={() => rateDataSetHandler("ETH")}
                  >
                    <span className="flex justify-center items-center rounded-full min-w-[35px] min-h-[35px] bg-[#818cf8]">
                      <Compass size={20} color="#ffffff" />
                    </span>
                    <span className="text-thin-light-gray text-base tracking-wide">
                      ETH Rate
                    </span>
                  </li>
                  <li
                    className="flex space-x-2.5 items-center cursor-pointer"
                    onClick={() => rateDataSetHandler("USD")}
                  >
                    <span className="flex justify-center items-center rounded-full min-w-[35px] min-h-[35px] bg-[#22c55e]">
                      <RemoveFormatting size={20} color="#ffffff" />
                    </span>
                    <span className="text-thin-light-gray text-base tracking-wide">
                      USDT Rate
                    </span>
                  </li>
                  <li
                    className="flex space-x-2.5 items-center cursor-pointer"
                    onClick={() => rateDataSetHandler("BTC")}
                  >
                    <span className="flex justify-center items-center rounded-full min-w-[35px] min-h-[35px] bg-[#d933b6]">
                      <Bitcoin size={20} color="#ffffff" />
                    </span>
                    <span className="text-thin-light-gray text-base tracking-wide">
                      BTC Rate
                    </span>
                  </li>
                  <li
                    className="flex space-x-2.5 items-center cursor-pointer"
                    onClick={() => rateDataSetHandler("LTC")}
                  >
                    <span className="flex justify-center items-center rounded-full min-w-[35px] min-h-[35px] bg-[#5183ef]">
                      <TextCursor size={20} color="#ffffff" />
                    </span>
                    <span className="text-thin-light-gray text-base tracking-wide">
                      LTC Rate
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="money-details mb-5">
              <p className="text-xl font-bold   text-dark-gray dark:text-white">
                $7473.67 USD
              </p>
              <p className="text-sm text-light-green">+324.75 (11.5%)</p>
            </div>
          </div>
          <div className="miniLineChart">
            <MiniLineChart height="122px" datasets={filterRateStatics} />
          </div>
        </div>
        <div className="top-creator bg-white dark:bg-dark-white   rounded-2xl p-8 2xl:w-[268px] w-full 2xl:mb-10 2xl:border-none   border ">
          <div className="heading flex justify-between items-center mb-3.5">
            <h3 className="text-xl font-bold   text-dark-gray dark:text-white">
              Top creator
            </h3>
            <div className="flex space-x-1 items-center">
              <span className="text-sm text-thin-light-gray">Weekly</span>
              <span className="text-[#374557] dark:text-thin-light-gray">
                <ChevronDown />
              </span>
            </div>
          </div>
          <div className="creator-list">
            <div className="item flex justify-between items-center mb-4">
              <div className="w-10 h-10 rounded-full">
                <img src={topCreator1} alt="top" />
              </div>
              <div>
                <p className="text-dark-gray dark:text-white text-base font-bold">
                  Albert Flores
                </p>
                <p className="text-xs text-thin-light-gray">@broklinslam_75</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="add-button w-6 h-6 flex justify-center items-center bg-purple rounded-full"
                >
                  <UserPlus fill="#ffffff" size={14} color="#ffffff" />
                </button>
                <button
                  type="button"
                  className="delete-button w-6 h-6 flex justify-center items-center p-1 bg-light-purple dark:bg-dark-light-purple  text-purple rounded-full"
                >
                  <X color="#4f46e5" />
                </button>
              </div>
            </div>
            <div className="item flex justify-between items-center mb-4">
              <div className="w-10 h-10 rounded-full">
                <img src={topCreator1} alt="top" />
              </div>
              <div>
                <p className="text-dark-gray dark:text-white text-base font-bold">
                  Albert Flores
                </p>
                <p className="text-xs text-thin-light-gray">@broklinslam_75</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="add-button w-6 h-6 flex justify-center items-center bg-purple rounded-full"
                >
                  <UserPlus fill="#ffffff" size={14} color="#ffffff" />
                </button>
                <button
                  type="button"
                  className="delete-button w-6 h-6 flex justify-center items-center p-1 bg-light-purple dark:bg-dark-light-purple  text-purple rounded-full"
                >
                  <X color="#4f46e5" />
                </button>
              </div>
            </div>
            <div className="item flex justify-between items-center mb-4">
              <div className="w-10 h-10 rounded-full">
                <img src={topCreator1} alt="top" />
              </div>
              <div>
                <p className="text-dark-gray dark:text-white text-base font-bold">
                  Albert Flores
                </p>
                <p className="text-xs text-thin-light-gray">@broklinslam_75</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="add-button w-6 h-6 flex justify-center items-center bg-purple rounded-full"
                >
                  <UserPlus fill="#ffffff" size={14} color="#ffffff" />
                </button>
                <button
                  type="button"
                  className="delete-button w-6 h-6 flex justify-center items-center p-1 bg-light-purple dark:bg-dark-light-purple  text-purple rounded-full"
                >
                  <X color="#4f46e5" />
                </button>
              </div>
            </div>
            <div className="item flex justify-between items-center mb-4">
              <div className="w-10 h-10 rounded-full">
                <img src={topCreator1} alt="top" />
              </div>
              <div>
                <p className="text-dark-gray dark:text-white text-base font-bold">
                  Albert Flores
                </p>
                <p className="text-xs text-thin-light-gray">@broklinslam_75</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="add-button w-6 h-6 flex justify-center items-center bg-purple rounded-full"
                >
                  <UserPlus fill="#ffffff" size={14} color="#ffffff" />
                </button>
                <button
                  type="button"
                  className="delete-button w-6 h-6 flex justify-center items-center p-1 bg-light-purple dark:bg-dark-light-purple  text-purple rounded-full"
                >
                  <X color="#4f46e5" />
                </button>
              </div>
            </div>
            <div className="item flex justify-between items-center mb-4">
              <div className="w-10 h-10 rounded-full">
                <img src={topCreator1} alt="top" />
              </div>
              <div>
                <p className="text-dark-gray dark:text-white text-base font-bold">
                  Albert Flores
                </p>
                <p className="text-xs text-thin-light-gray">@broklinslam_75</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="add-button w-6 h-6 flex justify-center items-center bg-purple rounded-full"
                >
                  <UserPlus fill="#ffffff" size={14} color="#ffffff" />
                </button>
                <button
                  type="button"
                  className="delete-button w-6 h-6 flex justify-center items-center p-1 bg-light-purple dark:bg-dark-light-purple  text-purple rounded-full"
                >
                  <X color="#4f46e5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="top-platform bg-white dark:bg-dark-white   rounded-2xl p-8 2xl:w-[268px] w-full 2xl:mb-10 2xl:border-none  border ">
          <div className="heading flex justify-between items-center mb-3.5">
            <h3 className="text-xl font-bold   text-dark-gray dark:text-white">
              Top Platform
            </h3>
            <div>
              <span className="text-sm text-thin-light-gray">View all</span>
            </div>
          </div>
          <div className="platform-list">
            <div className="item flex space-x-3 items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-[#2481E1] flex justify-center items-center">
                <Sailboat size={18} fill="#ffffff" color="#ffffff" />
              </div>
              <div>
                <p className="text-thin-light-gray text-base font-medium">
                  OpenSea
                </p>
              </div>
            </div>
            <div className="item flex space-x-3 items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-[#FDD903] flex justify-center items-center">
                <Asterisk size={18} fill="#ffffff" color="#ffffff" />
              </div>
              <div>
                <p className="text-thin-light-gray text-base font-medium">
                  Rarible
                </p>
              </div>
            </div>
            <div className="item flex space-x-3 items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-[#6e269e] flex justify-center items-center">
                <Zap size={18} fill="#ffffff" color="#ffffff" />
              </div>
              <div>
                <p className="text-thin-light-gray text-base font-medium">
                  Myth Market
                </p>
              </div>
            </div>
            <div className="item flex space-x-3 items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-[#5165FF] flex justify-center items-center">
                <Triangle size={18} fill="#ffffff" color="#ffffff" />
              </div>
              <div>
                <p className="text-thin-light-gray text-base font-medium">
                  KnownOrigin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
