import React, { useState } from 'react';
import { Login } from './components/Login';
import { Layout } from './components/Layout';
import { Attendance } from './components/Attendance';
import { Homework } from './components/Homework';
import { Results } from './components/Results';
import { Circulars } from './components/Circulars';
import { Gallery } from './components/Gallery';
import { User } from './types';
import { 
  MOCK_ATTENDANCE, 
  MOCK_CIRCULARS, 
  MOCK_HOMEWORK, 
  MOCK_PHOTOS, 
  MOCK_RESULTS, 
  MOCK_STUDENT 
} from './constants';
import { 
  GraduationCap, 
  CheckSquare, 
  Book, 
  BarChart2, 
  FileText, 
  Image as ImageIcon 
} from 'lucide-react';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState('dashboard');

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case 'attendance':
        return <Attendance records={MOCK_ATTENDANCE} role={user.role} />;
      case 'homework':
        return <Homework assignments={MOCK_HOMEWORK} />;
      case 'results':
        return <Results results={MOCK_RESULTS} student={MOCK_STUDENT} />;
      case 'circulars':
        return <Circulars circulars={MOCK_CIRCULARS} />;
      case 'gallery':
        return <Gallery photos={MOCK_PHOTOS} />;
      case 'dashboard':
      default:
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-2">સ્વાગત છે, {user.name}</h2>
              <p className="opacity-90">શૈક્ષણિક વર્ષ 2024-25</p>
              
              {user.childId && (
                <div className="mt-4 flex items-center gap-3 bg-white/20 p-3 rounded-lg backdrop-blur-sm w-fit">
                   <div className="bg-white p-2 rounded-full">
                     <GraduationCap className="w-5 h-5 text-blue-600" />
                   </div>
                   <div>
                      <p className="text-xs opacity-80">વિદ્યાર્થી</p>
                      <p className="font-semibold">{MOCK_STUDENT.name}</p>
                   </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div 
                onClick={() => setCurrentView('attendance')}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-center gap-3 text-center group"
              >
                <div className="p-3 bg-green-50 text-green-600 rounded-full group-hover:bg-green-100 transition-colors">
                  <CheckSquare className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">હાજરી</p>
                  <p className="text-xs text-gray-500 mt-1">આજે હાજર</p>
                </div>
              </div>

              <div 
                onClick={() => setCurrentView('homework')}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-center gap-3 text-center group"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-100 transition-colors">
                  <Book className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">ગૃહકાર્ય</p>
                  <p className="text-xs text-gray-500 mt-1">2 બાકી</p>
                </div>
              </div>

              <div 
                 onClick={() => setCurrentView('results')}
                 className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-center gap-3 text-center group"
              >
                <div className="p-3 bg-purple-50 text-purple-600 rounded-full group-hover:bg-purple-100 transition-colors">
                  <BarChart2 className="w-8 h-8" />
                </div>
                 <div>
                  <p className="font-semibold text-gray-800">પરિણામ</p>
                  <p className="text-xs text-gray-500 mt-1">તાજેતરનું જુઓ</p>
                </div>
              </div>

              <div 
                 onClick={() => setCurrentView('circulars')}
                 className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-center gap-3 text-center group"
              >
                <div className="p-3 bg-orange-50 text-orange-600 rounded-full group-hover:bg-orange-100 transition-colors">
                  <FileText className="w-8 h-8" />
                </div>
                 <div>
                  <p className="font-semibold text-gray-800">પરિપત્ર</p>
                  <p className="text-xs text-gray-500 mt-1">1 નવો</p>
                </div>
              </div>

              <div 
                 onClick={() => setCurrentView('gallery')}
                 className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-center gap-3 text-center group"
              >
                <div className="p-3 bg-pink-50 text-pink-600 rounded-full group-hover:bg-pink-100 transition-colors">
                  <ImageIcon className="w-8 h-8" />
                </div>
                 <div>
                  <p className="font-semibold text-gray-800">ગેલેરી</p>
                  <p className="text-xs text-gray-500 mt-1">ફોટા જુઓ</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-800 mb-4">તાજેતરનું ગૃહકાર્ય</h3>
                  <div className="space-y-3">
                    {MOCK_HOMEWORK.slice(0, 2).map(hw => (
                      <div key={hw.id} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 last:border-0">
                        <span className="font-medium">{hw.subject}</span>
                        <span className="text-red-500">Due: {new Date(hw.dueDate).toLocaleDateString('gu-IN')}</span>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-800 mb-4">છેલ્લા પરિણામ</h3>
                   <div className="space-y-3">
                    {MOCK_RESULTS.slice(0, 3).map(res => (
                      <div key={res.id} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 last:border-0">
                        <span className="font-medium">{res.subject}</span>
                        <span className="font-bold text-blue-600">{res.marksObtained}/{res.totalMarks}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Layout 
      user={user} 
      onLogout={handleLogout} 
      currentView={currentView}
      onNavigate={setCurrentView}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;