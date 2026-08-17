import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Briefcase, Building2, IndianRupee, Sparkles, Target, TrendingUp, Users } from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { Kpi } from "@/components/dashboard/kpi";
import { Section } from "@/components/dashboard/section";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate · Recruiter Dashboard" },
      { name: "description", content: "AI-ranked talent discovery, hiring funnel and campus ROI." },
    ],
  }),
  component: CorporatePage,
});

const candidates = [
  { name: "Ananya Sharma", branch: "CSE", ats: 92, mock: 88, tech: 86, fit: 94 },
  { name: "Karthik R", branch: "IT", ats: 88, mock: 84, tech: 82, fit: 89 },
  { name: "Meera D", branch: "CSE", ats: 84, mock: 80, tech: 80, fit: 86 },
  { name: "Rahul V", branch: "ECE", ats: 78, mock: 76, tech: 74, fit: 81 },
  { name: "Sneha P", branch: "MCA", ats: 76, mock: 82, tech: 78, fit: 80 },
];

function CorporatePage() {
  return (
    <AppShell
      title="Recruiter Workspace"
      subtitle="AI talent discovery, pipeline, campus ROI and forecast"
      actions={
        <>
          <Button variant="outline" size="sm">Post new JD</Button>
          <Button size="sm" className="gap-2">
            <Sparkles className="h-3.5 w-3.5" /> AI Talent Match
          </Button>
        </>
      }
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
          <Kpi label="Active JDs" value={8} delta="+2" icon={Briefcase} accent="primary" />
          <Kpi label="Applications" value="1,284" delta="+312 wk" icon={Users} accent="info" />
          <Kpi label="Interviews scheduled" value={62} delta="+18" icon={Target} accent="warning" />
          <Kpi label="Offers released" value={24} delta="+8" icon={Sparkles} accent="success" />
          <Kpi label="Joining ratio" value="82%" delta="+5%" icon={TrendingUp} accent="success" />
        </div>

        <Section
          title="AI-ranked candidates for your open JDs"
          description="Match score combines skills, assessments, ATS, mock interview and personality fit"
          unique
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Branch</TableHead>
                <TableHead>ATS</TableHead>
                <TableHead>Mock</TableHead>
                <TableHead>Tech</TableHead>
                <TableHead>Match</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((c) => (
                <TableRow key={c.name}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell>{c.branch}</TableCell>
                  <TableCell className="tabular-nums">{c.ats}</TableCell>
                  <TableCell className="tabular-nums">{c.mock}</TableCell>
                  <TableCell className="tabular-nums">{c.tech}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={c.fit} className="h-1.5 w-20" />
                      <span className="pill pill-success">{c.fit}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">Shortlist</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Section>

        <div className="grid gap-6 xl:grid-cols-2">
          <Section title="Hiring funnel" description="Applied → Joined">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { s: "Applied", n: 1284 },
                    { s: "Shortlisted", n: 312 },
                    { s: "Interviewed", n: 142 },
                    { s: "Offered", n: 38 },
                    { s: "Joined", n: 31 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="s" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                  <Bar dataKey="n" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Section>

          <Section title="Recruitment ROI" description="vs industry benchmark" unique>
            <div className="grid grid-cols-2 gap-4">
              <Kpi label="Cost per hire" value="₹14,200" delta="-38%" icon={IndianRupee} accent="success" />
              <Kpi label="Time to hire" value="18d" delta="-9d" icon={Target} accent="success" />
              <Kpi label="Offer acceptance" value="86%" delta="+12%" icon={TrendingUp} accent="success" />
              <Kpi label="Hiring success" value="92%" delta="+8%" icon={Sparkles} accent="success" />
            </div>
          </Section>
        </div>

        <Section title="Skill availability across institutes" description="Where to source for your next hire" unique>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { s: "AI / ML", b: 184, h: 142, c: 96 },
                  { s: "Full Stack", b: 312, h: 268, c: 188 },
                  { s: "Cloud", b: 142, h: 98, c: 74 },
                  { s: "Cyber", b: 88, h: 62, c: 41 },
                  { s: "Data Sci", b: 224, h: 162, c: 112 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="s" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                <Bar dataKey="b" name="Bengaluru" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="h" name="Hyderabad" fill="var(--chart-2)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="c" name="Chennai" fill="var(--chart-4)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Section>

        <Section
          title="More recruiter dashboards"
          description="Pre-interview AI insight reports · panel scheduling · candidate comparison · communication hub · talent pipeline forecast"
        >
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "Pre-interview AI insight report",
              "Interview scheduling panel",
              "Candidate comparison view",
              "JD performance analytics",
              "Talent pipeline forecast",
              "Campus ROI deep-dive",
            ].map((t) => (
              <div key={t} className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
                {t}
                <div className="mt-1 text-[11px]">Available in v1.1</div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </AppShell>
  );
}
