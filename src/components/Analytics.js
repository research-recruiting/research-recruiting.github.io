import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const githubData = [
    { month: 'Jan', commits: 45, prs: 12 },
    { month: 'Feb', commits: 52, prs: 15 },
    { month: 'Mar', commits: 38, prs: 8 },
    { month: 'Apr', commits: 67, prs: 23 },
    { month: 'May', commits: 73, prs: 18 },
    { month: 'Jun', commits: 89, prs: 25 },
    { month: 'Jul', commits: 95, prs: 32 },
    { month: 'Aug', commits: 78, prs: 28 },
    { month: 'Sep', commits: 82, prs: 22 },
    { month: 'Oct', commits: 91, prs: 35 },
    { month: 'Nov', commits: 67, prs: 19 },
    { month: 'Dec', commits: 85, prs: 27 }
  ];

  const publicationData = [
    { year: '2019', publications: 8 },
    { year: '2020', publications: 12 },
    { year: '2021', publications: 15 },
    { year: '2022', publications: 18 },
    { year: '2023', publications: 23 },
    { year: '2024', publications: 28 }
  ];

  const citationData = [
    { name: 'Top 10 Papers', value: 4500 },
    { name: 'Next 20 Papers', value: 2800 },
    { name: 'Other Papers', value: 1132 }
  ];



  const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6'];

  return (
    <section id="analytics" className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Research Analytics</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">GitHub Activity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={githubData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="month" stroke="rgba(0,0,0,0.7)" />
                <YAxis stroke="rgba(0,0,0,0.7)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.9)', 
                    border: 'none', 
                    borderRadius: '8px' 
                  }} 
                />
                <Legend />
                <Line type="monotone" dataKey="commits" stroke="#3b82f6" strokeWidth={3} />
                <Line type="monotone" dataKey="prs" stroke="#6366f1" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Publication Timeline</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={publicationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="year" stroke="rgba(0,0,0,0.7)" />
                <YAxis stroke="rgba(0,0,0,0.7)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.9)', 
                    border: 'none', 
                    borderRadius: '8px' 
                  }} 
                />
                <Bar dataKey="publications" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Citation Impact</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={citationData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {citationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.9)', 
                    border: 'none', 
                    borderRadius: '8px' 
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Analytics;