import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Book, Clock, Users, Calendar, ChevronDown, ArrowUp } from 'lucide-react';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const heroSlides = [
    {
      title: "Worship With Us",
      subtitle: "Join our vibrant services to experience God’s love and community.",
      image: "/images/service2.jpg"
    },
 
    {
      title: "Gather in Faith",
      subtitle: "Discover our weekly events designed to uplift and inspire.",
      image: "/images/service2.jpg"
    }
  ];

  const services = [
    {
      title: "Sunday Liberation Service",
      description: "Join us every Sunday for a powerful worship experience designed to bring freedom and breakthrough. Through uplifting music, heartfelt prayer, and inspiring sermons, we seek to connect with God and strengthen our faith community.",
      time: "9:00 AM",
      icon: <Heart className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
    },
    {
      title: "Holy Communion",
      description: "Held on the first Sunday of every month during our Liberation Service, Holy Communion is a sacred time to remember Jesus' sacrifice. All are welcome to participate in this meaningful act of worship.",
      time: "During Service",
      icon: <Book className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-600",
    },
    {
      title: "Wednesday Evening Service",
      description: "Our mid-week service offers encouragement, prayer, and biblical teaching to help you recharge spiritually. This intimate gathering is perfect for deepening your faith and connecting with others.",
      time: "5:30 PM",
      icon: <Clock className="w-8 h-8 text-white" />,
      color: "from-green-500 to-green-600",
      textColor: "text-green-600",
    },
    {
      title: "Mid-Week Holy Communion",
      description: "Every Wednesday, we offer a special communion service for those seeking a moment of reflection and spiritual renewal during the week. Join us for this quiet, meaningful time of worship.",
      time: "Wednesday",
      icon: <Heart className="w-8 h-8 text-white" />,
      color: "from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600",
    },
    {
      title: "Counselling Session",
      description: "Our weekly counselling sessions provide personal guidance and spiritual support. Meet with our trained pastoral team to discuss life’s challenges and find encouragement through faith.",
      time: "Thu 11:00 AM",
      icon: <Users className="w-8 h-8 text-white" />,
      color: "from-teal-500 to-teal-600",
      textColor: "text-teal-600",
    },
    {
      title: '"Early Will I Seek Thee"',
      description: "Start your Friday with morning prayer and devotion. This service focuses on seeking God’s guidance and strength for the day ahead, fostering a deeper personal connection with Him.",
      time: "Fri 8:00 AM",
      icon: <Book className="w-8 h-8 text-white" />,
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-600",
    },
    {
      title: "Night Vigil",
      description: "On the first Friday of every month, we hold an all-night prayer vigil. This powerful time of worship and intercession is open to all who seek a deeper spiritual experience.",
      time: "Fri 10:00 PM",
      icon: <Calendar className="w-8 h-8 text-white" />,
      color: "from-pink-500 to-pink-600",
      textColor: "text-pink-600",
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

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section id="services-hero" className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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

      {/* Weekly Services Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Weekly Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our weekly services offer opportunities for worship, reflection, and spiritual growth. Join us to experience God’s love and connect with our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <p className={`text-2xl font-bold ${service.textColor}`}>{service.time}</p>
              </div>
            ))}
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

export default Services;