import { useEffect, useRef, useState } from "react";
import "./css/App.css";
import "./css/styles.css";

import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router";

import Home from "./routes/Home";
import Hero from "./routes/hero";
import Stats from "./routes/Stats";
import Settings from "./routes/Settings";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <div className="main-div">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
