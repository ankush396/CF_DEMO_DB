// Mock data for the Placement & Career Readiness platform.
// All numbers are illustrative; intended for product demos.

export const institute = {
  name: "Horizon Institute of Technology",
  batch: "2025-26",
  totalStudents: 4820,
  campuses: 3,
  departments: 11,
};

export const placementKpis = {
  placementPct: 87.4,
  highestPackageLpa: 64,
  averagePackageLpa: 9.8,
  medianPackageLpa: 7.2,
  internshipConversionPct: 41,
  offerAcceptancePct: 78,
  multipleOffersPct: 34,
  dreamOfferPct: 22,
  ppoPct: 19,
};

export const yoyTrend = [
  { year: "2020", placement: 64, average: 5.6 },
  { year: "2021", placement: 71, average: 6.4 },
  { year: "2022", placement: 78, average: 7.5 },
  { year: "2023", placement: 82, average: 8.4 },
  { year: "2024", placement: 85, average: 9.1 },
  { year: "2025", placement: 87.4, average: 9.8 },
];

export const industryDistribution = [
  { name: "IT Services", value: 32 },
  { name: "Product / SaaS", value: 21 },
  { name: "BFSI", value: 14 },
  { name: "Consulting", value: 9 },
  { name: "Core / Manufacturing", value: 8 },
  { name: "Analytics & AI", value: 11 },
  { name: "Startups", value: 5 },
];

export const employabilityRadar = [
  { skill: "Communication", score: 72, target: 85 },
  { skill: "Aptitude", score: 81, target: 85 },
  { skill: "Technical", score: 76, target: 88 },
  { skill: "Coding", score: 68, target: 85 },
  { skill: "AI Readiness", score: 58, target: 80 },
  { skill: "Resume", score: 83, target: 90 },
  { skill: "Interview", score: 70, target: 85 },
];

export const branchHeatmap = [
  { branch: "CSE", placement: 94, employability: 86 },
  { branch: "IT", placement: 92, employability: 84 },
  { branch: "ECE", placement: 88, employability: 78 },
  { branch: "EEE", placement: 79, employability: 72 },
  { branch: "MECH", placement: 71, employability: 68 },
  { branch: "CIVIL", placement: 64, employability: 62 },
  { branch: "MBA", placement: 86, employability: 80 },
  { branch: "MCA", placement: 89, employability: 82 },
];

export const skillDemandSupply = [
  { skill: "AI / ML", demand: 5200, supply: 420 },
  { skill: "Data Science", demand: 4100, supply: 610 },
  { skill: "Cyber Security", demand: 3200, supply: 280 },
  { skill: "Full Stack", demand: 6400, supply: 1180 },
  { skill: "Cloud / DevOps", demand: 3800, supply: 540 },
  { skill: "Embedded / IoT", demand: 1700, supply: 220 },
];

export const automationSavings = [
  { name: "AI Mock Interviews", hours: 1240, salaryInr: 620000 },
  { name: "AI Resume Screening", hours: 840, salaryInr: 420000 },
  { name: "AI Counselling", hours: 960, salaryInr: 480000 },
  { name: "AI Communication Training", hours: 720, salaryInr: 360000 },
  { name: "AI Job Scheduling", hours: 410, salaryInr: 205000 },
];

export const roiBeforeAfter = [
  { metric: "Manual hours / month", before: 3200, after: 820 },
  { metric: "Recruiters engaged", before: 84, after: 212 },
  { metric: "Placements (YTD)", before: 1820, after: 2640 },
  { metric: "Cost per hire (₹)", before: 18500, after: 7400 },
  { metric: "Offer acceptance %", before: 61, after: 78 },
];

export const studentRiskBuckets = [
  { tier: "Green", count: 2980, color: "var(--success)" },
  { tier: "Yellow", count: 1290, color: "var(--warning)" },
  { tier: "Red", count: 550, color: "var(--destructive)" },
];

export const atRiskStudents = [
  { name: "Aarav Mehta", branch: "MECH", risk: "Red", issues: ["Low aptitude", "No resume", "Mock pending"], score: 38 },
  { name: "Priya Nair", branch: "CIVIL", risk: "Red", issues: ["Low communication", "ATS fail"], score: 42 },
  { name: "Rohan Iyer", branch: "EEE", risk: "Yellow", issues: ["Coding gap", "Attendance"], score: 58 },
  { name: "Sara Khan", branch: "ECE", risk: "Yellow", issues: ["Interview confidence"], score: 64 },
  { name: "Vikram Rao", branch: "MECH", risk: "Yellow", issues: ["Resume incomplete"], score: 61 },
];

export const predictivePlacement = [
  { month: "Jul", predicted: 62, actual: 60 },
  { month: "Aug", predicted: 71, actual: 70 },
  { month: "Sep", predicted: 78, actual: 79 },
  { month: "Oct", predicted: 84, actual: 83 },
  { month: "Nov", predicted: 89, actual: null },
  { month: "Dec", predicted: 92, actual: null },
];

export const benchmarkCampuses = [
  { campus: "Bengaluru", employability: 84, placement: 91, package: 11.2 },
  { campus: "Hyderabad", employability: 79, placement: 87, package: 9.6 },
  { campus: "Chennai", employability: 76, placement: 82, package: 8.7 },
];

export const aiRecommendations = [
  { title: "MECH branch needs targeted coding bootcamp", impact: "+8% placement", severity: "high" },
  { title: "62 Red-tier students need 1:1 mentor allocation this week", impact: "Reduce dropout 12%", severity: "high" },
  { title: "AI/ML demand 12x supply — launch fast-track cohort", impact: "₹3.2Cr revenue opp", severity: "medium" },
  { title: "Offer acceptance dipping for Tier-2 firms", impact: "Re-engage 14 recruiters", severity: "medium" },
];

// ============== STUDENT ==============

export const studentProfile = {
  name: "Ananya Sharma",
  branch: "CSE",
  year: "Final Year",
  employabilityScore: 78,
  breakdown: {
    technical: 82,
    aptitude: 76,
    communication: 70,
    resume: 90,
    interview: 65,
    personality: 84,
  },
};

export const readinessMeter = [
  { label: "Resume", value: 90 },
  { label: "Communication", value: 70 },
  { label: "Technical Skills", value: 80 },
  { label: "Interview Readiness", value: 65 },
  { label: "Aptitude", value: 76 },
];

export const careerSuggestions = [
  { role: "Software Engineer", fit: 92, demand: "Very High", avgPkg: 12 },
  { role: "Data Analyst", fit: 84, demand: "High", avgPkg: 9 },
  { role: "Product Manager", fit: 71, demand: "Medium", avgPkg: 18 },
  { role: "UI/UX Designer", fit: 64, demand: "Medium", avgPkg: 8 },
  { role: "Cyber Security Analyst", fit: 58, demand: "High", avgPkg: 11 },
];

export const dreamCompanies = [
  { name: "Google", required: 92, current: 78, gap: 14, expectedPkg: "₹28-42L" },
  { name: "Microsoft", required: 88, current: 78, gap: 10, expectedPkg: "₹24-38L" },
  { name: "Razorpay", required: 82, current: 78, gap: 4, expectedPkg: "₹18-28L" },
  { name: "TCS Digital", required: 70, current: 78, gap: -8, expectedPkg: "₹7-9L" },
];

export const studentAssessmentTrend = [
  { week: "W1", aptitude: 58, coding: 52, domain: 60 },
  { week: "W2", aptitude: 62, coding: 58, domain: 64 },
  { week: "W3", aptitude: 68, coding: 64, domain: 70 },
  { week: "W4", aptitude: 71, coding: 70, domain: 72 },
  { week: "W5", aptitude: 74, coding: 72, domain: 76 },
  { week: "W6", aptitude: 76, coding: 78, domain: 80 },
];

export const mockInterview = {
  attempts: 6,
  latest: {
    overall: 74,
    confidence: 72,
    eyeContact: 68,
    tone: 80,
    technical: 76,
    hr: 70,
  },
  weakTopics: ["System Design basics", "Behavioral STAR answers", "DSA: Trees"],
};

export const atsResume = {
  score: 82,
  missingKeywords: ["TypeScript", "AWS Lambda", "CI/CD", "Unit Testing"],
  suggestions: [
    "Quantify impact in 'Built dashboard' bullet (e.g. users, %).",
    "Add a 'Skills' section with TypeScript, Docker, AWS.",
    "Move 'Projects' above 'Coursework' for product roles.",
  ],
};

export const communicationTrend = [
  { day: "Mon", grammar: 72, fluency: 64, pronunciation: 68 },
  { day: "Tue", grammar: 74, fluency: 66, pronunciation: 70 },
  { day: "Wed", grammar: 76, fluency: 70, pronunciation: 72 },
  { day: "Thu", grammar: 78, fluency: 73, pronunciation: 75 },
  { day: "Fri", grammar: 80, fluency: 76, pronunciation: 77 },
  { day: "Sat", grammar: 82, fluency: 78, pronunciation: 79 },
];

export const careerTimeline = [
  { when: "Today", milestone: "Complete AI Mock #7", status: "todo" },
  { when: "3 months", milestone: "Land summer internship (₹40k+ stipend)", status: "todo" },
  { when: "6 months", milestone: "Convert internship → PPO", status: "future" },
  { when: "1 year", milestone: "Join Tier-1 SaaS / Product company", status: "future" },
  { when: "3 years", milestone: "Senior Engineer · ₹35-45L", status: "future" },
  { when: "5 years", milestone: "Engineering Manager / Founding Engineer", status: "future" },
];

export const peerBenchmark = [
  { metric: "Employability", you: 78, dept: 71, top10: 91, campus: 74 },
  { metric: "Coding", you: 78, dept: 70, top10: 92, campus: 72 },
  { metric: "Communication", you: 70, dept: 68, top10: 88, campus: 70 },
  { metric: "Resume / ATS", you: 82, dept: 74, top10: 94, campus: 76 },
];

export const placementProbability = [
  { tier: "Tier-1 (Google, Microsoft)", probability: 58 },
  { tier: "Tier-2 (Razorpay, Zoho, Freshworks)", probability: 82 },
  { tier: "Service (TCS, Infosys, Wipro)", probability: 95 },
  { tier: "Dream Company (FAANG only)", probability: 41 },
];

export const studentJobApps = [
  { company: "Razorpay", role: "SDE-1", status: "Interview", date: "Dec 18" },
  { company: "Freshworks", role: "Associate Engineer", status: "Shortlisted", date: "Dec 14" },
  { company: "Zoho", role: "MTS", status: "Applied", date: "Dec 12" },
  { company: "Infosys", role: "Specialist Programmer", status: "Offer", date: "Dec 09" },
  { company: "Swiggy", role: "Frontend Eng", status: "Rejected", date: "Dec 04" },
];

export const learningRecs = [
  { type: "Course", title: "System Design for Beginners", provider: "AI Curated", duration: "12h", urgency: "high" },
  { type: "Certification", title: "AWS Cloud Practitioner", provider: "AWS", duration: "20h", urgency: "high" },
  { type: "Project", title: "Build a Realtime Chat with WebSockets", provider: "AI Suggested", duration: "1 week", urgency: "medium" },
  { type: "Practice", title: "DSA: Trees & Graphs (40 problems)", provider: "Platform", duration: "2 weeks", urgency: "high" },
];
