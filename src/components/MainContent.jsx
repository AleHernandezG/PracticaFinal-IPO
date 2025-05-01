import React, { useState } from "react";
import Article from "./Article";
import WelcomeSection from "./WelcomeSection";
import SearchBar from "./SearchBar";
import InfoLugar from "./InfoLugar";
import Header from "./Header";
import Ventana from "./Ventana";
import Map from "./Map";
import Dashboard from "./Dashboard";
import lugaresData from "/src/storage/infoLugares.json";

const MainContent = () => {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [pantallaActiva, setPantallaActiva] = useState("home");
  const [lugarSeleccionado, setLugarSeleccionado] = useState(null);

  const mostrarVentanaLogin = () => setMostrarLogin(true);
  const navegar = (pantalla) => setPantallaActiva(pantalla);

  const manejarBusqueda = (termino) => {
    const resultado = lugaresData.find((lugar) =>
      lugar.nombre.toLowerCase().includes(termino.toLowerCase())
    );
    setLugarSeleccionado(resultado || null);
  };

  if (mostrarLogin) return <Ventana />;

  return (
    <>
      <Header onNavigate={navegar} />
      {pantallaActiva === "home" && (
        <main className="h-screen w-screen scale-90 flex flex-col gap-4 md:grid md:grid-cols-6 md:grid-rows-6 md:gap-2 md:scale-90">
          <Article />
          <WelcomeSection onLoginClick={mostrarVentanaLogin} />
          <SearchBar onBuscar={manejarBusqueda} />
          <InfoLugar lugar={lugarSeleccionado} />
        </main>
      )}
      {pantallaActiva === "map" && <Map />}
      {pantallaActiva === "dashboard" && <Dashboard />}
    </>
  );
};

export default MainContent;
