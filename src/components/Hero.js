import React from 'react';
import { AcademicCapIcon, DocumentTextIcon, LightBulbIcon, MicrophoneIcon } from '@heroicons/react/24/outline';

const Hero = ({ profile }) => {
  const stats = [
    { icon: DocumentTextIcon, value: '127', label: 'Publications' },
    { icon: AcademicCapIcon, value: '8,432', label: 'Citations' },
    { icon: LightBulbIcon, value: '23', label: 'Patents' },
    { icon: MicrophoneIcon, value: '45', label: 'Conference Talks' }
  ];

  return (
    <section id="overview" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 mb-12 shadow-lg border border-gray-200 relative">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src={profile?.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'} 
              alt={profile?.name || 'Profile'} 
              className="w-48 h-48 rounded-full border-4 border-primary-500 shadow-lg object-cover"
            />
            <div className="text-center md:text-left text-gray-800">
              <h1 className="text-4xl font-bold mb-2 text-gray-900">{profile?.name || 'Dr. Alex Chen'}</h1>
              <p className="text-xl text-primary-600 mb-2 font-semibold">{profile?.title || 'Senior Research Scientist | AI & Machine Learning'}</p>
              <p className="text-lg text-gray-600 mb-6">{profile?.affiliation || 'Stanford University & Google Research'}</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 12.179 14.978 11.5 12 11.5s-5.548.679-6.758 2.269zM12 13.5c2.33 0 4.24.475 5.5.975v1.025c0 1.105-.895 2-2 2H8.5c-1.105 0-2-.895-2-2v-1.025c1.26-.5 3.17-.975 5.5-.975z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button className="absolute bottom-6 right-6 bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors font-medium shadow-lg flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email Outreach</span>
          </button>
        </div>


      </div>
    </section>
  );
};

export default Hero;