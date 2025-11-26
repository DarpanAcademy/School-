import React, { useState } from 'react';
import { User, UserRole } from '../types';
import { School, User as UserIcon, Lock } from 'lucide-react';

interface LoginProps {
  onLogin: (user: User) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      onLogin({
        id: 'u1',
        username: 'admin',
        role: UserRole.ADMIN,
        name: 'આચાર્ય શ્રી', // Principal
      });
    } else if (username === 'parent' && password === '123') {
      onLogin({
        id: 'u2',
        username: 'parent',
        role: UserRole.PARENT,
        name: 'મહેશભાઈ પટેલ',
        childId: 's1'
      });
    } else {
      setError('ખોટું યુઝર આઈડી અથવા પાસવર્ડ (Invalid Credentials)');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="bg-blue-100 p-4 rounded-full inline-flex mb-4">
            <School className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">શાળા મિત્ર</h1>
          <p className="text-gray-500 mt-2">તમારા બાળકની પ્રગતિ પર નજર રાખો</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              યુઝર આઈડી (User ID)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="દા.ત. parent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              પાસવર્ડ (Password)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            લોગ ઇન કરો
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          <p>Demo Parent: parent / 123</p>
          <p>Demo Admin: admin / admin</p>
        </div>
      </div>
    </div>
  );
};