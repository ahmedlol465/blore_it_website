import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/black white Thunder logo.png";

function About() {


  return (
    <section className="relative w-full pt-20 text-black py-16 " style={{
    }}>
        <div
        style={{
          backgroundImage: `url(${logo})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: '0.1',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: '-1', 
        }}
      />
     

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-8">

          <div className="lg:py-12">
            <h2 className="text-4xl text-black font-bold  mb-6 animate-fadeInUp">
              Welcome to Our Story
            </h2>
            <p className="text-lg  mb-8 animate-fadeInUp delay-1s text-black">
              Our mission is to revolutionize the way you experience technology. Since our
              founding, we've been driven by innovation and a passion for excellence, striving to
              deliver cutting-edge solutions to our clients around the globe.
            </p>
            <p className="text-lg  mb-8 animate-fadeInUp delay-2s">
              With years of expertise in web development, we take pride in crafting digital products
              that push boundaries and empower businesses to succeed in today's competitive market.
            </p>

            {/* Animated Button */}
            <Link
              to="/contacts"
              className="inline-block bg-blue-600  font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg animate-fadeInUp delay-3s"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Section (Image) */}
          <div className="relative lg:order-first">
            <div className="w-full h-96 lg:h-full bg-cover bg-center rounded-lg shadow-lg overflow-hidden animate-zoomIn">
              
              <div 
               style={{
                backgroundImage: `url(${logo})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: '-10',
                borderRadius: "5%",
              }}
              >
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
