import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phone: formData.phone,
      };

    emailjs.send('service_ydkmws5', 'template_w7az3vn', templateParams, 'JHy8W2B0F_oglv32h')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message.');
      });
  };

  return (
    <div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="container mx-auto px-4 md:px-8 lg:px-12 py-16 bg-gray-100 rounded-lg shadow-lg"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg font-medium text-gray-600 mb-8"
        >
          Get in touch to make your idea a reality.
        </motion.p>
         <hr className="w-full my-4 border-gray-300" />

        <motion.form
        onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full md:w-4/5 lg:w-3/5"
        >

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Name</label>
              <input
              name="name"
               value={formData.name}
                onChange={handleChange}
                 required
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Phone</label>
              <input
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                type="tel"
                placeholder="Your Phone Number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Email</label>
              <input
              name="email"
               value={formData.email}
                onChange={handleChange} 
                required
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-3 py-2 border rounded-md h-36 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8' type="submit">Send</button>

          
        </motion.form>
      </div>

    </motion.div>


    </div>
  );
};

export default ContactForm;
