"use client";
import React from "react";
import Link from "next/link";
import Image from 'next/image'
import { FaHome, FaInfoCircle, FaWrench, FaProjectDiagram, FaUserCircle, FaEnvelope, FaSignInAlt, FaStar } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center text-white bg-red-600 w-full fixed top-0 left-0 h-auto md:h-16">
      <Image src="/logo.png" width={500} height={500} alt="logo" className="h-10 w-auto mx-auto md:mx-0" />
      <div className="flex flex-col md:flex-row md:space-x-4 overflow-x-auto no-scrollbar space-y-2 md:space-y-0 p-4 md:p-0">
        <Link href="/Home" className="flex items-center space-x-2">
            <FaHome /> <span>Home</span>
        </Link>
        <Link href="/About"className="flex items-center space-x-2">
            <FaInfoCircle /> <span>About</span>
        </Link>
        <Link href="/Skill" className="flex items-center space-x-2">
            <FaWrench /> <span>Skill</span>
        </Link>
        <Link href="/Project" className="flex items-center space-x-2">
            <FaProjectDiagram /> <span>Project</span>
        </Link>
        <Link href="/Profile" className="flex items-center space-x-2">
            <FaUserCircle /> <span>Profile</span>
        </Link>
        <Link href="/Contact" className="flex items-center space-x-2">
            <FaEnvelope /> <span>Contact</span>
        </Link>
        <Link href="/Review" className="flex items-center space-x-2">
            <FaStar /> <span>Review</span>
        </Link>
        <Link href="/Login" className="flex items-center space-x-2">
            <FaSignInAlt /> <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

