export enum UserRole {
  ADMIN = 'ADMIN',
  PARENT = 'PARENT',
  GUEST = 'GUEST'
}

export interface Student {
  id: string;
  name: string;
  rollNo: string;
  standard: string;
}

export interface AttendanceRecord {
  id: string;
  date: string;
  status: 'Present' | 'Absent' | 'Holiday';
  studentId: string;
}

export interface Homework {
  id: string;
  subject: string;
  title: string;
  description: string;
  dueDate: string;
  assignedDate: string;
  standard: string;
}

export interface ExamResult {
  id: string;
  examName: string;
  subject: string;
  marksObtained: number;
  totalMarks: number;
  studentId: string;
}

export interface Circular {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'General' | 'Urgent' | 'Holiday';
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
}

export interface User {
  id: string;
  username: string;
  role: UserRole;
  name: string;
  childId?: string; // If parent
}