import React, { useState, useEffect, useRef } from "react";
import Persona from "/src/storage/Persona.js";

const Ventana = ({ onClose }) => {
  // Estado para la pantalla de inicio de sesión / registro
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [personas, setPersonas] = useState([]);

  // Refs para los campos de entrada
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const confirmPasswordRef = useRef();
  const emailRecuperarRef = useRef();

  // Cargar los usuarios desde localStorage
  useEffect(() => {
    const storedPersonas = JSON.parse(localStorage.getItem("personas")) || [];
    storedPersonas.forEach((p) => (p.activo = false));
    setPersonas(storedPersonas);
  }, []);

  // Alternar entre Login y Registro
  const cambiarVentana = () => {
    setIsLogin(!isLogin);
    setShowForgotPassword(false);
  };

  // Mostrar / Ocultar la ventana de recuperar contraseña
  const manejarOlvideContrasena = () => {
    setShowForgotPassword(true);
  };
  const volverALogin = () => {
    setShowForgotPassword(false);
  };

  // Función para manejar el login
  const manejarLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const persona = personas.find(
      (p) => p.email === email && p.contrasena === password
    );
    if (persona) {
      alert(`Bienvenido, ${persona.nombre}`);
      quitarActivos();
      persona.activo = true;
      localStorage.setItem("user", JSON.stringify(persona));

      if (onClose) {
        onClose();
      } else {
        window.location.href = "./index.html";
      }
    } else {
      alert("Email o contraseña incorrectos");
    }
  };

  // Función para manejar el registro
  const manejarRegistro = () => {
    const nombre = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const emailExistente = personas.find((p) => p.email === email);
    if (emailExistente) {
      alert("El email ya está registrado");
      return;
    }

    quitarActivos();

    const nuevaPersona = new Persona();
    nuevaPersona.establecerDatos(
      nombre,
      email,
      password,
      "public/av1.jpg",
      true
    );

    const nuevasPersonas = [...personas, nuevaPersona];
    setPersonas(nuevasPersonas);
    localStorage.setItem("personas", JSON.stringify(nuevasPersonas));
    localStorage.setItem("user", JSON.stringify(nuevaPersona));

    alert("Cuenta creada exitosamente");

    if (onClose) {
      onClose();
    } else {
      window.location.href = "./index.html";
    }
  };

  // Función para recuperar contraseña
  const recuperarContrasena = () => {
    const email = emailRecuperarRef.current.value;
    const persona = personas.find((p) => p.email === email);
    if (persona) {
      alert(`La contraseña para ${persona.email} es: ${persona.contrasena}`);
    } else {
      alert("No se encontró un usuario con ese email.");
    }
  };

  // Quitar todos los usuarios como activos
  const quitarActivos = () => {
    personas.forEach((p) => (p.activo = false));
    localStorage.setItem("personas", JSON.stringify(personas));
    localStorage.removeItem("user");
  };

  // Botón de cierre mejorado
  const renderCloseButton = () => (
    <button
      onClick={onClose}
      className="absolute top-4 right-4 p-2 rounded-full hover:bg-light-buttonHover/20 dark:hover:bg-dark-buttonHover/20 transition-colors"
      aria-label="Cerrar"
      title="Volver al inicio"
    >
      <svg
        className="w-6 h-6 text-light-text dark:text-dark-text"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );

  return (
    <div className="flex items-center justify-center fixed inset-0 h-screen w-full bg-light-background/80 dark:bg-dark-background/80 z-50 backdrop-blur-sm">
      {showForgotPassword ? (
        <div className="bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-2xl w-96 flex flex-col relative">
          {renderCloseButton()}
          <h1 className="text-3xl text-light-text dark:text-dark-text font-poppins font-semibold text-center mb-8">
            Recuperar Contraseña
          </h1>
          <label className="block text-light-text dark:text-dark-text font-poppins mb-2">
            Email
          </label>
          <input
            type="email"
            ref={emailRecuperarRef}
            className="w-full p-2 rounded bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text mb-4"
          />
          <button
            onClick={recuperarContrasena}
            className="mt-4 bg-light-button dark:bg-dark-button text-white px-4 py-2 rounded hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
          >
            Enviar Instrucciones
          </button>
          <p className="text-light-text dark:text-dark-text text-center mt-4">
            <a
              href="#"
              onClick={volverALogin}
              className="text-light-accent dark:text-dark-accent hover:text-light-accentText dark:hover:text-dark-accentText"
            >
              Volver a Iniciar Sesión
            </a>
          </p>
        </div>
      ) : isLogin ? (
        <div className="bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-2xl w-96 flex flex-col relative">
          {renderCloseButton()}
          <h1 className="text-3xl text-light-text dark:text-dark-text font-poppins font-semibold text-center mb-8">
            Iniciar Sesión
          </h1>
          <label className="block text-light-text dark:text-dark-text font-poppins mb-2">
            Email
          </label>
          <input
            type="email"
            ref={emailRef}
            className="w-full p-2 rounded bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text mb-4"
          />
          <label className="block text-light-text dark:text-dark-text font-poppins mt-4 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            ref={passwordRef}
            className="w-full p-2 rounded bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text mb-4"
          />
          <div className="flex justify-between items-center mt-4">
            <a
              href="#"
              onClick={manejarOlvideContrasena}
              className="text-sm text-light-accent dark:text-dark-accent hover:text-light-accentText dark:hover:text-dark-accentText"
            >
              Olvidé la contraseña
            </a>
            <button
              className="bg-light-button dark:bg-dark-button text-white px-4 py-2 rounded hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
              onClick={manejarLogin}
            >
              Acceder
            </button>
          </div>
          <p className="text-light-text dark:text-dark-text text-center mt-4">
            ¿No tienes cuenta?{" "}
            <a
              href="#"
              onClick={cambiarVentana}
              className="text-light-accent dark:text-dark-accent hover:text-light-accentText dark:hover:text-dark-accentText"
            >
              Crear una.
            </a>
          </p>
        </div>
      ) : (
        <div className="bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-2xl w-96 flex flex-col relative">
          {renderCloseButton()}
          <h1 className="text-2xl text-light-text dark:text-dark-text font-poppins font-semibold text-center mb-8">
            Crear Cuenta
          </h1>
          <label className="block text-light-text dark:text-dark-text font-poppins mb-2">
            Nombre
          </label>
          <input
            type="text"
            ref={nameRef}
            className="w-full p-2 rounded bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text mb-4"
          />
          <label className="block text-light-text dark:text-dark-text font-poppins mt-4 mb-2">
            Email
          </label>
          <input
            type="email"
            ref={emailRef}
            className="w-full p-2 rounded bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text mb-4"
          />
          <label className="block text-light-text dark:text-dark-text font-poppins mt-4 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            ref={passwordRef}
            className="w-full p-2 rounded bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text mb-4"
          />
          <label className="block text-light-text dark:text-dark-text font-poppins mt-4 mb-2">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            ref={confirmPasswordRef}
            className="w-full p-2 rounded bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text mb-4"
          />
          <button
            className="mt-6 bg-light-button dark:bg-dark-button text-white px-4 py-2 rounded hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
            onClick={manejarRegistro}
          >
            Crear Cuenta
          </button>
          <p className="text-light-text dark:text-dark-text text-center mt-4">
            ¿Ya tienes una cuenta?{" "}
            <a
              href="#"
              onClick={cambiarVentana}
              className="text-light-accent dark:text-dark-accent hover:text-light-accentText dark:hover:text-dark-accentText"
            >
              Iniciar Sesión
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Ventana;
