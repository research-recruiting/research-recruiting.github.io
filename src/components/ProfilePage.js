import React, { useEffect } from 'react';
import { profilesData, biochemistryProfilesData, materialsProfilesData } from '../data/profilesConfig';
import Navbar from './Navbar';
import Hero from './Hero';
import AnalyticsOverview from './AnalyticsOverview';
import KeyMetrics from './KeyMetrics';
import Career from './Career';
import Analytics from './Analytics';
import AdvancedAnalytics from './AdvancedAnalytics';
import GitHubAnalytics from './GitHubAnalytics';
import Research from './Research';
import Publications from './Publications';
import Engagement from './Engagement';

const ProfilePage = ({ profileId, onBack }) => {
  const profile = profilesData[profileId] || biochemistryProfilesData[profileId] || materialsProfilesData[profileId] || profilesData[1];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [profileId]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <Navbar profile={profile} />
      <main className="pt-16">
        {/* Floating Back Button */}
        <button 
          onClick={onBack}
          className="fixed top-20 left-6 z-50 bg-white/90 backdrop-blur-md text-primary-600 hover:text-primary-700 font-medium px-4 py-2 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200"
        >
          ← Back to Results
        </button>
        
        <Hero profile={profile} />
        <AnalyticsOverview profile={profile} />
        <KeyMetrics profile={profile} />
        <Career profile={profile} />
        <Engagement profile={profile} />
        <Research profile={profile} />
        <Publications profile={profile} />
        {/* <Analytics /> */}
        {/* <AdvancedAnalytics /> */}
        {/* <GitHubAnalytics /> */}
      </main>
    </div>
  );
};

export default ProfilePage;