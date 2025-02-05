export interface JobDetail {
  jobDuty: string;
  jobBullets: string[];
}

export interface WorkInfo {
  jobTitle: string;
  jobCompany: string;
  jobLocation: string;
  jobDates: string;
  jobDescription: string;
  jobDetails: JobDetail[];
  jobSkills: string[];
  image: string;
}
