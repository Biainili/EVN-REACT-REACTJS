import React from "react";
import CoinItem from "./CoinItem";
import { Link } from "react-router-dom";
import Coin from "./Coin";
import { FaCoins } from "react-icons/fa6";

function Coins(poprs) {
  return (
    <div
      className="max-w-[1200px] m-auto pt-[50px] scroll-behavior-smooth transition duration-700 ease-in-out"
      id={poprs.id}
    >
      <div>
        <div className="flex justify-center items-center text-center">
          <FaCoins size={58} color="gold" />
          <h2 className="text-center m-2 text-[46px] text-white">
            Cryptocurrency rates for today
          </h2>
        </div>

        <div className="flex justify-between items-center text-black bg-[#F5F5F5] [box-shadow:0px_0px_12px_#18191b] rounded-[8px] mx-4 my-8 px-4 py-[.7rem] font-bold text-xl">
          <p>#</p>
          <p className="-ml-16">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hidden md:block">Volume</p>
          <p className="hidden md:block">Mkt Cap</p>
        </div>

        {poprs.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Coins;
