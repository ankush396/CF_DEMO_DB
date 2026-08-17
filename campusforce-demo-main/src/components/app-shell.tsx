import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Briefcase,
  Building2,
  GraduationCap,
  Search,
  Bell,
  Settings,
  Info,
  ChevronDown,
} from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import img from "@/assests/img/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const ROLES = [
  {
    to: "/super-admin",
    label: "Super Admin",
    desc: "Trustees, CEO, Directors",
    icon: LayoutDashboard,
  },
  {
    to: "/placement-officer",
    label: "Placement Officer",
    desc: "Operations & drives",
    icon: Briefcase,
  },
  { to: "/corporate", label: "Corporate / Recruiter", desc: "Hiring partners", icon: Building2 },
  { to: "/student", label: "Student", desc: "Career & readiness", icon: GraduationCap },
] as const;

export function AppShell({
  children,
  title,
  subtitle,
  actions,
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const currentRole = ROLES.find((r) => pathname.startsWith(r.to)) ?? ROLES[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r bg-sidebar lg:flex lg:flex-col">
          <div className="flex h-16 items-center gap-2 border-b px-5">
            <img src={img} alt="logo" className="invert" />
          </div>

          <nav className="flex-1 space-y-1 p-3">
            <div className="px-2 pb-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Workspaces
            </div>
            {ROLES.map((r) => {
              const Icon = r.icon;
              const active = pathname.startsWith(r.to);
              return (
                <Link
                  key={r.to}
                  to={r.to}
                  className={cn(
                    "group flex items-start gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
                  )}
                >
                  <Icon
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      active ? "text-white" : "text-muted-foreground group-hover:text-foreground",
                    )}
                  />
                  <div className="min-w-0">
                    <div className="font-medium">{r.label}</div>
                    <div
                      className={cn(
                        "truncate text-[11px]",
                        active ? "text-white" : "text-muted-foreground",
                      )}
                    >
                      {r.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="border-t p-3">
            <div className="rounded-lg border bg-card p-3">
              <div className="flex items-center gap-2 text-xs font-medium">
                <Info className="h-3.5 w-3.5 text-primary" />
                AI Insights live
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                4 new recommendations across departments. Review now.
              </p>
              <Button size="sm" variant="outline" className="mt-2 h-7 w-full text-xs">
                Open insights
              </Button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Top bar */}
          <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-3 border-b bg-background/80 px-4 backdrop-blur md:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <currentRole.icon className="h-4 w-4 text-primary" />
                    <span className="hidden sm:inline">{currentRole.label}</span>
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel>Switch workspace</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {ROLES.map((r) => (
                    <DropdownMenuItem key={r.to} asChild>
                      <Link to={r.to} className="flex items-start gap-2">
                        <r.icon className="mt-0.5 h-4 w-4 text-primary" />
                        <div>
                          <div className="text-sm font-medium">{r.label}</div>
                          <div className="text-[11px] text-muted-foreground">{r.desc}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="hidden h-6 w-px bg-border md:block" />

              <div className="relative hidden md:block">
                <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search students, companies, dashboards..."
                  className="h-9 w-[320px] pl-8"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Settings className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-xs font-medium text-primary">
                  HZ
                </AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Page header */}
          <div className="border-b bg-background px-4 py-5 md:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight md:text-[28px]">{title}</h1>
                {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
              </div>
              {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
            </div>
          </div>

          <main className="px-4 py-6 md:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
