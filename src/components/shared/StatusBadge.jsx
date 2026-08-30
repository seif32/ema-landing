import { Badge } from "@/components/ui/badge";
import { UI } from "@/content";
import { cn } from "@/lib/utils";

const STYLES = {
  live: "bg-emerald-50 border-emerald-500/40 text-emerald-700",
  beta: "bg-amber-50 border-amber-500/40 text-amber-700",
  planned: "bg-muted border-border text-muted-foreground",
};

/** Live / Beta / Planned marker for a module. */
function StatusBadge({ status = "live", className }) {
  const label = UI.status[status] ?? UI.status.live;

  return (
    <Badge
      variant="outline"
      className={cn("gap-1.5 text-[11px]", STYLES[status], className)}
    >
      {status === "live" && (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
        </span>
      )}
      {label}
    </Badge>
  );
}

export default StatusBadge;
