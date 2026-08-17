import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
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
  Award,
  Briefcase,
  Building2,
  Compass,
  FileText,
  GraduationCap,
  Mic,
  Target,
  Trophy,
  TrendingUp,
  Video,
  Info,
} from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { Kpi } from "@/components/dashboard/kpi";
import { Section } from "@/components/dashboard/section";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  atsResume,
  careerSuggestions,
  careerTimeline,
  communicationTrend,
  dreamCompanies,
  learningRecs,
  mockInterview,
  peerBenchmark,
  placementProbability,
  readinessMeter,
  studentAssessmentTrend,
  studentJobApps,
  studentProfile,
} from "@/lib/mock-data";

export const Route = createFileRoute("/student")({
  head: () => ({
    meta: [
      { title: "My Career · Student Dashboard" },
      { name: "description", content: "Personal employability score, AI mock interviews, ATS resume, career GPS and placement probability." },
    ],
  }),
  component: StudentPage,
});

function StudentPage() {
  const p = studentProfile;
  return (
    <AppShell
      title={`Welcome back, ${p.name.split(" ")[0]}`}
      subtitle={`${p.branch} · ${p.year} · Employability score ${p.employabilityScore}/100`}
      actions={
        <>
          <Button variant="outline" size="sm" className="gap-2">
            <Video className="h-3.5 w-3.5" /> Start AI Mock
          </Button>
          <Button size="sm" className="gap-2">
            <Info className="h-3.5 w-3.5" /> Career counselling
          </Button>
        </>
      }
    >
      <Tabs defaultValue="home" className="space-y-6">
        <div className="overflow-x-auto">
          <TabsList className="flex w-max gap-1 bg-muted/60">
            <TabsTrigger value="home">Career Home</TabsTrigger>
            <TabsTrigger value="gps">Career GPS</TabsTrigger>
            <TabsTrigger value="readiness">Readiness</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="mock">AI Mock</TabsTrigger>
            <TabsTrigger value="resume">Resume / ATS</TabsTrigger>
            <TabsTrigger value="comms">Communication</TabsTrigger>
            <TabsTrigger value="dream">Dream Co.</TabsTrigger>
            <TabsTrigger value="probability">Placement %</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="learn">Learning</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="peers">Peer Benchmark</TabsTrigger>
          </TabsList>
        </div>

        {/* HOME */}
        <TabsContent value="home" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="section-card lg:col-span-2">
              <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Personal Employability Score
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <div className="text-5xl font-semibold tabular-nums">{p.employabilityScore}</div>
                    <div className="text-sm text-muted-foreground">/ 100</div>
                  </div>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    You're ahead of <span className="font-medium text-foreground">68%</span> of your batch. Close
                    the gap on Interview Readiness to break into the top 10%.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="pill pill-success"><Trophy className="h-3 w-3" /> Top performer</span>
                    <span className="pill pill-primary"><Info className="h-3 w-3" /> 6 mocks completed</span>
                    <span className="pill pill-warning"><Target className="h-3 w-3" /> 1 gap to address</span>
                  </div>
                </div>
                <ScoreRing value={p.employabilityScore} />
              </div>
              <div className="grid grid-cols-3 gap-px border-t bg-border md:grid-cols-6">
                {Object.entries(p.breakdown).map(([k, v]) => (
                  <div key={k} className="bg-card p-4">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</div>
                    <div className="mt-1 text-lg font-semibold tabular-nums">{v}</div>
                    <Progress value={v} className="mt-1.5 h-1" />
                  </div>
                ))}
              </div>
            </div>

            <Section title="This week's priority" description="AI-curated, in order of impact">
              <ul className="space-y-3">
                {[
                  { t: "Take AI Mock Interview #7", reason: "Lifts interview score by ~6 pts", icon: Video },
                  { t: "Add 'TypeScript, AWS' keywords to resume", reason: "Unlocks 12 more JDs", icon: FileText },
                  { t: "Complete System Design basics (12h)", reason: "Closes top rejection cause", icon: Info },
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-lg border p-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <t.icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium">{t.t}</div>
                      <div className="text-[11px] text-muted-foreground">{t.reason}</div>
                    </div>
                    <Button size="sm" variant="outline" className="h-7 text-xs">Start</Button>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Section title="Skill radar" description="Your profile across the 6 employability axes">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={Object.entries(p.breakdown).map(([k, v]) => ({ skill: k, score: v }))}>
                    <PolarGrid stroke="var(--border)" />
                    <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11 }} />
                    <PolarRadiusAxis tick={{ fontSize: 10 }} angle={30} />
                    <Radar dataKey="score" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Section>

            <Section title="6-week progress" description="Assessment scores trending up">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={studentAssessmentTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                    <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Line type="monotone" dataKey="aptitude" stroke="var(--chart-1)" strokeWidth={2.5} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="coding" stroke="var(--chart-2)" strokeWidth={2.5} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="domain" stroke="var(--chart-3)" strokeWidth={2.5} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Section>
          </div>
        </TabsContent>

        {/* CAREER GPS */}
        <TabsContent value="gps" className="space-y-6">
          <Section
            title="AI-recommended careers"
            description="Matched against your personality, interests, assessments and resume"
            unique
          >
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {careerSuggestions.map((c) => (
                <div key={c.role} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">{c.role}</div>
                    <span className="pill pill-primary">{c.fit}% fit</span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-muted-foreground">Demand</div>
                      <div className="font-medium">{c.demand}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Avg pkg</div>
                      <div className="font-medium">₹{c.avgPkg}L</div>
                    </div>
                  </div>
                  <Progress value={c.fit} className="mt-3 h-1.5" />
                  <Button size="sm" variant="outline" className="mt-3 w-full">
                    Explore path
                  </Button>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Career stream for 12th / UG / PG" description="Pick your level — AI maps the rest" unique>
            <Tabs defaultValue="ug">
              <TabsList>
                <TabsTrigger value="12">12th Standard</TabsTrigger>
                <TabsTrigger value="ug">Undergrad</TabsTrigger>
                <TabsTrigger value="pg">Postgrad</TabsTrigger>
              </TabsList>
              <TabsContent value="12" className="mt-4 grid gap-3 md:grid-cols-3">
                {[
                  { s: "Engineering", roles: "CSE · AI · ECE · MECH", exam: "JEE / state CETs" },
                  { s: "Medicine", roles: "MBBS · BDS · Pharmacy", exam: "NEET" },
                  { s: "Design", roles: "UI/UX · Product · Industrial", exam: "NID / UCEED" },
                  { s: "Commerce", roles: "CA · CFA · Banking · Analytics", exam: "CUET · CA Foundation" },
                  { s: "UPSC / Civil Services", roles: "IAS · IPS · IFS", exam: "UPSC CSE" },
                  { s: "Liberal Arts", roles: "Law · Psychology · Journalism", exam: "CLAT · CUET" },
                ].map((s) => (
                  <div key={s.s} className="rounded-lg border p-4">
                    <div className="text-sm font-semibold">{s.s}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.roles}</div>
                    <div className="mt-2 pill pill-info">{s.exam}</div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="ug" className="mt-4 grid gap-3 md:grid-cols-3">
                {careerSuggestions.slice(0, 6).map((c) => (
                  <div key={c.role} className="rounded-lg border p-4">
                    <div className="text-sm font-semibold">{c.role}</div>
                    <div className="mt-1 text-xs text-muted-foreground">Fit {c.fit}% · ₹{c.avgPkg}L avg</div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="pg" className="mt-4 grid gap-3 md:grid-cols-3">
                {[
                  { r: "ML Engineer", p: "₹22-40L" },
                  { r: "Product Manager", p: "₹28-52L" },
                  { r: "Quant Analyst", p: "₹35-80L" },
                  { r: "Strategy Consultant", p: "₹24-38L" },
                  { r: "Research Scientist", p: "₹18-36L" },
                  { r: "Data Architect", p: "₹30-55L" },
                ].map((c) => (
                  <div key={c.r} className="rounded-lg border p-4">
                    <div className="text-sm font-semibold">{c.r}</div>
                    <div className="mt-1 text-xs text-muted-foreground">Expected pkg {c.p}</div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </Section>
        </TabsContent>

        {/* READINESS */}
        <TabsContent value="readiness" className="space-y-6">
          <Section title="Placement readiness meter">
            <div className="space-y-4">
              {readinessMeter.map((r) => (
                <div key={r.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium">{r.label}</span>
                    <span className="tabular-nums">{r.value}%</span>
                  </div>
                  <Progress value={r.value} className="h-2" />
                </div>
              ))}
            </div>
          </Section>

          <Section title="Skill gap for your target role" description="To break into Product SaaS · ₹18L+ band" unique>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Skill</TableHead>
                  <TableHead>Required</TableHead>
                  <TableHead>Your level</TableHead>
                  <TableHead>Gap</TableHead>
                  <TableHead className="text-right">Plan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { s: "DSA Advanced", r: 85, y: 72 },
                  { s: "System Design", r: 75, y: 48 },
                  { s: "Cloud (AWS)", r: 70, y: 35 },
                  { s: "Communication", r: 80, y: 70 },
                ].map((g) => (
                  <TableRow key={g.s}>
                    <TableCell className="font-medium">{g.s}</TableCell>
                    <TableCell className="tabular-nums">{g.r}</TableCell>
                    <TableCell className="tabular-nums">{g.y}</TableCell>
                    <TableCell>
                      <span className={g.r - g.y > 20 ? "pill pill-danger" : "pill pill-warning"}>
                        -{g.r - g.y}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost">Add to plan</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Section>
        </TabsContent>

        {/* ASSESSMENTS */}
        <TabsContent value="assessments" className="space-y-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Kpi label="Self evaluations" value={12} hint="Confidence 78" icon={Target} accent="primary" />
            <Kpi label="Practice tests" value={42} delta="+8 this week" icon={GraduationCap} accent="success" />
            <Kpi label="Coding score" value={78} unit="/100" delta="+10" icon={TrendingUp} accent="success" />
            <Kpi label="Domain test" value={80} unit="/100" delta="+6" icon={Award} accent="success" />
          </div>
          <Section title="Score progression" description="Across aptitude, coding and domain tests">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={studentAssessmentTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="aptitude" stroke="var(--chart-1)" strokeWidth={2.5} />
                  <Line type="monotone" dataKey="coding" stroke="var(--chart-2)" strokeWidth={2.5} />
                  <Line type="monotone" dataKey="domain" stroke="var(--chart-3)" strokeWidth={2.5} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Section>
        </TabsContent>

        {/* MOCK */}
        <TabsContent value="mock" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Section title="Latest AI Mock Interview" description={`Attempt #${mockInterview.attempts} · auto-scored`} className="lg:col-span-2">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    data={Object.entries(mockInterview.latest).map(([k, v]) => ({ skill: k, score: v }))}
                  >
                    <PolarGrid stroke="var(--border)" />
                    <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11 }} />
                    <PolarRadiusAxis tick={{ fontSize: 10 }} />
                    <Radar dataKey="score" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Section>
            <Section title="Weak topics" description="Where to focus before your next interview">
              <ul className="space-y-2">
                {mockInterview.weakTopics.map((t) => (
                  <li key={t} className="flex items-start gap-2 rounded-lg border p-3 text-sm">
                    <Mic className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="min-w-0 flex-1">{t}</span>
                    <Button size="sm" variant="outline" className="h-7 text-xs">Practice</Button>
                  </li>
                ))}
              </ul>
              <Button className="mt-4 w-full" size="sm">
                <Video className="mr-2 h-3.5 w-3.5" /> Start mock #{mockInterview.attempts + 1}
              </Button>
            </Section>
          </div>
        </TabsContent>

        {/* RESUME */}
        <TabsContent value="resume" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="section-card flex flex-col items-center justify-center p-8">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">ATS Score</div>
              <ScoreRing value={atsResume.score} />
              <div className="mt-3 text-sm text-muted-foreground">Above the 80 hiring threshold</div>
            </div>
            <Section title="Missing keywords" description="Add to unlock more job matches" className="lg:col-span-2">
              <div className="flex flex-wrap gap-2">
                {atsResume.missingKeywords.map((k) => (
                  <Badge key={k} variant="outline" className="px-3 py-1 text-xs">
                    + {k}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 space-y-2 border-t pt-4">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  AI suggestions
                </div>
                {atsResume.suggestions.map((s, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </TabsContent>

        {/* COMMS */}
        <TabsContent value="comms" className="space-y-6">
          <Section title="Communication training trends" description="Daily improvement across grammar, fluency and pronunciation">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={communicationTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="grammar" stroke="var(--chart-1)" strokeWidth={2.5} />
                  <Line type="monotone" dataKey="fluency" stroke="var(--chart-2)" strokeWidth={2.5} />
                  <Line type="monotone" dataKey="pronunciation" stroke="var(--chart-3)" strokeWidth={2.5} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Section>
        </TabsContent>

        {/* DREAM */}
        <TabsContent value="dream" className="space-y-6">
          <Section
            title="Your dream companies"
            description="Required skill score · your current level · gap · expected package"
            unique
          >
            <div className="grid gap-3 md:grid-cols-2">
              {dreamCompanies.map((c) => (
                <div key={c.name} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-base font-semibold">{c.name}</div>
                    <span className="pill pill-info">{c.expectedPkg}</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="text-muted-foreground">Required</div>
                      <div className="text-base font-semibold tabular-nums">{c.required}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">You</div>
                      <div className="text-base font-semibold tabular-nums">{c.current}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Gap</div>
                      <div className={`text-base font-semibold tabular-nums ${c.gap > 0 ? "text-[color:var(--destructive)]" : "text-[color:var(--success)]"}`}>
                        {c.gap > 0 ? `-${c.gap}` : `+${-c.gap}`}
                      </div>
                    </div>
                  </div>
                  <Progress value={(c.current / c.required) * 100} className="mt-3 h-1.5" />
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>

        {/* PROBABILITY */}
        <TabsContent value="probability" className="space-y-6">
          <Section
            title="Placement probability by company tier"
            description="AI predictor using your skills, assessments, mock interviews and resume"
            unique
          >
            <div className="space-y-4">
              {placementProbability.map((p) => (
                <div key={p.tier}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium">{p.tier}</span>
                    <span className="tabular-nums">{p.probability}%</span>
                  </div>
                  <Progress value={p.probability} className="h-2" />
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-dashed bg-muted/40 p-4">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-4 w-4 text-primary" />
                <div className="text-sm">
                  <span className="font-medium">Salary predictor:</span> based on your current trajectory, expected
                  joining package range is <span className="font-semibold">₹12L – ₹18L</span>. Closing the System
                  Design gap can push this to ₹18L – ₹24L.
                </div>
              </div>
            </div>
          </Section>
        </TabsContent>

        {/* JOBS */}
        <TabsContent value="jobs" className="space-y-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Kpi label="Applied" value={14} icon={Briefcase} accent="primary" />
            <Kpi label="Shortlisted" value={6} icon={Target} accent="info" />
            <Kpi label="Interviews" value={3} icon={Video} accent="warning" />
            <Kpi label="Offers" value={1} icon={Trophy} accent="success" />
          </div>
          <Section title="Job application tracker">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentJobApps.map((j) => (
                  <TableRow key={j.company}>
                    <TableCell className="font-medium">{j.company}</TableCell>
                    <TableCell>{j.role}</TableCell>
                    <TableCell>
                      <span
                        className={
                          j.status === "Offer"
                            ? "pill pill-success"
                            : j.status === "Rejected"
                              ? "pill pill-danger"
                              : j.status === "Interview"
                                ? "pill pill-warning"
                                : "pill pill-info"
                        }
                      >
                        {j.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right text-xs text-muted-foreground">{j.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Section>
        </TabsContent>

        {/* LEARN */}
        <TabsContent value="learn" className="space-y-6">
          <Section title="AI-curated learning plan" description="Courses, certifications and projects to close your gaps">
            <div className="grid gap-3 md:grid-cols-2">
              {learningRecs.map((r) => (
                <div key={r.title} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <span className="pill pill-primary">{r.type}</span>
                    <span className={r.urgency === "high" ? "pill pill-danger" : "pill pill-warning"}>
                      {r.urgency} urgency
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-semibold">{r.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{r.provider} · {r.duration}</div>
                  <Button size="sm" variant="outline" className="mt-3">Add to plan</Button>
                </div>
              ))}
            </div>
          </Section>
        </TabsContent>

        {/* TIMELINE */}
        <TabsContent value="timeline" className="space-y-6">
          <Section title="Your career timeline" description="Today → 5 years from now" unique>
            <ol className="relative space-y-6 border-l pl-6">
              {careerTimeline.map((t, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{t.when}</div>
                  <div className="text-sm font-semibold">{t.milestone}</div>
                </li>
              ))}
            </ol>
          </Section>

          <Section title="Industry demand snapshot" description="Top hiring industries this quarter" unique>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { i: "AI / ML", openings: 5200 },
                    { i: "Full Stack", openings: 6400 },
                    { i: "Cyber", openings: 3200 },
                    { i: "Cloud", openings: 3800 },
                    { i: "Data Sci", openings: 4100 },
                    { i: "Product", openings: 1800 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="i" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                  <Bar dataKey="openings" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Section>
        </TabsContent>

        {/* PEERS */}
        <TabsContent value="peers" className="space-y-6">
          <Section
            title="Peer benchmark"
            description="You vs department · campus · top 10%"
            unique
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={peerBenchmark}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="metric" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="you" name="You" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="dept" name="Dept avg" fill="var(--chart-2)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="campus" name="Campus avg" fill="var(--chart-4)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="top10" name="Top 10%" fill="var(--chart-3)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Section>
        </TabsContent>
      </Tabs>
    </AppShell>
  );
}

function ScoreRing({ value }: { value: number }) {
  const size = 140;
  const stroke = 12;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="var(--border)" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="var(--primary)"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-semibold tabular-nums">{value}</div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">of 100</div>
      </div>
    </div>
  );
}
