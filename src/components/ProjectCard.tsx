import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  network: string;
  year: string;
  description: string;
  image: string;
  rating: string;
  teamSize?: string;
  genre: string;
  role: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  network,
  year,
  description,
  image,
  rating,
  teamSize,
  genre,
  role
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
            {genre}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold group-hover:text-amber-500 transition-colors">
            {title}
          </h3>
          <span className="text-amber-500 font-semibold">{network}</span>
        </div>

        <p className="text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-amber-500" />
            <span className="text-sm text-gray-300">{year}</span>
          </div>

          {rating && (
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-amber-500" />
              <span className="text-sm text-gray-300">{rating}</span>
            </div>
          )}
          {teamSize && (
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-amber-500" />
              <span className="text-sm text-gray-300">{teamSize}</span>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-700">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            Role: {role}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;