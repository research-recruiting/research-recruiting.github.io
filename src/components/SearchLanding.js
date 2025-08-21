import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchLanding = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Find R&D Talent</h1>
        <p className="text-xl text-gray-600 mb-12">Search for researchers, engineers, and innovators using natural language or job descriptions</p>

        <form onSubmit={handleSubmit} className="relative mb-8">
          <div className="relative">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe the ideal candidate or paste a job description..."
              className="w-full h-32 px-6 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none shadow-lg"
              rows={4}
            />
            <button
              type="submit"
              className="absolute bottom-4 right-4 bg-primary-500 text-white p-3 rounded-xl hover:bg-primary-600 transition-colors shadow-lg"
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
          </div>
        </form>

        <div className="text-sm text-gray-500 space-y-2">
          <p>Try examples like:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setQuery("Senior ML researcher with computer vision expertise and 5+ years experience")}
              className="px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-primary-300 transition-colors"
            >
              "<span className="font-semibold text-blue-600">Senior ML researcher</span> with computer vision expertise"
            </button>
            <button
              onClick={() => setQuery("Biochemist with protein engineering experience and drug discovery background")}
              className="px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-primary-300 transition-colors"
            >
              "<span className="font-semibold text-green-600">Biochemist</span> with protein engineering expertise"
            </button>
            <button
              onClick={() => setQuery("Materials scientist with nanomaterials and battery technology expertise")}
              className="px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-primary-300 transition-colors"
            >
              "<span className="font-semibold text-purple-600">Materials scientist</span> with nanomaterials expertise"
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLanding;
