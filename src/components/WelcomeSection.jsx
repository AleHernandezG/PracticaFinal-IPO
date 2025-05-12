import React from "react";

const WelcomeSection = ({ onLoginClick, usuario, onLogout }) => {
  // Imagen predeterminada o una imagen aleatoria si hay usuario
  const avatarSrc = usuario
    ? `https://randomuser.me/api/portraits/${
        Math.random() > 0.5 ? "men" : "women"
      }/${Math.floor(Math.random() * 100)}.jpg`
    : "avdef.png"; // asegúrate que esta imagen esté en la carpeta `public`

  return (
    <section className="rounded-md bg-light-card dark:bg-dark-card mx-2 mt-2 mb-3 shadow-md border border-light-border dark:border-dark-border flex flex-col justify-center items-center hover:-skew-y-1 hover:scale-[1.03] hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover transition-all duration-200 ease-in md:col-start-5 md:col-span-2 md:row-start-3 md:row-end-6">
      <section className="mt-2 mb-2">
        <div
          onClick={usuario ? undefined : onLoginClick}
          className={usuario ? "" : "cursor-pointer"}
        >
          <img
            alt="Imagen de avatar"
            className="rounded-full w-20 h-20 md:w-28 md:h-28"
            src={avatarSrc}
          />
        </div>
      </section>
      <h1 className="text-xl text-light-text dark:text-dark-text font-sans font-bold italic mb-2 mx-4 text-center md:text-3xl">
        {usuario ? `¡Bienvenido, ${usuario.nombre}!` : "¡Bienvenido!"}
      </h1>
      {!usuario ? (
        <>
          <h2 className="text-sm text-light-textSecondary dark:text-dark-textSecondary font-sans font-medium text-center md:text-base">
            Accede a todo el contenido.
          </h2>
          <h2 className="text-sm text-light-textSecondary dark:text-dark-textSecondary font-sans font-medium text-center mb-2 md:text-base">
            Pulsa en el icono de usuario negro para registrarte.
          </h2>
        </>
      ) : (
        <button
          onClick={onLogout}
          className="mb-3 px-3 py-1.5 bg-dark-error dark:bg-light-error hover:bg-light-accent dark:hover:bg-dark-accent text-white rounded-md font-sans font-medium transition-all duration-200 ease-in"
        >
          Cerrar sesión
        </button>
      )}
    </section>
  );
};

export default WelcomeSection;
