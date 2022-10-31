import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../src/assets/schoolhacks-logo.png";
import "./styles/main.css";
import Home from "./components/Home.jsx";
import Workshops from "./components/Workshops";
import About from "./components/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="main">
        <header className="container">
          <img
            className="logo"
            src={logo}
            alt="SchoolHacks logo"
            title="SchoolHacks | Home"
          />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home titel="Welcome to SchoolHacks" />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/about" element={<About />} />
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
    </BrowserRouter>
  </React.StrictMode>
);
