import React from "react";

// Datos simulados (puedes mover esto a un archivo JSON aparte si lo prefieres)
const lugares = [
  { id: 1, nombre: "Hospital Universitario de Salamanca" },
  { id: 2, nombre: "Farmacia Calle Zamora" },
  { id: 3, nombre: "Urgencias Salamanca" },
  { id: 4, nombre: "Clínica Salamanca" },
  { id: 5, nombre: "Farmacia Plaza Mayor" },
  { id: 6, nombre: "Centro de Salud Salamanca Centro" },
  { id: 7, nombre: "Farmacia San Juan" },
  { id: 8, nombre: "Clínica Dental Salamanca" },
  { id: 9, nombre: "Farmacia La Alamedilla" },
  { id: 10, nombre: "Hospital Clínico de Salamanca" },
];

// Función para obtener 5 lugares aleatorios con porcentaje
const getRandomSearches = () => {
  const shuffled = [...lugares].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 8).map((item) => ({
    ...item,
    porcentaje: Math.floor(Math.random() * 61) + 40, // entre 40 y 100
  }));
  return selected.sort((a, b) => b.porcentaje - a.porcentaje); // orden descendente
};

const RecentSearches = () => {
  const results = getRandomSearches();

  return (
    <div className="p-6 text-light-text dark:text-dark-text">
      <h2 className="text-2xl font-bold mb-4">Búsquedas Recientes</h2>
      <ul className="space-y-3">
        {results.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-light-card dark:bg-dark-card p-4 rounded-lg shadow"
          >
            <span className="font-medium">{item.nombre}</span>
            <span className="text-sm text-light-accent dark:text-dark-accent font-semibold">
              {item.porcentaje}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
