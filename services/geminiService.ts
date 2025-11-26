import { GoogleGenAI } from "@google/genai";
import { ExamResult, Student } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateStudentAnalysis = async (student: Student, results: ExamResult[]): Promise<string> => {
  try {
    const resultsSummary = results.map(r => `${r.subject}: ${r.marksObtained}/${r.totalMarks}`).join(', ');
    
    const prompt = `
      You are a wise school principal analyzing a student's report card.
      The student's name is ${student.name}.
      Here are their marks: ${resultsSummary}.
      
      Please write a short, encouraging analysis in GUJARATI language (ગુજરાતી).
      Focus on their strengths and gently suggest areas for improvement.
      Keep it under 100 words.
      Do not use markdown formatting like bold or headers, just plain text.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "વિશ્લેષણ ઉપલબ્ધ નથી.";
  } catch (error) {
    console.error("Error generating analysis:", error);
    return "ક્ષમા કરશો, અત્યારે વિશ્લેષણ કરી શકાતું નથી.";
  }
};