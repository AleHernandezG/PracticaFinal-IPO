import React, { useState } from "react";
import FaqForum from "./FaqForum";
import RecentSearches from "./RecentSearches";
import Forum from "./Forum"; // Asegúrate de tener este archivo implementado

const Help = () => {
  const [activeTab, setActiveTab] = useState("faq");

  const renderContent = () => {
    switch (activeTab) {
      case "faq":
        return <FaqForum />;
      case "searches":
        return <RecentSearches />;
      case "forum":
        return <Forum />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4 bg-light-card dark:bg-dark-card py-4 shadow-sm">
        <button
          onClick={() => setActiveTab("faq")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "faq"
              ? "bg-light-accent text-white dark:bg-dark-accent"
              : "bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text"
          }`}
        >
          Preguntas Frecuentes
        </button>
        <button
          onClick={() => setActiveTab("searches")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "searches"
              ? "bg-light-accent text-white dark:bg-dark-accent"
              : "bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text"
          }`}
        >
          Búsquedas Recientes
        </button>
        <button
          onClick={() => setActiveTab("forum")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "forum"
              ? "bg-light-accent text-white dark:bg-dark-accent"
              : "bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text"
          }`}
        >
          Foro
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default Help;
