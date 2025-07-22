"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <section className="h-screen">
        <div className="absolute inset-0">
          <img
            src="/stripe_bottom_background.jpeg"
            className="w-full h-full object-cover"
            alt="Background"
          />
       
        </div>

        <div className="flex flex-col h-screen items-center justify-start mt-48">
          <div>
            <img
              src="/nwt_logo_kittl.svg"
              alt="Logo"
              className="w-[40vw] h-auto neon-realistic"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
