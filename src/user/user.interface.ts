// src/user/user.interface.ts

export interface CourseWithPrerequisiteStatus {
  code: string;
  units: number;
  category: string;
  yearQuarter: number;
  prerequisitesFulfilled: boolean;
  missingPrerequisites?: string[];
}

export interface UserWithCourseAnalysis {
  id: number;
  email: string;
  password: string;
  units: number;
  courses: CourseWithPrerequisiteStatus[];
}
