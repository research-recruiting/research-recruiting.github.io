import React, { useState } from 'react';
import SearchLanding from './components/SearchLanding';
import SearchResults from './components/SearchResults';
import ProfilePage from './components/ProfilePage';

function App() {
  const [currentView, setCurrentView] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProfileId, setSelectedProfileId] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentView('results');
  };

  const handleProfileClick = (profileId) => {
    setSelectedProfileId(profileId);
    setCurrentView('profile');
  };

  const handleNewSearch = () => {
    setCurrentView('search');
    setSearchQuery('');
  };

  const handleBackToResults = () => {
    setCurrentView('results');
  };

  if (currentView === 'search') {
    return <SearchLanding onSearch={handleSearch} />;
  }

  if (currentView === 'results') {
    return (
      <SearchResults 
        query={searchQuery}
        onProfileClick={handleProfileClick}
        onNewSearch={handleNewSearch}
      />
    );
  }

  return (
    <ProfilePage 
      profileId={selectedProfileId}
      onBack={handleBackToResults}
    />
  );
}

export default App;
