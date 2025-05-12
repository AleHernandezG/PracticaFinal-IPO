import React, { useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = ({ onNavigate, activeScreen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mapeo de tabs a nombres mostrados
  const tabLabels = {
    home: "Home",
    map: "Map",
    dashboard: "About Us",
    help: "Help",
  };

  const tabs = ["home", "map", "dashboard", "help"];

  const handleClick = (tab) => {
    onNavigate(tab);
    setIsMenuOpen(false); // Cerrar el menú después de seleccionar una opción
  };

  return (
    <>
      <header className="sticky top-0 flex bg-light-background dark:bg-dark-background shadow-lg rounded-b-lg w-full h-14 items-center justify-between px-4 z-20 border-b-2 border-b-light-border dark:border-b-dark-border/60">
        {/* Botón de menú para móviles */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-light-text dark:text-dark-text p-2 rounded-md hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Logo - centrado en móviles, a la izquierda en desktop */}
        <div className="flex-1 flex justify-center md:justify-start">
          <h1
            className="text-light-text dark:text-dark-text text-2xl px-4 py-2 font-bold text-center hover:scale-110 hover:opacity-110 transition-all duration-200 ease-in md:text-left cursor-pointer"
            onClick={() => handleClick("home")}
          >
            CliniGo
          </h1>
        </div>

        {/* Navegación para desktop */}
        <nav className="hidden md:flex">
          <ul className="flex gap-4 mr-5 justify-around items-center">
            {tabs.map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => handleClick(tab)}
                  className={`px-4 py-2 font-sans rounded-md font-semibold text-nowrap transition-all duration-200 ease-in ${
                    activeScreen === tab
                      ? "bg-light-button dark:bg-dark-button text-light-text dark:text-dark-text border-b-2 border-b-light-border dark:border-b-dark-border shadow-md"
                      : "text-light-text dark:text-dark-text hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover hover:text-light-textHover dark:hover:text-dark-textHover hover:border-b-2 hover:border-b-light-border dark:hover:border-b-dark-border"
                  }`}
                >
                  {tabLabels[tab]}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón de tema */}
        <div className="flex items-center">
          <ThemeToggleButton />
        </div>
      </header>

      {/* Menú desplegable para móviles que se superpone a toda la pantalla */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed top-14 left-0 w-full max-h-screen overflow-y-auto bg-light-background dark:bg-dark-background shadow-lg z-50">
            <ul className="flex flex-col gap-2 p-4">
              {tabs.map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => handleClick(tab)}
                    className={`w-full px-4 py-3 font-sans rounded-md font-semibold text-nowrap transition-all duration-200 ease-in ${
                      activeScreen === tab
                        ? "bg-light-button dark:bg-dark-button text-light-text dark:text-dark-text border-b-2 border-b-light-border dark:border-b-dark-border shadow-md"
                        : "text-light-text dark:text-dark-text hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover hover:text-light-textHover dark:hover:text-dark-textHover hover:border-b-2 hover:border-b-light-border dark:hover:border-b-dark-border"
                    }`}
                  >
                    {tabLabels[tab]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
