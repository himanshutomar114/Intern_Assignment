import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function LucasCrewContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    question: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent! We\'ll get back to you soon.');
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-gray-100 rounded-3xl  p-8 w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-[url('/contactbubble.png')]  px-4 py-2 mb-5">
            <span className="text-gray-700 font-medium">Lets Connect</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-black">Got a </span>
            <span className="text-orange-500 bg-[#F2E2D9]">Question for Luca's Crew</span>
            <span className="text-orange-500 bg-[#F2E2D9] ">?</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side - Form fields */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-6 py-4 bg-gray-200 rounded-full border-2 border-black outline-none focus:ring-2 focus:ring-orange-300 text-black placeholder-black font-medium"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-6 py-4 bg-gray-200 rounded-full border-2 border-black outline-none focus:ring-2 focus:ring-orange-300 text-black placeholder-black font-medium"
            />
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-6 py-4 bg-gray-200 rounded-full border-2 border-black outline-none focus:ring-2 focus:ring-orange-300 text-black placeholder-black font-medium"
            />
            
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-6 py-4 bg-gray-200 rounded-full border-2 border-black outline-none focus:ring-2 focus:ring-orange-300 text-black placeholder-black font-medium"
            />
          </div>

          {/* Right side - Question area and description */}
          <div className="space-y-6">
            <div className="text-black text-lg font-medium">
              <p className="mb-1">Ask away — leadership, Luca,</p>
              <p>or life on the waves...</p>
            </div>
            
            <textarea
              name="question"
              placeholder="Your Question"
              value={formData.question}
              onChange={handleInputChange}
              rows="8"
              className="w-full px-6 py-4 bg-gray-200 rounded-3xl border-2 border-black outline-none focus:ring-2 focus:ring-orange-300 text-black placeholder-black resize-none font-medium"
            />
          </div>
        </div>

        {/* Bottom section with icon and submit button */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="p-2">
            <img src="/mail.png" alt="Mail Icon" className="w-14 h-14 text-white" />
          </div>
          
          <button
  onClick={handleSubmit}
  className="bg-white border border-gray-400 border-b-4 border-b-gray-600 hover:border-orange-300 rounded-full px-8 py-3 text-gray-700 font-medium transition-colors duration-200 hover:bg-orange-50"
>
            Send it my way!
          </button>
        </div>
      </div>
    </div>
  );
}