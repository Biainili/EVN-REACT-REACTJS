import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";




function Coin() {

  const navigate = useNavigate();
  const onFinace = () => {
    navigate("/finance");
  };
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="text-white">
      <div className="coim-container ">
        <div className="md:max-w-[740px] max-w-full md:mx-[auto] md:my-4 md:px-4 md:py-[.7rem] m-[.5rem] px-[.5rem] py-[0]  flex flex-col bg-[#26272b] [box-shadow:0px_0px_12px_#18191b] rounded-[8px]">
          <h1>{coin.name}</h1>
        </div>
        <div className="md:max-w-[740px] max-w-full md:mx-[auto] md:my-4 md:px-4 md:py-[.7rem] m-[.5rem] px-[.5rem] py-[0]  flex flex-col bg-[#26272b] [box-shadow:0px_0px_12px_#18191b] rounded-[8px]">
          <div className="mx-[0] md:my-[.5] my-2 ">
            <span className="border-[1px] border-[solid] border-[#6900ff] [box-shadow:0px_0px_8px_#6900ff] bg-[#6900ff] rounded-[8px] md:p-[.2rem] p-[.1rem] ">
              Rank # {coin.market_cap_rank}
            </span>
          </div>
          <div className="grid grid-cols-[repeat(2,_1fr)]">
            <div className="flex items-center mx-[0] my-4">
              {coin.image ? (
                <img src={coin.image.small} alt="/" className="pr-2" />
              ) : null}
              <p className="pr-4">{coin.name}</p>
              <p>{coin.symbol?.toUpperCase()} / USD</p>
            </div>
            <div className="flex items-center justify-center">
              {coin.market_data?.current_price ? (
                <h1>$ {coin.market_data.current_price.usd.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div className="md:max-w-[740px] max-w-full md:mx-[auto] md:my-4 md:px-4 md:py-[.7rem] m-[.5rem] px-[.5rem] py-[0]  flex flex-col bg-[#26272b] [box-shadow:0px_0px_12px_#18191b] rounded-[8px]">
          <table className="mx-[0] my-[.5rem] sm:text-lg text-[12px]">
            <thead>
              <tr>
                <th className="md:p-[8px] p-[3px]  text-center bg-[#333]">
                  1h
                </th>
                <th className="md:p-[8px] p-[3px] text-center bg-[#333]">
                  24h
                </th>
                <th className="md:p-[8px] p-[3px]  text-center bg-[#333]">
                  7d
                </th>
                <th className="md:p-[8px] p-[3px]  text-center bg-[#333]">
                  14d
                </th>
                <th className="md:p-[8px] p-[3px]  text-center bg-[#333]">
                  30d
                </th>
                <th className="md:p-[8px] p-[3px] text-center bg-[#333]">
                  1yr
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="md:p-[8px] p-[3px] text-center">
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td className="md:p-[8px] p-[3px]  text-center">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td className="md:p-[8px] p-[3px] text-center">
                  {coin.market_data?.price_change_percentage_7d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td className="md:p-[8px] p-[3px]  text-center">
                  {coin.market_data?.price_change_percentage_14d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td className="md:p-[8px] p-[3px]  text-center">
                  {coin.market_data?.price_change_percentage_30d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td className="md:p-[8px] p-[3px]  text-center">
                  {coin.market_data?.price_change_percentage_1y_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:max-w-[740px] max-w-full md:mx-[auto] md:my-4 md:px-4 md:py-[.7rem] m-[.5rem] px-[.5rem] py-[0]  flex flex-col bg-[#26272b] [box-shadow:0px_0px_12px_#18191b] rounded-[8px]">
          <div className="grid md:grid-cols-[repeat(2,_1fr)] grid-cols-[1fr] gap-[2rem] w-full ">
            <div className="left">
              <div className="flex justify-between border-b-[1px_solid_#808080] mx-[0] my-[0.6rem] pb-[.5rem]">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? (
                  <p className="text-[#d3d3d3]">
                    $ {coin.market_data.low_24h.usd.toLocaleString()}
                  </p>
                ) : null}
              </div>
              <div className="flex justify-between border-b-[1px_solid_#808080] mx-[0] my-[0.6rem] pb-[.5rem]">
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? (
                  <p>$ {coin.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
            <div className="right">
              <div className="flex justify-between border-b-[1px_solid_#808080] mx-[0] my-[0.6rem] pb-[.5rem]">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>$ {coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="flex justify-between border-b-[1px_solid_#808080] mx-[0] my-[0.6rem] pb-[.5rem]">
                <h4>Circulating Supply</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="md:max-w-[740px] max-w-full md:mx-[auto] md:my-4 md:px-4 md:py-[.7rem] m-[.5rem] px-[.5rem] py-[0]  flex flex-col bg-[#26272b] [box-shadow:0px_0px_12px_#18191b] rounded-[8px]">
          <div className="about">
            <h3 className="mx-[0] my-4">About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
        <div className="md:max-w-[740px] max-w-full md:mx-[auto] md:my-4 md:px-4 md:py-[.7rem] m-[.5rem] px-[.5rem] py-[0]  flex flex-col bg-[#26272b] [box-shadow:0px_0px_12px_#18191b] rounded-[8px]">
          <button onClick={onFinace} className="border-none bg-none hover:text-gray-200 text-xl hover:underline hover:font-bold transition duration-300 hover:shadow-md ">
            All Coins
          </button>
        </div>
      </div>
    </div>
  );
}

export default Coin;
