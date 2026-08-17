import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Kpi({
  label,
  value,
  unit,
  delta,
  trend = "up",
  icon: Icon,
  hint,
  accent = "primary",
}: {
  label: string;
  value: string | number;
  unit?: string;
  delta?: string;
  trend?: "up" | "down" | "flat";
  icon?: LucideIcon;
  hint?: string;
  accent?: "primary" | "success" | "warning" | "info" | "destructive";
}) {
  const accentMap = {
    primary: "text-[color:var(--primary)] bg-[color:var(--primary)]/10",
    success: "text-[color:var(--success)] bg-[color:var(--success)]/10",
    warning: "text-[color:oklch(0.45_0.13_75)] bg-[color:var(--warning)]/15",
    info: "text-[color:var(--info)] bg-[color:var(--info)]/10",
    destructive: "text-[color:var(--destructive)] bg-[color:var(--destructive)]/10",
  } as const;

  const trendColor =
    trend === "down"
      ? "text-[color:var(--destructive)]"
      : trend === "flat"
        ? "text-muted-foreground"
        : "text-[color:var(--success)]";

  return (
    <div className="kpi-card">
      <div className="flex items-start justify-between">
        <div className="text-xs font-medium text-muted-foreground">{label}</div>
        {Icon ? (
          <div className={cn("rounded-md p-1.5", accentMap[accent])}>
            <Icon className="h-3.5 w-3.5" />
          </div>
        ) : null}
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <div className="text-2xl font-semibold tracking-tight tabular-nums">{value}</div>
        {unit ? <div className="text-sm text-muted-foreground">{unit}</div> : null}
      </div>
      <div className="mt-2 flex items-center justify-between">
        {delta ? (
          <div className={cn("inline-flex items-center gap-0.5 text-xs font-medium", trendColor)}>
            {trend === "up" ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : trend === "down" ? (
              <ArrowDownRight className="h-3 w-3" />
            ) : null}
            {delta}
          </div>
        ) : (
          <span />
        )}
        {hint ? <div className="text-[11px] text-muted-foreground">{hint}</div> : null}
      </div>
    </div>
  );
}
