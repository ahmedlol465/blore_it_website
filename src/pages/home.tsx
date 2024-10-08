import logo from "../assets/black white Thunder logo.png";
import { LuSearch } from "react-icons/lu";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import banner from "../assets/Green and Orange Illustrative Business Services Instagram Post.png"







export const HomePage = () => {
    return (
        <>
            <div  style={{
                backgroundColor: "#FFFFFF",
                color: "#212529"
                
            }}>
                
                <div className="flex justify-between p-8" >
                    

              



                    <div className="flex gap-2 items-center">
                        <img className="w-20 h-20 -mt-8" alt="company" src={logo} />
                    </div>
                    <div className="flex gap-5 font-georgia -mr-20 text-md">
                        <h2 className="">
                            <span className="flex items-center animate__animated animate__jello">
                            <span>Home</span>
                            <RiArrowDropDownLine size={30}/>
                            </span>
                        </h2>
                        <h2>
                        <span className="flex items-center animate__animated animate__jello">
                            <span>Services</span>
                            <RiArrowDropDownLine size={30}/>
                            </span>
                        </h2>
                        <h2>
                        <span className="flex items-center animate__animated animate__jello ">
                            <span>About Us</span>
                            <RiArrowDropDownLine size={30}/>
                            </span>
                        </h2>
                        <h2>
                        <span className="flex items-center animate__animated animate__jello ">
                            <span>Our Clients</span>
                            <RiArrowDropDownLine size={30}/>
                            </span>
                        </h2>
                        <h2>
                        <span className="flex items-center animate__animated animate__jello">
                            <span>Contact Us</span>
                            <RiArrowDropDownLine size={30}/>
                            </span>
                        </h2>
                        {/* <img alt="company" src="path_to_image_1" />
                        <img alt="company" src="path_to_image_2" />
                        <img alt="company" src="path_to_image_3" /> */}
                    </div>
                    <div className="flex items-center gap-2 -mt-5 ">
                    <LuSearch size={30} className="m-5"/>
                    <button className=" p-2 text-xl hover:bg-[#FFFFFF] font-georgia text-[#FFFFFF] bg-[#0F0F0F] hover:text-black border border-[#0F0F0F] rounded-full"> <span className="p-5">let<span className="align-super text-sm">,</span>s do it</span> </button>
                </div>
                </div>



               


     <div className="flex flex-col ml-20  mt-10 font-georgia justify-center">

                            
                {/* <div className="relative h-[80vh] overflow-hidden">
            <div className="absolute inset-0 ">
                <div className="ball" style={{ top: "10%", left: "30%" }}></div>
                <div className="ball" style={{ top: "20%", left: "20%" }}></div>
                <div className="ball" style={{ top: "10%", left: "60%" }}></div>
                <div className="ball" style={{ top: "10%", left: "70%" }}></div>
            </div> */}

            <h1 className="text-7xl pb-5 font-sans text-md bg-gradient-to-r from-gray-500 to-black inline-flex font-bold uppercase tracking-widest  gap-2 text-transparent bg-clip-text animate__animated  animate__backInLeft fade-in-text">Make your world</h1>
                    <p className=" z-10 text-xl w-[800px] pt-10 font-serif">At Platinum, we specialize in IT construction and network infrastructure, offering comprehensive solutions to meet the connectivity needs of businesses and governmental institutions</p>
                    <button className="p-4 mt-10  rounded-full  bg-black text-white w-fit flex items-center gap-3 pr-2 text-center justify-center">Start Your Journy
                    <RiArrowDropRightLine size={35}/>
                    </button>
        {/* </div> */}
                </div>

        


                
            </div>




            <div className="p-20 mt-20">
               

               <div>
                        <h3 className="pb-5 font-sans text-md bg-gradient-to-r from-emerald-500 to-sky-800 inline-flex font-bold uppercase tracking-widest text-transparent bg-clip-text">Solutions</h3>
                        
                        
                        <h1 className="font-serif text-5xl w-[1200px] pb-3">Our innovative AI solutions to revolutionize your business</h1>
                        <h3 className="text-md font-sans ">Navigate through the current tech-driven landscape and foster long-term growth with custom AI solutions</h3>
                        

                            <div className=" pt-5 flex items-center text-center">
                            <h2 className=" bg-gradient-to-r from-emerald-500 to-sky-800  font-bold uppercase tracking-widest text-transparent bg-clip-text">Connect to know more</h2>
                            <RiArrowDropRightLine size={50} style={{color: "dimgray"}} />
                            </div>


               </div>



<div className="flex gap-5">

        <div>


            
        <p className="text-md font-thin tracking-widest p-5 mt-10 ">
           <div>

           <h2 className='font-georgia w-[600px] p-2 '>                    Welcome to Platinum, your premier provider of IT construction and network infrastructure solutions in Saudi Arabia (KSA) and Egypt.
            </h2>

            
            <div className="flex flex-col items-center w-[600px]">
        <div className="relative w-full mt-4 md:mt-5">
        <div className="absolute inset-0 h-1 bg-gradient-to-r from-emerald-500 to-sky-800" />
        <hr className="border-t-2 border-transparent" />
        </div>
        </div>    


           </div>




                    <div className="py-10">

                                                
                            <h2 className="p-2 w-[600px] font-georgia"> We specialize 
                        in creating robust and reliable network architectures that empower businesses and governmental institutions to thrive in the digital era.</h2>

                        
                        <div className="flex flex-col items-center w-[600px]">
                    <div className="relative w-full mt-4 md:mt-5">
                    <div className="absolute inset-0 h-1 bg-gradient-to-r from-emerald-500 to-sky-800" />
                    <hr className="border-t-2 border-transparent" />
                    </div>
                    </div>


                    </div>

            <h2 className="w-[600px] p-2 font-georgia">With our
            deep industry knowledge and cutting-edge technologies, we deliver scalable and tailored solutions that meet your unique requirements.</h2>

            
            
                <div className="flex flex-col items-center w-[600px]">
        <div className="relative w-full mt-4 md:mt-5">
        <div className="absolute inset-0 h-1 bg-gradient-to-r from-emerald-500 to-sky-800" />
        <hr className="border-t-2 border-transparent" />
        </div>
        </div>



        </p>
        </div>


    <img className="w-[600px] h-800 rounded-xl" src={banner} alt="just wait for secounds"/>




</div>

            </div>






        
        </>
    );
}
