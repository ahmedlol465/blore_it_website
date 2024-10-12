import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import serviese1 from "../assets/shutterstock_316262528-1-1536x929.jpg"
import serviece2 from '../assets/pexels-luis-gomes-166706-546819.jpg'
import services3 from '../assets/pexels-tara-winstead-8386440.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
SwiperCore.use([Pagination, Navigation]);




export const HomePage = () => {



    return (
        <>
            <div className="bg-white text-gray-800">
                
  
                <div className="flex flex-col items-start md:items-center ml-5 md:ml-0 md:mt-20 mt-10 font-georgia text-center">
                    <h1 className="text-4xl md:text-7xl font-sans bg-gradient-to-r from-gray-500 to-black text-transparent bg-clip-text font-bold uppercase tracking-widest animate__animated  animate__backInLeft  animate-fadeInUp">Make your world</h1>
                    <p className="text-md md:text-xl w-full md:w-[800px] pt-10  animate-fadeInUp">At Platinum, we specialize in IT construction and network infrastructure, offering comprehensive solutions to meet the connectivity needs of businesses and governmental institutions.</p>
                    <button className="p-4 mt-10 rounded-full bg-black text-white flex items-center gap-3 pr-2 animate-fadeInUp delay-2s">Start Your Journey <RiArrowDropRightLine size={25} /></button>
                </div>






            {/* Solutions Section */}

            <div className="p-10 md:p-20 mt-10 "
            >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-sky-800 text-transparent bg-clip-text uppercase tracking-widest">Solutions</h3>
                <h1 className="text-3xl md:text-5xl font-serif pb-3 animate-fadeInUp delay-2s">Our innovative AI solutions to revolutionize your business</h1>
                <p className="text-md font-sans mb-5">Navigate through the current tech-driven landscape and foster long-term growth with custom AI solutions.</p>
                <div className="flex justify-center items-center">
                    <h2 className="bg-gradient-to-r from-emerald-500 to-sky-800 font-bold text-transparent bg-clip-text">Connect to know more</h2>
                    <RiArrowDropRightLine size={40} style={{color: "dimgray"}} />
                </div>
            </div>




            <div className="px-10 md:px-20 mt-10">
                <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-slate-400 to-slate-800 text-transparent bg-clip-text uppercase tracking-widest">Make Your Platform Now</h2>
                <h4 className="text-xl md:text-2xl pl-4 bg-gradient-to-r from-slate-400 to-slate-900 text-transparent bg-clip-text">Custom IT Solution</h4>
                <h5 className="text-xl pt-10 font-serif bg-gradient-to-r from-emerald-400 to-sky-900 text-transparent bg-clip-text uppercase">Transform and automate processes with enterprise AI solutions tailored to your business requirements</h5>
                <div className="mt-10">
                    <div className="swiper-container">
                        <div className="swiper-wrapper ">

            <Swiper
    spaceBetween={30}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation
    className="swiper-container mb-10"
>
    
  <SwiperSlide>
        <div className="service-slide pt-8 pb-10 flex flex-col justify-center items-center text-center">
            <img className="w-[400px] h-[350px] pb-5 rounded-3xl " src={serviese1} alt="service" />
            <h1 className="text-xl">Network Configuration</h1>
            <p className="w-[400px] t-5">We handle the complete installation and configuration of your network infrastructure.</p>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="service-slide pt-8 pb-10 flex flex-col justify-center items-center text-center">
            <img className="w-[400px] h-[350px] pb-5 rounded-3xl" src={serviece2} alt="service" />
            <h1 className="text-xl">Data Center Construction</h1>
            <p className="w-[400px] t-5">We specialize in designing and constructing cutting-edge data centers optimized for performance and security.</p>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="service-slide pt-8 pb-10 flex flex-col justify-center items-center text-center">
            <img className="w-[400px] h-[350px] pb-5 rounded-3xl" src={services3} alt="service" />
            <h1 className="text-xl">Network Security</h1>
            <p className="w-[400px] t-5">Our team implements robust security measures to protect your network infrastructure from potential threats.</p>
        </div>
    </SwiperSlide>
</Swiper>

</div>
                    </div>
                </div>
            </div> 



            
            </div>


        </>
    );
}
