import React from 'react';

const Navbar = ({ profile }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">{profile?.name || 'R&D Profile'}</h1>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <a href="#overview" className="text-gray-600 hover:text-primary-500 transition-colors">Overview</a>
            <a href="#career" className="text-gray-600 hover:text-primary-500 transition-colors">Career</a>
            <a href="#analytics" className="text-gray-600 hover:text-primary-500 transition-colors">Analytics</a>
            <a href="#github-analytics" className="text-gray-600 hover:text-primary-500 transition-colors">GitHub</a>
            <a href="#research" className="text-gray-600 hover:text-primary-500 transition-colors">Research</a>
            <a href="#publications" className="text-gray-600 hover:text-primary-500 transition-colors">Publications</a>
            <a href="#engagement" className="text-gray-600 hover:text-primary-500 transition-colors">Engagement</a>
          </div>
          <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium">
            Shortlist Candidate
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
