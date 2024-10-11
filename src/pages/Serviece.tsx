import React from "react"
import serviese1 from "../assets/shutterstock_316262528-1-1536x929.jpg"
import photo1 from "../assets/pexels-artunchained-325229.jpg"
import photo2 from "../assets/pexels-hiteshchoudhary-1261427.jpg"
import photo3 from '../assets/pexels-kaboompics-6231.jpg'
import photo4 from '../assets/pexels-luis-gomes-166706-546819.jpg'
import photo5 from '../assets/pexels-pixabay-257736(1).jpg'
import photo6 from '../assets/pexels-pixabay-257736.jpg'

export const Serviece = () => {


    return (
        <>
        <div className="bg-[#ffffff]">

            <div className="p-20">
            <h2 className="font-georgia text-5xl py-5  text-black pl-10 animate-fadeInUp ">Serviece</h2>
            <div className="flex  justify-center items-center text-center">

            <p className="p-2 bg-gradient-to-r from-gray-500 to-black text-transparent bg-clip-text font-bold uppercase tracking-widest animate-fadeInUp delay-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas impedit hic quia aspernatur explicabo mollitia culpa voluptatem distinctio laudantium voluptatibus autem quos, molestiae laborum? Illo adipisci sunt rerum doloribus amet!</p>
            </div>
            
            </div>
        <div className="flex pt-20 justify-center gap-10 ">
            <div className="service-slide pb-10 flex flex-col justify-center items-center text-center shadow-xl shadow-slate-600 rounded-md">
            <img className="w-[400px] p-[2px] h-[210px] pb-5  rounded-md" src={serviese1} alt="service" />
            <div className="text-left ">
                <h1 className="text-xl pl-5 pb-2">Network Configuration</h1>
                <p className="w-[400px]  pl-5">We handle the complete installation and configuration of your network infrastructure.</p>
                
            </div>
        </div>
            <div className="service-slide pb-10 flex flex-col justify-center items-center text-center shadow-md shadow-slate-600 rounded-md">
            <img className="w-[400px] p-[2px] h-[210px] pb-5  rounded-md" src={photo1} alt="service" />
            <div className="text-left ">
                <h1 className="text-xl pl-5 pb-2">Network Configuration</h1>
                <p className="w-[400px]  pl-5">We handle the complete installation and configuration of your network infrastructure.</p>
                
            </div>
        </div>
            <div className="service-slide pb-10 flex flex-col justify-center items-center text-center shadow-md shadow-slate-600 rounded-md">
            <img className="w-[400px] p-[2px] h-[210px] pb-5  rounded-md" src={photo2} alt="service" />
            <div className="text-left ">
                <h1 className="text-xl pl-5 pb-2">Network Configuration</h1>
                <p className="w-[400px]  pl-5">We handle the complete installation and configuration of your network infrastructure.</p>
                
            </div>
        </div>

        </div>
        <div className="flex pt-20 justify-center gap-10 ">
            <div className="service-slide pb-10 flex flex-col justify-center items-center text-center shadow-md shadow-slate-600 rounded-md">
            <img className="w-[400px] p-[2px] h-[210px] pb-5  rounded-md" src={photo3} alt="service" />
            <div className="text-left ">
                <h1 className="text-xl pl-5 pb-2">Network Configuration</h1>
                <p className="w-[400px]  pl-5">We handle the complete installation and configuration of your network infrastructure.</p>
                
            </div>
        </div>
            <div className="service-slide pb-10 flex flex-col justify-center items-center text-center shadow-md shadow-slate-600 rounded-md">
            <img className="w-[400px] p-[2px] h-[210px] pb-5  rounded-md" src={photo4} alt="service" />
            <div className="text-left ">
                <h1 className="text-xl pl-5 pb-2">Network Configuration</h1>
                <p className="w-[400px]  pl-5">We handle the complete installation and configuration of your network infrastructure.</p>
                
            </div>
        </div>
            <div className="service-slide pb-10 flex flex-col justify-center items-center text-center shadow-md shadow-slate-600 rounded-md">
            <img className="w-[400px] p-[2px] h-[210px] pb-5  rounded-md" src={photo5} alt="service" />
            <div className="text-left ">
                <h1 className="text-xl pl-5 pb-2">Network Configuration</h1>
                <p className="w-[400px]  pl-5">We handle the complete installation and configuration of your network infrastructure.</p>
                
            </div>
        </div>

        </div>
        <div className="flex pt-20 justify-center gap-10 ">
            <div className="service-slide pb-10 flex flex-col justify-center items-center text-center shadow-md shadow-slate-600 rounded-md">
            <img className="w-[400px] p-[2px] h-[210px] pb-5  rounded-md" src={photo6} alt="service" />
            <div className="text-left ">
                <h1 className="text-xl pl-5 pb-2">Network Configuration</h1>
                <p className="w-[400px]  pl-5">We handle the complete installation and configuration of your network infrastructure.</p>
                
            </div>
        </div>


        </div>
        </div>
        </>
    )
}