import React from "react";

const CoinItem = (props) => {
  return (
    <div className="flex justify-between items-center text-black bg-[#F5F5F5] [box-shadow:0px_opx_12px_#18191b] rounded-[8px] mx-4 my-8 px-4 py-[.7rem] hover:scale-[1.04] hover:[transition:.3s_ease-in-out] hover:cursor-pointer">
      <p>{props.coins.market_cap_rank}</p>
      <div className="flex items-center">
        <img className="h-[40px] mr-[8px] w-auto" src={props.coins.image} alt="/" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>$ {props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hidden md:block">${props.coins.total_volume.toLocaleString()}</p>
      <p className="hidden md:block">${props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
