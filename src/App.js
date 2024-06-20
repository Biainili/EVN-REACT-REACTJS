import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Finance from "./components/Finance";
import Coin from "./components/crypto/Coin";
import Service from "./components/Service";

function App() {
  return (
    <Router basename="/EVN-REACT-REACTJS">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/service" element={<Service />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
