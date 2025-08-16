import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Facebook, ChevronDown, ArrowUp, Users } from 'lucide-react';

const Contact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const heroSlides = [
    {
      title: "Connect with Our Community",
      subtitle: "Reach out to join our family or learn more about our mission.",
      image: "/images/contact1.jpg"
    },
    {
      title: "Join Us in Fellowship",
      subtitle: "We're here to welcome you with open hearts.",
      image: "/images/contact1.jpg"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/profile.php?id=100083515744849", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section id="contact-hero" className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform scale-105"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].image})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90 animate-fade-in-up">
            {heroSlides[currentSlide].subtitle}
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 text-white animate-bounce" />
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-800">Address</p>
                    <p className="text-slate-600">3 Fraser Street, North End, Port Elizabeth, South Africa</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-800">Phone</p>
                    <p className="text-slate-600">+27 632139553</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-800">Email</p>
                    <p className="text-slate-600">resurrectionchurch.rccan@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-full">
                    <p className="font-semibold text-slate-800 mb-3">Follow Us</p>
                    <button
                      onClick={handleFacebookClick}
                      className="
                        relative group flex items-center space-x-3 px-5 py-3 w-full
                        bg-white border-2 border-blue-200 rounded-full
                        hover:border-blue-500 hover:bg-blue-50
                        transform hover:scale-105 transition-all duration-200
                        shadow-md hover:shadow-lg
                      "
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors">
                        <Facebook className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-slate-700 group-hover:text-blue-700">
                        Follow on Facebook
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-slate-500 ml-auto">
                        <Users className="w-4 h-4" />
                        <span>Join our community</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Visit Us</h3>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.5139111678033!2d25.60316531521389!3d-33.94221098063935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad3c7f0b6a7b5%3A0x7b8e6f9a2c3d4e5f!2s3%20Fraser%20St%2C%20North%20End%2C%20Gqeberha%2C%206001%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1698765432109"
                  className="w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                  title="Resurrection Church of Christ of All Nations location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Contact;