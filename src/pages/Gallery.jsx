import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Grid, List, RefreshCw, ArrowUp, Sparkles, Heart, Users } from 'lucide-react';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentView, setCurrentView] = useState('masonry');
  const [loadedImages, setLoadedImages] = useState(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [heroAnimation, setHeroAnimation] = useState(0);

  // Fetch images from the generated index file
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        
        // First, try to fetch from the generated index file
        const response = await fetch('/images-index.json');
        
        if (response.ok) {
          const imageIndex = await response.json();
          console.log(`Loaded ${imageIndex.count} images from index`);
          setPhotos(imageIndex.images);
        } else {
          // Fallback: try some common filenames as a demo
          console.log('No image index found, using fallback method');
          await loadFallbackImages();
        }
        
        setError(null);
      } catch (err) {
        console.error('Error loading images:', err);
        setError('Failed to load images. Make sure to generate the image index first.');
        // Try fallback method
        await loadFallbackImages();
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Fallback method - tries some common patterns and existing images
  const loadFallbackImages = async () => {
    const fallbackImages = [];
    const commonNames = [
      'image1.jpg', 'image2.jpg', 'photo1.png', 'photo2.png',
      'church.jpg', 'worship.png', 'service.jpeg', 'community.jpg',
      'about-us.jpg', 'about1.jpg', 'about2.jpg'
    ];
    
    for (const filename of commonNames) {
      try {
        const img = new Image();
        await new Promise((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject();
          img.src = `/images/${filename}`;
        });
        
        fallbackImages.push({
          id: `fallback-${fallbackImages.length}`,
          filename: filename,
          src: `/images/${filename}`,
          thumb: `/images/${filename}`
        });
      } catch {
        // Image doesn't exist, skip
      }
    }
    
    if (fallbackImages.length > 0) {
      setPhotos(fallbackImages);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroAnimation(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setPhotoIndex((photoIndex + 1) % photos.length);
  };

  const prevImage = () => {
    setPhotoIndex((photoIndex - 1 + photos.length) % photos.length);
  };

  const loadMoreImages = () => {
    setLoadedImages(prev => Math.min(prev + 12, photos.length));
  };

  const getMasonryHeight = (index) => {
    const heights = ['h-48', 'h-64', 'h-56', 'h-72', 'h-60'];
    return heights[index % heights.length];
  };

  const renderMasonryView = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {photos.slice(0, loadedImages).map((photo, index) => (
        <div
          key={photo.id}
          className={`break-inside-avoid mb-6 group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] ${getMasonryHeight(index)}`}
          onClick={() => openLightbox(index)}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl h-full">
            <img
              src={photo.src}
              alt={photo.filename}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {photos.slice(0, loadedImages).map((photo, index) => (
        <div
          key={photo.id}
          className="aspect-square group cursor-pointer transform transition-all duration-300 hover:scale-105"
          onClick={() => openLightbox(index)}
        >
          <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl h-full">
            <img
              src={photo.thumb}
              alt={photo.filename}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {photos.slice(0, loadedImages).map((photo, index) => (
        <div
          key={photo.id}
          className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          onClick={() => openLightbox(index)}
        >
          <div className="w-20 h-20 flex-shrink-0">
            <img
              src={photo.thumb}
              alt={photo.filename}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-600">Church Gallery</p>
          </div>
        </div>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* New Dynamic Hero Section */}
      <section id="gallery-hero" className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Main Title with Dynamic Text */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Our Gallery
                </span>
              </h1>
              
              {/* Animated Subtitle */}
              <div className="h-16 flex items-center justify-center">
                <p className={`text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 transition-all duration-1000 transform ${
                  heroAnimation === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {heroAnimation === 0 && (
                    <span className="flex items-center justify-center gap-3">
                      <Sparkles className="w-8 h-8 text-yellow-500" />
                      Moments of Divine Inspiration
                      <Sparkles className="w-8 h-8 text-yellow-500" />
                    </span>
                  )}
                </p>
                <p className={`text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 transition-all duration-1000 transform absolute ${
                  heroAnimation === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {heroAnimation === 1 && (
                    <span className="flex items-center justify-center gap-3">
                      <Heart className="w-8 h-8 text-red-500" />
                      Capturing Faith in Action
                      <Heart className="w-8 h-8 text-red-500" />
                    </span>
                  )}
                </p>
                <p className={`text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 transition-all duration-1000 transform absolute ${
                  heroAnimation === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {heroAnimation === 2 && (
                    <span className="flex items-center justify-center gap-3">
                      <Users className="w-8 h-8 text-green-500" />
                      Community United in Love
                      <Users className="w-8 h-8 text-green-500" />
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{photos.length}</div>
                <div className="text-sm uppercase tracking-wide text-gray-600">Sacred Moments</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                <div className="text-sm uppercase tracking-wide text-gray-600">Memories Created</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">1</div>
                <div className="text-sm uppercase tracking-wide text-gray-600">United Family</div>
              </div>
            </div>

            {/* Featured Images Preview Grid */}
            {photos.length > 0 && (
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {photos.slice(0, 4).map((photo, index) => (
                    <div
                      key={photo.id}
                      className={`group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:z-10 relative ${
                        index === 0 ? 'animate-pulse' : ''
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                      onClick={() => openLightbox(index)}
                    >
                      <div className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl">
                        <img
                          src={photo.src}
                          alt={photo.filename}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Camera className="w-6 h-6" />
                    Explore All {photos.length} Photos
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-yellow-100 border border-yellow-400 rounded-2xl p-6 mt-8 max-w-2xl mx-auto">
                <p className="text-yellow-800 font-semibold mb-2">{error}</p>
                <p className="text-yellow-700 text-sm">
                  Run "node generate-image-index.cjs" in your project root to auto-detect all images
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {photos.length === 0 ? (
        <section className="py-20 text-center">
          <Camera className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Images Found</h3>
          <div className="max-w-2xl mx-auto text-gray-600 space-y-4">
            <p>To automatically load all your images:</p>
            <div className="bg-gray-100 rounded-lg p-6 text-left">
              <ol className="list-decimal list-inside space-y-2">
                <li>Save the "generate-image-index.cjs" script to your project root</li>
                <li>Run: <code className="bg-white px-2 py-1 rounded">node generate-image-index.cjs</code></li>
                <li>This will scan your public/images folder and create an index file</li>
                <li>Refresh this page to see all your images!</li>
              </ol>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Controls Section */}
          <section className="py-8 bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center">
                <div className="flex items-center bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => setCurrentView('masonry')}
                    className={`p-2 rounded-full transition-colors ${currentView === 'masonry' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
                    title="Masonry View"
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentView('grid')}
                    className={`p-2 rounded-full transition-colors ${currentView === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
                    title="Grid View"
                  >
                    <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                    </div>
                  </button>
                  <button
                    onClick={() => setCurrentView('list')}
                    className={`p-2 rounded-full transition-colors ${currentView === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
                    title="List View"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery-section" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Showing {Math.min(loadedImages, photos.length)} of {photos.length} photos
                </p>
              </div>

              {currentView === 'masonry' && renderMasonryView()}
              {currentView === 'grid' && renderGridView()}
              {currentView === 'list' && renderListView()}

              {loadedImages < photos.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMoreImages}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Load More Photos ({photos.length - loadedImages} remaining)
                  </button>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Lightbox */}
      {isOpen && photos[photoIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-60 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-60 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[photoIndex]?.src}
              alt={photos[photoIndex]?.filename}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-6 py-3 rounded-full">
            <div className="text-center">
              <p className="text-xs opacity-75">
                {photoIndex + 1} / {photos.length}
              </p>
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

export default Gallery;