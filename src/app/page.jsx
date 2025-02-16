"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-secondary flex flex-col items-center h-screen w-full">

      <motion.div
        className="flex items-center justify-center w-[340px] sm:w-[600px] lg:w-[800px] xl:w-[1000px] mt-[80px]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <div className="font-caveat text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] w-full text-clearIce text-center leading-normal">
          "A lawyer passionate for technology and software development 💻🚀"
        </div>

      </motion.div>

      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
       
          <Image
            src="/images/martilloFormal.png"
            alt="martilloFormal"
            width={400}
            height={500}
            className="lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
          />

          <motion.div
            className="flex flex-col items-center gap-[20px] lg:mr-[60px] lg:w-[500px] xl:w-[600px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            
                <h1 className="text-clearIce text-[30px] md:text-[35px] xl:text-[40px]">
                  Welcome to Dr. Dev 👨‍⚖️
                </h1>
                <Link href="./Dr.Dev/home">
                  <button
                    className="flex items-center justify-center w-[230px] h-[45px] md:w-[280px] md:h-[50px] bg-primary text-clearIce p-[4px] rounded-[7px] text-[25px] md:text-[30px] border-solid border-[2px] border-clearIce"
                  >
                    Tap to get in 💼
                  </button>
                </Link>

          </motion.div>

      </div>

    </div>
  );
};

export default page;