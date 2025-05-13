import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-20 px-6 md:px-16 max-w-6xl mx-auto font-poppins">
      {/* Sección Nuestra Misión */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
        <div>
          <h2 className="text-4xl font-bold text-light-accentText dark:text-dark-accentText mb-4">
            TU BIENESTAR, NUESTRA MISIÓN
          </h2>
          <p className="text-lg leading-relaxed text-light-text dark:text-dark-text">
            En CliniGo creemos que{" "}
            <strong className="text-light-accent dark:text-dark-accent">
              "La salud es lo primero"
            </strong>
            . Sabemos que el 45% de los ciudadanos acude a urgencias cada año y
            más del 60% pasa horas esperando atención. En emergencias, cada
            segundo cuenta, y perder tiempo en una sala de espera no es una
            opción.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-light-text dark:text-dark-text">
            Nuestra misión es resolver los problemas de accesibilidad a
            servicios de salud, proporcionando información en tiempo real sobre
            urgencias, rutas accesibles y farmacias de guardia, todo en una
            interfaz simple diseñada para todos los públicos.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center text-light-text dark:text-dark-text">
              <span className="bg-light-accent/20 text-light-accent dark:bg-dark-accent/20 dark:text-dark-accent p-1 rounded-full mr-2">
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
              Información en tiempo real sobre esperas en urgencias
            </li>
            <li className="flex items-center text-light-text dark:text-dark-text">
              <span className="bg-light-accent/20 text-light-accent dark:bg-dark-accent/20 dark:text-dark-accent p-1 rounded-full mr-2">
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
              Rutas accesibles para personas con movilidad reducida
            </li>
            <li className="flex items-center text-light-text dark:text-dark-text">
              <span className="bg-light-accent/20 text-light-accent dark:bg-dark-accent/20 dark:text-dark-accent p-1 rounded-full mr-2">
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
              Localización de farmacias de guardia y servicios disponibles
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://imgs.search.brave.com/tZvd5oabYcaOPDzmF3Vp5jG2B3HPn13yxt76beedt18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZW5lcy5kaWFyaW9k/ZWNhc3RpbGxheWxl/b24uZXMvZmlsZXMv/aW1hZ2VfbWVkaWFf/bWFpbl9tb2JpbGUv/ZmlsZXMvZnAvdXBs/b2Fkcy8yMDI0LzAz/LzE0LzY1ZjJmMjNk/YzZjNDQucl9kLjQ2/Ny0zMDcuanBlZw"
            alt="Servicios de urgencias"
            className="rounded-xl shadow-lg w-full max-w-md object-cover border border-light-border dark:border-dark-border"
          />
        </div>
      </div>

      {/* Sección Nuestra Historia */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
        <div className="order-2 md:order-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt="Equipo de CliniGo"
            className="rounded-xl shadow-lg w-full max-w-md object-cover border border-light-border dark:border-dark-border"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold text-light-accentText dark:text-dark-accentText mb-4">
            CÓMO NACIMOS
          </h2>
          <p className="text-lg leading-relaxed text-light-text dark:text-dark-text">
            Somos{" "}
            <strong className="text-light-accent dark:text-dark-accent">
              Alejandro Hernández González
            </strong>{" "}
            y{" "}
            <strong className="text-light-accent dark:text-dark-accent">
              Aarón Barroso García
            </strong>
            , estudiantes de 3er año de Ingeniería Informática. Nuestro proyecto
            comenzó tras identificar las dificultades que enfrentan las personas
            al acceder a servicios de urgencias.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-light-text dark:text-dark-text">
            Realizamos entrevistas con personas de diversos perfiles (jóvenes,
            adultos, personas mayores) y descubrimos necesidades comunes:
            información en tiempo real, accesibilidad para personas con
            movilidad reducida, y localización de farmacias de guardia.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-light-textSecondary dark:text-dark-textSecondary italic">
            Como dijo{" "}
            <strong className="text-light-accent dark:text-dark-accent">
              Denis Waitley
            </strong>
            :{" "}
            <strong>
              "El tiempo y la salud son dos bienes preciosos que no reconocemos
              ni apreciamos hasta que se agotan"
            </strong>
            . En CliniGo queremos ayudar a valorar y proteger estos bienes.
          </p>
        </div>
      </div>

      {/* Sección Lo que dicen nuestros usuarios */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-light-accentText dark:text-dark-accentText mb-8 text-center">
          LO QUE DICEN NUESTROS USUARIOS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-lg border border-light-border dark:border-dark-border">
            <p className="italic mb-4 text-light-text dark:text-dark-text">
              "Valoro enormemente el tiempo de espera en urgencias debido a una
              mala experiencia que tuve. CliniGo soluciona este problema."
            </p>
            <p className="font-semibold text-light-accent dark:text-dark-accent">
              — Manuel, 20 años
            </p>
          </div>
          <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-lg border border-light-border dark:border-dark-border">
            <p className="italic mb-4 text-light-text dark:text-dark-text">
              "Me encanta que tenga una interfaz sencilla para todos los
              públicos y que muestre los servicios de cada hospital."
            </p>
            <p className="font-semibold text-light-accent dark:text-dark-accent">
              — Mario, 21 años
            </p>
          </div>
          <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-lg border border-light-border dark:border-dark-border">
            <p className="italic mb-4 text-light-text dark:text-dark-text">
              "La opción de integración con servicios de transporte es esencial
              para quienes no tenemos coche."
            </p>
            <p className="font-semibold text-light-accent dark:text-dark-accent">
              — José Antonio, 45 años
            </p>
          </div>
          <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-lg border border-light-border dark:border-dark-border">
            <p className="italic mb-4 text-light-text dark:text-dark-text">
              "La posibilidad de crear una precita a distancia es muy útil para
              evitar largas esperas."
            </p>
            <p className="font-semibold text-light-accent dark:text-dark-accent">
              — María, 50 años
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
