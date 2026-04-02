"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { students, CLUSTER_META } from "@/lib/mock-students";
import type { Student, ClusterId } from "@/lib/mock-students";

function StudentCard({ student, processed }: { student: Student; processed: boolean }) {
  const isSubmitted = student.submitted;
  const cluster = processed && student.misconception_id && student.misconception_id !== null
    ? CLUSTER_META[student.misconception_id as Exclude<ClusterId, null>]
    : null;

  return (
    <div
      className={`flex flex-col items-center gap-1.5 rounded-xl border p-3 transition-all ${
        isSubmitted ? "bg-white border-border" : "bg-gray-50 border-gray-200 opacity-60"
      }`}
    >
      {/* Initials badge */}
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${
          isSubmitted
            ? "bg-[--il-purple-muted] text-[--il-purple]"
            : "bg-gray-200 text-gray-400"
        }`}
      >
        {student.initials}
      </div>

      {/* Status dot / cluster tag */}
      {!isSubmitted ? (
        <span className="text-[10px] text-gray-400 font-medium">No submit</span>
      ) : !processed ? (
        <div className="h-2 w-2 rounded-full bg-gray-300" />
      ) : cluster ? (
        <div className={`h-2 w-2 rounded-full ${student.cluster_color}`} />
      ) : (
        <div className="h-2 w-2 rounded-full bg-gray-300" />
      )}

      {/* Cluster label (after processing) */}
      {processed && isSubmitted && cluster && (
        <span className={`text-[9px] font-semibold uppercase tracking-wide ${cluster.textColor} text-center leading-tight`}>
          {student.misconception_id === "correct" ? "Correct" :
           student.misconception_id === "unclassified" ? "⚠ Review" :
           student.misconception_id}
        </span>
      )}
    </div>
  );
}

export function ClassGrid({ processed }: { processed: boolean }) {
  const submitted = students.filter((s) => s.submitted).length;
  const total = students.length;

  return (
    <Card className="border-border bg-white p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-semibold text-foreground">
            6th Grade Math — Period 3
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {submitted} of {total} students submitted tonight's cool-down
          </p>
        </div>
        {processed && (
          <div className="flex items-center gap-3 flex-wrap justify-end">
            {(["M_RP_003", "M_RP_001", "M_RP_009", "unclassified", "correct"] as Exclude<ClusterId, null>[]).map((id) => {
              const meta = CLUSTER_META[id];
              return (
                <div key={id} className="flex items-center gap-1.5">
                  <div className={`h-2 w-2 rounded-full ${meta.color}`} />
                  <span className="text-[10px] text-muted-foreground">{meta.shortLabel}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="grid grid-cols-5 gap-2 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9">
        {students.map((s) => (
          <StudentCard key={s.id} student={s} processed={processed} />
        ))}
      </div>

      {!processed && (
        <p className="mt-4 text-center text-xs text-muted-foreground italic">
          AI is reading student responses and clustering by misconception…
        </p>
      )}
    </Card>
  );
}
