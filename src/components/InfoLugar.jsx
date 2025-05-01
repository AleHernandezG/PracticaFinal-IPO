import React from "react";

const InfoLugar = ({ lugar }) => {
  if (!lugar)
    return (
      <div className="rounded-md md:bg-[url(/logo.jpeg)] shadow-gray-700 mx-4 my-4 shadow-2xl hover:skew-y-1 hover:scale-105 hover:bg-indigo-800 hover:border-indigo-900 transition-all duration-200 ease-in md:col-start-1 md:col-span-4 md:row-start-3 md:row-end-7"></div>
    );

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg md:col-start-1 md:col-span-4 md:row-start-3 md:row-end-7">
      <h2 className="text-2xl font-bold mb-2">{lugar.nombre}</h2>
      <p>
        <strong>Teléfono:</strong> {lugar.telefono}
      </p>
      <p>
        <strong>Dirección:</strong> {lugar.direccion}
      </p>
      <p>
        <strong>Tipo:</strong> {lugar.tipo}
      </p>
      <p>
        <strong>Horario:</strong> {lugar.horario}
      </p>
      <p>
        <strong>Descripción:</strong> {lugar.descripcion}
      </p>
      <p>
        <strong>Accesibilidad:</strong>
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          Discapacitados: {lugar.accesibilidad.discapacitados ? "Sí" : "No"}
        </li>
        <li>Mascotas: {lugar.accesibilidad.mascotas ? "Sí" : "No"}</li>
        <li>Servicios: {lugar.accesibilidad.servicios.join(", ")}</li>
      </ul>
    </div>
  );
};

export default InfoLugar;
