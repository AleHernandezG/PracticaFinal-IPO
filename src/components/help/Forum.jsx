import React, { useState, useEffect } from "react";

const Forum = () => {
  // Cargar mensajes de localStorage o establecer un valor por defecto vacío
  const cargarMensajes = () => {
    const mensajesGuardados = JSON.parse(localStorage.getItem("mensajes"));
    return mensajesGuardados ? mensajesGuardados : [];
  };

  const [pregunta, setPregunta] = useState("");
  const [mensajes, setMensajes] = useState(cargarMensajes());
  const [respuesta, setRespuesta] = useState("");
  const [respuestaIndex, setRespuestaIndex] = useState(null);

  // Guardar mensajes en localStorage cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem("mensajes", JSON.stringify(mensajes));
  }, [mensajes]);

  const enviarPregunta = () => {
    if (pregunta.trim() === "") return;
    const nuevaPregunta = { texto: pregunta, respuestas: [] };
    const nuevosMensajes = [...mensajes, nuevaPregunta];
    setMensajes(nuevosMensajes);
    setPregunta("");
  };

  const enviarRespuesta = (index) => {
    if (respuesta.trim() === "") return;
    const nuevosMensajes = [...mensajes];
    nuevosMensajes[index].respuestas.push(respuesta);
    setMensajes(nuevosMensajes);
    setRespuesta("");
    setRespuestaIndex(null);
  };

  return (
    <div className="p-6 text-light-text dark:text-dark-text">
      <h2 className="text-2xl font-bold mb-4">Foro de la Comunidad</h2>

      <div className="mb-6">
        <input
          type="text"
          className="w-full p-3 rounded border dark:bg-dark-background bg-light-background"
          placeholder="Escribe tu pregunta..."
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
        />
        <button
          onClick={enviarPregunta}
          className="mt-2 px-4 py-2 bg-light-accent dark:bg-dark-accent text-white rounded"
        >
          Preguntar
        </button>
      </div>

      <div className="space-y-6">
        {mensajes.map((msg, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow bg-light-card dark:bg-dark-card"
          >
            <p className="font-semibold mb-2">{msg.texto}</p>

            <div className="ml-4 space-y-1">
              {msg.respuestas.map((resp, rIdx) => (
                <p
                  key={rIdx}
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  💬 {resp}
                </p>
              ))}
            </div>

            {respuestaIndex === index ? (
              <div className="mt-2">
                <input
                  type="text"
                  value={respuesta}
                  onChange={(e) => setRespuesta(e.target.value)}
                  className="w-full p-2 rounded border mt-2 dark:bg-dark-background bg-light-background"
                  placeholder="Escribe una respuesta..."
                />
                <button
                  onClick={() => enviarRespuesta(index)}
                  className="mt-1 px-3 py-1 bg-light-accent dark:bg-dark-accent text-white rounded"
                >
                  Responder
                </button>
              </div>
            ) : (
              <button
                onClick={() => setRespuestaIndex(index)}
                className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Responder
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
