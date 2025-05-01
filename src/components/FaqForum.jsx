// FaqForum.js
import React from "react";

const faqData = [
  {
    user: {
      name: "Carlos M.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    question: "¿Cuánto tarda el envío en llegar?",
    answer:
      "El envío estándar tarda entre 2 y 4 días hábiles. Si elegiste envío exprés, lo recibirás en 24-48 horas.",
  },
  // ... resto de tus datos FAQ
];

const FaqForum = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 mx-auto w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
          Preguntas Frecuentes
        </h2>

        {/* Contenedor con scroll */}
        <div className="max-h-[70vh] overflow-y-auto pr-4">
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <img
                    src={item.user.avatar}
                    alt={item.user.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-100"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-800">
                        {item.user.name}
                      </span>
                    </div>
                    <p className="text-gray-900 font-medium mb-2">
                      {item.question}
                    </p>
                    <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                      <p className="text-gray-700">
                        <span className="font-medium text-indigo-600">
                          Respuesta:
                        </span>{" "}
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqForum;
