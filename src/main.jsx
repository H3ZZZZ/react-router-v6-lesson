import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../src/assets/schoolhacks-logo.png";
import Home from "./components/Home";
import Workshops from "./components/Workshops";
import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="main">
        <header className="container">
          <img
            className="logo"
            src={logo}
            alt="SchoolHacks logo"
            title="SchoolHacks | Home"
          />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<Workshops />} />
        </Routes>
        <footer className="container">
          &copy;2022 |{" "}
          <a
            href="https://www.schoolhacks.eu"
            target="_blank"
            rel="noreferrer noopener"
          >
            SchoolHacks
          </a>
        </footer>
      </div>
    </Router>
  </React.StrictMode>
);
