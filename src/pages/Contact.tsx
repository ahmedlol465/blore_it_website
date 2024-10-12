import React from "react";
import { motion } from "framer-motion"; 
import { FaCentercode } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="py-20">
        <h1 className="text-5xl pb-10 bg-gradient-to-bl from-gray-300  to-slate-800 text-transparent bg-clip-text uppercase tracking-wider"><span className="bg-gradient-to-tr from-rose-400 to-black text-transparent tracking-wider uppercase bg-clip-text">Hurry</span> to build your idea</h1>
        <h2 className="text-3xl font-georgia ">contact us</h2>
        <div className="flex gap-5 justify-around items-center pt-20">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare size={40}/></a>
        <a href="https://instagram.com"><FaFacebook size={40}/></a>
        <a href="http://whatsapp.com"><FaWhatsapp size={40}/></a>
        <a href="https://twitter.com"><FaTwitter size={40}/></a>
        </div>
    </div>
    
    </div>
  );
};