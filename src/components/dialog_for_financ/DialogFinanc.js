import React, { useState } from "react";
import ReactDOM from "react-dom";

const DialogFinanc = ({ isOpen, onClose }) => {
  const dialogStyle = {
    width: "55.556vw",
    minHeight: "34.722vw",
    background: "white",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 0px 12px #18191b",
    zIndex: 1000,
    borderRadius: "10px",
    padding: "10px 10px",
  };
  const style_for_type = {
    textShadow: "1px 2px 2px gray",
    marginBottom: "2px",
    fontWeight: "bold",
    WebkitTextStroke: "0.5px #7f7904",
    fontSize: "20px",
    color:"gold"
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div style={dialogStyle} className="flex flex-col gap-4">
          <h1 className="self-center mb-6">Conversion Сalculator</h1>

          <div className="mb-4 flex flex-col gap-12">
            <div className="flex  justify-between px-6">
              <div className="border-black border-2 p-1">
                <label
                  htmlFor="type"
                  style={style_for_type}
                >
                  Type:
                </label>
                <select id="type" className="w-[100px]">
                  <option value="cash">Cash</option>
                  <option value="no-cash">No Cash</option>
                </select>
              </div>

              <div className="border-black border-2 p-1">
                <label
                  htmlFor="market"
                  style={style_for_type}
                >
                  Market:
                </label>
                <select id="market" className="w-[100px]">
                  <option value="bank">Bank</option>
                  <option value="exchange">Exchange</option>
                </select>
              </div>

              <div className="border-black border-2 p-1">
                <label
                  htmlFor="place"
                  style={style_for_type}
                >
                  Place:
                </label>
                <select id="place" className="w-[100px]">
                  {/* Замените следующую строку на свой массив обменников */}
                  <option value="place1">Place 1</option>
                  <option value="place2">Place 2</option>
                  <option value="place3">Place 3</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-8 ">
              {/* first input */}
              <div className=" p-1 flex items-center justify-center">
                <label htmlFor="currencyUSD">I HAVE - </label>
                <input
                  type="text"
                  id="currencyUSD"
                  name="currencyUSD"
                  className="ml-2 border-black border-2"
                />
                <select
                  id="selectCurrencyUSD"
                  className="w-[100px] ml-2 border-black border-2"
                >
                  <option value="USD">USD</option>
                  <option value="RUB">RUB</option>
                  <option value="EUR">EUR</option>
                  <option value="AMD">AMD</option>
                  <option value="GLE">GLE</option>
                </select>
              </div>

              {/* second input */}
              <div className="p-1 flex items-center justify-center">
                <label htmlFor="currencyEUR">I WANT - </label>
                <input
                  type="text"
                  id="currencyEUR"
                  name="currencyEUR"
                  className="ml-2 border-black border-2"
                />
                <select
                  id="selectCurrencyEUR"
                  className="w-[100px] ml-2 border-black border-2"
                >
                  <option value="USD">USD</option>
                  <option value="RUB">RUB</option>
                  <option value="EUR">EUR</option>
                  <option value="AMD">AMD</option>
                  <option value="GLE">GLE</option>
                </select>
              </div>
            </div>
          </div>
          <button onClick={onClose}>Close</button>
        </div>,
        document.body
      )
    : null;
};

export default DialogFinanc;
