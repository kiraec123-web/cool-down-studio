"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getStudentsByCluster, CLUSTER_META } from "@/lib/mock-students";
import type { ClusterId } from "@/lib/mock-students";

type ActionableCluster = "M_RP_003" | "M_RP_001" | "M_RP_009";

const ASSIGNABLE_CLUSTERS: { id: ActionableCluster; label: string }[] = [
  { id: "M_RP_003", label: "M_RP_003 — Additive Ratio Thinking" },
  { id: "M_RP_001", label: "M_RP_001 — Ratio Order Reversal" },
  { id: "M_RP_009", label: "M_RP_009 — Correct Answer, No Explanation" },
];

interface UnclassifiedPanelProps {
  onAssign: (studentId: string, clusterId: ActionableCluster | null) => void;
  assignments: Record<string, ActionableCluster | null>;
}

export function UnclassifiedPanel({ onAssign, assignments }: UnclassifiedPanelProps) {
  const unclassified = getStudentsByCluster("unclassified");

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-orange-400" />
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-700">
          Unclassified Responses
        </p>
        <Badge variant="outline" className="text-xs text-orange-700 border-orange-200 bg-orange-50">
          {unclassified.length} flagged
        </Badge>
      </div>
      <p className="text-xs text-muted-foreground">
        These responses fell below the confidence threshold. Review and assign to a cluster manually before pushing warm-ups.
      </p>

      <div className="space-y-3">
        {unclassified.map((student) => {
          const assigned = assignments[student.id] ?? null;
          const assignedMeta = assigned ? CLUSTER_META[assigned] : null;

          return (
            <Card key={student.id} className="border border-orange-200 bg-orange-50/40 p-4 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-700">
                    {student.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <Badge variant="outline" className="text-[10px] text-orange-700 border-orange-200">
                        Unclassified
                      </Badge>
                      <span className="text-[10px] text-muted-foreground font-mono">
                        confidence {student.confidence_score?.toFixed(2)} — below threshold
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <blockquote className="rounded-lg border-l-4 border-orange-300 bg-white/70 px-3 py-2 text-xs text-foreground/80 italic leading-relaxed">
                "{student.response}"
              </blockquote>

              <div className="flex items-center gap-2">
                <label className="text-xs text-muted-foreground shrink-0">Assign to:</label>
                <select
                  value={assigned ?? ""}
                  onChange={(e) =>
                    onAssign(
                      student.id,
                      (e.target.value as ActionableCluster) || null
                    )
                  }
                  className={`flex-1 rounded-lg border px-2.5 py-1.5 text-xs transition-colors focus:outline-none focus:ring-1 focus:ring-[--il-purple] ${
                    assigned
                      ? "border-[--il-purple-border] bg-[--il-purple-muted] text-[--il-purple]"
                      : "border-border bg-white text-muted-foreground"
                  }`}
                >
                  <option value="">— Select a cluster —</option>
                  {ASSIGNABLE_CLUSTERS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>

                {assigned && assignedMeta && (
                  <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium ${assignedMeta.textColor} ${assignedMeta.bgColor} border ${assignedMeta.borderColor}`}>
                    <div className={`h-1.5 w-1.5 rounded-full ${assignedMeta.color}`} />
                    Assigned
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
