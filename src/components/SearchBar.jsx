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
    <aside className="relative rounded-md bg-gray-800 shadow-gray-700 mx-4 my-4 shadow-2xl hover:-skew-x-2 hover:scale-105 hover:bg-indigo-800 hover:border-indigo-900 transition-all duration-200 ease-in md:col-start-5 md:col-span-2 md:row-start-6">
      <div className="text-center mt-2">
        <p className="text-lg text-white font-semibold md:text-xl">
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
            className="flex-grow p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={manejarClick}
            className="p-2 bg-indigo-600 rounded-md hover:bg-indigo-500 transition-all"
          >
            🔍
          </button>
        </div>
        {mostrarLista && sugerencias.length > 0 && (
          <ul className="w-full mt-2 bg-gray-700 rounded-md max-h-40 overflow-y-auto shadow-md text-white z-10">
            {sugerencias.map((s, idx) => (
              <li
                key={idx}
                className="px-4 py-2 hover:bg-indigo-600 cursor-pointer"
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
