//data/mockData
import type { SpreadsheetRow } from "./types";

export const mockData: SpreadsheetRow[] = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for product X",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assignedTo: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estimatedValue: "₹ 6,200,000"  
  },
  {
    id: 2,
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanprojects.com",
    assignedTo: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estimatedValue: "₹ 3,500,000"
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.dev",
    assignedTo: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estimatedValue: "₹ 4,750,000"
  },
  {
    id: 4,
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.io",
    assignedTo: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estimatedValue: "₹ 5,900,000"
  },
  {
    id: 5,
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.finance",
    assignedTo: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estimatedValue: "₹ 2,800,000"
  },
];
