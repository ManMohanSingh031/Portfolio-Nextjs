"use client";
import React from 'react';

const ProjectCard = ({ projectName, liveLink, githubLink, imageUrl }) => {
  return (
    <div className="w-72 h-72 rounded overflow-hidden shadow-lg m-3 hover:shadow-2xl transition-shadow duration-300 ease-in-out relative">
      <img className="w-full h-56 object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:brightness-50" src={imageUrl} alt={projectName} />
      <div className="absolute top-0 left-0 w-full h-48 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="font-bold text-xl text-white">{projectName}</span>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Live Link
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Code Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
