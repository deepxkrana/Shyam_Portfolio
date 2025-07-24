import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, User, Instagram, Facebook, Film } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <User className="h-8 w-8 text-amber-500" />
              <span className="font-bold text-xl">Shyam Sundar Yadav</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Head of Production specializing in premium television and digital content. 
              Bringing stories to life through strategic production management and creative collaboration.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/projects" className="block text-gray-400 hover:text-amber-500 transition-colors">
                Recent Projects
              </Link>
              <Link to="/experience" className="block text-gray-400 hover:text-amber-500 transition-colors">
                Experience
              </Link>
              <a href="/contact" className="block text-gray-400 hover:text-amber-500 transition-colors">
                Get In Touch
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/kabeer0905/"
                className="p-2 bg-slate-800 rounded-lg hover:bg-amber-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shyam-sundar-yadav-49751311a/"
                className="p-2 bg-slate-800 rounded-lg hover:bg-amber-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://m.imdb.com/name/nm11978594/?ref_=nv_sr_srsg_1_tt_0_nm_8_in_0_q_Shyam%2520Ya"
                className="p-2 bg-slate-800 rounded-lg hover:bg-amber-500 transition-colors"
              >
                <Film className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/19gmcWRCN9/"
                className="p-2 bg-slate-800 rounded-lg hover:bg-amber-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Shyam Sundar Yadav. All rights reserved. | Portfolio designed & developed by Deepak Rana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;