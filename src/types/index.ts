export interface GitHubContributionDay {
  date: string;
  count: number;
  level: number; // 0, 1, 2, 3, 4
}

export interface GitHubTelemetry {
  totalCommits: number;
  activeWeeksStreak: number;
  longestStreakDays: number;
  publicRepos: number;
  contributions: GitHubContributionDay[];
  yearTotals: Record<string, number>;
  username: string;
}

export interface SkillFoundation {
  id: string;
  number: string;
  badge: string;
  subBadge: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  tags: string[];
  metricLabel: string;
  metricValue: string;
  schematic: "ai" | "backend" | "frontend";
}

export interface ExhibitionItem {
  id: string;
  tag: string;
  title: string;
  period: string;
  organization: string;
  role: string;
  description: string;
  highlightIcon: string;
  highlightText: string;
  statusBadge: string;
  statusType: "concluded" | "active" | "award";
  tags?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "ai" | "web";
  expId: string;
  topBadge: string;
  metricValue: string;
  metricLabel: string;
  metricSub: string;
  description: string;
  tags: string[];
  visualType: "roc" | "fft" | "attention" | "resampling" | "timeseries" | "commerce" | "erp";
  specs?: { label: string; value: string }[];
}
