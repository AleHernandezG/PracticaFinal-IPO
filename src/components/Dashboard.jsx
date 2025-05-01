import React, { useState } from "react";
import FaqForum from "./FaqForum";

const Dashboard = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  const handleHelpClick = () => {
    setShowFAQ(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackClick = () => {
    setShowFAQ(false);
  };

  return (
    <section className="bg-white text-gray-800 py-20 px-6 md:px-16 max-w-6xl mx-auto">
      {!showFAQ ? (
        <>
          {/* Sección Nuestra Misión */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-indigo-600 mb-4">
                NUESTRA MISIÓN
              </h2>
              <p className="text-lg leading-relaxed">
                Nuestro punto de vista radica en la premisa: "La Salud es lo
                primero". Creemos que la tecnología puede mejorar la forma en
                que las personas acceden a la salud. Por eso, trabajamos para
                conectar a usuarios con servicios médicos de forma eficiente,
                inclusiva y humana. Nuestra plataforma promueve un enfoque
                centrado en las personas.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Historia del equipo
                </li>
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full mr-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Equipo en acción
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="https://www.mutualmedica.com/documents/20123/93572/equipo-medico.jpg"
                alt="Equipo en acción"
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>

          {/* Sección Nuestra Historia */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
            <div className="order-2 md:order-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Historia del equipo"
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-indigo-600 mb-4">
                NUESTRA HISTORIA
              </h2>
              <p className="text-lg leading-relaxed">
                Somos dos jóvenes estudiantes de Ingeniería Informática
                apasionados por la tecnología y la salud. Nuestro proyecto
                comenzó en 2023 con el objetivo de crear soluciones innovadoras
                para el sector médico. Lo formamos profesionales con una pasión
                en común: construir herramientas útiles y accesibles que
                realmente marquen la diferencia en la vida de las personas.
              </p>
            </div>
          </div>

          {/* Botón ayuda */}
          <div className="text-center">
            <button
              onClick={handleHelpClick}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg shadow-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Ayuda y Preguntas Frecuentes
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={handleBackClick}
            className="mb-8 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300 text-lg"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver a la página principal
          </button>
          <FaqForum />
        </>
      )}
    </section>
  );
};

export default Dashboard;
