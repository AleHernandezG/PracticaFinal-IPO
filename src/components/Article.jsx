import React from "react";

const Article = () => {
  return (
    <article className="rounded-md bg-light-card dark:bg-dark-card mx-4 my-4 border border-light-border dark:border-dark-border shadow-md shadow-light-shadow dark:shadow-dark-shadow relative overflow-hidden group hover:-skew-x-3 hover:scale-105 hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover hover:border-light-border dark:hover:border-dark-border transition-all duration-200 ease-in md:col-start-1 md:col-span-6 md:row-start-1 md:row-span-2">
      <div className="justify-center items-center flex flex-col h-full w-full mt-3 ml-2 mr-8 md:ml-2 md:mr-8">
        <h1 className="text-4xl text-light-text dark:text-dark-text font-sans font-bold italic mb-3 md:text-6xl">
          CliniGo
        </h1>
        <p className="text-base text-light-textSecondary dark:text-dark-textSecondary font-sans font-semibold text-center md:text-lg">
          CliniGo es una aplicación web que te permite encontrar clínicas y
          hospitales cercanos a tu ubicación.
        </p>
        <p className="text-base text-light-textSecondary dark:text-dark-textSecondary font-sans font-semibold text-center mb-3 md:text-lg">
          Con CliniGo podrás encontrar clínicas y hospitales en un radio de 5 km
          a la redonda.
        </p>
      </div>
    </article>
  );
};

export default Article;
