import React from 'react';

function Card({username,btntext="visit me"}) {
    //console.log("props",props);
  return (
    <div className="max-w-sm w-full p-6 rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src="https://picsum.photos/400/300?random=1"
          alt="Card Image"
          className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
        />
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {username}
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Discover cutting-edge design patterns and UI components that elevate
        your digital experiences.
      </p>

      <div className="flex items-center justify-between">
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors duration-200">
          {btntext}
        </button>
        <span className="text-xs text-gray-500">234 views</span>
      </div>
    </div>
  );
}

export default Card;

