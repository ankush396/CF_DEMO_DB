import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  AlertTriangle,
  Award,
  Briefcase,
  Building2,
  Clock,
  Download,
  GraduationCap,
  IndianRupee,
  LineChart as LineIcon,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { Kpi } from "@/components/dashboard/kpi";
import { Section } from "@/components/dashboard/section";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  aiRecommendations,
  atRiskStudents,
  automationSavings,
  benchmarkCampuses,
  branchHeatmap,
  employabilityRadar,
  industryDistribution,
  institute,
  placementKpis,
  predictivePlacement,
  roiBeforeAfter,
  skillDemandSupply,
  studentRiskBuckets,
  yoyTrend,
} from "@/lib/mock-data";

export const Route = createFileRoute("/super-admin")({
  head: () => ({
    meta: [
      { title: "Super Admin · Placement Command Center" },
      {
        name: "description",
        content: "Executive placement, employability, ROI and predictive dashboards.",
      },
    ],
  }),
  component: SuperAdminPage,
});

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
  "oklch(0.7 0.15 320)",
  "oklch(0.7 0.13 50)",
];

function SuperAdminPage() {
  return (
    <AppShell
      title="Executive Placement Command Center"
      subtitle={`${institute.name} · Batch ${institute.batch} · ${institute.totalStudents.toLocaleString()} students across ${institute.campuses} campuses`}
      actions={
        <>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-3.5 w-3.5" /> Accreditation export
          </Button>
          <Button size="sm" className="gap-2">
            <Sparkles className="h-3.5 w-3.5" /> Ask AI
          </Button>
        </>
      }
    >
      <Tabs defaultValue="executive" className="space-y-6">
        <div className="overflow-x-auto">
          <TabsList className="flex w-max gap-1 bg-muted/60">
            <TabsTrigger value="executive">Executive</TabsTrigger>
            <TabsTrigger value="employability">Employability</TabsTrigger>
            <TabsTrigger value="predictive">Predictive AI</TabsTrigger>
            <TabsTrigger value="risk">Risk Radar</TabsTrigger>
            <TabsTrigger value="skills">Skill Demand vs Supply</TabsTrigger>
            <TabsTrigger value="roi">ROI &amp; Automation</TabsTrigger>
            <TabsTrigger value="benchmark">Benchmarking</TabsTrigger>
            <TabsTrigger value="accreditation">Accreditation</TabsTrigger>
          </TabsList>
        </div>

        {/* EXECUTIVE */}
        <TabsContent value="executive" className="space-y-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
            <Kpi
              label="Placement %"
              value={placementKpis.placementPct}
              unit="%"
              delta="+2.4% YoY"
              icon={Trophy}
              accent="success"
            />
            <Kpi
              label="Highest Package"
              value={`₹${placementKpis.highestPackageLpa}L`}
              delta="+₹6L"
              icon={IndianRupee}
              accent="primary"
            />
            <Kpi
              label="Average Package"
              value={`₹${placementKpis.averagePackageLpa}L`}
              delta="+₹0.7L"
              icon={LineIcon}
              accent="info"
            />
            <Kpi
              label="Median Package"
              value={`₹${placementKpis.medianPackageLpa}L`}
              delta="+₹0.4L"
              icon={LineIcon}
              accent="info"
            />
            <Kpi
              label="Internship → PPO"
              value={placementKpis.ppoPct}
              unit="%"
              delta="+3%"
              icon={Briefcase}
              accent="success"
            />
            <Kpi
              label="Offer Acceptance"
              value={placementKpis.offerAcceptancePct}
              unit="%"
              delta="+5%"
              icon={Target}
              accent="success"
            />
            <Kpi
              label="Multiple Offers"
              value={placementKpis.multipleOffersPct}
              unit="%"
              delta="+4%"
              icon={Award}
              accent="primary"
            />
            <Kpi
              label="Dream Offers"
              value={placementKpis.dreamOfferPct}
              unit="%"
              delta="+6%"
              icon={Sparkles}
              accent="primary"
            />
            <Kpi
              label="Internship Conversion"
              value={placementKpis.internshipConversionPct}
              unit="%"
              delta="+2%"
              icon={GraduationCap}
              accent="info"
            />
            <Kpi
              label="Companies Visited"
              value={212}
              delta="+38 YoY"
              icon={Building2}
              accent="success"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <Section
              title="Hiring trend (YoY)"
              description="Placement % and average package over 6 years"
              className="xl:col-span-2"
            >
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yoyTrend} margin={{ top: 8, right: 12, left: -8, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis
                      dataKey="year"
                      tick={{ fontSize: 12 }}
                      stroke="var(--muted-foreground)"
                    />
                    <YAxis
                      yAxisId="left"
                      tick={{ fontSize: 12 }}
                      stroke="var(--muted-foreground)"
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      tick={{ fontSize: 12 }}
                      stroke="var(--muted-foreground)"
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid var(--border)",
                        fontSize: 12,
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="placement"
                      name="Placement %"
                      stroke="var(--chart-1)"
                      strokeWidth={2.5}
                      dot={{ r: 3 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="average"
                      name="Avg pkg (LPA)"
                      stroke="var(--chart-2)"
                      strokeWidth={2.5}
                      dot={{ r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Section>

            <Section title="Industry-wise hiring" description="Share of offers by sector">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid var(--border)",
                        fontSize: 12,
                      }}
                    />
                    <Pie
                      data={industryDistribution}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={50}
                      outerRadius={90}
                      paddingAngle={2}
                    >
                      {industryDistribution.map((_, i) => (
                        <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Section>
          </div>

          <Section
            title="AI Recommendations"
            description="Ranked by projected impact this quarter"
            unique
            actions={
              <Button variant="ghost" size="sm">
                View all
              </Button>
            }
          >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {aiRecommendations.map((r) => (
                <div key={r.title} className="flex items-start gap-3 rounded-lg border p-4">
                  <div className="rounded-md bg-primary/10 p-2 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium leading-snug">{r.title}</div>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                      <span className="pill pill-success">{r.impact}</span>
                      <span
                        className={r.severity === "high" ? "pill pill-danger" : "pill pill-warning"}
                      >
                        {r.severity === "high" ? "High priority" : "Medium priority"}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Action
                  </Button>
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>

        {/* EMPLOYABILITY */}
        <TabsContent value="employability" className="space-y-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Kpi
              label="Employability Index"
              value={76}
              unit="/100"
              delta="+4 pts"
              icon={TrendingUp}
              accent="success"
            />
            <Kpi
              label="Communication"
              value={72}
              unit="/100"
              delta="+5 pts"
              icon={Users}
              accent="info"
            />
            <Kpi
              label="Technical"
              value={76}
              unit="/100"
              delta="+3 pts"
              icon={Zap}
              accent="primary"
            />
            <Kpi
              label="AI Readiness"
              value={58}
              unit="/100"
              delta="-2 pts"
              trend="down"
              icon={Sparkles}
              accent="warning"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <Section
              title="Skill radar vs target"
              description="Current cohort vs placement-ready target"
              className="xl:col-span-1"
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={employabilityRadar}>
                    <PolarGrid stroke="var(--border)" />
                    <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11 }} />
                    <PolarRadiusAxis tick={{ fontSize: 10 }} angle={30} />
                    <Radar
                      name="Current"
                      dataKey="score"
                      stroke="var(--chart-1)"
                      fill="var(--chart-1)"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="Target"
                      dataKey="target"
                      stroke="var(--chart-2)"
                      fill="var(--chart-2)"
                      fillOpacity={0.1}
                    />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Section>

            <Section
              title="Branch-wise heatmap"
              description="Placement % vs employability score"
              className="xl:col-span-2"
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={branchHeatmap}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis
                      dataKey="branch"
                      tick={{ fontSize: 12 }}
                      stroke="var(--muted-foreground)"
                    />
                    <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid var(--border)",
                        fontSize: 12,
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar
                      dataKey="placement"
                      name="Placement %"
                      fill="var(--chart-1)"
                      radius={[6, 6, 0, 0]}
                    />
                    <Bar
                      dataKey="employability"
                      name="Employability"
                      fill="var(--chart-2)"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Section>
          </div>

          <Section
            title="Top employability gaps"
            description="Skills causing maximum interview rejections"
          >
            <div className="grid gap-3 md:grid-cols-3">
              {[
                { skill: "System Design", rejections: 142, suggestion: "12-week bootcamp" },
                { skill: "Behavioral / HR", rejections: 118, suggestion: "AI mock interviews" },
                { skill: "Cloud (AWS/GCP)", rejections: 96, suggestion: "Certification track" },
                { skill: "DSA advanced", rejections: 84, suggestion: "Weekly contests" },
                { skill: "Spoken English", rejections: 72, suggestion: "AI communication coach" },
                { skill: "Domain knowledge", rejections: 58, suggestion: "Industry capstone" },
              ].map((g) => (
                <div key={g.skill} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">{g.skill}</div>
                    <span className="pill pill-danger">{g.rejections} rejections</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Suggested: {g.suggestion}</p>
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>

        {/* PREDICTIVE */}
        <TabsContent value="predictive" className="space-y-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Kpi
              label="Predicted final placement"
              value="92"
              unit="%"
              delta="Confidence 88%"
              icon={TrendingUp}
              accent="success"
            />
            <Kpi
              label="Predicted highest pkg"
              value="₹72L"
              delta="+₹8L vs last yr"
              icon={IndianRupee}
              accent="primary"
            />
            <Kpi
              label="Likely dream offers"
              value={142}
              delta="+24"
              icon={Sparkles}
              accent="primary"
            />
            <Kpi
              label="Companies expected"
              value={248}
              delta="+36 forecast"
              icon={Building2}
              accent="info"
            />
          </div>

          <Section
            title="Predicted vs actual placement %"
            description="AI forecast model · monthly horizon"
            unique
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={predictivePlacement}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    name="Predicted"
                    stroke="var(--chart-1)"
                    strokeWidth={2.5}
                    strokeDasharray="5 4"
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    name="Actual"
                    stroke="var(--chart-2)"
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Section>

          <div className="grid gap-6 md:grid-cols-2">
            <Section title="Emerging industries hiring more" description="6-month forecast" unique>
              <div className="space-y-3">
                {[
                  { name: "Generative AI", growth: 184 },
                  { name: "Climate Tech", growth: 92 },
                  { name: "Cyber Security", growth: 68 },
                  { name: "Fintech (B2B)", growth: 54 },
                ].map((i) => (
                  <div key={i.name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="font-medium">{i.name}</span>
                      <span className="text-[color:var(--success)]">+{i.growth}% YoY</span>
                    </div>
                    <Progress value={Math.min(i.growth / 2, 100)} className="h-2" />
                  </div>
                ))}
              </div>
            </Section>

            <Section
              title="Departments needing intervention"
              description="Predicted to miss target by &gt;5%"
              unique
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Department</TableHead>
                    <TableHead>Forecast</TableHead>
                    <TableHead>Gap</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { d: "MECH", f: 71, g: -9 },
                    { d: "CIVIL", f: 64, g: -16 },
                    { d: "EEE", f: 79, g: -1 },
                  ].map((r) => (
                    <TableRow key={r.d}>
                      <TableCell className="font-medium">{r.d}</TableCell>
                      <TableCell>{r.f}%</TableCell>
                      <TableCell>
                        <span className="pill pill-danger">{r.g}%</span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="outline">
                          Plan
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Section>
          </div>
        </TabsContent>

        {/* RISK */}
        <TabsContent value="risk" className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {studentRiskBuckets.map((b) => (
              <div key={b.tier} className="kpi-card">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium text-muted-foreground">{b.tier} tier</div>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: b.color }} />
                </div>
                <div className="mt-2 text-2xl font-semibold tabular-nums">
                  {b.count.toLocaleString()}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {Math.round((b.count / 4820) * 100)}% of cohort
                </div>
              </div>
            ))}
          </div>

          <Section
            title="At-risk students requiring intervention"
            description="Auto-flagged by AI based on attendance, scores, resume, mock interview status"
            unique
            actions={
              <Button size="sm" variant="outline">
                Allocate mentors
              </Button>
            }
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Branch</TableHead>
                  <TableHead>Risk</TableHead>
                  <TableHead>Top issues</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead className="text-right">Plan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {atRiskStudents.map((s) => (
                  <TableRow key={s.name}>
                    <TableCell className="font-medium">{s.name}</TableCell>
                    <TableCell>{s.branch}</TableCell>
                    <TableCell>
                      <span className={s.risk === "Red" ? "pill pill-danger" : "pill pill-warning"}>
                        <AlertTriangle className="h-3 w-3" /> {s.risk}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {s.issues.map((i) => (
                          <Badge key={i} variant="secondary" className="text-[10px] font-normal">
                            {i}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="tabular-nums">{s.score}</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost">
                        Build plan
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Section>
        </TabsContent>

        {/* SKILL DEMAND VS SUPPLY */}
        <TabsContent value="skills" className="space-y-6">
          <Section
            title="Skill demand vs institutional supply"
            description="Market hiring demand (next 12 mo) vs students currently job-ready in each skill"
            unique
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skillDemandSupply} layout="vertical" margin={{ left: 16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <YAxis
                    type="category"
                    dataKey="skill"
                    tick={{ fontSize: 12 }}
                    width={110}
                    stroke="var(--muted-foreground)"
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar
                    dataKey="demand"
                    name="Market demand"
                    fill="var(--chart-1)"
                    radius={[0, 6, 6, 0]}
                  />
                  <Bar
                    dataKey="supply"
                    name="Our supply"
                    fill="var(--chart-2)"
                    radius={[0, 6, 6, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {skillDemandSupply.slice(0, 3).map((s) => (
                <div key={s.skill} className="rounded-lg border p-3">
                  <div className="text-xs text-muted-foreground">{s.skill} gap</div>
                  <div className="mt-1 text-xl font-semibold tabular-nums">
                    {(s.demand - s.supply).toLocaleString()}
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground">
                    Demand {s.demand.toLocaleString()} · Supply {s.supply.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>

        {/* ROI */}
        <TabsContent value="roi" className="space-y-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Kpi
              label="Placement fee generated"
              value="₹4.2Cr"
              delta="+38% YoY"
              icon={IndianRupee}
              accent="success"
            />
            <Kpi
              label="Cost per placement"
              value="₹7,400"
              delta="-60% via AI"
              icon={TrendingUp}
              accent="success"
            />
            <Kpi
              label="Hours saved (qtr)"
              value="4,170"
              delta="+1,240"
              icon={Clock}
              accent="primary"
            />
            <Kpi
              label="AI automation savings"
              value="₹20.8L"
              delta="+₹6L"
              icon={Zap}
              accent="primary"
            />
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <Section
              title="Before vs after Campusforce"
              description="Operational comparison on identical batch size"
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead className="text-right">Before</TableHead>
                    <TableHead className="text-right">Current</TableHead>
                    <TableHead className="text-right">Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roiBeforeAfter.map((r) => {
                    const pct = Math.round(((r.after - r.before) / r.before) * 100);
                    const good =
                      r.metric.toLowerCase().includes("cost") ||
                      r.metric.toLowerCase().includes("hours")
                        ? pct < 0
                        : pct > 0;
                    return (
                      <TableRow key={r.metric}>
                        <TableCell className="font-medium">{r.metric}</TableCell>
                        <TableCell className="text-right tabular-nums">
                          {r.before.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                          {r.after.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <span className={good ? "pill pill-success" : "pill pill-danger"}>
                            {pct > 0 ? "+" : ""}
                            {pct}%
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Section>

            <Section
              title="Automation savings by module"
              description="Hours and salary cost saved through AI automation"
              unique
            >
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={automationSavings}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 11 }}
                      interval={0}
                      angle={-15}
                      textAnchor="end"
                      height={60}
                      stroke="var(--muted-foreground)"
                    />
                    <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid var(--border)",
                        fontSize: 12,
                      }}
                    />
                    <Bar
                      dataKey="hours"
                      name="Hours saved"
                      fill="var(--chart-1)"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Section>
          </div>
        </TabsContent>

        {/* BENCHMARKING */}
        <TabsContent value="benchmark" className="space-y-6">
          <Section
            title="Campus benchmarking"
            description="Compare campuses across employability, placement and package"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campus</TableHead>
                  <TableHead>Employability</TableHead>
                  <TableHead>Placement %</TableHead>
                  <TableHead>Avg package (LPA)</TableHead>
                  <TableHead>Rank</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...benchmarkCampuses]
                  .sort((a, b) => b.employability - a.employability)
                  .map((c, idx) => (
                    <TableRow key={c.campus}>
                      <TableCell className="font-medium">{c.campus}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={c.employability} className="h-2 w-24" />
                          <span className="tabular-nums text-xs">{c.employability}</span>
                        </div>
                      </TableCell>
                      <TableCell className="tabular-nums">{c.placement}%</TableCell>
                      <TableCell className="tabular-nums">₹{c.package}L</TableCell>
                      <TableCell>
                        <span className="pill pill-primary">#{idx + 1}</span>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Section>

          <Section title="Branch comparison snapshot">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={branchHeatmap}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis
                    dataKey="branch"
                    tick={{ fontSize: 12 }}
                    stroke="var(--muted-foreground)"
                  />
                  <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar
                    dataKey="placement"
                    name="Placement %"
                    fill="var(--chart-1)"
                    radius={[6, 6, 0, 0]}
                  />
                  <Bar
                    dataKey="employability"
                    name="Employability"
                    fill="var(--chart-2)"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Section>
        </TabsContent>

        {/* ACCREDITATION */}
        <TabsContent value="accreditation" className="space-y-6">
          <Section
            title="NBA / NAAC / NIRF ready exports"
            description="Auto-compiled statistics in audit-ready format"
            actions={
              <>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-3.5 w-3.5" /> Excel
                </Button>
                <Button size="sm" className="gap-2">
                  <Download className="h-3.5 w-3.5" /> PDF
                </Button>
              </>
            }
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                { l: "Placement statistics", v: "87.4% · 4,213 offers" },
                { l: "Higher studies", v: "412 students · 18 countries" },
                { l: "Entrepreneurship", v: "38 startups · ₹62Cr funded" },
                { l: "Internships completed", v: "3,840 students" },
                { l: "Industry certifications", v: "11,260 issued" },
                { l: "Skill mapping coverage", v: "94% of curriculum" },
              ].map((m) => (
                <div key={m.l} className="rounded-lg border p-4">
                  <div className="text-xs text-muted-foreground">{m.l}</div>
                  <div className="mt-1 text-base font-semibold">{m.v}</div>
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
}
