import React from 'react';
import { Circular } from '../types';
import { Bell, Calendar, AlertCircle } from 'lucide-react';

interface CircularsProps {
  circulars: Circular[];
}

export const Circulars: React.FC<CircularsProps> = ({ circulars }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">પરિપત્ર અને સૂચનાઓ (Circulars)</h2>
      
      <div className="space-y-4">
        {circulars.map((circular) => (
          <div key={circular.id} className={`p-4 rounded-xl border-l-4 shadow-sm bg-white ${
            circular.type === 'Urgent' ? 'border-l-red-500' : 
            circular.type === 'Holiday' ? 'border-l-yellow-500' : 'border-l-blue-500'
          }`}>
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                {circular.type === 'Urgent' && <AlertCircle className="w-5 h-5 text-red-500" />}
                {circular.type === 'Holiday' && <Calendar className="w-5 h-5 text-yellow-500" />}
                {circular.type === 'General' && <Bell className="w-5 h-5 text-blue-500" />}
                <h3 className="font-semibold text-gray-900">{circular.title}</h3>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {new Date(circular.date).toLocaleDateString('gu-IN')}
              </span>
            </div>
            <p className="text-gray-700 text-sm ml-7">
              {circular.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};