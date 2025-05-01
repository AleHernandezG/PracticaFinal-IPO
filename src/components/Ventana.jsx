import React, { useState, useEffect, useRef } from "react";
import Persona from "/src/storage/Persona.js";

const Ventana = () => {
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
    setShowForgotPassword(false); // Asegurarse de que no se muestre la pantalla de recuperar contraseña al cambiar
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
      // Establecer el usuario activo
      quitarActivos(); // Quitar todos los usuarios como activos
      persona.activo = true;
      localStorage.setItem("user", JSON.stringify(persona));
      window.location.href = "/index.html"; // 🔹 Redirigir a index.html
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

    // Verificar si el email ya está registrado
    const emailExistente = personas.find((p) => p.email === email);
    if (emailExistente) {
      alert("El email ya está registrado");
      return;
    }

    quitarActivos(); // Quitar todos los usuarios como activos

    // Crear una nueva instancia de Persona y agregarla a la lista
    const nuevaPersona = new Persona();
    nuevaPersona.establecerDatos(
      nombre,
      email,
      password,
      "/public/avatar.jpg", // Corregir typo en la URL del avatar
      true
    );

    const nuevasPersonas = [...personas, nuevaPersona];
    setPersonas(nuevasPersonas);
    localStorage.setItem("personas", JSON.stringify(nuevasPersonas));
    localStorage.setItem("user", JSON.stringify(nuevaPersona));

    alert("Cuenta creada exitosamente");
    window.location.href = "/index.html"; // 🔹 Redirigir a index.html
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

    // También tenemos que borrar el local storage del usuario activo
    localStorage.removeItem("user");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-neutral-800 to-slate-900">
      {showForgotPassword ? (
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-96 flex flex-col">
          <h1 className="text-3xl text-white font-poppins font-semibold text-center mb-8">
            Recuperar Contraseña
          </h1>
          <label className="block text-white font-poppins mb-2">Email</label>
          <input
            type="email"
            ref={emailRecuperarRef}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={recuperarContrasena}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Enviar Instrucciones
          </button>
          <p className="text-white text-center mt-4">
            <a
              href="#"
              onClick={volverALogin}
              className="text-blue-400 hover:text-blue-300"
            >
              Volver a Iniciar Sesión
            </a>
          </p>
        </div>
      ) : isLogin ? (
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-96 flex flex-col">
          <h1 className="text-3xl text-white font-poppins font-semibold text-center mb-8">
            Iniciar Sesión
          </h1>
          <label className="block text-white font-poppins mb-2">Email</label>
          <input
            type="email"
            ref={emailRef}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <label className="block text-white font-poppins mt-4 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            ref={passwordRef}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <div className="flex justify-between items-center mt-4">
            <a
              href="#"
              onClick={manejarOlvideContrasena}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Olvidé la contraseña
            </a>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={manejarLogin}
            >
              Acceder
            </button>
          </div>
          <p className="text-white text-center mt-4">
            ¿No tienes cuenta?{" "}
            <a
              href="#"
              onClick={cambiarVentana}
              className="text-blue-400 hover:text-blue-300"
            >
              Crear una.
            </a>
          </p>
        </div>
      ) : (
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-96 flex flex-col">
          <h1 className="text-2xl text-white font-poppins font-semibold text-center mb-8">
            Crear Cuenta
          </h1>
          <label className="block text-white font-poppins mb-2">Nombre</label>
          <input
            type="text"
            ref={nameRef}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <label className="block text-white font-poppins mt-4 mb-2">
            Email
          </label>
          <input
            type="email"
            ref={emailRef}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <label className="block text-white font-poppins mt-4 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            ref={passwordRef}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <label className="block text-white font-poppins mt-4 mb-2">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            ref={confirmPasswordRef}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <button
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={manejarRegistro}
          >
            Crear Cuenta
          </button>
          <p className="text-white text-center mt-4">
            ¿Ya tienes una cuenta?{" "}
            <a
              href="#"
              onClick={cambiarVentana}
              className="text-blue-400 hover:text-blue-300"
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
