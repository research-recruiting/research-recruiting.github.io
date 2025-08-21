import React from 'react';

const Engagement = ({ profile }) => {
  const talks = profile?.talks || [];
  const twitterThemes = profile?.twitterThemes || [];
  const blogPosts = profile?.blogPosts || [];

  return (
    <section id="engagement" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Research Engagement</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Conference Presentations</h3>
            <div className="space-y-4">
              {talks.map((talk, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h4 className="font-semibold text-gray-900 mb-1">{talk.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{talk.description}</p>
                  <span className="text-primary-600 text-sm font-medium">{talk.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Twitter Insights</h3>
            <div className="space-y-3">
              {twitterThemes.map((theme, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="text-gray-900 font-medium">{theme.theme}</span>
                  <span className="text-primary-600 font-semibold">{theme.count} tweets</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Blog Posts</h3>
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                  <span className="text-primary-600 text-sm font-medium">{post.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagement;