import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Film, Users, Award, Play } from 'lucide-react';
import BTS1Img from '../images/gallery/BTS/BTS1.jpeg';
import BTS2Img from '../images/gallery/BTS/BTS2.jpeg';
import BTS3Img from '../images/gallery/BTS/BTS3.jpeg';
import EnS1Img from '../images/gallery/EnS/EnS1.jpeg';
import LS1Img from '../images/gallery/LS/LS1.jpeg';
import LS2Img from '../images/gallery/LS/LS2.jpeg';
import NS1Img from '../images/gallery/NS/NS1.jpeg';
import PM1Img from '../images/gallery/PM/PM1.jpeg';
import SR1Img from '../images/gallery/SR/SR1.jpeg';
import SR2Img from '../images/gallery/SR/SR2.jpeg';
import Teams1Img from '../images/gallery/Teams/Teams1.jpeg';
import Teams2Img from '../images/gallery/Teams/Teams2.jpeg';
import WSP1Img from '../images/gallery/WSP/WSP1.jpeg';
import WSP2Img from '../images/gallery/WSP/WSP2.jpeg';
import ShehImg from '../images/Sheh.jpeg';

type VideoSource = 'youtube' | 'instagram';

type GalleryItem = {
  type: 'image' | 'video';
  source?: VideoSource;
  title: string;
  category: string;
  description: string;
  image?: string;
  videoId?: string;
  embedUrl?: string;
};

const Gallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: 'image' | 'video';
    src: string;
    title: string;
    source?: VideoSource;
    embedUrl?: string;
  } | null>(null);

  const galleryItems: GalleryItem[] = [
    // Video Items
    // {
    //   type: 'video',
    //   source: 'youtube',
    //   videoId: 'dQw4w9WgXcQ',
    //   title: "Promos",
    //   category: "Videos",
    //   description: "Highlights from our recent productions"
    // },
    // {
    //   type: 'video',
    //   source: 'youtube',
    //   videoId: 'jNQXAC9IVRw',
    //   title: "Promos",
    //   category: "Videos",
    //   description: "Highlights from our recent productions"
    // },
    {
      type: 'video',
      source: 'instagram',
      videoId: 'DLkLaRLOH5K',
      embedUrl: 'https://www.instagram.com/reel/DLkLaRLOH5K/embed',
      image: ShehImg,  // Using the custom cover image
      title: "Promos",
      category: "Videos",
      description: "Check out our latest Instagram Reel"
    },
    // Image Items
    {
      type: 'image',
      image: BTS1Img,
      title: "Behind the Scenes",
      category: "Set Photos",
      description: "Director discussing scene setup"
    },
    {
      type: 'image',
      image: BTS2Img,
      title: "Behind the Scenes",
      category: "Set Photos",
      description: "Director discussing scene setup"
    },
    {
      type: 'image',
      image: BTS3Img,
      title: "Behind the Scenes",
      category: "Set Photos",
      description: "Director discussing scene setup"
    },
    {
      type: 'image',
      image: PM1Img,
      title: "Production Meeting",
      category: "Team Collaboration",
      description: "Production meeting with department heads"
    },
    {
      type: 'image',
      image: LS1Img,
      title: "Location Scouting",
      category: "Pre-Production",
      description: "Evaluating potential filming location"
    },
    {
      type: 'image',
      image: LS2Img,
      title: "Location Scouting",
      category: "Pre-Production",
      description: "Evaluating potential filming location"
    },
    {
      type: 'image',
      image: NS1Img,
      title: "Night Shoot Setup",
      category: "Set Photos",
      description: "Crew preparing for complex night scene"
    },
    {
      type: 'image',
      image: Teams1Img,
      title: "Teams",
      category: "Cast & Crew",
      description: "Collaboration and celebration with team"
    },
    {
      type: 'image',
      image: Teams2Img,
      title: "Teams",
      category: "Cast & Crew",
      description: "Collaboration and celebration with team"
    },
    {
      type: 'image',
      image: EnS1Img,
      title: "Equipment & Setup",
      category: "Technical Setup",
      description: "Specialized equipment and setups for shows"
    },
    {
      type: 'image',
      image: SR1Img,
      title: "Script Reading",
      category: "Pre-Production",
      description: "Table read with cast and creative team"
    },
    {
      type: 'image',
      image: SR2Img,
      title: "Script Reading",
      category: "Pre-Production",
      description: "Table read with cast and creative team"
    },
    {
      type: 'image',
      image: WSP1Img,
      title: "Web Series Production",
      category: "OTT Projects",
      description: "Coordinating with Leading OTT Giants"
    },
    {
      type: 'image',
      image: WSP2Img,
      title: "Web Series Production",
      category: "OTT Projects",
      description: "Coordinating with Leading OTT Giants"
    }
  ];

  const categories = ["All", "Videos", "Set Photos", "Team Collaboration", "Pre-Production", "Technical Setup", "Cast & Crew", "OTT Projects"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Videos": return Play;
      case "Set Photos": return Camera;
      case "Team Collaboration": return Users;
      case "Pre-Production": return Film;
      case "Industry Events":
      case "OTT Projects":
        return Award;
      default: return Camera;
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl font-bold mb-6">Production Gallery</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A visual journey through film sets, production meetings, and behind-the-scenes moments 
            from major television and digital media projects.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const IconComponent = getCategoryIcon(item.category);
              const isVideo = item.type === 'video';
              
              // Use the provided image if available, otherwise use video thumbnails
              let thumbnailUrl = item.image;
              if (isVideo && !thumbnailUrl) {
                if (item.source === 'youtube' && item.videoId) {
                  thumbnailUrl = `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`;
                } else if (item.source === 'instagram' && item.videoId) {
                  // Use the provided image if available, otherwise use Instagram logo as fallback
                  thumbnailUrl = item.image || 'https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png';
                }
              }

              return (
                <motion.div
                  key={`${item.type}-${item.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => {
                    if (isVideo) {
                      if (item.source === 'youtube' && item.videoId) {
                        setSelectedMedia({ 
                          type: 'video',
                          source: 'youtube',
                          src: `https://www.youtube.com/embed/${item.videoId}?autoplay=1`,
                          title: item.title,
                          embedUrl: `https://www.youtube.com/embed/${item.videoId}`
                        });
                      } else if (item.source === 'instagram' && item.embedUrl) {
                        setSelectedMedia({
                          type: 'video',
                          source: 'instagram',
                          src: item.embedUrl,
                          title: item.title,
                          embedUrl: item.embedUrl
                        });
                      }
                    } else if (item.image) {
                      setSelectedMedia({ 
                        type: 'image', 
                        src: item.image, 
                        title: item.title 
                      });
                    }
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative w-full h-64 overflow-hidden">
                      <img
                        src={thumbnailUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-amber-500/90 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                            <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    </div>
                    
                    {/* Category Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="p-2 bg-slate-900/80 rounded-lg">
                        <IconComponent className="h-4 w-4 text-amber-500" />
                      </div>
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-amber-500 text-sm font-medium mb-1">{item.category}</p>
                      <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Video Items */}
        {filteredItems.length === 0 && activeCategory === "Videos" && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-400">Coming soon! Video content will be added here.</p>
          </div>
        )}

        {/* Media Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg"
              >
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div 
                    className={`relative ${
                      selectedMedia.source === 'instagram' 
                        ? 'w-[350px] h-[600px] mx-auto' 
                        : 'w-full pt-[56.25%] h-0'
                    } overflow-hidden`}
                  >
                    <iframe
                      src={selectedMedia.src}
                      title={selectedMedia.title}
                      className={`absolute top-0 left-0 w-full h-full ${
                        selectedMedia.source === 'instagram' ? 'rounded-2xl' : ''
                      }`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      scrolling="no"
                      style={{
                        maxHeight: '100vh',
                        ...(selectedMedia.source === 'instagram' && {
                          maxWidth: '100%',
                          aspectRatio: '9/16',
                          margin: '0 auto',
                          display: 'block'
                        })
                      }}
                    ></iframe>
                  </div>
                )}
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-lg text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-slate-800 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Production Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="text-3xl font-bold text-amber-500 mb-2">150+</h4>
              <p className="text-gray-400">Shooting Days</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-amber-500 mb-2">25+</h4>
              <p className="text-gray-400">Locations</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-amber-500 mb-2">500+</h4>
              <p className="text-gray-400">Crew Members</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-amber-500 mb-2">5+</h4>
              <p className="text-gray-400">Countries</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;