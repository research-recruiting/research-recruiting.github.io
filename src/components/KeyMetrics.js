import React from 'react';
import { AcademicCapIcon, DocumentTextIcon, LightBulbIcon, MicrophoneIcon, CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline';

const KeyMetrics = ({ profile }) => {
  const defaultStats = [
    { icon: DocumentTextIcon, value: '127', label: 'Publications' },
    { icon: AcademicCapIcon, value: '8,432', label: 'Citations' },
    { icon: LightBulbIcon, value: '23', label: 'Patents' },
    { icon: MicrophoneIcon, value: '45', label: 'Conference Talks' },
    { icon: CodeBracketIcon, value: '2.4M+', label: 'GitHub Commits' },
    { icon: StarIcon, value: '8.9K', label: 'GitHub Stars' }
  ];
  
  const stats = profile?.stats ? profile.stats.map((stat, index) => ({
    icon: defaultStats[index]?.icon || DocumentTextIcon,
    value: stat.value,
    label: stat.label
  })) : defaultStats;

  return (
    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Key Metrics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-500" />
              <h3 className="text-3xl font-bold mb-2 text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;