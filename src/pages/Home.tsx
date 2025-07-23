import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';
import SkillsSection from '../components/SkillsSection';
import PatnaShuklaImg from '../images/PatnaShukla.jpg';
import TSMSPImg from '../images/TSMSP.jpg';
import JAJImg from '../images/JAJ.jpg';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1260&dpr=2)',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Shyam Sundar <span className="text-amber-500">Yadav</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Head of Production
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming creative visions into Emmy-nominated television and digital content 
            through strategic production management and industry expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <Award className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">10+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="p-6">
              <Calendar className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">12+</h3>
              <p className="text-gray-400">Productions Managed</p>
            </div>
            <div className="p-6">
              <Users className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-gray-400">Crew Members Led</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Featured Projects Preview */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Productions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Major projects showcasing strategic production management across television and digital platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Patna Shukla",
                network: "Jio Hotstar",
                rating: "5.6",
                image: PatnaShuklaImg,
              },
              {
                title: "Tu Suraj Mein Saanjh Piyaji",
                network: "Colors TV",
                rating: "6.8",
                image: TSMSPImg,
              },
              {
                title: "Jurm Aur Jazbaat",
                network: "Shemaroo TV",
                rating: "8.0",
                image: JAJImg,
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-amber-500 font-medium">{project.network}</p>
                    <p className="text-gray-300 text-sm">IMDB Rating: {project.rating}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-amber-500 text-amber-500 font-medium rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-200"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;