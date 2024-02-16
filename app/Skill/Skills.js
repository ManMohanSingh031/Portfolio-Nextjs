"use client";
import React from 'react';

const SkillBox = ({ Icon, title, description }) => {
    return (
        <div className="w-80 h-80 p-5 border rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
        <div className=" w-16 h-16 text-red-600 hover:bg-red-600 rounded-full p-2 transition-colors duration-300 ease-in-out">
            <Icon className="text-5xl mb-4 hover:text-white transition-colors duration-300 ease-in-out" />
        </div>
        <h2 className="text-xl font-bold mb-7">{title}</h2>
        <p className="text-center">{description}</p>
    </div>
    
  
    );
};

export default SkillBox;