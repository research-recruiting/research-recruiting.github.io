import React from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdvancedAnalytics = () => {
  // Career progression data
  const careerData = [
    { year: 2016, role: 'ML Engineer', level: 1, salary: 120, publications: 2 },
    { year: 2017, role: 'ML Engineer', level: 2, salary: 140, publications: 4 },
    { year: 2018, role: 'Research Scientist', level: 3, salary: 180, publications: 8 },
    { year: 2019, role: 'Research Scientist', level: 4, salary: 200, publications: 12 },
    { year: 2020, role: 'Senior Research Scientist', level: 5, salary: 250, publications: 18 },
    { year: 2021, role: 'Senior Research Scientist', level: 6, salary: 280, publications: 23 },
    { year: 2022, role: 'Senior Research Scientist', level: 6, salary: 300, publications: 28 },
    { year: 2023, role: 'Senior Research Scientist', level: 7, salary: 320, publications: 35 },
    { year: 2024, role: 'Senior Research Scientist', level: 7, salary: 350, publications: 42 }
  ];

  // Research impact over time
  const impactData = [
    { year: 2016, citations: 45, hIndex: 3, collaborators: 8 },
    { year: 2017, citations: 120, hIndex: 5, collaborators: 15 },
    { year: 2018, citations: 280, hIndex: 8, collaborators: 25 },
    { year: 2019, citations: 520, hIndex: 12, collaborators: 35 },
    { year: 2020, citations: 890, hIndex: 18, collaborators: 48 },
    { year: 2021, citations: 1450, hIndex: 25, collaborators: 62 },
    { year: 2022, citations: 2200, hIndex: 32, collaborators: 78 },
    { year: 2023, citations: 3100, hIndex: 38, collaborators: 95 },
    { year: 2024, citations: 4200, hIndex: 45, collaborators: 112 }
  ];

  // Skills evolution
  const skillsData = [
    { skill: 'Deep Learning', 2020: 85, 2021: 90, 2022: 93, 2023: 96, 2024: 98 },
    { skill: 'Computer Vision', 2020: 80, 2021: 85, 2022: 88, 2023: 92, 2024: 95 },
    { skill: 'NLP', 2020: 70, 2021: 78, 2022: 85, 2023: 90, 2024: 94 },
    { skill: 'MLOps', 2020: 60, 2021: 70, 2022: 80, 2023: 85, 2024: 90 },
    { skill: 'Research Leadership', 2020: 65, 2021: 75, 2022: 82, 2023: 88, 2024: 92 }
  ];

  // Conference and networking data
  const networkData = [
    { conference: 'NeurIPS', papers: 8, citations: 1200, networking: 95 },
    { conference: 'ICML', papers: 6, citations: 980, networking: 88 },
    { conference: 'ICLR', papers: 5, citations: 750, networking: 82 },
    { conference: 'CVPR', papers: 4, citations: 650, networking: 78 },
    { conference: 'AAAI', papers: 3, citations: 420, networking: 65 }
  ];

  return (
    <section id="advanced-analytics" className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Advanced Career Analytics</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Career Progression */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Career Progression</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={careerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="year" stroke="rgba(0,0,0,0.7)" />
                <YAxis stroke="rgba(0,0,0,0.7)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '8px' }} />
                <Legend />
                <Area type="monotone" dataKey="publications" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="level" stackId="2" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Research Impact */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Research Impact Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={impactData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="year" stroke="rgba(0,0,0,0.7)" />
                <YAxis stroke="rgba(0,0,0,0.7)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '8px' }} />
                <Legend />
                <Line type="monotone" dataKey="citations" stroke="#3b82f6" strokeWidth={3} />
                <Line type="monotone" dataKey="hIndex" stroke="#6366f1" strokeWidth={3} />
                <Line type="monotone" dataKey="collaborators" stroke="#8b5cf6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Evolution Heatmap */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Skills Evolution</h3>
            <div className="space-y-4">
              {skillsData.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                    <span className="text-sm text-gray-500">{skill[2024]}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill[2024]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conference Impact Scatter */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Conference Impact vs Papers</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={networkData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="papers" stroke="rgba(0,0,0,0.7)" name="Papers" />
                <YAxis dataKey="citations" stroke="rgba(0,0,0,0.7)" name="Citations" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '8px' }}
                  formatter={(value, name) => [value, name]}
                  labelFormatter={(label) => `Conference: ${networkData.find(d => d.papers === label)?.conference || ''}`}
                />
                <Scatter dataKey="citations" fill="#3b82f6" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAnalytics;