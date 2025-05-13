import React, { useState, useEffect } from "react";

const faqData = [
  {
    user: {
      name: "Ekaitz",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    question: "¿Se puede buscar información sin iniciar una ruta?",
    answer:
      "Sí se puede. Simplemente dirígete al Inicio y busca en la barra navegadora el lugar del que quieras obtener la información.",
  },
  {
    user: {
      name: "Maribel",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    question: "¿Las rutas están acondicionadas para personas discapacitadas?",
    answer:
      "Sí, todas las rutas que se muestran al iniciar están adaptadas para personas discapacitadas.",
  },
  {
    user: {
      name: "Guille",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    question:
      "¿Es posible elegir otra ruta en caso de que la primera opción no me parezca buena?",
    answer:
      "Por supuesto, puedes elegir entre cualquier ruta que se muestre como válida.",
  },
  {
    user: {
      name: "Manuel",
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    question: "¿Es necesario crear una cuenta para usar la aplicación?",
    answer: "No, en CliniGo buscamos ayudar a la gente sin restricciones.",
  },
  {
    user: {
      name: "Pablo",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    question:
      "¿Puedo saber la ocupación de un lugar desde la aplicación antes de ir?",
    answer:
      "Por supuesto. Si te diriges al Inicio y buscas en la barra buscadora, podrás obtener entre toda la información la tasa de ocupación del lugar.",
  },
  {
    user: {
      name: "Aroa",
      avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    question: "¿Puedo buscar qué lugares son más visitados por la gente?",
    answer:
      "Claro, en la pestaña de Ayuda puedes dirigirte con el botón de búsquedas recientes, donde se muestran los lugares más visitados.",
  },
  {
    user: {
      name: "Mercedes",
      avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    },
    question: "¿Cómo creo una cuenta en CliniGo?",
    answer:
      "Simplemente dirígete al Inicio y pulsa sobre el ícono negro de usuario. Una vez pulses, se mostrará un formulario para iniciar sesión o registrarte.",
  },
  {
    user: {
      name: "Juan",
      avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    question: "¿Puedo recuperar mi contraseña si la olvido?",
    answer:
      "Sí. Dirígete al Inicio y pulsa sobre el ícono negro de usuario. En el formulario verás una opción para recuperar tu contraseña ingresando tu correo electrónico.",
  },
  {
    user: {
      name: "Izan",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    question: "¿Puedo seleccionar el medio de transporte que me interese?",
    answer:
      "Por supuesto. En el mapa puedes elegir entre 3 medios de transporte simplemente pulsando sobre el que desees usar.",
  },
  {
    user: {
      name: "Jorge",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    question: "¿Esta aplicación puede usarse en móvil?",
    answer:
      "Claro. CliniGo es una aplicación disponible para teléfonos móviles, tablets u ordenadores.",
  },
  {
    user: {
      name: "Victoria",
      avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    question:
      "Si una pregunta no está entre estas, ¿puedo hablar con alguien para saber su respuesta?",
    answer:
      "Por supuesto. Dentro de Ayuda está habilitado un foro para poder resolver cualquier tipo de duda.",
  },
];
const FaqForum = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para manejar la pregunta actual

  // Cambiar automáticamente a la siguiente pregunta cada 20 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % faqData.length); // Avanza al siguiente índice
    }, 10000); // 20 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando se desmonta el componente
  }, []);

  // Función para avanzar a la siguiente pregunta manualmente
  const nextQuestion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % faqData.length);
  };

  // Función para retroceder a la pregunta anterior manualmente
  const prevQuestion = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + faqData.length) % faqData.length
    );
  };

  const currentItem = faqData[currentIndex]; // Elemento actual

  return (
    <section className="bg-light-card dark:bg-dark-card py-12 px-6 md:px-16 mx-auto w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-light-accent dark:text-dark-accent mb-8 text-center">
          Preguntas Frecuentes
        </h2>

        <div className="max-h-[70vh] overflow-y-auto pr-4">
          {/* Contenedor de la pregunta actual */}
          <div className="space-y-6">
            <div className="bg-light-background dark:bg-dark-background rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  src={currentItem.user.avatar}
                  alt={currentItem.user.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-light-accent/30 dark:border-dark-accent/30"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-light-text dark:text-dark-text">
                      {currentItem.user.name}
                    </span>
                  </div>
                  <p className="text-light-text dark:text-dark-text font-medium mb-2">
                    {currentItem.question}
                  </p>
                  <div className="bg-light-accent/10 dark:bg-dark-accent/10 rounded-lg p-4 border-l-4 border-light-accent dark:border-dark-accent">
                    <p className="text-light-text dark:text-dark-text">
                      <span className="font-medium text-light-accent dark:text-dark-accent">
                        Respuesta:
                      </span>{" "}
                      {currentItem.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controles manuales para navegar entre las preguntas */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevQuestion}
            className="text-light-accent dark:text-dark-accent font-semibold px-4 py-2 rounded-lg bg-light-background dark:bg-dark-background"
          >
            Anterior
          </button>
          <button
            onClick={nextQuestion}
            className="text-light-accent dark:text-dark-accent font-semibold px-4 py-2 rounded-lg bg-light-background dark:bg-dark-background"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqForum;
