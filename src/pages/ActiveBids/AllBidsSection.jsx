import React from "react";
import ProductCardStyleOne from "../../components/cards/ProductCardStyleOne";
import DataIteration from "../../components/helpers/DataIteration";

export default function AllBidsSection({ className, allBids = [] }) {
  return (
    <>
      <div className={`all-bid-section w-full ${className || ""}`}>
        <div className="mb-5">
          <h1 className="text-26 font-bold   text-dark-gray dark:text-white">All Bids</h1>
        </div>
        <div className="w-full">
          <div className="allbids-card grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-8 xl:gap-5 gap-5 mb-10">
            <DataIteration datas={allBids} startLength={0} endLength={8}>
              {({ datas }) => (
                <div key={datas.id} className="item">
                  <ProductCardStyleOne datas={datas} />
                </div>
              )}
            </DataIteration>
          </div>
          <div className="flex justify-center">
            <a
              className=" border-b dark:border-[#5356fb29]  border-dark-gray text-dark-gray dark:text-white text-base"
            >
              View Art Work
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
