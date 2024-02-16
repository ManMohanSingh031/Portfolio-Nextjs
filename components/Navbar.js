"use client";
import React from "react";
import Link from "next/link";

import Home from "@/app/Home/page";
import { FaHome, FaInfoCircle, FaWrench, FaProjectDiagram, FaUserCircle, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-white w-64 fixed left-0 top-0 overflow-auto">
      <div className="flex justify-center items-center text-3xl font-bold h-18 ml-4 mr-4 mt-10 relative">
        <span className="font-cursive">T</span>
        <span>hakur</span>
        {/* Top */}
        <div
          className="absolute top-0 left-5 w-8 h-2 bg-red-500"
          style={{ top: "-10px" }}
        ></div>
        <div
          className="absolute top-0 left-5 h-8 w-2 bg-red-500"
          style={{ top: "-10px" }}
        ></div>
        {/* Bottom */}
        <div
          className="absolute bottom-0 right-5 w-8 h-2 bg-red-500"
          style={{ bottom: "-10px" }}
        ></div>
        <div
          className="absolute bottom-0 right-5 h-8 w-2 bg-red-500"
          style={{ bottom: "-10px" }}
        ></div>
      </div>

      <div className="flex flex-col text-lg font-bold items-center justify-center h-full space-y-4">
        <Link
          href="/Home"
          className="flex items-center space-x-2 border-b border-gray-400"
        >
          <FaHome /> <span>Home</span>
        </Link>
        <Link
          href="/About"
          className="flex items-center space-x-2 border-b border-gray-400"
        >
          <FaInfoCircle /> <span>About</span>
        </Link>
        <Link
          href="/Skill"
          className="flex items-center space-x-2 border-b border-gray-400"
        >
          <FaWrench /> <span>Skill</span>
        </Link>
        <Link
          href="/Project"
          className="flex items-center space-x-2 border-b border-gray-400"
        >
          <FaProjectDiagram /> <span>Project</span>
        </Link>
        <Link
          href="/Profile"
          className="flex items-center space-x-2 border-b border-gray-400"
        >
          <FaUserCircle /> <span>Profile</span>
        </Link>
        <Link
          href="/Contact"
          className="flex items-center space-x-2 border-b border-gray-400"
        >
          <FaEnvelope /> <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
