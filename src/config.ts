import dotenv from 'dotenv';

dotenv.config();

export const config = {
  resumePath: process.env.RESUME_PATH ?? './data/resume.txt',
};
