"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ClassGrid } from "@/components/v2/class-grid";
import { PipelineBar } from "@/components/v2/pipeline-bar";
import { ClusterPanel } from "@/components/v2/cluster-panel";
import { UnclassifiedPanel } from "@/components/v2/unclassified-panel";
import { ApproveCTA } from "@/components/v2/approve-cta";
import type { LessonObject } from "@/lib/curriculum";

type ActionableCluster = "M_RP_003" | "M_RP_001" | "M_RP_009";
const ACTIONABLE_CLUSTERS: ActionableCluster[] = ["M_RP_003", "M_RP_001", "M_RP_009"];
const UNCLASSIFIED_COUNT = 2;

type Stage = "idle" | "processing" | "done";

interface V2DashboardProps {
  lesson: LessonObject;
}

export function V2Dashboard({ lesson }: V2DashboardProps) {
  const [stage, setStage] = useState<Stage>("idle");
  const [approvedClusters, setApprovedClusters] = useState<Record<ActionableCluster, boolean>>({
    M_RP_003: false,
    M_RP_001: false,
    M_RP_009: false,
  });
  const [unclassifiedAssignments, setUnclassifiedAssignments] = useState<Record<string, ActionableCluster | null>>({
    s19: null,
    s20: null,
  });

  function handleRunPipeline() {
    setStage("processing");
    // Simulate AI processing delay
    setTimeout(() => setStage("done"), 2800);
  }

  function handleApprove(id: ActionableCluster, approved: boolean) {
    setApprovedClusters((prev) => ({ ...prev, [id]: approved }));
  }

  function handleAssign(studentId: string, clusterId: ActionableCluster | null) {
    setUnclassifiedAssignments((prev) => ({ ...prev, [studentId]: clusterId }));
  }

  return (
    <div className="space-y-8">
      {/* Section 1 — Submission status + class grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[--il-purple]">
            Section 1 — Submission Status
          </h2>
          {stage === "idle" && (
            <Button onClick={handleRunPipeline} size="sm">
              Run AI pipeline →
            </Button>
          )}
          {stage === "processing" && (
            <div className="flex items-center gap-2 rounded-full border border-[--il-purple-border] bg-[--il-purple-muted] px-3 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[--il-purple] animate-pulse" />
              <span className="text-xs text-[--il-purple] font-medium">AI processing…</span>
            </div>
          )}
          {stage === "done" && (
            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs text-emerald-700 font-medium">Clustering complete</span>
            </div>
          )}
        </div>

        <ClassGrid processed={stage === "done"} />

        {stage === "idle" && (
          <p className="text-xs text-muted-foreground text-center">
            Click <strong>"Run AI pipeline"</strong> to simulate overnight AI clustering of student responses.
          </p>
        )}
      </section>

      {/* Section 2 — AI pipeline result (shown after processing) */}
      {stage !== "idle" && (
        <>
          <Separator />
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[--il-purple]">
              Section 2 — AI Pipeline Result
            </h2>

            {stage === "processing" ? (
              <Card className="border-[--il-purple-border] bg-[--il-purple-muted]/30 p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[--il-purple] animate-pulse" />
                  <span className="text-xs text-[--il-purple] font-medium">
                    Reading student responses and cross-referencing Eedi taxonomy…
                  </span>
                </div>
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </Card>
            ) : (
              <Card className="border-border bg-white p-5">
                <PipelineBar />
              </Card>
            )}
          </section>

          {/* Section 3 — Differentiated warm-ups per cluster */}
          <Separator />
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[--il-purple]">
              Section 3 — Differentiated Warm-Ups
            </h2>

            {stage === "processing" ? (
              <div className="grid gap-4 md:grid-cols-3">
                {ACTIONABLE_CLUSTERS.map((id) => (
                  <Skeleton key={id} className="h-56 w-full rounded-xl" />
                ))}
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-3">
                {ACTIONABLE_CLUSTERS.map((id) => (
                  <ClusterPanel
                    key={id}
                    clusterId={id}
                    approved={approvedClusters[id]}
                    onApprove={handleApprove}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Section 4 — Unclassified responses */}
          <Separator />
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[--il-purple]">
              Section 4 — Unclassified Responses
            </h2>

            {stage === "processing" ? (
              <div className="space-y-3">
                <Skeleton className="h-28 w-full rounded-xl" />
                <Skeleton className="h-28 w-full rounded-xl" />
              </div>
            ) : (
              <UnclassifiedPanel
                onAssign={handleAssign}
                assignments={unclassifiedAssignments}
              />
            )}
          </section>

          {/* Section 5 — Approve and push */}
          {stage === "done" && (
            <>
              <Separator />
              <section className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[--il-purple]">
                  Section 5 — Approve &amp; Push
                </h2>
                <ApproveCTA
                  approvedClusters={approvedClusters}
                  unclassifiedAssignments={unclassifiedAssignments}
                  unclassifiedCount={UNCLASSIFIED_COUNT}
                />
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
}
