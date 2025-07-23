import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Building, Film } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Head of Production",
      company: "Kahani Pehle Pyaar Ki",
      location: "Cinemakers Media Production",
      period: "2025 - Present",
      description: "Leading full-scale production of a high-volume romantic drama series for Indian television. Oversee creative coordination, scheduling, and execution, while managing large production crews and ensuring compliance with Indian broadcast standards.",
      achievements: [
        "Successfully launched a prime-time daily series on Dangal TV",
        "Achieved 0.8 TRP within first 18 episodes — ranking in channel’s Top 3 shows",
        "Built and managed a cross-functional crew of 50+ professionals",
        "Established smooth shoot workflows to support fast-paced episode delivery"
      ]
    },
    {
      title: "Senior Production Manager",
      company: "Patna Shukla",
      location: "Arbaaz Khan Production",
      period: "2023 - 2024",
      description: "Handled overall production logistics for the feature film, collaborating with creative teams, cast, and location units to ensure smooth execution for a legal drama released on Disney+ Hotstar.",
      achievements: [
        "Completed film production ahead of schedule despite location challenges",
        "Coordinated a 150+ member unit across 3 cities",
        "Introduced streamlined script-to-shoot workflows",
        "Enabled seamless collaboration between line producers and creative teams"
      ]
    },
    {
      title: "Senior Production Manager",
      company: "Tu Suraj Mein Saanjh Piyaji",
      location: "Cockrow And Shaika",
      period: "2017 - 2018",
      description: "Managed daily shoot planning, budget tracking, and cast logistics for this sequel series to Diya Aur Baati Hum, aired on Colors TV.",
      achievements: [
        "Oversaw a 365-episode production with on-time episode delivery",
        "Managed coordination between set, costume, and continuity departments",
        "Reduced location turnover time by 25%",
        "Ensured regulatory and compliance alignment with CINTAA and FWICE"
      ]
    },
    {
      title: "Line Producer",
      company: "Khaki Ek Vachan",
      location: "Ranasinghe Movies",
      period: "2017",
      description: "Supported scripting, casting, and location planning for this crime-based TV show on Big Magic, ensuring tight coordination between writers and shoot teams.",
      achievements: [
        "Managed shoot schedules across 8 cities",
        "Coordinated logistics for over 200 episodes",
        "Developed tracking system for episodic budgets",
        "Built a network of reliable on-ground production crews"
      ]
    },
    {
      title: "Executive Producer",
      company: "Crime Patrol",
      location: "Purple Canvas Production",
      period: "2015 - 2017",
      description: "Directed creative and operational efforts for episodes of India’s longest-running true crime series, maintaining narrative quality and factual integrity.",
      achievements: [
        "Delivered 100+ dramatized cases based on real incidents",
        "Worked closely with researchers, writers, and forensic consultants",
        "Implemented a standardized script vetting process",
        "Enhanced episode structure leading to viewer engagement boost"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Business & Commerce",
      school: "DAVV University Indore",
      year: "2006",
      details: "Concentration in Production Management and Business of Entertainment"
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
          <h1 className="text-5xl font-bold mb-6">Professional Experience</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A progressive career in television and digital media production, from production assistant 
            to industry leadership roles.
          </p>
          <a href="/resume/Shyam_Yadav.pdf" download="Shyam_Yadav.pdf" className="mt-6 inline-flex items-center px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-200 shadow-lg hover:shadow-xl">
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume
          </a>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Career Timeline</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-amber-500 mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-300 mb-2">
                      <div className="flex items-center space-x-1">
                        <Film className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2 text-amber-500">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <span className="text-amber-500 text-sm mt-1">▸</span>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-500 mb-2">{edu.degree}</h3>
                <p className="text-gray-300 font-medium mb-1">{edu.school}</p>
                <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                <p className="text-gray-300 text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;