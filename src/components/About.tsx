import React from 'react';
import { Server, Database, Globe, Cloud } from 'lucide-react';
import Profile from '../profile.jpg';

const About = () => {
  const skills = [
    {
      category: "Backend",
      icon: <Server className="h-8 w-8" />,
      technologies: ["Django", "FastAPI", "Node.js"],
      color: "from-green-400 to-blue-500"
    },
    {
      category: "Frontend",
      icon: <Globe className="h-8 w-8" />,
      technologies: ["React.js", "Vue.js", "TypeScript"],
      color: "from-blue-400 to-purple-500"
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8" />,
      technologies: ["MongoDB", "PostgreSQL", "Redis"],
      color: "from-purple-400 to-pink-500"
    },
    {
      category: "DevOps",
      icon: <Cloud className="h-8 w-8" />,
      technologies: ["Digital Ocean", "Docker", "CI/CD"],
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate fullstack developer with expertise in building scalable web applications. 
            I love working with modern technologies and creating solutions that make a difference.
          </p>
        </div>

        {/* Profile Image Section */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Eugene Nunoo - Fullstack Web Developer"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{skill.category}</h3>
              <div className="space-y-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              My Development Philosophy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I believe in writing clean, maintainable code that scales. My approach combines 
              modern development practices with user-centered design to create applications 
              that are not only functional but also delightful to use.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">User-Focused</h4>
                <p className="text-gray-600 text-sm">Building with the end user in mind</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Scalable</h4>
                <p className="text-gray-600 text-sm">Architecting for growth and performance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Innovative</h4>
                <p className="text-gray-600 text-sm">Embracing new technologies and patterns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;