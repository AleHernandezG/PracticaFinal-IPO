import React, { useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState("home");

  const handleClick = (tab) => {
    setActiveTab(tab);
    onNavigate(tab);
  };

  return (
    <header className="sticky top-0 flex bg-light-background dark:bg-dark-background shadow-lg rounded-b-lg w-full h-14 items-center justify-center md:justify-between px-4 z-10 border-b-2 border-b-light-border dark:border-b-dark-border/60">
      <div className="container flex justify-center cursor-pointer md:justify-start">
        <h1
          className="text-light-text dark:text-dark-text text-2xl px-4 py-2 font-bold text-center hover:scale-110 hover:opacity-110 transition-all duration-200 ease-in md:text-left"
          onClick={() => handleClick("home")}
        >
          CliniGo
        </h1>
      </div>

      <nav className="hidden md:flex">
        <ul className="flex gap-8 mr-5 justify-around items-center">
          {["home", "map", "dashboard"].map((tab) => (
            <li key={tab}>
              <button
                onClick={() => handleClick(tab)}
                className={`px-4 py-2 font-sans rounded-md font-semibold text-nowrap transition-all duration-200 ease-in ${
                  activeTab === tab
                    ? "bg-light-button dark:bg-dark-button text-light-text dark:text-dark-text border-b-2 border-b-light-border dark:border-b-dark-border shadow-md"
                    : "text-light-text dark:text-dark-text hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover hover:text-light-textHover dark:hover:text-dark-textHover hover:border-b-2 hover:border-b-light-border dark:hover:border-b-dark-border"
                }`}
              >
                {tab === "home" ? "Home" : tab === "map" ? "Map" : "About Us"}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center">
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
