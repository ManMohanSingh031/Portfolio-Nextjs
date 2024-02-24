import React from "react";
import Layout from "../layout";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col items-start justify-start h-full p-8 text-blue-950 bg-zinc-200">
        <h1 className="text-4xl mb-10 font-bold">About Me</h1>
        <h1 className="text-2xl mb-4 font-bold">
          Hello <span className="text-red-600">Everyone</span>
        </h1>
        <p className="text-left text-lg mb-8">My name is Man Mohan Singh. I am currently pursuing my Bachelor of Technology (B.Tech) degree from the Computer Science Department at the Indian Institute of Information Technology, Nagpur (IIITN). I was born and raised in Raebareli, Uttar Pradesh. It is here that I developed my passion for technology and decided to pursue a career in this field. I am eager to apply the knowledge and skills I have acquired during my studies to solve real-world problems and make a positive impact on society.</p>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 w-1/2">
            <p className="font-semibold mb-1">
              Birthday: <span className="font-normal">18 Oct 2003</span>
            </p>
            <p className="font-semibold mb-1">
              Degree:{" "}
              <span className="font-normal">
                B.Tech, Computer Science, IIT Nagpur
              </span>
            </p>
            <p className="font-semibold mb-1">
              Email:{" "}
              <span className="font-normal">mohanmohansingh8422@gmail.com</span>
            </p>
            <p className="font-semibold mb-1">
              City:{" "}
              <span className="font-normal">Rae Bareli, Uttar Pradesh</span>
            </p>
            <p className="font-semibold mb-1">
              Phone: <span className="font-normal">+91 8433372612</span>
            </p>
            <button className="mt-10 left-0 w-60 h-12 bg-red-600 text-zinc-100 font-semibold py-3 px-5 rounded-3xl transform transition-transform duration-400 hover:scale-110">
              Contact Me
            </button>
          </div>
          <div className="flex flex-col g w-1/2">
            <div className="flex justify-between">
              <span>HTML</span> <span>93%</span>
            </div>
            <div
              className="h-2 bg-gray-300 rounded-lg"
              style={{ width: "410px" }}
            >
              <div
                className="h-full text-white bg-red-600 rounded-lg"
                style={{ width: "83%" }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span>CSS</span> <span>75%</span>
            </div>
            <div
              className="h-2 bg-gray-300 rounded-lg"
              style={{ width: "410px" }}
            >
              <div
                className="h-full text-white bg-red-600 rounded-lg"
                style={{ width: "75%" }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span>JavaScript</span> <span>64%</span>
            </div>
            <div
              className="h-2 bg-gray-300 rounded-lg"
              style={{ width: "410px" }}
            >
              <div
                className="h-full text-white bg-red-600 rounded-lg"
                style={{ width: "90%" }}
              ></div>
            </div>
          <div className="flex justify-between">
              <span>React</span> <span>74%</span>
            </div>
            <div
              className="h-2 bg-gray-300 rounded-lg"
              style={{ width: "410px" }}
            >
              <div
                className="h-full text-white bg-red-600 rounded-lg"
                style={{ width: "93%" }}
              ></div>
            </div>
            </div>
        </div>
        <div className="flex gap-4 mt-10">
          <div className="flex flex-col gap-4 w-1/2 border-2 border-gray-300 bg-zinc-100 p-4 rounded-lg">
            <h2 className="text-2xl mb-4 font-bold">Education</h2>
            <p className="font-semibold mb-1">
              2020 – 2024: <span className="font-normal">Bachelor In Computer Science, IIT Nagpur, CGPA: 6</span>
            </p>
            <p className="font-semibold mb-1">
              2019 – 2020: <span className="font-normal">Intermediate</span>
            </p>
          </div>
          <div className="flex flex-col gap-4 w-1/2 border-2 border-gray-300 bg-zinc-100  p-4 rounded-lg">
            <h2 className="text-2xl mb-4 font-bold">Experience</h2>
            <p className="font-semibold mb-1">
              2023 – current: <span className="font-normal">Subject Matter Expert (SME), Chegg (12 Months), Freelancer</span>
            </p>
          </div>
        </div>
      </div>
      </Layout>
  );
};

export default About;
