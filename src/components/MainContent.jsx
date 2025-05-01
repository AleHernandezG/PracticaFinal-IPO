// import React, { useState } from "react";
// import Article from "./Article";
// import WelcomeSection from "./WelcomeSection";
// import SearchBar from "./SearchBar";
// import InfoLugar from "./InfoLugar";
// import Header from "./Header";
// import Ventana from "./Ventana";
// import Map from "./Map";
// import Dashboard from "./Dashboard";
// import lugaresData from "/src/storage/infoLugares.json";

// const MainContent = () => {
//   const [mostrarLogin, setMostrarLogin] = useState(false);
//   const [pantallaActiva, setPantallaActiva] = useState("home");
//   const [lugarSeleccionado, setLugarSeleccionado] = useState(null);

//   const mostrarVentanaLogin = () => setMostrarLogin(true);
//   const navegar = (pantalla) => setPantallaActiva(pantalla);

//   const manejarBusqueda = (termino) => {
//     const resultado = lugaresData.find((lugar) =>
//       lugar.nombre.toLowerCase().includes(termino.toLowerCase())
//     );
//     setLugarSeleccionado(resultado || null);
//   };

//   if (mostrarLogin) return <Ventana />;

//   return (
//     <>
//       <Header onNavigate={navegar} />
//       {pantallaActiva === "home" && (
//         <main className="h-screen w-screen scale-90 flex flex-col gap-4 md:grid md:grid-cols-6 md:grid-rows-6 md:gap-2 md:scale-90">
//           <Article />
//           <WelcomeSection onLoginClick={mostrarVentanaLogin} />
//           <SearchBar onBuscar={manejarBusqueda} />
//           <InfoLugar lugar={lugarSeleccionado} />
//         </main>
//       )}
//       {pantallaActiva === "map" && <Map />}
//       {pantallaActiva === "dashboard" && <Dashboard />}
//     </>
//   );
// };

// export default MainContent;

import React, { useState, useEffect } from "react";
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
  const [usuarioActivo, setUsuarioActivo] = useState(null);

  // Cargar usuario activo del localStorage
  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      setUsuarioActivo(JSON.parse(userFromStorage));
    }
  }, [mostrarLogin]); // Re-cargar cuando cambia el estado de mostrarLogin

  const mostrarVentanaLogin = () => setMostrarLogin(true);
  const cerrarVentanaLogin = () => setMostrarLogin(false);

  const navegar = (pantalla) => {
    setPantallaActiva(pantalla);
    // Si cambia de pantalla, resetear el lugar seleccionado
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

    // Si encuentra un resultado y no estamos en home, navegar a home
    if (resultado && pantallaActiva !== "home") {
      setPantallaActiva("home");
    }
  };

  const manejarCierreSesion = () => {
    localStorage.removeItem("user");
    setUsuarioActivo(null);
    // También limpiar activos en el array de personas
    const storedPersonas = JSON.parse(localStorage.getItem("personas")) || [];
    storedPersonas.forEach((p) => (p.activo = false));
    localStorage.setItem("personas", JSON.stringify(storedPersonas));
  };

  // Renderizado condicional basado en la pantalla activa
  const renderizarContenido = () => {
    switch (pantallaActiva) {
      case "map":
        return <Map />;
      case "dashboard":
        return <Dashboard usuario={usuarioActivo} />;
      case "home":
      default:
        return (
          <main className="min-h-screen w-full flex flex-col gap-4 md:grid md:grid-cols-6 md:grid-rows-6 md:gap-2 px-2">
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
    <div className="flex flex-col min-h-screen bg-light-background dark:bg-dark-background">
      <Header onNavigate={navegar} activeScreen={pantallaActiva} />
      {renderizarContenido()}
      {mostrarLogin && <Ventana onClose={cerrarVentanaLogin} />}
    </div>
  );
};

export default MainContent;
