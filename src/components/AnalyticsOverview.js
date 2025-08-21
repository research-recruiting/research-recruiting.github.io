import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const CustomTick = ({ payload, x, y, textAnchor, stroke, radius }) => {
  const lines = payload.value.split('\n');
  return (
    <g className="recharts-layer recharts-polar-angle-axis-tick">
      <text x={x} y={y} textAnchor={textAnchor} fill="rgba(0,0,0,0.7)" fontSize="10" fontWeight="700">
        {lines.map((line, index) => (
          <tspan key={index} x={x} dy={index === 0 ? 0 : 12}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
};

const AnalyticsOverview = ({ profile }) => {
  const jdMatchScore = profile?.jdMatchScore || 87;

  // Generate contextual skills data based on profile
  const getSkillsData = (profile) => {
    if (!profile) return [
      { subject: 'NLP', A: 78 },
      { subject: 'Deep Learning', A: 95 },
      { subject: 'CV', A: 85 },
      { subject: 'Robotics', A: 45 },
      { subject: 'AI Ethics', A: 67 },
      { subject: 'MLOps', A: 72 }
    ];

    // AI/ML profiles
    if (profile.id === 1) return [
      { subject: 'NLP', A: 69 },
      { subject: 'Deep Learning', A: 88 },
      { subject: 'CV', A: 74 },
      { subject: 'Transformers', A: 82 },
      { subject: 'AI Ethics', A: 58 },
      { subject: 'MLOps', A: 65 }
    ];
    if (profile.id === 2) return [
      { subject: 'AR/VR', A: 84 },
      { subject: 'Computer\nVision', A: 91 },
      { subject: 'Deep\nLearning', A: 77 },
      { subject: 'Mobile\nAI', A: 79 },
      { subject: 'Edge\nComputing', A: 66 },
      { subject: 'Object\nDetection', A: 86 }
    ];
    if (profile.id === 3) return [
      { subject: 'NLP', A: 92 },
      { subject: 'LLMs', A: 87 },
      { subject: 'Machine\nTranslation', A: 81 },
      { subject: 'Deep\nLearning', A: 73 },
      { subject: 'AI\nSafety', A: 76 },
      { subject: 'Reasoning', A: 83 }
    ];
    if (profile.id === 4) return [
      { subject: 'Robotics', A: 89 },
      { subject: 'Autonomous\nSystems', A: 85 },
      { subject: 'Reinforcement\nLearning', A: 78 },
      { subject: 'Computer\nVision', A: 71 },
      { subject: 'Control\nSystems', A: 76 },
      { subject: 'Real-time\nSystems', A: 68 }
    ];

    // Biochemistry profiles
    if (profile.id === 5) return [
      { subject: 'Bioinformatics', A: 61 },
      { subject: 'Protein\nEngineering', A: 87 },
      { subject: 'CRISPR\nTechnology', A: 78 },
      { subject: 'Antibody\nDevelopment', A: 82 },
      { subject: 'Molecular\nBiology', A: 74 },
      { subject: 'Drug\nDiscovery', A: 67 }
    ];
    if (profile.id === 6) return [
      { subject: 'Structural\nBiology', A: 90 },
      { subject: 'Cryo-EM\nImaging', A: 85 },
      { subject: 'mRNA\nTherapeutics', A: 79 },
      { subject: 'Crystal\nStructures', A: 76 },
      { subject: 'Drug\nDiscovery', A: 69 },
      { subject: 'Vaccine\nDevelopment', A: 72 }
    ];
    if (profile.id === 7) return [
      { subject: 'Metabolomics', A: 86 },
      { subject: 'Mass\nSpectrometry', A: 81 },
      { subject: 'Biomarker\nDiscovery', A: 77 },
      { subject: 'Cancer\nBiology', A: 73 },
      { subject: 'Clinical\nResearch', A: 64 },
      { subject: 'Data\nAnalysis', A: 68 }
    ];
    if (profile.id === 8) return [
      { subject: 'Bioengineering', A: 79 },
      { subject: 'Synthetic\nBiology', A: 88 },
      { subject: 'Metabolic\nEngineering', A: 83 },
      { subject: 'Biofuel\nProduction', A: 74 },
      { subject: 'Systems\nBiology', A: 70 },
      { subject: 'Entrepreneur\nship', A: 76 }
    ];
    if (profile.id === 9) return [
      { subject: 'Immunology', A: 85 },
      { subject: 'CAR-T\nTherapy', A: 81 },
      { subject: 'Immuno\ntherapy', A: 79 },
      { subject: 'T Cell\nBiology', A: 76 },
      { subject: 'Cancer\nImmunology', A: 72 },
      { subject: 'Clinical\nTrials', A: 65 }
    ];

    // Materials Science profiles
    if (profile.id === 10) return [
      { subject: 'Synthesis', A: 80 },
      { subject: 'Nano\nmaterials', A: 88 },
      { subject: 'Battery\nTechnology', A: 84 },
      { subject: 'Character\nization', A: 76 },
      { subject: 'Electro\nchemistry', A: 72 },
      { subject: 'Manufact\nuring', A: 68 }
    ];
    if (profile.id === 11) return [
      { subject: 'Lithography', A: 82 },
      { subject: 'Semi\nconductors', A: 90 },
      { subject: 'Device\nPhysics', A: 86 },
      { subject: 'Nano\ntechnology', A: 78 },
      { subject: 'Process\nDevelopment', A: 74 },
      { subject: 'Metrology', A: 70 }
    ];
    if (profile.id === 12) return [
      { subject: 'Composite\nMaterials', A: 87 },
      { subject: 'Carbon\nFiber', A: 83 },
      { subject: 'Mechanical\nTesting', A: 79 },
      { subject: 'Aerospace\nApplications', A: 75 },
      { subject: 'Manufacturing\nProcesses', A: 71 },
      { subject: 'Durability\nAnalysis', A: 67 }
    ];
    if (profile.id === 13) return [
      { subject: 'Biomaterials', A: 85 },
      { subject: 'Biocompat\nibility', A: 81 },
      { subject: 'Tissue\nEng', A: 77 },
      { subject: 'Medical\nDevices', A: 73 },
      { subject: 'Cell\nCulture', A: 69 },
      { subject: 'Regulatory', A: 65 }
    ];
    if (profile.id === 14) return [
      { subject: 'Cryogenics', A: 67 },
      { subject: 'Quantum\nMaterials', A: 83 },
      { subject: 'Super\nconductors', A: 79 },
      { subject: 'Spectro\nscopy', A: 75 },
      { subject: 'Condensed\nMatter', A: 71 },
      { subject: 'Fabrication', A: 63 }
    ];

    // Default fallback
    return [
      { subject: 'Research', A: 85 },
      { subject: 'Analysis', A: 80 },
      { subject: 'Innovation', A: 75 },
      { subject: 'Leadership', A: 70 },
      { subject: 'Collaboration', A: 82 },
      { subject: 'Communication', A: 78 }
    ];
  };

  const skillsData = getSkillsData(profile);

  const citationData = [
    { name: 'Top 10 Papers', value: 4500 },
    { name: 'Next 20 Papers', value: 2800 },
    { name: 'Other Papers', value: 1132 }
  ];

  const scholarlyImpact = profile?.scholarlyImpact || 92;
  const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6'];

  // Calculate arc path for JD match score
  const radius = 80;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (jdMatchScore / 100) * circumference;

  // Calculate arc path for scholarly impact
  const scholarlyStrokeDashoffset = circumference - (scholarlyImpact / 100) * circumference;

  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Profile Snapshot</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* JD Match Score */}
          <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">JD Match Score</h3>
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 168 168">
                  <circle
                    cx="84"
                    cy="84"
                    r={normalizedRadius}
                    stroke="#e5e7eb"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                  />
                  <circle
                    cx="84"
                    cy="84"
                    r={normalizedRadius}
                    stroke="#10b981"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">{jdMatchScore}</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                {(profile?.jdMatchReasons || [
                  'Strong ML/AI background match',
                  'Senior research experience aligned',
                  'Limited industry product experience'
                ]).map((reason, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${index < 2 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Radar */}
          <div className="bg-white rounded-2xl px-3 py-2 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-1 text-center">Skill Graph</h3>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={skillsData} margin={{ top: 20, right: 35, bottom: 20, left: 35 }}>
                <PolarGrid stroke="rgba(0,0,0,0.2)" />
                <PolarAngleAxis dataKey="subject" tick={<CustomTick />} />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: 'rgba(0,0,0,0.7)', fontSize: 10 }}
                />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Scholarly Impact */}
          <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Scholarly Impact</h3>
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 168 168">
                  <circle
                    cx="84"
                    cy="84"
                    r={normalizedRadius}
                    stroke="#e5e7eb"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                  />
                  <circle
                    cx="84"
                    cy="84"
                    r={normalizedRadius}
                    stroke="#3b82f6"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={scholarlyStrokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">{scholarlyImpact}</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                {(profile?.scholarlyReasons || [
                  'High citation velocity (500+/year)',
                  'First author on top-tier papers',
                  'Recent publications in 2024'
                ]).map((reason, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Citation Impact Chart */}
        {/* <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Citation Distribution</h3>
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
        </div> */}
      </div>
    </section>
  );
};

export default AnalyticsOverview;
