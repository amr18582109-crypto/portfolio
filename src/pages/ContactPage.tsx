import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, MapPin, Send } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amr18582109@gmail.com",
      href: "mailto:amr18582109@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/amr18582109-crypto",
      href: "https://github.com/amr18582109-crypto"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      href: null
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-[Playfair_Display] text-5xl md:text-7xl font-bold mb-4">
              Let's Work Together
            </h1>
            <p className="font-[DM_Sans] text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's build something great.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-[DM_Sans] text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111] border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#800020] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-[DM_Sans] text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111] border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#800020] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-[DM_Sans] text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111] border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#800020] transition-colors"
                  placeholder="Project discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-[DM_Sans] text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#111] border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#800020] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#800020] text-white px-8 py-3 rounded-xl font-[DM_Sans] font-medium hover:bg-[#900020] transition-colors"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="bg-[#111] border-t-4 border-[#800020] rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(128,0,32,0.3)]">
                  <Icon className="text-[#800020] mb-4" size={24} />
                  <h3 className="font-[DM_Sans] font-semibold text-white mb-2">{info.label}</h3>
                  <p className="font-[DM_Sans] text-gray-400 text-sm">{info.value}</p>
                </div>
              );

              if (info.href) {
                return (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={index}>{content}</div>;
            })}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
