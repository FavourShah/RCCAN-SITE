import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, MapPin, Phone, Mail, Users, Book, ChevronDown, Facebook, MessageCircle, ArrowUp, Calendar } from 'lucide-react';

const ChurchHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const heroSlides = [
    {
      title: "Welcome to Resurrection Church of Christ of All Nations",
      subtitle: "Where Every Heart Finds Home",
      image: "/images/3.jpg"
    },
    {
      title: "Experience God's Love",
      subtitle: "Join Us in Worship This Sunday",
      image: "/images/home1.jpg"
    },
    {
      title: "Growing Together in Faith",
      subtitle: "Building Community, Spreading Hope",
      image: "/images/homepic.jpg"
    }
  ];

  const involvementOpportunities = [
    {
      title: "Join a Ministry",
      description: "Find your calling in our worship, youth, or outreach ministries.",
      icon: <Users className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Volunteer with Us",
      description: "Serve our community through events and outreach programs.",
      icon: <Heart className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Attend Special Events",
      description: "Join our retreats, workshops, and community gatherings.",
      icon: <Book className="w-8 h-8 text-white" />,
      color: "from-green-500 to-green-600"
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

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 transition-all duration-1000 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroSlides[currentSlide].image})`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {heroSlides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-white text-slate-800 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Join Us Sunday
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=100083515744849" // Replace with your streaming URL
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-slate-800 transition-colors"
            >
              Watch Online
            </a>
          </div>
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

      {/* Service Times */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Weekly Services & Times</h2>
          <p className="text-lg text-slate-600">Join us for worship, prayer, and fellowship throughout the week</p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll space-x-6 w-max">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Sunday Liberation Service</h3>
              <p className="text-slate-600 mb-4">Experience freedom and breakthrough in worship</p>
              <p className="text-2xl font-bold text-blue-600">9:00 AM</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Holy Communion</h3>
              <p className="text-slate-600 mb-4">1st Sunday of every month - Remember His sacrifice</p>
              <p className="text-2xl font-bold text-purple-600">During Service</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Wednesday Evening Service</h3>
              <p className="text-slate-600 mb-4">Mid-week encouragement and prayer</p>
              <p className="text-2xl font-bold text-green-600">5:30 PM</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Mid-Week Holy Communion</h3>
              <p className="text-slate-600 mb-4">Wednesday communion service</p>
              <p className="text-2xl font-bold text-indigo-600">Wednesday</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Counselling Session</h3>
              <p className="text-slate-600 mb-4">Personal guidance and spiritual support</p>
              <p className="text-2xl font-bold text-teal-600">Thu 11:00 AM</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">"Early Will I Seek Thee"</h3>
              <p className="text-slate-600 mb-4">Friday morning prayer and devotion</p>
              <p className="text-2xl font-bold text-orange-600">Fri 8:00 AM</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Night Vigil</h3>
              <p className="text-slate-600 mb-4">1st Friday of every month - All-night prayer</p>
              <p className="text-2xl font-bold text-pink-600">Fri 10:00 PM</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Sunday Liberation Service</h3>
              <p className="text-slate-600 mb-4">Experience freedom and breakthrough in worship</p>
              <p className="text-2xl font-bold text-blue-600">9:00 AM</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Holy Communion</h3>
              <p className="text-slate-600 mb-4">1st Sunday of every month - Remember His sacrifice</p>
              <p className="text-2xl font-bold text-purple-600">During Service</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Wednesday Evening Service</h3>
              <p className="text-slate-600 mb-4">Mid-week encouragement and prayer</p>
              <p className="text-2xl font-bold text-green-600">5:30 PM</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Mid-Week Holy Communion</h3>
              <p className="text-slate-600 mb-4">Wednesday communion service</p>
              <p className="text-2xl font-bold text-indigo-600">Wednesday</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Welcome to Our Family</h2>
              <p className="text-lg text-slate-600 mb-6">
                At Resurrection Church of Christ of All Nations, we believe that every person is created in God's image and deserves to experience His unconditional love. Whether you're searching for meaning, seeking healing, or looking to grow in your faith, you'll find a warm and welcoming community here.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our aim is simple: to love God, love people, and make disciples who transform our community and world. We invite you to join us on this incredible journey of faith.
              </p>
              <Link
                to="/about"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/about-us.jpg" 
                  alt="" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center -z-10">
                  <Users className="w-24 h-24 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Get Involved</h2>
            <p className="text-lg text-slate-600">Discover ways to connect and serve with our church family</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {involvementOpportunities.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Explore More Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-slate-300">3 Fraser Street, North End, Port Elizabeth, South Africa</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-slate-300">+27 632139553</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">resurrectionchurch.rccan@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Join Our Community */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 animate-pulse">Connect with Us Today!</h3>
              <p className="text-slate-300 mb-6 text-lg">
                Join our vibrant community at Resurrection Church of Christ of All Nations! Chat with us on WhatsApp, watch our live services, or follow us on Facebook for updates and inspiration.
              </p>
              <div className="space-y-4">
                <a
                  href="https://wa.me/+27632139553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Join Our WhatsApp Community</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100083515744849" // Replace with your streaming URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>Watch Us Live</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100083515744849" // Replace with your Facebook page
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Follow Us on Facebook</span>
                </a>
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

export default ChurchHomepage;