import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, Sofa } from 'lucide-react';
import collection1 from '/collection-1.jpg';
import collection2 from '/collection-2.jpg';
import collection3 from '/collection-3.jpg';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setFormData({ name: '', email: '', phone: '' });
    alert('Thank you for your message! We will contact you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sofaArray = [
    {
      image: collection2,
      name: "Modern Elegance",
      price: "Rs.72,299"
    },
    {
      image: collection3,
      name: "Classic Comfort",
      price: "Rs.88,990"
    },
    {
      image: collection1,
      name: "Luxe Living",
      price: "Rs.91,499"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?width=1366&fit=crop&q=80"
            alt="Modern living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Sofa className="h-8 w-8 text-white" />
            <span className="text-white text-2xl font-bold">OnlyComfort</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#collection" className="hover:text-gray-300">Collection</a>
            <a href="#featured" className="hover:text-gray-300">Featured</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Comfort in Every Detail
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Experience luxury and comfort with our handcrafted sofas, designed to transform your living space
          </p>
          <a
            href="#contact"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Featured Products */}
      <section id="featured" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sofaArray.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section & Footer */}
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-400">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center group"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-semibold mb-4 text-gray-300">Contact Information</h4>
                <div className="space-y-4">
                  <a href="tel:+91 95277 89930" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                    <Phone className="h-5 w-5 mr-3" /> +91 95277 89930
                  </a>
                  <a href="mailto:info@onlycomfort.com" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                    <Mail className="h-5 w-5 mr-3" /> info@onlycomfort.com
                  </a>
                  <p className="flex items-center text-gray-400">
                    <MapPin className="h-5 w-5 mr-3" /> Dhumal, opposite Amrutvel Society, Pandurang Industrial Area, Warje, Pune, Maharashtra 411058
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© 2025 OnlyComfort. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;