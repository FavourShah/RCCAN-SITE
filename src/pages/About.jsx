import React, { useState, useEffect } from 'react';
import { Heart, Users, BookOpen, Globe, ChevronDown } from 'lucide-react';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/images/church-interior.jpg',
      title: 'About Our Church',
      subtitle: 'Built upon the foundation of apostolic and prophetic ministry with Jesus Christ as our chief cornerstone'
    },
    {
      image: '/images/congregation.jpg',
      title: 'Our Foundation',
      subtitle: 'Resurrection Church of Christ of All Nations - God\'s workmanship created in Christ Jesus unto good works'
    },
    {
      image: '/images/worship.jpg',
      title: 'Our Mission',
      subtitle: 'Called to harvest lost souls and make disciples of all nations through the power of the Holy Spirit'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Church Description */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                Our Foundation
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-100">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                    <Globe className="w-6 h-6 text-blue-600 mr-3" />
                    Resurrection Church of Christ of All Nations (RCCAN)
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Resurrection Church of Christ of All Nations (RCCAN) under <strong className="text-slate-800">Apostle & Pastor Mrs. Tandisa Gigei Jude Friday</strong> as the founder (G.O) is built upon the foundation of the apostolic and prophetic ministry with Jesus Christ himself being the chief cornerstone, as it is written in <em className="text-blue-700">Ephesians 2:20</em>.
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    The church, Resurrection Church of Christ of All Nations, is God's workmanship, created in Christ Jesus unto good works, which God himself hath before ordained that we should walk in them. As it is written in <em className="text-blue-700">Ephesians 2:10</em>.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                      <Heart className="w-5 h-5 text-red-500 mr-2" />
                      Our Mission & Vision
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      We are the loving people of God sent to harvest the lost souls back to the kingdom of God through evangelism by the power of the Holy Spirit, as stated in <em className="text-blue-700">Matthew 9:35-38</em>. Resurrection Church of Christ of All Nations is also ordained to go out and make disciples of men <em className="text-blue-700">(Matthew 28:18-20)</em> as <strong>A GREAT COMMISSION</strong>.
                    </p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    And to totally liberate the world from every oppression of the power of darkness into God's marvelous light, as it is written in <em className="text-blue-700">1 Peter 2:9</em>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Apostle's Creed */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                RCCAN Apostle's Creed
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 sm:p-12 text-white relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-600/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">Our Declaration of Faith</h3>
                </div>
                
                <div className="prose prose-lg prose-invert max-w-none">
                  <div className="text-center leading-relaxed space-y-4 text-slate-200">
                    <p><strong className="text-white">I believe in God,</strong><br />
                    the Father almighty,<br />
                    Creator of heaven and earth,</p>
                    
                    <p><strong className="text-white">and in Jesus Christ, his only Son, our Lord,</strong><br />
                    who was conceived by the Holy Spirit,<br />
                    born of the Virgin Mary,<br />
                    suffered under Pontius Pilate,<br />
                    was crucified, died and was buried;</p>
                    
                    <p>he descended into hell;<br />
                    on the third day he rose again from the dead;<br />
                    he ascended into heaven,<br />
                    and is seated at the right hand of God the Father almighty;</p>
                    
                    <p>from there he will come to judge the living and the dead.</p>
                    
                    <p><strong className="text-white">I believe in the Holy Spirit,</strong><br />
                    the holy pentecostal Church,<br />
                    the communion of saints,<br />
                    the forgiveness of sins,<br />
                    the resurrection of the body,<br />
                    and life everlasting.</p>
                    
                    <div className="mt-8 pt-6 border-t border-slate-600">
                      <p className="text-2xl font-bold text-blue-300">
                        Shalom, Shalom, Shalom
                      </p>
                      <p className="text-xl font-semibold text-white mt-2">
                        Amen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-12 text-white">
              <Users className="w-12 h-12 mx-auto mb-6 opacity-90" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Join Our Community of Faith
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Experience the transformative power of God's love in a welcoming community dedicated to spiritual growth and service.
              </p>
              <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg">
                Visit Us Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;