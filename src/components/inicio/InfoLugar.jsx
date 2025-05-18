import React from "react";

const InfoLugar = ({ lugar }) => {
  if (!lugar)
    return (
      <div className="rounded-md md:bg-[url(/fond.jpg)] shadow-light-shadow dark:shadow-dark-shadow mx-2 my-2 shadow-2xl hover:skew-y-1 hover:scale-[1.02] hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover hover:border-light-border dark:hover:border-dark-border transition-all duration-200 ease-in md:col-start-1 md:col-span-4 md:row-start-3 md:row-end-7 max-w-[98%]"></div>
    );

  return (
    <div className="bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text p-4 rounded-xl shadow-2xl md:col-start-1 md:col-span-4 md:row-start-3 md:row-end-7 space-y-3 mx-2 my-2 max-w-[98%]">
      {lugar.rutaImagen && (
        <img
          src={lugar.rutaImagen}
          alt={`Imagen de ${lugar.nombre}`}
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      )}

      <h2 className="text-2xl font-extrabold text-light-accent dark:text-dark-accent border-b-2 border-light-border dark:border-dark-border pb-1 text-center">
        {lugar.nombre}
      </h2>

      {/* Mostrar si es farmacia y tiene guardia */}
      {lugar.tipo === "farmacia" && (
        <p className="bg-light-accent/10 dark:bg-dark-accent/10 p-2 rounded-md">
          <strong className="text-light-accent dark:text-dark-accent">
            🚨 Farmacia de guardia actual:
          </strong>{" "}
          {lugar.guardia === "si" ? (
            <span className="text-green-600 dark:text-green-400 font-bold">
              Sí
            </span>
          ) : (
            <span className="text-red-600 dark:text-red-400 font-bold">No</span>
          )}
        </p>
      )}

      <p>
        <strong className="text-light-accent dark:text-dark-accent">
          📞 Teléfono:
        </strong>{" "}
        {lugar.telefono}
      </p>
      <p>
        <strong className="text-light-accent dark:text-dark-accent">
          📍 Dirección:
        </strong>{" "}
        {lugar.direccion}
      </p>
      <p>
        <strong className="text-light-accent dark:text-dark-accent">
          🕒 Horario:
        </strong>{" "}
        {lugar.horario}
      </p>
      <p>
        <strong className="text-light-accent dark:text-dark-accent">
          📝 Descripción:
        </strong>{" "}
        {lugar.descripcion}
      </p>
      <div>
        <strong className="text-light-accent dark:text-dark-accent">
          ♿ Accesibilidad:
        </strong>
        <ul className="list-disc list-inside ml-4 mt-1">
          <li>
            Discapacitados: {lugar.accesibilidad.discapacitados ? "Sí" : "No"}
          </li>
          <li>Mascotas: {lugar.accesibilidad.mascotas ? "Sí" : "No"}</li>
          <li>Servicios: {lugar.accesibilidad.servicios.join(", ")}</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoLugar;
