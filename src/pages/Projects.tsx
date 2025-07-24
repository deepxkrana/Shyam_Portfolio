import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import PatnaShuklaImg from '../images/PatnaShukla.jpg';
import TSMSPImg from '../images/TSMSP.jpg';
import JAJImg from '../images/JAJ.jpg';
import FFImg from '../images/FF.jpg';
import SIImg from '../images/SI.jpg';
import CPImg from '../images/CP.jpg';
import KPPKImg from '../images/KPPK.jpg';
import GBBImg from '../images/GBB.jpg';
import MIImg from '../images/MI.jpg';
import ShehImg from '../images/Sheh.jpeg';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Kahani Pehle Pyaar Ki",
      network: "Dangal TV",
      year: "2025",
      description: "A romantic drama on Dangal TV about childhood friends Neha and Sanju, exploring first love in early 2000s Bhopal by Cinemakers Production.",
      image: KPPKImg,
      rating: "NA",
      teamSize: "80+ crew",
      genre: "Romance / Drama",
      role: "Head of Production"
    },
    {
      title: "Shehzada Returns",
      network: "Vahaflix",
      year: "2025",
      description: "Shehzada Returns is an upcoming Hindi drama series on Vahaflix, promising a gripping story, fresh characters, and high-stakes twists.",
      image: ShehImg,
      rating: "NA",
      teamSize: "80+ crew",
      genre: "Romance / Drama",
      role: "Head of Production"
    },
    {
      title: "Patna Shukla",
      network: "Jio Hotstar",
      year: "2023-2024",
      description: "Patna Shuklla is a 2024 Indian Hindi-language legal drama film directed by Vivek Budakoti and produced by Arbaaz Khan for Disney+ Hotstar.",
      image: PatnaShuklaImg,
      rating: "5.6",
      teamSize: "100+ crew",
      genre: "Legal Drama",
      role: "Senior Production Manager"
    },
    {
      title: "Ghuspaith: Between Borders",
      network: "Jio Hotstar",
      year: "2023",
      description: "A 33 minute tense short thriller about a photojournalist risking everything to cross the border, inspired by real events.",
      image: GBBImg,
      rating: "8.3",
      teamSize: "50+ crew",
      genre: "Thriller",
      role: "Line Producer"
    },
    {
      title: "Mega Icons",
      network: "National Geography",
      year: "2020",
      description: "A biographical documentary series from Nat Geo Technologies profiling India’s most iconic figures—like Ratan Tata, A.R. Rahman, and Kalpana Chawla.",
      image: MIImg,
      rating: "7.7",
      teamSize: "50+ crew",
      genre: "Documentary",
      role: "Line Producer"
    },
    {
      title: "Tu Suraj Mein Saanjh Piyaji",
      network: "Colors TV",
      year: "2017-2018",
      description: "Tu Sooraj Main Saanjh Piyaji is a romantic drama about Kanak and Uma, aired on Colors TV as a sequel to Diya Aur Baati Hum.",
      image: TSMSPImg,
      rating: "6.8",
      teamSize: "85+ crew",
      genre: "Family Drama",
      role: "Senior Production Manager"
    },
    {
      title: "Jurm Aur Jazbaat",
      network: "Shemaroo TV",
      year: "2021-2023",
      description: "Host Ronit Roy presents spine-chilling stories of crime and explores the emotions and thrills that prompted the accused to commit the offence.",
      image: JAJImg,
      rating: "8.0",
      teamSize: "90+ crew",
      genre: "Crime / Drama",
      role: "Executive Producer"
    },
    {
      title: "Fear Files",
      network: "ZEE TV",
      year: "2022",
      description: "High-stakes cyber thriller requiring specialized technical consultants and complex VFX coordination. Successfully delivered on accelerated timeline.",
      image: FFImg,
      rating: "5.2",
      teamSize: "100+ crew",
      genre: "Horror / Thriller",
      role: "Executive Producer"
    },
    {
      title: "Saavdhaan India",
      network: "Star Bharat",
      year: "2021-2022",
      description: "The show deals with real-life crimes stories of murder, kidnapping, domestic violence, fraud, robbery, forgery, rape, sexual assault and other crimes.",
      image: SIImg,
      rating: "5.7",
      teamSize: "80+ crew",
      genre: "Crime / Reality",
      role: "Executive Producer"
    },
    {
      title: "Crime Patrol",
      network: "Sony TV",
      year: "2021",
      description: "The host narrates several dramatised real-life crime cases revolving around harassment, kidnapping and murder while also presenting re-enactments.",
      image: CPImg,
      rating: "7.8",
      teamSize: "95+ crew",
      genre: "Crime / Documentary",
      role: "Executive Producer"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Productions Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of television and digital content productions demonstrating strategic leadership, 
            budget management, and creative collaboration across premium platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-slate-800 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's discuss how strategic production management can bring your next project to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-200"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
