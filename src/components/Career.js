import React from 'react';
import { BriefcaseIcon, AcademicCapIcon, CalendarIcon } from '@heroicons/react/24/outline';

const Career = ({ profile }) => {
  const experience = profile?.experience || [];
  const education = profile?.education || [];

  return (
    <section id="career" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Career & Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center mb-8">
              <BriefcaseIcon className="w-8 h-8 text-primary-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{job.title}</h4>
                      <p className="text-primary-600 font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {job.period}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.achievements.map((achievement, i) => (
                      <span key={i} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full border border-primary-200">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <AcademicCapIcon className="w-8 h-8 text-primary-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-primary-600 font-medium">{edu.school}</p>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">Focus: {edu.focus}</p>
                  {edu.advisor && <p className="text-gray-600 mb-2">Advisor: {edu.advisor}</p>}
                  {edu.thesis && <p className="text-gray-600 mb-2">Thesis: {edu.thesis}</p>}
                  {edu.gpa && <p className="text-gray-600 mb-2">GPA: {edu.gpa}</p>}
                  {edu.honors && <p className="text-primary-600 font-medium">{edu.honors}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;