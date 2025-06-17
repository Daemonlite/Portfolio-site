import React from 'react';
import { ExternalLink, Github, Zap, Shield, Smartphone } from 'lucide-react';
import EcomImg from '../Screenshot 2025-06-14 130949.png';
import Property from '../property-dash.png';

const Projects = () => {
  const projects = [
    {
      title: "Multi Store Inventory Management System",
      description: "A multi-store inventory management system built with Django and Vuejs. Includes inventory tracking, order management, and real-time stock updates for multiple stores.",
      image: "https://pbs.twimg.com/media/GsGH894WgAAn_-R?format=jpg&name=small",
      technologies: ["Django", "Vuejs", "PostgreSQL", "Digital Ocean"],
      liveUrl: "https://prostash.site/",
      githubUrl: "https://github.com/eugenenunn/ecommerce-platform",
      icon: <Zap className="h-6 w-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Ecommerce Platform",
      description: "A complete ecommerce platform built with Reactjs and Django. Includes user authentication, product management, and order processing.",
      image: EcomImg,
      technologies: ["React.js", "Django", "Postgresql", "WebSocket"],
      liveUrl: "https://ecom.prostash.site/",
      githubUrl: "https://github.com/eugenenunn/task-management-api",
      icon: <Shield className="h-6 w-6" />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Property Managaement System",
      description: "A property management system built with Reactjs and Django. Includes user authentication, property management, and building management and tracking.",
      image: Property,
      technologies: ["React.js", "Django", "Postgresql", "WebSocket"],
      liveUrl: "https://property-managment-front.onrender.com/",
      githubUrl: "https://github.com/eugenenunn/property-management-system",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-orange-500 to-amber-600"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in fullstack development
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-semibold transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Daemonlite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;