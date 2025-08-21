import React from 'react';

const Publications = ({ profile }) => {
  const publications = profile?.publications || [];

  return (
    <section id="publications" className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Recent Publications</h2>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-primary-600 font-medium mb-1">{pub.authors}</p>
                  <p className="text-gray-600 mb-3">{pub.venue}</p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>📊 {pub.citations} citations</span>
                    <span>⬇️ {pub.downloads} downloads</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                    PDF
                  </button>
                  <button className="px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors">
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;