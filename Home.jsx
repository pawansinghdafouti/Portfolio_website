import React from 'react';
import './Home.css'; // Import the CSS file for styling

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden animated-background">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-12 h-12 bg-white rounded-full opacity-75 blur-lg animate-float" style={{ top: '10%', left: '20%' }}></div>
        <div className="absolute w-16 h-16 bg-white rounded-full opacity-60 blur-md animate-float" style={{ top: '30%', left: '50%', animationDelay: '3s' }}></div>
        <div className="absolute w-8 h-8 bg-white rounded-full opacity-50 blur-sm animate-float" style={{ top: '60%', left: '70%', animationDelay: '6s' }}></div>
        <div className="absolute w-20 h-20 bg-white rounded-full opacity-40 blur-lg animate-float" style={{ top: '80%', left: '10%', animationDelay: '9s' }}></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
          <img
            src="https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-web-programmer-avatar-png-image_12529205.png"
            alt="Profile"
            className="w-full h-full object-cover bg-black"
          />
        </div>
        {/* Headline */}
        <h1 className="text-4xl font-bold text-gray-800 mt-6">
          Hello, I'm Pawan Singh
        </h1>
        <p className="text-xl text-gray-600 mt-2 text-center">
          A passionate <span className="text-blue-500">Web Developer</span> and{' '}
          <span className="text-blue-500">Designer</span>
        </p>
        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            View Portfolio
          </a>
          <a
            href="#resume"
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center px-6 py-12 md:px-20 lg:px-40"
      >
        <div className="w-full max-w-4xl mx-auto bg-white bg-opacity-75 rounded-lg p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Introduction
          </h2>
          <div className="bg-white shadow-md rounded-lg p-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Hello! I'm{' '}
              <span className="font-semibold text-blue-600">Pawan Singh</span>,
              a passionate and dedicated developer with a keen interest in
              crafting elegant and functional web applications. I thrive on
              solving problems and bringing ideas to life through code.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              With a strong foundation in{' '}
              <span className="font-semibold">HTML, CSS, JavaScript,</span> and
              frameworks like <span className="font-semibold">React</span>, I
              aim to create experiences that not only look great but also
              deliver exceptional usability.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and continuously learning to
              improve my skills. Let's build something amazing together!
            </p>
          </div>
        </div>
      </section>


      {/* About Me */}
      <section id="about-me" className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-200">
        <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I am a lifelong learner who loves building user-centric applications. Over the years, I’ve honed my
            skills in both front-end and back-end development. My ultimate goal is to create intuitive and
            accessible experiences for all users.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Apart from coding, I have a deep interest in UI/UX design, and I often experiment with new tools and
            techniques to improve my design aesthetics.
          </p>
        </div>
      </section>
    </div>
  );
}

