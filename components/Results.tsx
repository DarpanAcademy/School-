import React, { useState } from 'react';
import { ExamResult, Student } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Sparkles } from 'lucide-react';
import { generateStudentAnalysis } from '../services/geminiService';

interface ResultsProps {
  results: ExamResult[];
  student: Student;
}

export const Results: React.FC<ResultsProps> = ({ results, student }) => {
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleAnalysis = async () => {
    setLoading(true);
    const text = await generateStudentAnalysis(student, results);
    setAnalysis(text);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">પરીક્ષા પરિણામ (Results)</h2>
        <button
          onClick={handleAnalysis}
          disabled={loading}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          {loading ? 'વિશ્લેષણ ચાલી રહ્યું છે...' : 'AI વિશ્લેષણ મેળવો'}
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={results} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="subject" />
              <YAxis domain={[0, 60]} /> {/* Assuming 50 marks total + buffer */}
              <Tooltip 
                cursor={{ fill: '#f3f4f6' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="marksObtained" name="Marks" radius={[4, 4, 0, 0]}>
                {results.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.marksObtained >= 40 ? '#22c55e' : entry.marksObtained >= 30 ? '#eab308' : '#ef4444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {analysis && (
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 relative">
          <div className="absolute top-0 left-0 p-4">
            <Sparkles className="w-6 h-6 text-indigo-500 opacity-50" />
          </div>
          <h3 className="text-lg font-semibold text-indigo-900 mb-2 pl-8">AI રિપોર્ટ:</h3>
          <p className="text-indigo-800 leading-relaxed pl-8">
            {analysis}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((result) => (
          <div key={result.id} className="bg-white p-4 rounded-lg border border-gray-100 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{result.subject}</p>
              <p className="text-xs text-gray-500">{result.examName}</p>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-gray-900">{result.marksObtained}</span>
              <span className="text-sm text-gray-500"> / {result.totalMarks}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};