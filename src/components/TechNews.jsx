import React from 'react';
import next from '../assets/nextjs.webp';
import nest from '../assets/nest2.png';
import react from '../assets/react.png';

const TechNews = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-start justify-between bg-black p-8 md:p-12 shadow-lg">
      {/* Images Section */}
      <div className="relative z-10 flex flex-col items-center md:items-start space-y-6 md:space-y-8 w-full md:w-1/2">
        {/* Image 1 - Top */}
        <div className="relative w-full max-w-xs lg:max-w-sm h-40 lg:h-48 rounded-lg overflow-hidden shadow-lg md:ml-20 sm:ml-0">
          <img 
            src={next} 
            alt="Tech News 1" 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row md:ml-9 gap-6 sm:gap-4">
          {/* Image 2 */}
          <div className="relative w-full max-w-xs lg:max-w-sm h-40 lg:h-48 rounded-lg overflow-hidden shadow-lg sm:w-1/2">
            <img 
              src={nest} 
              alt="Tech News 2" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Image 3 */}
          <div className="relative w-full max-w-xs lg:max-w-sm h-40 lg:h-48 rounded-lg overflow-hidden shadow-lg sm:w-1/2 md:ml-6">
            <img 
              src={react}
              alt="Tech News 3" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex-1 mt-8 md:mt-0 text-center md:text-left md:ml-8 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Tech News</h2>
        <p className="text-lg mb-6">
          Stay updated with the latest developments in technology. From cutting-edge innovations to trends in the tech world, we bring you the news that matters.
        </p>
        <p className="text-md mb-4">
          <strong>Next.js:</strong> Next.js 13 introduces powerful new features like server components and TurboPack, making it easier to build high-performance applications.
        </p>
        <p className="text-md mb-4">
          <strong>NestJS:</strong> NestJS continues to gain popularity with its powerful, extensible framework for building scalable server-side applications.
        </p>
        <p className="text-md">
          <strong>React:</strong> React 18 brings concurrent features, making your applications faster and more responsive.
        </p>
      </div>
    </section>
  );
};

export default TechNews;
