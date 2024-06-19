import React from "react";
import { BsCashCoin } from "react-icons/bs";

function BankNoCashReatMarkets(props) {
  return (
    <div className="max-w-[1200px] m-auto pt-[50px]">
      <div>
        <div className="flex justify-center items-center text-center mb-8">
          <BsCashCoin size={58} color="gold" />
          <h2 className="text-center m-2 text-[46px] text-white">Banks No-Cash rates for today</h2>
        </div>
       
        <div className="flex justify-between items-center text-black  bg-[#F5F5F5] [box-shadow:0px_0px_12px_#18191b] rounded-[8px] mx-4 my-8 px-4 py-[.7rem] font-bold md:text-sm text-xs">
          <div className="space-y-2 w-[200px]">
            <p>Point</p>
            <p className="text-yellow-600">Data</p>
          </div>
          <div className="space-y-2 w-[100px]">
            <p className="text-orange-900">Buy</p>
            <p>USA</p>
          </div>
          <div className="space-y-2 w-[100px]">
            <p className="text-orange-500">Sell</p>
            <p>USA</p>
          </div>
          <div className="space-y-2 w-[100px]">
            <p className="text-orange-900">Buy</p>
            <p>EUR</p>
          </div>
          <div className="space-y-2 w-[100px]">
            <p className="text-orange-500">Sell</p>
            <p>EUR</p>
          </div>
          <div className="space-y-2 w-[100px]">
            <p className="text-orange-900">Buy</p>
            <p>RUB</p>
          </div>
          <div className="space-y-2 w-[100px]">
            <p className="text-orange-500">Sell</p>
            <p>RUB</p>
          </div>
          {/* <div className="space-y-2 w-[90px]">
            <p className="text-orange-900">Buy</p>
            <p>GEL</p>
          </div>
          <div className="space-y-2 w-[80px]">
            <p className="text-orange-500">Sell</p>
            <p>GEL</p>
          </div> */}
        </div>

        {props.bankNoCashCurrency?.map((exchange, i) => {
          if (exchange?.name) {
            return (
              <div key={i +1 } className="flex justify-between items-center text-black bg-[#F5F5F5] [box-shadow:0px_opx_12px_#18191b] rounded-[8px] text-sm mx-4 my-8 px-4 py-[.7rem] hover:scale-[1.04] hover:[transition:.3s_ease-in-out] hover:cursor-pointer">
                <div className="flex flex-col justify-center items-start px-2">
                  <img className="w-[40px] h-[20px] mb-2" src={exchange?.img}/>
                  <p className="md:text-sm text-[10px] mb-2 md:w-[150px] w-[50px]">
                    {exchange?.name}
                  </p>
                  <p className="text-yellow-600 md:text-[10px] text-[8px] md:w-[150px] w-[50px] ">
                    {exchange?.dataUpDate}
                  </p>
                </div>
                <div className="flex flex-col items-center w-[150px]">
                  <img
                    src="https://rate.am/images/currency/icon/USD.gif"
                    className="md:w-[22px] md:h-[17px] w-[16px] h-[11px] mb-2"
                  />
                  <p className="flex text-[10px] md:text-xs mb-2  text-orange-900">
                    Buy
                  </p>
                  <p className="md:text-[16px] text-xs font-[600] text-gray-700">{exchange?.buyUSA} </p>
                </div>
                <div className="flex flex-col items-center w-[150px]">
                  <img
                    src="https://rate.am/images/currency/icon/USD.gif"
                    className="md:w-[22px] md:h-[17px] w-[16px] h-[11px] mb-2"
                  />
                  <p className="flex text-[10px] md:text-xs mb-2  text-orange-500">
                    Sell
                  </p>
                  <p className="md:text-[16px] text-xs font-[600] text-gray-700">{exchange?.sellUSA} </p>
                </div>
                <div className="flex flex-col items-center w-[150px]">
                  <img
                    src="https://rate.am/images/currency/icon/EUR.gif"
                    className="md:w-[22px] md:h-[17px] w-[16px] h-[11px] mb-2"
                  />
                  <p className="flex text-[10px] md:text-xs mb-2  text-orange-900">
                    Buy
                  </p>
                  <p className="md:text-[16px] text-xs font-[600] text-gray-700">{exchange?.buyEUR} </p>
                </div>
                <div className="flex flex-col items-center w-[150px]">
                  <img
                    src="https://rate.am/images/currency/icon/EUR.gif"
                    className="md:w-[22px] md:h-[17px] w-[16px] h-[11px] mb-2"
                  />
                  <p className="flex text-[10px] md:text-xs mb-2 text-orange-500">
                    Sell
                  </p>
                  <p className="md:text-[16px] text-xs font-[600] text-gray-700">{exchange?.sellEUR} </p>
                </div>
                <div className="flex flex-col items-center w-[150px]">
                  <img
                    src="https://rate.am/images/currency/icon/RUR.gif"
                    className="md:w-[22px] md:h-[17px] w-[16px] h-[11px] mb-2"
                  />
                  <p className="flex text-[10px] md:text-xs mb-2  text-orange-900">
                    Buy
                  </p>
                  <p className="md:text-[16px] text-xs font-[600] text-gray-700">{exchange?.buyRUB} </p>
                </div>
                <div className="flex flex-col items-center w-[150px]">
                  <img
                    src="https://rate.am/images/currency/icon/RUR.gif"
                    className="md:w-[22px] md:h-[17px] w-[16px] h-[11px] mb-2"
                  />
                  <p className="flex text-[10px] md:text-xs mb-2 text-orange-500">
                    Sell
                  </p>
                  <p className="md:text-[16px] text-xs font-[600] text-gray-700">{exchange?.sellRUB} </p>
                </div>
                {/* <div className="flex flex-col items-center w-[150px]">
                  <img
                    src="https://rate.am/images/currency/icon/GEL.gif"
                    className="md:w-[22px] md:h-[17px] w-[16px] h-[11px] mb-2"
                  />
                  <p className="flex text-[10px] md:text-xs mb-2 text-orange-900">
                    Buy
                  </p>
                  <p className="md:text-[16px] text-xs font-[600] text-gray-700">{exchange?.buyGEL} </p>
                </div> */}
                {/* <div className="flex flex-col items-center w-[150px] ">
                  <img
                    src="https://rate.am/images/currency/icon/GEL.gif"
                    className="md:w-[22px] md:h-[17px] w-[16px] h-[11px] mb-2"
                  />
                  <p className="flex text-[10px] md:text-xs mb-2 text-orange-500">
                    Sell
                  </p>
                  <p className="md:text-[16px] text-xs font-[600] text-gray-700">{exchange?.sellGEL} </p>
                </div> */}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default BankNoCashReatMarkets;
