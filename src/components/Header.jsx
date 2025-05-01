import React from "react";

const Header = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 flex bg-gray-800 shadow-lg rounded-b-lg w-full h-14 items-center justify-center md:justify-between px-4 z-10">
      <div className="container flex justify-center cursor-default md:justify-start">
        <h1 className="text-white text-2xl px-4 py-2 font-bold text-center hover:scale-110 hover:opacity-110 transition-all duration-200 ease-in md:text-left">
          CliniGo
        </h1>
      </div>

      <nav className="hidden md:flex">
        <ul className="flex gap-8 mr-5 justify-around items-center">
          <li>
            <button
              onClick={() => onNavigate("home")}
              className="px-4 py-2 font-sans rounded-md font-semibold text-nowrap bg-gray-700 text-gray-200 shadow-md border-b-2 border-b-gray-700"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("map")}
              className="text-white px-4 py-2 font-sans rounded-md font-semibold text-nowrap hover:bg-gray-700 hover:text-gray-200 hover:rounded-md hover:shadow-md hover:border-b-2 hover:border-b-gray-600 transition-all duration-200 ease-in"
            >
              Map
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("dashboard")}
              className="text-white px-4 py-2 font-sans rounded-md font-semibold text-nowrap hover:bg-gray-700 hover:text-gray-200 hover:rounded-md hover:shadow-md hover:border-b-2 hover:border-b-gray-600 transition-all duration-200 ease-in"
            >
              Favorites
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
