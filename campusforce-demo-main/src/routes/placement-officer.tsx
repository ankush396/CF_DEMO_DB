import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Briefcase, Building2, ChevronRight, Filter, Info, Target, Users, Video } from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { Kpi } from "@/components/dashboard/kpi";
import { Section } from "@/components/dashboard/section";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/placement-officer")({
  head: () => ({
    meta: [
      { title: "Placement Officer · Operations" },
      { name: "description", content: "Manage drives, student funnel, recruiter engagement and interventions." },
    ],
  }),
  component: POPage,
});

const funnel = [
  { stage: "Registered", count: 4820 },
  { stage: "Resume uploaded", count: 4410 },
  { stage: "ATS qualified", count: 3680 },
  { stage: "Assessments done", count: 3120 },
  { stage: "Mock interview done", count: 2580 },
  { stage: "Placement-ready", count: 2210 },
  { stage: "Applied", count: 1980 },
  { stage: "Shortlisted", count: 1240 },
  { stage: "Interviewed", count: 860 },
  { stage: "Selected", count: 612 },
];

const upcomingDrives = [
  { co: "Razorpay", date: "Dec 18", students: 142, mode: "On-campus" },
  { co: "Freshworks", date: "Dec 20", students: 98, mode: "Virtual" },
  { co: "Zoho", date: "Dec 22", students: 188, mode: "On-campus" },
  { co: "Swiggy", date: "Jan 04", students: 76, mode: "Virtual" },
];

function POPage() {
  return (
    <AppShell
      title="Placement Operations"
      subtitle="Drives, funnel, recruiter pipeline and interventions"
      actions={
        <>
          <Button variant="outline" size="sm" className="gap-2"><Filter className="h-3.5 w-3.5" /> Filter batch</Button>
          <Button size="sm" className="gap-2"><Info className="h-3.5 w-3.5" /> AI student–JD matcher</Button>
        </>
      }
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-7">
          <Kpi label="Registered" value="4,820" icon={Users} accent="primary" />
          <Kpi label="Eligible" value="3,680" delta="+220" icon={Target} accent="info" />
          <Kpi label="Placement-ready" value="2,210" delta="+186" icon={Briefcase} accent="success" />
          <Kpi label="Active drives" value={12} delta="+3 this week" icon={Video} accent="warning" />
          <Kpi label="Companies visiting" value={28} icon={Building2} accent="primary" />
          <Kpi label="Offers generated" value={612} delta="+74 MoM" icon={Info} accent="success" />
          <Kpi label="Pending selections" value={184} icon={Target} accent="warning" />
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <Section title="Student funnel" description="Drop-off analysis with AI-flagged leakage points" className="xl:col-span-2">
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={funnel} layout="vertical" margin={{ left: 24 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <YAxis type="category" dataKey="stage" tick={{ fontSize: 12 }} width={140} stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                  <Bar dataKey="count" fill="var(--chart-1)" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Section>

          <Section title="Upcoming drives" description="Auto-scheduled by AI to avoid conflicts">
            <ul className="space-y-2">
              {upcomingDrives.map((d) => (
                <li key={d.co} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <div className="text-sm font-semibold">{d.co}</div>
                    <div className="text-[11px] text-muted-foreground">{d.date} · {d.mode} · {d.students} students</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section
          title="Smart Student–JD matcher"
          description="AI ranks students against each open JD by skill, communication, assessment and resume fit"
          unique
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Top JD match</TableHead>
                <TableHead>Match %</TableHead>
                <TableHead>Gap to qualify</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { s: "Ananya Sharma", jd: "Razorpay · SDE-1", m: 92, gap: "None" },
                { s: "Karthik R", jd: "Freshworks · Assoc Eng", m: 87, gap: "Add AWS keyword" },
                { s: "Meera D", jd: "Zoho · MTS", m: 84, gap: "Complete mock #5" },
                { s: "Rahul V", jd: "Swiggy · FE Eng", m: 79, gap: "Improve fluency" },
              ].map((r) => (
                <TableRow key={r.s}>
                  <TableCell className="font-medium">{r.s}</TableCell>
                  <TableCell>{r.jd}</TableCell>
                  <TableCell><span className="pill pill-success">{r.m}%</span></TableCell>
                  <TableCell className="text-xs text-muted-foreground">{r.gap}</TableCell>
                  <TableCell className="text-right"><Button size="sm" variant="outline">Shortlist</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Section>

        <div className="grid gap-6 xl:grid-cols-2">
          <Section title="Recruiter engagement" description="AI flags recruiters that need re-engagement" unique>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Recruiter</TableHead>
                  <TableHead>Last interaction</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { r: "Infosys · Priya", l: "12 days ago", s: "Active" },
                  { r: "TCS · Ravi", l: "38 days ago", s: "Cold" },
                  { r: "Adobe · Neha", l: "4 days ago", s: "Hot" },
                  { r: "Wipro · Sunil", l: "61 days ago", s: "Lost?" },
                ].map((r) => (
                  <TableRow key={r.r}>
                    <TableCell className="font-medium">{r.r}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{r.l}</TableCell>
                    <TableCell>
                      <span
                        className={
                          r.s === "Hot" ? "pill pill-success" :
                          r.s === "Active" ? "pill pill-info" :
                          r.s === "Cold" ? "pill pill-warning" : "pill pill-danger"
                        }
                      >
                        {r.s}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Section>

          <Section title="Intervention dashboard" description="Students grouped by required intervention" unique>
            <div className="space-y-3">
              {[
                { area: "Aptitude training", n: 184, color: "var(--chart-1)" },
                { area: "Coding practice", n: 262, color: "var(--chart-2)" },
                { area: "Communication coaching", n: 198, color: "var(--chart-3)" },
                { area: "Resume rebuild", n: 122, color: "var(--chart-4)" },
              ].map((i) => (
                <div key={i.area} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: i.color }} />
                    <div className="text-sm font-medium">{i.area}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold tabular-nums">{i.n}</span>
                    <Button size="sm" variant="outline">Assign</Button>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <Section title="More PO dashboards" description="Batch progress · placement heatmap · mock interview analytics · ATS quality report · package analytics · salary prediction · geo-wise placement map">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "Batch progress heatmap",
              "Placement heatmap (branch/gender/city)",
              "Assessment analytics",
              "Communication training trends",
              "ATS quality report",
              "Package analytics",
              "Salary prediction (per student)",
              "Geo-wise placement map",
              "Online vs Offline readiness gap",
            ].map((t) => (
              <div key={t} className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
                {t}
                <div className="mt-1 text-[11px]">Powered by the same data — wired in v1.1</div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </AppShell>
  );
}
