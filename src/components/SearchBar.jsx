import React, { useState, useEffect } from "react";
import lugaresData from "/src/storage/infoLugares.json";

const SearchBar = ({ onBuscar }) => {
  const [input, setInput] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);

  useEffect(() => {
    if (input.trim() === "") {
      setSugerencias([]);
      return;
    }

    const filtradas = lugaresData
      .map((lugar) => lugar.nombre)
      .filter((nombre) => nombre.toLowerCase().includes(input.toLowerCase()));
    setSugerencias(filtradas);
  }, [input]);

  const manejarClick = () => {
    if (onBuscar) onBuscar(input);
    setMostrarLista(false);
  };

  const manejarSeleccion = (sugerencia) => {
    setInput(sugerencia);
    setMostrarLista(false);
    if (onBuscar) onBuscar(sugerencia);
  };

  return (
    <aside className="relative rounded-md bg-light-card dark:bg-dark-card shadow-lg mx-4 my-4 border border-light-border dark:border-dark-border hover:-skew-x-2 hover:scale-105 hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover hover:border-light-border dark:hover:border-dark-border transition-all duration-200 ease-in md:col-start-5 md:col-span-2 md:row-start-6">
      <div className="text-center mt-2">
        <p className="text-lg text-light-text dark:text-dark-text font-semibold md:text-xl">
          ¿En qué puedo ayudarte?
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-1 mb-2 px-4">
        <div className="flex flex-row w-full gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setMostrarLista(true);
            }}
            onFocus={() => setMostrarLista(true)}
            placeholder="Escribe aquí..."
            className="flex-grow p-2 rounded-md bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-light-button dark:focus:ring-dark-button"
          />
          <button
            onClick={manejarClick}
            className="p-2 bg-light-button dark:bg-dark-button rounded-md hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover transition-all"
          >
            🔍
          </button>
        </div>
        {mostrarLista && sugerencias.length > 0 && (
          <ul className="w-full mt-2 bg-light-card dark:bg-dark-card rounded-md max-h-40 overflow-y-auto shadow-md text-light-text dark:text-dark-text z-10">
            {sugerencias.map((s, idx) => (
              <li
                key={idx}
                className="px-4 py-2 hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover cursor-pointer"
                onClick={() => manejarSeleccion(s)}
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default SearchBar;
