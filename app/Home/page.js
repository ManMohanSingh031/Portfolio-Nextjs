"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../layout";

const Home = () => {
  const [text, setText] = useState("");
  const roles = ["Frontend Developer", "Software Engineer"];
  let roleIndex = 0;
  let charIndex = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setText(roles[roleIndex].slice(0, charIndex) + "|");
      charIndex++;
      if (charIndex > roles[roleIndex].length) {
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
      }
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <div className="text-blue-950 w-full h-screen flex flex-col lg:flex-row bg-zinc-200 px-10 pt-16">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 px-4">
          <h1 className="font-bold my-1 text-3xl leading-relaxed"> Hey! My name is <span className=" font-clicker text-red-600"> Man Mohan Singh </span>
          </h1>
          <h2 className="font-bold my-4 text-3xl leading-relaxed mb-4">
            I'm a <span className="text-red-600"> {text} </span>{" "}
          </h2>
          <p className="mb-4 text-xl">
            I am a 4th-year Computer Science and Engineering student at IIIT
            Nagpur, specializing in Frontend Development. Experienced in various
            projects, I am a quick learner, team player, and adept at tackling
            challenges. Motivated by smart work, I excel both independently and
            collaboratively. A creative problem solver, I thrive on exploring
            new technologies and embracing challenges.
          </p>
          <button className="mt-10 w-60 h-12 bg-red-600 text-zinc-100 font-semibold py-3 px-5  rounded-3xl transform transition-transform duration-400 hover:scale-110">
            Download Resume
          </button>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2 relative mt-10 lg:mt-0">
            <Image src="/Profile.jpg" width={500} height={500} alt="logo" className=" h-96 w-full lg:w-auto mx-auto lg:mx-48 my-48 relative" />
            <div className=" absolute top-36 left-36 w-24 h-3 bg-red-600"></div>
            <div className=" absolute top-36 left-36 h-24 w-3 bg-red-600"></div>
            <div className=" absolute bottom-16 right-48 w-24 h-3 bg-red-600"></div>
            <div  className="absolute bottom-16 right-48 h-24 w-3 bg-red-600"></div>
          </div>
        </div>
    </Layout>
  );
};

export default Home;


