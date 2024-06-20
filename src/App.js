import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Finance from "./components/Finance";
import Coin from "./components/crypto/Coin";
import Service from "./components/Service";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/news"} element={<News />}></Route>
      <Route path={"/service"} element={<Service />}></Route>
      <Route path={"/finance"} element={<Finance />} />
      <Route path={"/coin"} element={<Coin />}>
        <Route path={":coinId"} element={<Coin />} />
      </Route>
    </Routes>
  );
}

export default App;
