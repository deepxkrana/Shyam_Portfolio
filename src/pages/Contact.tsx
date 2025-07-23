import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Film, Send, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('xvgqkzgz'); // Formspree form ID
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Track form submission state
  if (state.succeeded && !isSubmitted) {
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shyam4.uts@gmail.com",
      link: "https://mail.google.com/mail/?extsrc=mailto&url=mailto:shyam4.uts@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9004607606",
      link: null
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dahisar, Mumbai, MH",
      link: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/shyamsundaryadav",
      link: "https://www.linkedin.com/in/shyam-sundar-yadav-49751311a/"
    }
  ];

  const projectTypes = [
    "Drama Series",
    "Limited Series",
    "Documentary",
    "Reality Show",
    "Digital Content",
    "International Co-Production",
    "Other"
  ];

  const budgetRanges = [
    "Under ₹40L",
    "₹40L - ₹80L",
    "₹80L - ₹1.5Cr",
    "₹1.5Cr - ₹4Cr",
    "₹4Cr+",
    "To be determined"
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
          <h1 className="text-5xl font-bold mb-6">Let's Create Together</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next television or digital media project to life? 
            Let's discuss how strategic production management can make the difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">Start Your Project</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-500 rounded-lg p-8 text-center"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-500 mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} action="https://formspree.io/f/xvgqkzgz" method="POST" className="space-y-6"> {/* Formspree form action */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your full name"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      pattern="^[+]?[0-9\s-()]{10,}$"
                      title="Please enter a valid phone number"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="+91 1234567890"
                    />
                    <ValidationError 
                      prefix="Phone" 
                      field="phone"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Your company or organization name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 transition-colors text-gray-300"
                      required
                      aria-required="true"
                    >
                      <option value="" disabled selected>Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 transition-colors text-gray-300"
                      required
                      aria-required="true"
                    >
                      <option value="" disabled selected>Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Timeline *
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="e.g., 3 months, Q2 2024"
                    required
                    minLength={3}
                    pattern=".{3,}"
                    title="Please enter a valid timeline (minimum 3 characters)"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    required
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full md:w-auto flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-200 shadow-lg hover:shadow-xl ${state.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {state.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you're a network executive, producer, or content creator, I'm always interested 
                in discussing new opportunities and innovative projects. Let's explore how we can work together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-200">
                    <div className="p-3 bg-amber-500/20 rounded-lg">
                      <IconComponent className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{info.title}</h3>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                );

                return info.link ? (
                  <a key={info.title} href={info.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.title}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Additional Links */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Professional Profiles</h3>
              <div className="space-y-3">
                <a
                  href="https://m.imdb.com/name/nm11978594/?ref_=nv_sr_srsg_1_tt_0_nm_8_in_0_q_Shyam%2520Ya"
                  className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-colors"
                >
                  <Film className="h-5 w-5" />
                  <span>IMDb Profile</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shyam-sundar-yadav-49751311a/"
                  className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-amber-500 mb-2">Quick Response</h3>
              <p className="text-gray-300">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                please call directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;