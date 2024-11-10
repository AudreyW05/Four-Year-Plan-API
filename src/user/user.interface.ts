// src/user/user.interface.ts

export interface CourseWithPrerequisiteStatus {
  code: string;
  credits: number;
  prerequisitesFulfilled: boolean;
  missingPrerequisites?: string[];
}

export interface UserWithCourseAnalysis {
  id: number;
  name: string;
  password: string;
  courses: CourseWithPrerequisiteStatus[];
}
