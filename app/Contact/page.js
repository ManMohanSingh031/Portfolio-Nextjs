"use client";
import React from "react";
import Layout from "../layout";

const ContactPage = () => {
  return (
    <Layout>
      <div className="md:ml-0 bg-zinc-200 h-screen flex flex-col items-start justify-center text-blue-950">
        <h1 className="text-4xl font-bold mb-4 self-start">Contact Me</h1>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-2xl mb-2">Have You Any Question</h2>
          <h3 className="text-xl mb-4">I'M AT YOUR SERVICES</h3>
          <form className="w-full max-w-2xl p-4 md:p-0">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <input className="appearance-none block w-full bg-white text-gray-100 border rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name"/>
              </div>
              <div className="w-full px-3">
                <input className="appearance-none block w-full bg-white text-gray-100 border rounded-3xl py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="email@example.com"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea className=" no-resize appearance-none block w-full bg-white text-gray-100 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none" id="grid-message" type="text" placeholder="Message"></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button className="mt-10 w-60 h-12 bg-red-600 text-zinc-100 py-3 px-5  rounded-3xl">
                  Download Resume
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
      <footer className="bg-gray-800 text-center text-white p-4 mt-0">
        © {new Date().getFullYear()} Thakur
      </footer>
    </Layout>
  );
};

export default ContactPage;



