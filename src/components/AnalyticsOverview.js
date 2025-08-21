import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const AnalyticsOverview = ({ profile }) => {
  const jdMatchScore = profile?.jdMatchScore || 87;

  // Generate contextual skills data based on profile
  const getSkillsData = (profile) => {
    if (!profile) return [
      { subject: 'Deep Learning', A: 95 },
      { subject: 'CV', A: 85 },
      { subject: 'NLP', A: 78 },
      { subject: 'Robotics', A: 45 },
      { subject: 'AI Ethics', A: 67 },
      { subject: 'MLOps', A: 72 }
    ];

    // AI/ML profiles
    if (profile.id === 1) return [
      { subject: 'Deep Learning', A: 88 },
      { subject: 'CV', A: 74 },
      { subject: 'NLP', A: 69 },
      { subject: 'Transformers', A: 82 },
      { subject: 'AI Ethics', A: 58 },
      { subject: 'MLOps', A: 65 }
    ];
    if (profile.id === 2) return [
      { subject: 'Computer Vision', A: 91 },
      { subject: 'Deep Learning', A: 77 },
      { subject: 'AR/VR', A: 84 },
      { subject: 'Mobile AI', A: 79 },
      { subject: 'Edge Computing', A: 66 },
      { subject: 'Object Detection', A: 86 }
    ];
    if (profile.id === 3) return [
      { subject: 'NLP', A: 92 },
      { subject: 'LLMs', A: 87 },
      { subject: 'Translation', A: 81 },
      { subject: 'Deep Learning', A: 73 },
      { subject: 'AI Safety', A: 76 },
      { subject: 'Reasoning', A: 83 }
    ];
    if (profile.id === 4) return [
      { subject: 'Robotics', A: 89 },
      { subject: 'Autonomous Sys', A: 85 },
      { subject: 'RL', A: 78 },
      { subject: 'CV', A: 71 },
      { subject: 'Ctrl Sys', A: 76 },
      { subject: 'Real-time', A: 68 }
    ];

    // Biochemistry profiles
    if (profile.id === 5) return [
      { subject: 'Protein Eng', A: 87 },
      { subject: 'CRISPR', A: 78 },
      { subject: 'Antibodies', A: 82 },
      { subject: 'Molecular Bio', A: 74 },
      { subject: 'Drug Discovery', A: 67 },
      { subject: 'Bioinformatics', A: 61 }
    ];
    if (profile.id === 6) return [
      { subject: 'Struct Bio', A: 90 },
      { subject: 'Cryo-EM', A: 85 },
      { subject: 'mRNA', A: 79 },
      { subject: 'Crystal', A: 76 },
      { subject: 'Drug Disc', A: 69 },
      { subject: 'Vaccines', A: 72 }
    ];
    if (profile.id === 7) return [
      { subject: 'Metabol', A: 86 },
      { subject: 'Mass Spec', A: 81 },
      { subject: 'Biomarkers', A: 77 },
      { subject: 'Cancer Bio', A: 73 },
      { subject: 'Clinical', A: 64 },
      { subject: 'Data Anal', A: 68 }
    ];
    if (profile.id === 8) return [
      { subject: 'Synth Bio', A: 88 },
      { subject: 'Metab Eng', A: 83 },
      { subject: 'Bioeng', A: 79 },
      { subject: 'Biofuels', A: 74 },
      { subject: 'Sys Bio', A: 70 },
      { subject: 'Entrepren', A: 76 }
    ];
    if (profile.id === 9) return [
      { subject: 'Immunology', A: 85 },
      { subject: 'CAR-T', A: 81 },
      { subject: 'Immunother', A: 79 },
      { subject: 'T Cell Bio', A: 76 },
      { subject: 'Cancer Imm', A: 72 },
      { subject: 'Clinical', A: 65 }
    ];

    // Materials Science profiles
    if (profile.id === 10) return [
      { subject: 'Nanomaterials', A: 88 },
      { subject: 'Battery Tech', A: 84 },
      { subject: 'Synthesis', A: 80 },
      { subject: 'Characterization', A: 76 },
      { subject: 'Electrochemistry', A: 72 },
      { subject: 'Manufacturing', A: 68 }
    ];
    if (profile.id === 11) return [
      { subject: 'Semiconductors', A: 90 },
      { subject: 'Device Physics', A: 86 },
      { subject: 'Lithography', A: 82 },
      { subject: 'Nanotechnology', A: 78 },
      { subject: 'Process Dev', A: 74 },
      { subject: 'Metrology', A: 70 }
    ];
    if (profile.id === 12) return [
      { subject: 'Composites', A: 87 },
      { subject: 'Carbon Fiber', A: 83 },
      { subject: 'Mech Testing', A: 79 },
      { subject: 'Aerospace', A: 75 },
      { subject: 'Manufacturing', A: 71 },
      { subject: 'Durability', A: 67 }
    ];
    if (profile.id === 13) return [
      { subject: 'Biomaterials', A: 85 },
      { subject: 'Biocompatibility', A: 81 },
      { subject: 'Tissue Eng', A: 77 },
      { subject: 'Medical Devices', A: 73 },
      { subject: 'Cell Culture', A: 69 },
      { subject: 'Regulatory', A: 65 }
    ];
    if (profile.id === 14) return [
      { subject: 'Quantum Materials', A: 83 },
      { subject: 'Superconductors', A: 79 },
      { subject: 'Spectroscopy', A: 75 },
      { subject: 'Condensed Matter', A: 71 },
      { subject: 'Cryogenics', A: 67 },
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
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">JD Match Score</h3>
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
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Skill Graph</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsData}>
                <PolarGrid stroke="rgba(0,0,0,0.2)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(0,0,0,0.7)', fontSize: 9 }} />
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
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Scholarly Impact</h3>
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
