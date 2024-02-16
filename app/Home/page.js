"use client"
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
    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
  {/* Left Side */}
  <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 px-4 md:pl-16">
    <h1 className="font-bold my-1 text-3xl leading-relaxed">
      Hey! My name is
      <span className=" font-clicker text-red-600"> Man Mohan Singh </span>
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
  {/* Right Side */}
  <div className="w-full lg:w-1/2 lg:py-10 mt-0 px-6 text-center relative lg:block hidden">
    <div
      className="w-full lg:w-2/3 ml-auto mr-16 relative"
      style={{ width: "330px", height: "430px" }}
    >
      <Image
        src="/profile.jpg"
        layout="fill"
        objectFit="cover"
        alt="Man Mohan Singh"
      />

      {/* Top */}
      <div
        className="absolute top-0 left-0 w-24 h-3 bg-red-600"
        style={{ top: "-50px", left: "-50px" }}
      ></div>
      <div
        className="absolute top-0 left-0 h-24 w-3 bg-red-600"
        style={{ top: "-50px", left: "-50px" }}
      ></div>
      {/* Bottom */}
      <div
        className="absolute bottom-0 right-0 w-24 h-3 bg-red-600"
        style={{ bottom: "-50px", right: "-50px" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 h-24 w-3 bg-red-600"
        style={{ bottom: "-50px", right: "-50px" }}
      ></div>
    </div>
  </div>
</div>
</Layout>
  );
};
export default Home;
