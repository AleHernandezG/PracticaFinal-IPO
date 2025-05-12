import React, { useState, useEffect } from "react";
import Article from "./Article";
import WelcomeSection from "./WelcomeSection";
import SearchBar from "./SearchBar";
import InfoLugar from "./InfoLugar";
import Header from "./Header";
import Ventana from "./Ventana";
import Map from "./Map";
import Dashboard from "./Dashboard";
import Help from "./Help"; // Asegúrate de crear este componente
import lugaresData from "/src/storage/infoLugares.json";

const MainContent = () => {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [pantallaActiva, setPantallaActiva] = useState("home");
  const [lugarSeleccionado, setLugarSeleccionado] = useState(null);
  const [usuarioActivo, setUsuarioActivo] = useState(null);

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      setUsuarioActivo(JSON.parse(userFromStorage));
    }
  }, [mostrarLogin]);

  const mostrarVentanaLogin = () => setMostrarLogin(true);
  const cerrarVentanaLogin = () => setMostrarLogin(false);

  const navegar = (pantalla) => {
    setPantallaActiva(pantalla);
    if (pantalla !== "home" && lugarSeleccionado) {
      setLugarSeleccionado(null);
    }
  };

  const manejarBusqueda = (termino) => {
    if (!termino.trim()) {
      setLugarSeleccionado(null);
      return;
    }

    const resultado = lugaresData.find((lugar) =>
      lugar.nombre.toLowerCase().includes(termino.toLowerCase())
    );

    setLugarSeleccionado(resultado || null);

    if (resultado && pantallaActiva !== "home") {
      setPantallaActiva("home");
    }
  };

  const manejarCierreSesion = () => {
    localStorage.removeItem("user");
    setUsuarioActivo(null);
    const storedPersonas = JSON.parse(localStorage.getItem("personas")) || [];
    storedPersonas.forEach((p) => (p.activo = false));
    localStorage.setItem("personas", JSON.stringify(storedPersonas));
  };

  const renderizarContenido = () => {
    switch (pantallaActiva) {
      case "map":
        return <Map />;
      case "dashboard":
        return <Dashboard usuario={usuarioActivo} />;
      case "help":
        return <Help />;
      case "home":
      default:
        return (
          <main className="w-full flex flex-col gap-2 md:grid md:grid-cols-6 md:grid-rows-6 md:gap-1 px-1">
            <Article />
            <WelcomeSection
              onLoginClick={mostrarVentanaLogin}
              usuario={usuarioActivo}
              onLogout={manejarCierreSesion}
            />
            <SearchBar onBuscar={manejarBusqueda} />
            <InfoLugar lugar={lugarSeleccionado} />
          </main>
        );
    }
  };

  return (
    <div className="flex flex-col h-screen bg-light-background dark:bg-dark-background">
      {/* Header con navegación */}
      <Header onNavigate={navegar} activeScreen={pantallaActiva} />

      {/* Contenedor que permite scroll del contenido principal */}
      <div className="flex-1 overflow-auto">{renderizarContenido()}</div>

      {mostrarLogin && <Ventana onClose={cerrarVentanaLogin} />}
    </div>
  );
};

export default MainContent;
