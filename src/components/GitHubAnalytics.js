import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GitHubAnalytics = () => {
  // Contribution activity over time
  const contributionData = [
    { month: 'Jan', commits: 145, prs: 32, issues: 18, reviews: 45 },
    { month: 'Feb', commits: 162, prs: 28, issues: 22, reviews: 52 },
    { month: 'Mar', commits: 138, prs: 35, issues: 15, reviews: 38 },
    { month: 'Apr', commits: 187, prs: 41, issues: 29, reviews: 63 },
    { month: 'May', commits: 203, prs: 38, issues: 24, reviews: 58 },
    { month: 'Jun', commits: 189, prs: 45, issues: 31, reviews: 67 },
    { month: 'Jul', commits: 225, prs: 52, issues: 19, reviews: 72 },
    { month: 'Aug', commits: 198, prs: 48, issues: 26, reviews: 69 },
    { month: 'Sep', commits: 212, prs: 42, issues: 33, reviews: 61 },
    { month: 'Oct', commits: 241, prs: 55, issues: 28, reviews: 78 },
    { month: 'Nov', commits: 167, prs: 39, issues: 21, reviews: 54 },
    { month: 'Dec', commits: 185, prs: 47, issues: 25, reviews: 65 }
  ];

  // Language usage distribution
  const languageData = [
    { name: 'Python', value: 45, lines: 125000 },
    { name: 'JavaScript', value: 25, lines: 68000 },
    { name: 'TypeScript', value: 15, lines: 42000 },
    { name: 'C++', value: 10, lines: 28000 },
    { name: 'Other', value: 5, lines: 14000 }
  ];

  // Repository metrics
  const repoData = [
    { name: 'neural-networks', stars: 2400, forks: 340, contributors: 28, commits: 1250 },
    { name: 'ml-toolkit', stars: 1800, forks: 220, contributors: 15, commits: 890 },
    { name: 'vision-transformer', stars: 3200, forks: 480, contributors: 42, commits: 1680 },
    { name: 'nlp-research', stars: 1500, forks: 180, contributors: 12, commits: 720 },
    { name: 'data-pipeline', stars: 950, forks: 120, contributors: 8, commits: 450 }
  ];

  // Code quality metrics over time
  const qualityData = [
    { month: 'Jan', coverage: 85, complexity: 3.2, bugs: 12, security: 95 },
    { month: 'Feb', coverage: 87, complexity: 3.1, bugs: 8, security: 96 },
    { month: 'Mar', coverage: 89, complexity: 2.9, bugs: 6, security: 97 },
    { month: 'Apr', coverage: 91, complexity: 2.8, bugs: 4, security: 98 },
    { month: 'May', coverage: 92, complexity: 2.7, bugs: 3, security: 98 },
    { month: 'Jun', coverage: 94, complexity: 2.6, bugs: 2, security: 99 }
  ];

  const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef'];

  return (
    <section id="github-analytics" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">GitHub Analytics</h2>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">2.4M+</div>
            <div className="text-gray-600">Total Commits</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">8.9K</div>
            <div className="text-gray-600">Stars Earned</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">1.3K</div>
            <div className="text-gray-600">Forks</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">147</div>
            <div className="text-gray-600">Contributors</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Contribution Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Monthly Activity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={contributionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="month" stroke="rgba(0,0,0,0.7)" />
                <YAxis stroke="rgba(0,0,0,0.7)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '8px' }} />
                <Legend />
                <Area type="monotone" dataKey="commits" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="prs" stackId="1" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
                <Area type="monotone" dataKey="reviews" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Language Distribution */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Language Usage</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={languageData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {languageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '8px' }}
                  formatter={(value, name) => [`${value}% (${languageData.find(d => d.value === value)?.lines.toLocaleString()} lines)`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Repository Performance */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Top Repositories</h3>
            <div className="space-y-4">
              {repoData.map((repo, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div>
                    <h4 className="font-semibold text-gray-900">{repo.name}</h4>
                    <div className="flex gap-4 text-sm text-gray-600 mt-1">
                      <span>⭐ {repo.stars}</span>
                      <span>🍴 {repo.forks}</span>
                      <span>👥 {repo.contributors}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-primary-600">{repo.commits}</div>
                    <div className="text-sm text-gray-500">commits</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Quality Trends */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Code Quality Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={qualityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="month" stroke="rgba(0,0,0,0.7)" />
                <YAxis stroke="rgba(0,0,0,0.7)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '8px' }} />
                <Legend />
                <Line type="monotone" dataKey="coverage" stroke="#3b82f6" strokeWidth={3} name="Test Coverage %" />
                <Line type="monotone" dataKey="security" stroke="#10b981" strokeWidth={3} name="Security Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubAnalytics;