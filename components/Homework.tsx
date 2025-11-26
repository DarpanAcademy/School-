import React from 'react';
import { Homework as HomeworkType } from '../types';
import { BookOpen, Calendar, Clock } from 'lucide-react';

interface HomeworkProps {
  assignments: HomeworkType[];
}

export const Homework: React.FC<HomeworkProps> = ({ assignments }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">ગૃહકાર્ય (Homework)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((hw) => (
          <div key={hw.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                {hw.subject}
              </span>
              <span className="text-xs text-gray-500 flex items-center">
                 <Calendar className="w-3 h-3 mr-1" />
                 {new Date(hw.assignedDate).toLocaleDateString('gu-IN')}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{hw.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {hw.description}
            </p>
            
            <div className="pt-4 border-t border-gray-100 flex items-center text-sm text-red-600 font-medium">
              <Clock className="w-4 h-4 mr-2" />
              જમા કરાવવાની તારીખ: {new Date(hw.dueDate).toLocaleDateString('gu-IN')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};