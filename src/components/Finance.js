import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Coins from "./crypto/Coins";
import imgAlfa from "../../src/assets/bg-finance1.jpg";
import ExchangesMarkets from "./rateExchanges/ExchangesMarkets";
import BankCashReatMarkets from "./rateExchanges/BankCashReatMarkets";
import BankNoCashReatMarkets from "./rateExchanges/BankNoCashReatMarkets ";
import DialogFinanc from "./dialog_for_financ/DialogFinanc";

function Finance() {
  const coinsRef = useRef(null);
  const [openerExchangRate, setOpenerExchagRate] = useState(false);
  const [openerBankNoCashRate, setOpenerBankNoCashRate] = useState(false);
  const [rateDataCash, setRateDataCash] = useState([]);
  const [rateDataNoCash, setRateDataNoCash] = useState([]);
  const [openerCurreny, setOpenerCurreny] = useState(true);
  const [currency, setCurrency] = useState([]);
  const [coins, setCoins] = useState([]);
  const [listCoin, setListCoin] = useState(10);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const changeListForCoin = () => {
    setListCoin(listCoin + 10);
    console.log(listCoin);
  };

  // DATA FOR a EaxchangeReat
  useEffect(() => {
    fetch("/api")
      .then((respons) => respons.json())
      .then((data) => setCurrency(data.exchangeData));
  }, []);

  // DATA FOR a CASH BANKS
  useEffect(() => {
    fetch("/api/bankData")
      .then((respons) => respons.json())
      .then((data) => setRateDataCash(data.bankData));
  }, []);

  // DATA FOR A No CASH BANKS

  useEffect(() => {
    fetch("/api/bankDataNoCash")
      .then((response) => response.json())
      .then((data) => setRateDataNoCash(data.bankNoData));
  }, []);


  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${listCoin}&page=1&sparkline=false&locale=en`;
  useEffect(() => {
    axios
      .get(url)
      .then((respons) => {
        setCoins(respons.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [listCoin]);

  const bnt_Bank_No_Cash = () => {
    setOpenerBankNoCashRate(true);
    setOpenerCurreny(false);
    setOpenerExchagRate(false);
  };

  const bnt_Bank_Cash = () => {
    setOpenerExchagRate(true);
    setOpenerBankNoCashRate(false);
    setOpenerCurreny(false);
  };

  const bnt_Exch_Point = () => {
    setOpenerCurreny(true);
    setOpenerExchagRate(false);
    setOpenerBankNoCashRate(false);
  };

  const bnt_Bank_Cripto = () => {
    const element = document.getElementById("cripto_id");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const open_dialog_calculator = () => {
    setIsDialogOpen(true);
  };
  const backgroundStyle = {
    backgroundImage: `url(${imgAlfa})`,
    backgroundPosition: "center",
    maxWidth: "100%",
    height: "100%",
    // backgroundSize: "cover",
  };
  const customStyles = {
    width: "180px",
    background: "gold",
    color: "#262736",
    fontSize: "18px",
    fontWeight: "bold",
  };
  const customStyles_cal = {
    width: "250px",
    alignSelf: "center",
    background: "gold",
    color: "#262736",
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <div className="flex-col" style={backgroundStyle}>
      <Navbar />
      <p>{}</p>
      <DialogFinanc
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <div className="flex flex-col gap-8">
        <div className="absolut flex md:flex-row flex-col justify-center items-center  md:space-x-16 space-y-0 pt-28">
          <button
            onClick={bnt_Exch_Point}
            className="md:w-auto w-[300px] text-center hover:scale-[1.04] hover:[transition:.3s_ease-in-out] hover:cursor-pointer"
            style={customStyles}
          >
            Exchange Points
          </button>
          <button
            onClick={bnt_Bank_No_Cash}
            className="md:w-auto w-[300px] text-center hover:scale-[1.04] hover:[transition:.3s_ease-in-out] hover:cursor-pointer"
            style={customStyles}
          >
            Banks Non-Cash
          </button>
          <button
            onClick={bnt_Bank_Cash}
            className="md:w-auto w-[300px] text-center hover:scale-[1.04] hover:[transition:.3s_ease-in-out] hover:cursor-pointer"
            style={customStyles}
          >
            Banks Cash
          </button>
          <button
            onClick={bnt_Bank_Cripto}
            href="#"
            className="md:w-auto w-[300px] text-center hover:scale-[1.04] hover:[transition:.3s_ease-in-out] hover:cursor-pointer"
            style={customStyles}
          >
            Cripto Coin
          </button>
        </div>
        <button
        onClick={open_dialog_calculator}
          style={customStyles_cal}
          className="md:w-auto w-[300px] text-center hover:scale-[1.04] hover:[transition:.3s_ease-in-out] hover:cursor-pointer"
        >
          Conversion Сalculator
        </button>
      </div>

      {openerCurreny && <ExchangesMarkets exCurrency={currency} />}
      {openerExchangRate && <BankCashReatMarkets bankCurrency={rateDataCash} />}
      {openerBankNoCashRate && (
        <BankNoCashReatMarkets bankNoCashCurrency={rateDataNoCash} />
      )}
      <Coins id="cripto_id" coins={coins} updateUser={changeListForCoin} />
      <div className="flex justify-center ">
        <p
          className="hover:cursor-pointer hover:text-white text-center text-xl font-bold mb-[50px]"
          style={{ color: "gold", ":hover": { color: "white" } }}
          onClick={changeListForCoin}
        >
          + 10 coins
        </p>
      </div>
    </div>
  );
}

export default Finance;
