import React, { useState, useEffect } from 'react';
import { Heart, Clock, Users, ArrowUp, ChevronDown, X, ZoomIn } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const heroSlides = [
   
    {
      title: "Our Mission in Faith",
      subtitle: "Liberating the world into His marvelous light",
      image: "/images/about1.jpg"
    },
    {
      title: "Join Our Family",
      subtitle: "Growing together through worship and service",
      image: "/images/about1.jpg"
    }
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

  const openModal = (imageSrc, name, title) => {
    setModalImage({ src: imageSrc, name, title });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section id="about-hero" className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
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

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
            <p className="text-lg text-slate-600">
              To liberate the world from every operation of the powers of darkness into His marvelous light. 1 Peter 2:9
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Vision</h2>
            <p className="text-lg text-slate-600">
              Harvesting the lost souls back to God through evangelism by the power of the Holy Spirit. (Matt. 9:35-38)
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Leadership</h2>
          </div>
          
          {/* All Leaders Grid */}
          <div className="flex flex-col items-center space-y-8">
            {/* Lead Pastor - Centered */}
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full max-w-xs">
              <div className="relative group cursor-pointer" onClick={() => openModal('/images/lead pastor.jpg', 'Apostle Jude Gigei', 'Lead Pastor')}>
                <img
                  src="/images/lead pastor.jpg"
                  alt="Apostle Jude Gigei"
                  className="w-48 h-48 mx-auto mb-4 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity">
                  Click to view
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Apostle Jude Gigei</h3>
              <h4 className="text-base text-blue-600 font-semibold">Lead Pastor</h4>
            </div>

            {/* Other Leaders - Horizontal on Desktop, Vertical on Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full">
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full max-w-xs">
                <div className="relative group cursor-pointer" onClick={() => openModal('/images/pastor-mrs.jpg')}>
                  <img
                    src="/images/pastor-mrs.jpg"
                    alt=""
                    className="w-40 h-40 mx-auto mb-4 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity">
                    Click to view
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Pastor Mrs. Tandisa Gegei</h3>
                <h4 className="text-base text-blue-600 font-semibold">Pastor</h4>
              </div>

              <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full max-w-xs">
                <div className="relative group cursor-pointer" onClick={() => openModal('/images/evangelist.jpg')}>
                  <img
                    src="/images/evangelist.jpg"
                    alt=""
                    className="w-40 h-40 mx-auto mb-4 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity">
                    Click to view
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Evang. Esther Gija</h3>
                <h4 className="text-base text-blue-600 font-semibold">Evangelist</h4>
              </div>

              <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full max-w-xs">
                <div className="relative group cursor-pointer" onClick={() => openModal('/images/disciple.jpg')}>
                  <img
                    src="/images/disciple.jpg"
                    alt=""
                    className="w-40 h-40 mx-auto mb-4 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity">
                    Click to view
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2"> Bro. Peter Bankinkosi Kleinbooi</h3>
                <h4 className="text-base text-blue-600 font-semibold">Disciple</h4>
              </div>

              <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full max-w-xs">
                <div className="relative group cursor-pointer" onClick={() => openModal('/images/head usher.jpg')}>
                  <img
                    src="/images/head usher.jpg"
                    alt=""
                    className="w-40 h-40 mx-auto mb-4 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity">
                    Click to view
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Sis. Dorcas F. Sam</h3>
                <h4 className="text-base text-blue-600 font-semibold">Head Usher</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 z-10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-6">
              <img
                src={modalImage.src}
                alt={modalImage.name}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">{modalImage.name}</h3>
                <p className="text-lg text-blue-600 font-semibold">{modalImage.title}</p>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default About;