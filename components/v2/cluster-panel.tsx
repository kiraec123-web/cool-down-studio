"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getStudentsByCluster, CLUSTER_META, CLUSTER_WARMUPS } from "@/lib/mock-students";
import type { ClusterId } from "@/lib/mock-students";

type ActionableCluster = "M_RP_003" | "M_RP_001" | "M_RP_009";

interface ClusterPanelProps {
  clusterId: ActionableCluster;
  onApprove: (id: ActionableCluster, approved: boolean) => void;
  approved: boolean;
}

export function ClusterPanel({ clusterId, onApprove, approved }: ClusterPanelProps) {
  const meta = CLUSTER_META[clusterId];
  const warmup = CLUSTER_WARMUPS[clusterId];
  const clusterStudents = getStudentsByCluster(clusterId);
  const sampleStudent = clusterStudents[0];
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(warmup.question);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <Card
      className={`border border-l-4 p-5 space-y-4 transition-all ${
        approved
          ? `${meta.borderColor} ${meta.bgColor}`
          : "border-border border-l-border bg-white"
      }`}
      style={approved ? { boxShadow: "var(--il-glow-sm)" } : {}}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className={`h-2.5 w-2.5 rounded-full ${meta.color}`} />
            <p className={`text-xs font-semibold uppercase tracking-wider ${meta.textColor}`}>
              {meta.label}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-xs">
              {clusterId}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {clusterStudents.length} student{clusterStudents.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Approve toggle */}
        <button
          onClick={() => onApprove(clusterId, !approved)}
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
            approved
              ? `${meta.bgColor} ${meta.textColor} border ${meta.borderColor}`
              : "bg-gray-100 text-gray-500 border border-gray-200 hover:border-[--il-purple-border] hover:text-[--il-purple]"
          }`}
        >
          {approved ? "Approved ✓" : "Approve"}
        </button>
      </div>

      {/* Sample response */}
      {sampleStudent && (
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Sample response
          </p>
          <blockquote className="rounded-lg border-l-4 border-muted bg-muted/40 px-3 py-2 text-xs text-foreground/80 italic leading-relaxed">
            "{sampleStudent.response}"
          </blockquote>
        </div>
      )}

      {/* Warm-up question */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Tomorrow's warm-up
          </p>
          <button
            onClick={handleCopy}
            className="text-[10px] text-muted-foreground hover:text-[--il-purple] transition-colors"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>
        <p className="text-sm leading-relaxed text-foreground/90">{warmup.question}</p>
        <p className="mt-2 text-[10px] font-mono text-muted-foreground/50">
          Source: {warmup.source}
        </p>
      </div>
    </Card>
  );
}
