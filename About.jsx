// import React from 'react';

// const About = () => {
//   const skills = [
//     { name: 'HTML', level: '90%' },
//     { name: 'CSS', level: '85%' },
//     { name: 'JavaScript', level: '80%' },
//     { name: 'React', level: '75%' },
//     { name: 'SQL', level: '70%' },
//     { name: 'Tailwind Css', level: '70%' },
//   ];

//   const softSkills = ['Communication', 'Teamwork', 'Leadership'];

//   return (
//     <section className="bg-gray-100 py-12 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           About Me
//         </h1>

//         {/* Introduction */}
//         <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center">
//           Hello! I'm an aspiring technical support professional passionate about problem-solving, learning new technologies, and delivering solutions that make a difference.
//         </p>

//         {/* Skills Section */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//             Technical Skills
//           </h2>
//           {skills.map((skill, index) => (
//             <div key={index} className="mb-4">
//               <div className="flex justify-between">
//                 <span className="text-gray-700">{skill.name}</span>
//                 <span className="text-gray-600">{skill.level}</span>
//               </div>
//               <div className="w-full bg-gray-300 h-4 rounded-lg overflow-hidden">
//                 <div
//                   className="bg-blue-500 h-4 rounded-lg"
//                   style={{ width: skill.level }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Soft Skills Section */}
//         <div>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//             Soft Skills
//           </h2>
//           <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
//             {softSkills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  const skills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '75%' },
    { name: 'SQL', level: '70%' },
    { name: 'Tailwind Css', level: '70%' },
  ];

  const softSkills = ['Communication', 'Teamwork', 'Leadership'];

  return (
    <section className="animated-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-black mb-8">
          My Skills
        </h1>

        {/* Introduction */}
        <p className="text-gray-800 text-lg leading-relaxed mb-10 text-center">
          Hello! I'm an aspiring technical support professional passionate about problem-solving, learning new technologies, and delivering solutions that make a difference.
        </p>

        {/* Skills Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Technical Skills
          </h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="text-gray-800">{skill.name}</span>
                <span className="text-gray-600">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-300 h-4 rounded-lg overflow-hidden">
                <div
                  className="bg-blue-500 h-4 rounded-lg"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Soft Skills
          </h2>
          <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

