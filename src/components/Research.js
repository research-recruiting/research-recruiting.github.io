import React from 'react';

const Research = ({ profile }) => {
  const researchAreas = profile?.researchAreas || [];

  return (
    <section id="research" className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Key Research Areas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{area.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {area.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full border border-primary-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;