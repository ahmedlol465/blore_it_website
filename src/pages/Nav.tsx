import React, { useEffect, useState } from "react"
import { LuSearch } from "react-icons/lu"
import { Link } from "react-router-dom"
import logo from "../assets/black white Thunder logo.png";



export const Nav = () => {

    const [isLogoVisible, setIsLogoVisible] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsLogoVisible(false); // Hide logo after scrolling down
        } else {
            setIsLogoVisible(true); // Show logo when at the top
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  


    return (
        
        <div className={`sticky top-0 z-20  transition-all duration-300 ${isLogoVisible ? "" : "flex items-center justify-center top-1"}`}>
        <div className={`flex justify-between items-center p-8  ${isLogoVisible ? "bg-transparent" : "bg-slate-800 rounded-full items-center h-20   "}`}>
        <div className="flex gap-2 items-center">
        <div className={`transition-all duration-600 ease-in-out ${isLogoVisible ? 'opacity-100 translate-x-0' : ` translate-x-[80px] `}`}>
            
        <img
  className={`w-16 h-16 ${isLogoVisible ? "" : "hidden md:block"} `}
  alt="company"
  src={logo}
/>

        </div>
        </div>
        <div className={`transition-opacity transition-transform duration-300 ${isLogoVisible ? 'opacity-100 translate-Y-0' : 'opacity-50 -translate-y-32'}`}>
        <div className="hidden md:flex gap-5 font-georgia text-sm md:text-md">
            {/* Navigation Items */}
            <Link to="/" className="transition-transform transform hover:scale-105 cursor-pointer">
            Home
            </Link>
            <Link to="/services" className="transition-transform transform hover:scale-105 cursor-pointer"><a >Services</a></Link>
            <Link to="/about" className="transition-transform transform hover:scale-105 cursor-pointer"><a>About Us</a></Link>
            {/* <h2 className="transition-transform transform hover:scale-105 cursor-pointer">Our Clients</h2> */}
            <Link to="/contacts" className="transition-transform transform hover:scale-105 cursor-pointer"><a >Contact Us</a></Link>
        </div>
        </div>
        
        <div className={`transition-opacity transition-transform duration-300 ${isLogoVisible ? 'opacity-100 translate-x-0' : ` -translate-x-[20px]`}`}>
        <div className="flex items-center gap-2">
            <LuSearch   size={25} className={`m-2 ${isLogoVisible ? "" : "text-white"}`} />
            <button className="p-4 text-md md:text-xl hover:bg-white hover:text-black text-white bg-black rounded-full">Let's Do It</button>
        </div>
        </div>
    </div>
    </div>

    )
}