"use client";

import { students, CLUSTER_META } from "@/lib/mock-students";
import type { ClusterId } from "@/lib/mock-students";

const ORDERED_CLUSTERS: Exclude<ClusterId, null>[] = [
  "M_RP_003",
  "M_RP_001",
  "M_RP_009",
  "unclassified",
  "correct",
];

export function PipelineBar() {
  const submitted = students.filter((s) => s.submitted);
  const total = submitted.length;

  const counts = ORDERED_CLUSTERS.map((id) => ({
    id,
    count: submitted.filter((s) => s.misconception_id === id).length,
    meta: CLUSTER_META[id],
  }));

  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-[--il-purple]">
        Misconception Distribution
      </p>

      {/* Stacked bar */}
      <div className="flex h-5 w-full overflow-hidden rounded-full border border-border">
        {counts.map(({ id, count, meta }) => {
          const pct = (count / total) * 100;
          if (pct === 0) return null;
          return (
            <div
              key={id}
              className={`${meta.color} transition-all duration-700`}
              style={{ width: `${pct}%` }}
              title={`${meta.label}: ${count} students`}
            />
          );
        })}
      </div>

      {/* Legend rows */}
      <div className="space-y-2">
        {counts.map(({ id, count, meta }) => {
          const pct = Math.round((count / total) * 100);
          return (
            <div key={id} className="flex items-center gap-3">
              <div className={`h-2.5 w-2.5 shrink-0 rounded-full ${meta.color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-medium text-foreground truncate">
                    {meta.label}
                  </span>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {count} student{count !== 1 ? "s" : ""} · {pct}%
                  </span>
                </div>
                {(id === "unclassified") && (
                  <p className="text-[10px] text-orange-600 mt-0.5">
                    Confidence below threshold — flagged for teacher review
                  </p>
                )}
                {id !== "unclassified" && id !== "correct" && (
                  <p className="font-mono text-[10px] text-muted-foreground/60 mt-0.5">{id}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
