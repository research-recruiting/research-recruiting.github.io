import React from 'react';
import { searchResultsProfiles, biochemistryProfiles, materialsProfiles } from '../data/profilesConfig';

const SearchResults = ({ query, onProfileClick, onNewSearch }) => {
  // Determine which profiles to show based on search query
  const isBiochemistryQuery = query.toLowerCase().includes('biochem') || 
                             query.toLowerCase().includes('protein') || 
                             query.toLowerCase().includes('drug') || 
                             query.toLowerCase().includes('biotech') ||
                             query.toLowerCase().includes('molecular') ||
                             query.toLowerCase().includes('pharmaceutical');
  
  const isMaterialsQuery = query.toLowerCase().includes('material') ||
                          query.toLowerCase().includes('nanomaterial') ||
                          query.toLowerCase().includes('semiconductor') ||
                          query.toLowerCase().includes('composite') ||
                          query.toLowerCase().includes('battery') ||
                          query.toLowerCase().includes('quantum material');
  
  const profiles = isMaterialsQuery ? materialsProfiles : 
                  isBiochemistryQuery ? biochemistryProfiles : 
                  searchResultsProfiles;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Search Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Results</h1>
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 mb-6">
            <p className="text-gray-700 italic">"{query}"</p>
          </div>
          <button 
            onClick={onNewSearch}
            className="text-primary-600 hover:text-primary-700 font-medium text-lg"
          >
            ← New Search
          </button>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {profiles.map((profile) => (
            <div 
              key={profile.id}
              onClick={() => onProfileClick(profile.id)}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Match Score Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {profile.matchScore}% Match
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onProfileClick(profile.id);
                  }}
                  className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm"
                >
                  Details
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex items-center gap-6 mb-6">
                <img 
                  src={profile.image}
                  alt={profile.name}
                  className="w-24 h-24 rounded-full border-4 border-primary-500 shadow-lg object-cover"
                />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h3>
                  <p className="text-lg text-primary-600 font-semibold mb-1">{profile.title}</p>
                  <p className="text-gray-600">{profile.affiliation}</p>
                </div>
              </div>

              {/* Strengths and Weaknesses */}
              <div className="space-y-2">
                {profile.strengths?.map((strength, index) => (
                  <div key={`strength-${index}`} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{strength}</span>
                  </div>
                ))}
                {profile.weaknesses?.map((weakness, index) => (
                  <div key={`weakness-${index}`} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{weakness}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;