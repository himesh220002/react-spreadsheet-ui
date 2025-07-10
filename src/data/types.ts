export type SpreadsheetRow = {
  id: number;
  jobRequest: string;
  submitted: string;
  status: "In-process" | "Need to start" | "Complete" | "Blocked";
  submitter: string;
  url: string;
  assignedTo: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  estimatedValue: string;
};