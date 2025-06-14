import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Eugene Nunoo - Fullstack Web Developer</title>
        <meta
          name="description"
          content="Fullstack Web Developer crafting digital experiences with modern technologies"
        />
        <meta name="keywords" content="Eugene Nunoo, Portfolio, React Developer, Full Stack Developer, Web Developer" />
        <meta property="og:title" content="Eugene Nunoo | Full Stack Developer" />
        <meta property="og:description" content="Explore my projects and experience as a full stack developer." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/preview.png" />
        <meta property="og:url" content="https://eugene-nunoo.prostash.site/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://eugene-nunoo.prostash.site/" />

      </Helmet>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;