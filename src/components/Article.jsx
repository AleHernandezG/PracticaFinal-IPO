import React from "react";

const Article = () => {
  return (
    <article className="rounded-md bg-gray-800 mx-4 my-4 shadow-md shadow-gray-700 relative overflow-hidden group hover:-skew-x-3 hover:scale-105 hover:bg-indigo-800 hover:border-indigo-900 transition-all duration-200 ease-in md:col-start-1 md:col-span-6 md:row-start-1 md:row-span-2">
      <div className="justify-center items-center flex flex-col h-full w-full mt-3 ml-2 mr-8 md:ml-2 md:mr-8">
        <h1 className="text-4xl text-white font-sans font-bold italic mb-3 md:text-6xl">
          CliniGo
        </h1>
        <p className="text-base text-gray-400 font-sans font-semibold text-center md:text-lg">
          CliniGo es una aplicación web que te permite encontrar clínicas y
          hospitales cercanos a tu ubicación.
        </p>
        <p className="text-base text-gray-400 font-sans font-semibold text-center mb-3 md:text-lg">
          Con CliniGo podrás encontrar clínicas y hospitales en un radio de 5 km
          a la redonda.
        </p>
      </div>
    </article>
  );
};

export default Article;
