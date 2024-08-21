import React from 'react';
import CountUp from 'react-countup';

const StudentsTrained = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center my-20 justify-around bg-black text-white p-6 md:p-12 shadow-xl overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Empowering Future Leaders</h2>
        
        {/* Description */}
        <p className="text-base md:text-lg mb-6">
          Over the past few years, I have had the privilege of training over 100 dedicated students in the field of web development.
          My training sessions emphasize hands-on learning, equipping students with the skills to build real-world projects from scratch.
          Every student leaves with a comprehensive understanding of modern web technologies and the confidence to pursue their career goals.
        </p>
        
        {/* Key Highlights */}
        <ul className="list-disc pl-5 mb-6 space-y-2 text-left">
          <li className="leading-relaxed">Comprehensive curriculum covering HTML, CSS, JavaScript, and React.</li>
          <li className="leading-relaxed">Real-world projects and case studies to enhance practical knowledge.</li>
          <li className="leading-relaxed">Personalized mentorship and guidance throughout the learning journey.</li>
          <li className="leading-relaxed">Certificate of completion for every participant, recognized by industry professionals.</li>
        </ul>

        {/* Call to Action */}
        <a href="#contact" className="inline-block px-4 py-2 md:px-6 md:py-3 bg-primary-color text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition">
          Join the Next Batch
        </a>
      </div>

      {/* Glowing Counter */}
      <div className="relative z-10 flex-1 mt-8 md:mt-0 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Students Trained</h3>
        <div className="text-5xl md:text-6xl font-extrabold primary-color glow">
          <CountUp
            start={0}
            end={100}  // Number of students
            duration={4}  // Duration of the animation in seconds
            separator=","
          />
          +
        </div>
      </div>
    </section>
  );
};

export default StudentsTrained;
