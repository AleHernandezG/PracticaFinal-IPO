// import React, { useState, useEffect } from "react";
// import Persona from "/src/storage/Persona.js";

// // Función para obtener el usuario activo desde localStorage
// const obtenerUsuarioActivo = () => {
//   const usuarioData = JSON.parse(localStorage.getItem("user"));
//   return usuarioData
//     ? new Persona(
//         usuarioData.nombre,
//         usuarioData.email,
//         usuarioData.contrasena,
//         usuarioData.idAvatar,
//         usuarioData.activo
//       )
//     : null;
// };

// const WelcomeSection = ({ onLoginClick }) => {
//   // Estado para almacenar la información del usuario activo
//   const [usuario, setUsuario] = useState(null);

//   // Cargar el usuario activo al montar el componente
//   useEffect(() => {
//     const usuarioActivo = obtenerUsuarioActivo();
//     if (usuarioActivo && usuarioActivo.activo) {
//       console.log("Usuario activo:", usuarioActivo);
//       setUsuario(usuarioActivo);
//     }
//   }, []);

//   return (
//     <section className="rounded-md bg-gray-800 mx-4 my-4 shadow-2xl shadow-gray-700 flex flex-col justify-center items-center hover:-skew-y-1 hover:scale-105 hover:bg-indigo-800 hover:border-indigo-900 transition-all duration-200 ease-in md:col-start-5 md:col-span-2 md:row-start-3 md:row-end-6">
//       <section className="my-3">
//         <a href="#" onClick={onLoginClick}>
//           <img
//             alt="Imagen de avatar"
//             className="rounded-full w-24 h-24 md:w-32 md:h-32"
//             src={usuario ? usuario.idAvatar : "/public/avatar-def.png"}
//           />
//         </a>
//       </section>
//       <h1 className="text-2xl text-white font-sans font-bold italic mb-2 mx-6 text-center md:text-4xl">
//         {usuario ? `¡Bienvenido, ${usuario.nombre}!` : "¡Bienvenido!"}
//       </h1>
//       {!usuario ? (
//         <>
//           <h2 className="text-base text-gray-400 font-sans font-semibold text-center md:text-lg">
//             Accede a todo el contenido.
//           </h2>
//           <h2 className="text-base text-gray-400 font-sans font-semibold text-center mb-2 md:text-lg">
//             Pulsa en el icono para registrarte.
//           </h2>
//         </>
//       ) : null}
//     </section>
//   );
// };

// export default WelcomeSection;

import React from "react";

const WelcomeSection = ({ onLoginClick, usuario, onLogout }) => {
  return (
    <section className="rounded-md bg-light-card dark:bg-dark-card mx-4 my-4 shadow-lg border border-light-border dark:border-dark-border flex flex-col justify-center items-center hover:-skew-y-1 hover:scale-105 hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover transition-all duration-200 ease-in md:col-start-5 md:col-span-2 md:row-start-3 md:row-end-6">
      <section className="my-3">
        <div
          onClick={usuario ? undefined : onLoginClick}
          className={usuario ? "" : "cursor-pointer"}
        >
          <img
            alt="Imagen de avatar"
            className="rounded-full w-24 h-24 md:w-32 md:h-32"
            src={usuario ? usuario.idAvatar : "./public/avatar-def.png"}
          />
        </div>
      </section>
      <h1 className="text-2xl text-light-text dark:text-dark-text font-sans font-bold italic mb-2 mx-6 text-center md:text-4xl">
        {usuario ? `¡Bienvenido, ${usuario.nombre}!` : "¡Bienvenido!"}
      </h1>
      {!usuario ? (
        <>
          <h2 className="text-base text-light-textSecondary dark:text-dark-textSecondary font-sans font-semibold text-center md:text-lg">
            Accede a todo el contenido.
          </h2>
          <h2 className="text-base text-light-textSecondary dark:text-dark-textSecondary font-sans font-semibold text-center mb-2 md:text-lg">
            Pulsa en el icono para registrarte.
          </h2>
        </>
      ) : (
        <button
          onClick={onLogout}
          className="mb-4 px-4 py-2 bg-dark-error dark:bg-light-error hover:bg-dark-errorHover dark:hover:bg-light-errorHover text-white rounded-md font-sans font-semibold transition-all duration-200 ease-in"
        >
          Cerrar sesión
        </button>
      )}
    </section>
  );
};

export default WelcomeSection;
