import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Clock, Users, FileText, Shield, Clapperboard } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skills = [
    {
      icon: IndianRupee,
      title: "Budget Management",
      description: "Expert oversight of multi-crore rupee production budgets with 98% accuracy rate"
    },
    {
      icon: Clock,
      title: "Scheduling & Timeline",
      description: "Advanced scheduling optimization ensuring on-time delivery across complex productions"
    },
    {
      icon: Users,
      title: "Crew Management",
      description: "Leadership of 100+ crew members across multiple departments and union requirements"
    },
    {
      icon: FileText,
      title: "Union Compliance",
      description: "Comprehensive knowledge of FWICE, CINTAA and IFTDA agreements and protocols"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive identification and mitigation of production risks and contingency planning"
    },
    {
      icon: Clapperboard,
      title: "Post-Production",
      description: "Coordination of editorial, VFX, and finishing workflows for seamless delivery"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Core Expertise</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive production management skills honed through years of television and digital content creation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-200 group"
              >
                <IconComponent className="h-10 w-10 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-400 leading-relaxed">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;