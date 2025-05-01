import React, { useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton"; // Importamos el componente del botón de cambio de tema

const Header = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState("home"); // Estado para saber qué botón está activo

  const handleClick = (tab) => {
    setActiveTab(tab); // Actualiza el botón activo
    onNavigate(tab); // Llama al cambio de vista
  };

  return (
    <header className="sticky top-0 flex bg-light-background dark:bg-dark-background shadow-lg rounded-b-lg w-full h-14 items-center justify-center md:justify-between px-4 z-10">
      <div className="container flex justify-center cursor-default md:justify-start">
        <h1 className="text-light-text dark:text-dark-text text-2xl px-4 py-2 font-bold text-center hover:scale-110 hover:opacity-110 transition-all duration-200 ease-in md:text-left">
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
                {tab === "home" ? "Home" : tab === "map" ? "Map" : "Favorites"}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón para cambiar entre modo claro y oscuro (al final de la barra de navegación) */}
      <div className="flex items-center">
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;

// import React, { useState, useEffect } from "react";

// const Header = ({ onNavigate }) => {
//   const [activeTab, setActiveTab] = useState("home");
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Check system preference on initial load
//   useEffect(() => {
//     // Check if user prefers dark mode or has previously set it
//     const darkModePreference =
//       localStorage.getItem("darkMode") === "true" ||
//       window.matchMedia("(prefers-color-scheme: dark)").matches;

//     setIsDarkMode(darkModePreference);
//     updateTheme(darkModePreference);
//   }, []);

//   const updateTheme = (isDark) => {
//     // Update document class for Tailwind dark mode
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     // Save preference to localStorage
//     localStorage.setItem("darkMode", isDark);
//   };

//   const toggleTheme = () => {
//     const newDarkMode = !isDarkMode;
//     setIsDarkMode(newDarkMode);
//     updateTheme(newDarkMode);
//   };

//   const handleClick = (tab) => {
//     setActiveTab(tab);
//     onNavigate(tab);
//   };

//   return (
//     <header className="sticky top-0 flex bg-light-background dark:bg-dark-background shadow-lg rounded-b-lg w-full h-14 items-center justify-between px-4 z-10">
//       <div className="container flex justify-start">
//         <h1 className="text-light-text dark:text-dark-text text-2xl px-4 py-2 font-bold hover:scale-110 transition-all duration-200 ease-in">
//           CliniGo
//         </h1>
//       </div>

//       <div className="flex items-center gap-4">
//         <nav className="hidden md:flex">
//           <ul className="flex gap-8 mr-5 justify-around items-center">
//             {["home", "map", "dashboard"].map((tab) => (
//               <li key={tab}>
//                 <button
//                   onClick={() => handleClick(tab)}
//                   className={`px-4 py-2 font-sans rounded-md font-semibold text-nowrap transition-all duration-200 ease-in ${
//                     activeTab === tab
//                       ? "bg-light-button dark:bg-dark-button text-light-text dark:text-dark-text border-b-2 border-b-light-border dark:border-b-dark-border shadow-md"
//                       : "text-light-text dark:text-dark-text hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover hover:border-b-2 hover:border-b-light-border dark:hover:border-b-dark-border"
//                   }`}
//                 >
//                   {tab === "home"
//                     ? "Home"
//                     : tab === "map"
//                     ? "Map"
//                     : "Favorites"}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <button
//           onClick={toggleTheme}
//           className="p-2 rounded-full bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover transition-all duration-200"
//           aria-label="Toggle theme"
//         >
//           {isDarkMode ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="text-dark-accent"
//             >
//               <circle cx="12" cy="12" r="5"></circle>
//               <line x1="12" y1="1" x2="12" y2="3"></line>
//               <line x1="12" y1="21" x2="12" y2="23"></line>
//               <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
//               <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
//               <line x1="1" y1="12" x2="3" y2="12"></line>
//               <line x1="21" y1="12" x2="23" y2="12"></line>
//               <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
//               <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="text-light-accent"
//             >
//               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//             </svg>
//           )}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
