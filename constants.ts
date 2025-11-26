import { Student, AttendanceRecord, Homework, ExamResult, Circular, Photo } from './types';

export const MOCK_STUDENT: Student = {
  id: 's1',
  name: 'આરવ પટેલ', // Aarav Patel
  rollNo: '12',
  standard: '8-A'
};

export const MOCK_ATTENDANCE: AttendanceRecord[] = [
  { id: 'a1', date: '2024-05-20', status: 'Present', studentId: 's1' },
  { id: 'a2', date: '2024-05-21', status: 'Present', studentId: 's1' },
  { id: 'a3', date: '2024-05-22', status: 'Absent', studentId: 's1' },
  { id: 'a4', date: '2024-05-23', status: 'Present', studentId: 's1' },
  { id: 'a5', date: '2024-05-24', status: 'Present', studentId: 's1' },
];

export const MOCK_HOMEWORK: Homework[] = [
  {
    id: 'h1',
    subject: 'ગણિત (Maths)',
    title: 'પ્રકરણ 5 ના દાખલા',
    description: 'સ્વાધ્યાય 5.1 ના પ્રશ્ન 1 થી 5 ગણવા.',
    dueDate: '2024-05-26',
    assignedDate: '2024-05-24',
    standard: '8-A'
  },
  {
    id: 'h2',
    subject: 'વિજ્ઞાન (Science)',
    title: 'પ્રોજેક્ટ સબમિશન',
    description: 'સૌર મંડળ પર પ્રોજેક્ટ તૈયાર કરવો.',
    dueDate: '2024-05-30',
    assignedDate: '2024-05-20',
    standard: '8-A'
  },
  {
    id: 'h3',
    subject: 'ગુજરાતી (Gujarati)',
    title: 'કવિતા લેખન',
    description: 'પ્રકૃતિ વિશે એક કવિતા લખો.',
    dueDate: '2024-05-28',
    assignedDate: '2024-05-25',
    standard: '8-A'
  }
];

export const MOCK_RESULTS: ExamResult[] = [
  { id: 'r1', examName: 'Mid-Term', subject: 'ગણિત', marksObtained: 45, totalMarks: 50, studentId: 's1' },
  { id: 'r2', examName: 'Mid-Term', subject: 'વિજ્ઞાન', marksObtained: 42, totalMarks: 50, studentId: 's1' },
  { id: 'r3', examName: 'Mid-Term', subject: 'ગુજરાતી', marksObtained: 38, totalMarks: 50, studentId: 's1' },
  { id: 'r4', examName: 'Mid-Term', subject: 'અંગ્રેજી', marksObtained: 40, totalMarks: 50, studentId: 's1' },
  { id: 'r5', examName: 'Mid-Term', subject: 'સમાજ', marksObtained: 48, totalMarks: 50, studentId: 's1' },
];

export const MOCK_CIRCULARS: Circular[] = [
  {
    id: 'c1',
    title: 'ઉનાળુ વેકેશન',
    content: 'શાળામાં ઉનાળુ વેકેશન તારીખ 1 મે થી શરૂ થશે.',
    date: '2024-04-25',
    type: 'Holiday'
  },
  {
    id: 'c2',
    title: 'વાલી મીટિંગ',
    content: 'આગામી શનિવારે સવારે 9 વાગ્યે વાલી મીટિંગ રાખેલ છે.',
    date: '2024-05-15',
    type: 'Urgent'
  }
];

export const MOCK_PHOTOS: Photo[] = [
  { id: 'p1', url: 'https://picsum.photos/400/300?random=1', caption: 'વિજ્ઞાન મેળો 2024' },
  { id: 'p2', url: 'https://picsum.photos/400/300?random=2', caption: 'રમત ગમત દિવસ' },
  { id: 'p3', url: 'https://picsum.photos/400/300?random=3', caption: 'પ્રવાસ' },
  { id: 'p4', url: 'https://picsum.photos/400/300?random=4', caption: 'વૃક્ષારોપણ' },
];