import React from 'react';
import { AttendanceRecord } from '../types';
import { CheckCircle, XCircle, Coffee } from 'lucide-react';

interface AttendanceProps {
  records: AttendanceRecord[];
  role: string;
}

export const Attendance: React.FC<AttendanceProps> = ({ records }) => {
  // Simple list view for demonstration, ideally this is a calendar
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">હાજરી (Attendance)</h2>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> હાજર</div>
          <div className="flex items-center gap-1"><XCircle className="w-4 h-4 text-red-500" /> ગેરહાજર</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        {records.map((record) => (
          <div key={record.id} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
            <div className="flex flex-col">
              <span className="font-medium text-gray-900">
                {new Date(record.date).toLocaleDateString('gu-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <div>
              {record.status === 'Present' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <CheckCircle className="w-4 h-4 mr-1.5" />
                  હાજર
                </span>
              )}
              {record.status === 'Absent' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  <XCircle className="w-4 h-4 mr-1.5" />
                  ગેરહાજર
                </span>
              )}
              {record.status === 'Holiday' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  <Coffee className="w-4 h-4 mr-1.5" />
                  રજા
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};