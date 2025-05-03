import React, { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import LoadingSpinner from "./LoadingSpinner";

// Iconos
import iconHospital from "/icons/hospital.png";
import iconFarmacia from "/icons/pharmacy.png";
import iconUrgencias from "/icons/emergency.png";
import iconClinica from "/icons/clinic.png";
import iconClinicaDental from "/icons/dental.png";
import iconCentroSalud from "/icons/health-center.png";
import iconUsuario from "/icons/user.png";

// Datos
import mapData from "/src/storage/map.json";

// Componente de rutas
const RoutingMachine = ({
  userLocation,
  destination,
  profile,
  showRoute,
  onRouteCalculated,
}) => {
  const map = useMap();

  useEffect(() => {
    if (!showRoute) {
      if (map.routing) {
        map.removeControl(map.routing);
        map.routing = null;
      }
      return;
    }

    if (!userLocation || !destination) return;

    if (map.routing) {
      map.removeControl(map.routing);
      map.routing = null;
    }

    let routeOptions = {};
    let lineColor;
    let altLineColor;

    switch (profile) {
      case "car":
        routeOptions = {
          serviceUrl: "https://router.project-osrm.org/route/v1",
          profile: "car",
        };
        lineColor = "#818CF8";
        altLineColor = "#6366F1";
        break;
      case "bike":
        routeOptions = {
          serviceUrl: "https://router.project-osrm.org/route/v1",
          profile: "bike",
        };
        lineColor = "#10B981";
        altLineColor = "#047857";
        break;
      case "foot":
        routeOptions = {
          serviceUrl: "https://router.project-osrm.org/route/v1",
          profile: "foot",
        };
        lineColor = "#F59E0B";
        altLineColor = "#B45309";
        break;
      default:
        routeOptions = {
          serviceUrl: "https://router.project-osrm.org/route/v1",
          profile: "car",
        };
        lineColor = "#818CF8";
        altLineColor = "#6366F1";
    }

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(userLocation.lat, userLocation.lng),
        L.latLng(destination.lat, destination.lng),
      ],
      routeWhileDragging: false,
      showAlternatives: true,
      lineOptions: {
        styles: [{ color: lineColor, weight: 5 }],
        extendToWaypoints: true,
        missingRouteTolerance: 0,
      },
      altLineOptions: {
        styles: [{ color: altLineColor, weight: 4, opacity: 0.6 }],
      },
      router: L.Routing.osrmv1(routeOptions),
      collapsible: true,
      show: true,
      autoRoute: true,
      fitSelectedRoutes: "smart",
      createMarker: () => null,
    }).addTo(map);

    map.routing = routingControl;

    routingControl.on("routesfound", function (e) {
      const routes = e.routes;
      const bounds = L.latLngBounds(routes[0].coordinates);
      map.fitBounds(bounds, { padding: [50, 50] });

      if (onRouteCalculated) {
        onRouteCalculated(routes);
      }
    });

    return () => {
      if (map.routing) {
        map.removeControl(map.routing);
        map.routing = null;
      }
    };
  }, [map, userLocation, destination, profile, showRoute, onRouteCalculated]);

  return null;
};

// Componente principal Map
const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("all");
  const [showRoute, setShowRoute] = useState(false);
  const [transportMode, setTransportMode] = useState("car");
  const [routeDestination, setRouteDestination] = useState(null);
  const [calculatingRoute, setCalculatingRoute] = useState(false);

  useEffect(() => {
    let timeoutId;

    const successCallback = (position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      timeoutId = setTimeout(() => setLoading(false), 1500);
    };

    const errorCallback = (error) => {
      console.error("Error obteniendo ubicación: ", error);
      setUserLocation({ lat: 40.9632, lng: -5.6633 }); // Coordenadas por defecto para Salamanca
      timeoutId = setTimeout(() => setLoading(false), 1500);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Controlar el cambio de modo de transporte
  const handleTransportModeChange = (mode) => {
    if (showRoute && routeDestination) {
      setCalculatingRoute(true); // Activar spinner durante el cálculo
      setTransportMode(mode);
      // Necesitamos recargar la ruta
      setShowRoute(false);
      setTimeout(() => setShowRoute(true), 100);
    } else {
      setTransportMode(mode);
    }
  };

  // Callback cuando la ruta ha sido calculada
  const handleRouteCalculated = useCallback(() => {
    setCalculatingRoute(false);
  }, []);

  const getIcon = (tipo) => {
    const iconSize = [32, 32];
    let iconUrl;

    switch (tipo) {
      case "hospital":
        iconUrl = iconHospital;
        break;
      case "farmacia":
        iconUrl = iconFarmacia;
        break;
      case "urgencias":
        iconUrl = iconUrgencias;
        break;
      case "clinica":
        iconUrl = iconClinica;
        break;
      case "clinica_dental":
        iconUrl = iconClinicaDental;
        break;
      case "centro_salud":
        iconUrl = iconCentroSalud;
        break;
      default:
        iconUrl = iconFarmacia;
    }

    return L.icon({ iconUrl, iconSize });
  };

  const filteredLocations =
    filterType === "all"
      ? mapData
      : mapData.filter((location) => location.tipo === filterType);

  // Mostrar el spinner principal si se está cargando la ubicación
  if (loading || !userLocation) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-light-background dark:bg-dark-background">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-light-background dark:bg-dark-background overflow-hidden">
      {/* Header fijo */}
      <div className="sticky top-0 z-50">
        {/* Header Principal */}
        <div className="bg-light-button dark:bg-dark-button text-white p-4">
          <h1 className="text-2xl font-bold mb-2">
            Servicios de Salud en Salamanca
          </h1>

          {/* Filtros - reorganizados */}
          <div className="flex justify-between items-start md:items-center">
            {/* Lugares (izquierda) */}
            <div className="flex flex-wrap gap-2 max-w-3xl">
              <button
                className={`px-3 py-1 rounded-full ${
                  filterType === "all"
                    ? "bg-light-accent dark:bg-dark-accent text-light-accentText dark:text-dark-accentText"
                    : "bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text"
                }`}
                onClick={() => setFilterType("all")}
              >
                Todos
              </button>
              <button
                className={`px-3 py-1 rounded-full ${
                  filterType === "hospital"
                    ? "bg-light-accent dark:bg-dark-accent text-light-accentText dark:text-dark-accentText"
                    : "bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text"
                }`}
                onClick={() => setFilterType("hospital")}
              >
                Hospitales
              </button>
              <button
                className={`px-3 py-1 rounded-full ${
                  filterType === "farmacia"
                    ? "bg-light-accent dark:bg-dark-accent text-light-accentText dark:text-dark-accentText"
                    : "bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text"
                }`}
                onClick={() => setFilterType("farmacia")}
              >
                Farmacias
              </button>
              <button
                className={`px-3 py-1 rounded-full ${
                  filterType === "urgencias"
                    ? "bg-light-accent dark:bg-dark-accent text-light-accentText dark:text-dark-accentText"
                    : "bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text"
                }`}
                onClick={() => setFilterType("urgencias")}
              >
                Urgencias
              </button>
              <button
                className={`px-3 py-1 rounded-full ${
                  filterType === "clinica"
                    ? "bg-light-accent dark:bg-dark-accent text-light-accentText dark:text-dark-accentText"
                    : "bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text"
                }`}
                onClick={() => setFilterType("clinica")}
              >
                Clínicas
              </button>
              <button
                className={`px-3 py-1 rounded-full ${
                  filterType === "centro_salud"
                    ? "bg-light-accent dark:bg-dark-accent text-light-accentText dark:text-dark-accentText"
                    : "bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text"
                }`}
                onClick={() => setFilterType("centro_salud")}
              >
                Centros de Salud
              </button>
            </div>

            {/* Modo de transporte (derecha) */}
            <div className="flex items-center space-x-2 ml-4">
              <span className="mr-1 text-sm font-medium hidden sm:inline">
                Transporte:
              </span>
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1 rounded-full text-sm ${
                    transportMode === "car"
                      ? "bg-light-buttonHover dark:bg-dark-buttonHover text-white"
                      : "bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text"
                  }`}
                  onClick={() => handleTransportModeChange("car")}
                >
                  Coche
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm ${
                    transportMode === "bike"
                      ? "bg-light-buttonHover dark:bg-dark-buttonHover text-white"
                      : "bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text"
                  }`}
                  onClick={() => handleTransportModeChange("bike")}
                >
                  Bici
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm ${
                    transportMode === "foot"
                      ? "bg-light-accent dark:bg-dark-accent text-light-accentText dark:text-dark-accentText"
                      : "bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text"
                  }`}
                  onClick={() => handleTransportModeChange("foot")}
                >
                  A pie
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de ruta activa (se muestra solo cuando hay una ruta) */}
        {showRoute && (
          <div className="bg-light-card dark:bg-dark-card p-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-light-border dark:border-dark-border shadow-md">
            <div className="font-medium flex flex-col sm:flex-row sm:items-center text-light-text dark:text-dark-text">
              <div className="mb-2 sm:mb-0 sm:mr-4">
                <span className="font-bold text-light-accent dark:text-dark-accent">
                  Ruta activa:
                </span>{" "}
                {transportMode === "car"
                  ? "En coche"
                  : transportMode === "bike"
                  ? "En bicicleta"
                  : "A pie"}
              </div>
            </div>
            <button
              className="px-3 py-1 rounded-full bg-light-button dark:bg-dark-button text-white hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
              onClick={() => setShowRoute(false)}
            >
              Cerrar ruta
            </button>
          </div>
        )}
      </div>

      {/* Mapa - El resto del espacio */}
      <div className="flex-1 relative">
        <MapContainer
          center={[userLocation.lat, userLocation.lng]}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Marcador del usuario */}
          <Marker
            position={[userLocation.lat, userLocation.lng]}
            icon={L.icon({ iconUrl: iconUsuario, iconSize: [32, 32] })}
          >
            <Popup className="bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text">
              <div>
                <h3 className="font-bold">Tu ubicación actual</h3>
              </div>
            </Popup>
          </Marker>

          {/* Marcadores de ubicaciones */}
          {filteredLocations.map((location) => (
            <Marker
              key={location.id}
              position={[location.coordenadas.lat, location.coordenadas.lng]}
              icon={getIcon(location.tipo)}
            >
              <Popup className="bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text">
                <div className="max-w-xs">
                  <h3 className="font-bold text-lg text-light-accent dark:text-dark-accent">
                    {location.nombre}
                  </h3>
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                    {location.descripcion}
                  </p>
                  <p className="mt-2">
                    <strong>Dirección:</strong> {location.direccion}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {location.telefono}
                  </p>

                  <button
                    className="mt-3 bg-light-button dark:bg-dark-button text-white px-4 py-2 rounded-lg w-full hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
                    onClick={() => {
                      setRouteDestination(location.coordenadas);
                      setCalculatingRoute(true); // Mostrar spinner durante el cálculo inicial
                      setShowRoute(true);
                    }}
                  >
                    Calcular ruta
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Componente de rutas */}
          <RoutingMachine
            userLocation={userLocation}
            destination={routeDestination}
            profile={transportMode}
            showRoute={showRoute}
            onRouteCalculated={handleRouteCalculated}
          />
        </MapContainer>

        {/* Spinner para recálculo de ruta */}
        {calculatingRoute && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-light-background/60 dark:bg-dark-background/60 z-40">
            <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg flex flex-col items-center">
              <LoadingSpinner text="Recalculando ruta..." />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
