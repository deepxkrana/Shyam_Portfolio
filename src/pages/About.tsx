import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award } from 'lucide-react';
import SSYImg from '../images/SSY.jpeg';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">About Shyam Sundar Yadav</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A seasoned production executive with over 10 years of experience bringing compelling stories to life 
            across television and digital platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={SSYImg}
              alt="Shyam Sundar Yadav"
              className="w-full h-98 object-cover rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
            <p className="text-gray-300 leading-relaxed">
              Shyam Sundar Yadav is an experienced media producer known for his work across television, web series, and documentaries.
              Starting as a production assistant, he quickly rose through the ranks, leading projects like Fear Files (ZEE TV), Saavdhaan 
              India, and Crime Patrol. With a strong track record in managing multi-genre content, he has collaborated with top production 
              houses such as Rowdy Rascal, Hibiscus Production, and Sky High Pictures, delivering high-impact shows with precision and consistency.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In addition to television, Shyam has contributed to OTT and branded content as a Line Producer on projects like Mega Icon 
              (National Geographic) and Ilm (Disney+ Hotstar). He has also managed fashion and corporate shoots for brands like T-Series 
              and Bajaj Finance. Known for his expertise in planning, scheduling, and leading shoots, Shyam continues to be a trusted name for 
              platforms like Disney+ Hotstar, Shemaroo, and ZEE5.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">Mumbai, MH</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">10+ Years Experience</span>
              </div>
            </div>

            <a href="/resume/Shyam_Yadav.pdf" download="Shyam_Yadav.pdf" className="inline-flex items-center px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Professional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-slate-800 rounded-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Career Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-amber-500 mb-2">₹250Cr+</h4>
              <p className="text-gray-400">Total Budget Managed</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-amber-500 mb-2">12+</h4>
              <p className="text-gray-400">Award Nominations</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-amber-500 mb-2">13+</h4>
              <p className="text-gray-400">Shows Produced</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-amber-500 mb-2">12+</h4>
              <p className="text-gray-400">Production Houses</p>
            </div>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-6">Production Philosophy</h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            "Great television happens when creative vision meets meticulous execution. My role is to create the 
            foundation that allows storytellers to focus on what they do best – while ensuring every detail, 
            every timeline, and every dollar serves the story."
          </p>
          <div className="flex justify-center">
            <Award className="h-16 w-16 text-amber-500" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;