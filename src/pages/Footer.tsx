import React from "react"
import logo from "../assets/black white Thunder logo.png";


export const Footer = () => {





    return (
        
        <footer className="bg-gray-900 text-white mt-10">
        <div className="container mx-auto py-10">
          <div className="flex flex-wrap justify-between border-b border-gray-700 pb-10">
            <div className="w-full md:w-1/3 mb-8">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-orange-500 text-3xl"></i>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">Find us</h4>
                  <span className="text-gray-400">1010 Avenue, sw 54321, Chandigarh</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-8">
              <div className="flex items-center">
                <i className="fas fa-phone text-orange-500 text-3xl"></i>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">Call us</h4>
                  <span className="text-gray-400">9876543210 0</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-8">
              <div className="flex items-center">
                <i className="far fa-envelope-open text-orange-500 text-3xl"></i>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">Mail us</h4>
                  <span className="text-gray-400">mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex flex-wrap justify-between py-10">
            <div className="w-full md:w-1/3 mb-8">
              <div className="mb-6">
                <img src={logo} alt="logo" className="w-40" />
              </div>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-white bg-blue-600 p-2 rounded-full">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white bg-blue-400 p-2 rounded-full">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white bg-red-600 p-2 rounded-full">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </div>
            </div>
  
            <div className="w-full md:w-1/3 mb-8">
              <h3 className="text-xl font-semibold mb-6 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-orange-500">
                Useful Links
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Home</a></li>
                <li><a href="#" className="hover:text-orange-500">About</a></li>
                <li><a href="#" className="hover:text-orange-500">Services</a></li>
                <li><a href="#" className="hover:text-orange-500">Portfolio</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
  
            <div className="w-full md:w-1/3 mb-8">
              <h3 className="text-xl font-semibold mb-6 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-orange-500">
                Subscribe
              </h3>
              <p className="text-gray-400 mb-6">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              <form className="relative">
                <input
                  type="email"
                  className="w-full py-3 px-4 bg-gray-800 text-gray-400 placeholder-gray-500 border border-gray-800 focus:outline-none"
                  placeholder="Email Address"
                />
                <button className="absolute right-0 top-0 bg-orange-500 py-3 px-6 text-white">
                  <i className="fab fa-telegram-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
  
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto flex justify-between text-gray-400">
            <p className="text-sm">&copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/" className="text-orange-500">Anup</a></p>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-orange-500">Home</a></li>
              <li><a href="#" className="hover:text-orange-500">Terms</a></li>
              <li><a href="#" className="hover:text-orange-500">Privacy</a></li>
              <li><a href="#" className="hover:text-orange-500">Policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
        </div>
              </footer>
  
    )
}