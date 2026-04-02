"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { OutputPanel } from "@/components/output-panel";
import type { LessonObject } from "@/lib/curriculum";
import type { MisconceptionObject } from "@/lib/eedi";
import type { OutputPackage } from "@/lib/mock-outputs";

interface LessonStudioProps {
  lesson: LessonObject;
  misconceptions: MisconceptionObject[];
}

export function LessonStudio({ lesson, misconceptions }: LessonStudioProps) {
  const [selected, setSelected] = useState<MisconceptionObject | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState<OutputPackage | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate() {
    if (!selected) return;
    setIsGenerating(true);
    setError(null);
    setOutput(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lesson_id: lesson.lesson_id,
          misconception_id: selected.misconception_id,
        }),
      });

      if (!res.ok) throw new Error(`Generation failed (${res.status})`);

      const data: OutputPackage = await res.json();
      setOutput(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setIsGenerating(false);
    }
  }

  function handleReset() {
    setSelected(null);
    setOutput(null);
    setError(null);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Left: Lesson context */}
      <div className="space-y-4">
        <Card className="border-border bg-white p-5">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[--il-purple]">
                  Learning Goal
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground">
                  {lesson.learning_goal}
                </p>
              </div>
              <Badge
                variant="outline"
                className="shrink-0 font-mono text-xs border-[--il-purple-border] text-[--il-purple] bg-[--il-purple-muted]"
              >
                {lesson.standard_id}
              </Badge>
            </div>

            <Separator />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[--il-purple]">
                Today's Cool-Down Prompt
              </p>
              <p className="mt-1 mb-2 text-xs text-muted-foreground">
                {lesson.cool_down_context}
              </p>
              <blockquote className="rounded-lg border-l-4 border-[--il-purple] bg-[--il-purple-muted] px-4 py-3 text-sm leading-relaxed text-foreground/90 italic">
                {lesson.cool_down_prompt}
              </blockquote>
            </div>

            <Separator />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[--il-purple]">
                Standard
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                <span className="font-mono text-[--il-purple]">
                  {lesson.standard_id}
                </span>{" "}
                — {lesson.standard_language}
              </p>
            </div>
          </div>
        </Card>

        <Card className="border-border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[--il-purple] mb-3">
            Anticipated Errors (IM Teacher Notes)
          </p>
          <ul className="space-y-2">
            {lesson.anticipated_errors.map((err, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[--il-purple-light]" />
                <span>{err}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Right: Picker or output */}
      <div className="space-y-4">
        {!output && (
          <>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                What did you observe in student work?
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                Select the reasoning pattern that best describes what students
                who didn't demonstrate understanding were doing.
              </p>
              <div className="space-y-2">
                {misconceptions.map((m) => {
                  const isSelected =
                    selected?.misconception_id === m.misconception_id;
                  return (
                    <button
                      key={m.misconception_id}
                      onClick={() => setSelected(isSelected ? null : m)}
                      className={`w-full rounded-xl border p-4 text-left transition-all ${
                        isSelected
                          ? "border-[--il-purple] bg-[--il-purple-muted] shadow-[var(--il-glow-sm)]"
                          : "border-border bg-white hover:border-[--il-purple-border] hover:bg-[--il-purple-muted]/40"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <p className="text-sm font-semibold leading-tight text-foreground">
                            {m.short_label}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {m.description}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`shrink-0 font-mono text-xs ${
                            isSelected
                              ? "border-[--il-purple-border] text-[--il-purple] bg-white"
                              : "text-muted-foreground"
                          }`}
                        >
                          {m.misconception_id}
                        </Badge>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {error && (
              <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs text-destructive">
                {error}
              </p>
            )}

            <Button
              onClick={handleGenerate}
              disabled={!selected || isGenerating}
              className="w-full transition-all"
              style={
                selected && !isGenerating
                  ? { boxShadow: "var(--il-glow-md)" }
                  : {}
              }
              size="lg"
            >
              {isGenerating
                ? "Generating output package…"
                : "Generate output package"}
            </Button>

            {isGenerating && (
              <div className="space-y-3">
                <div className="rounded-xl border border-[--il-purple-border] bg-[--il-purple-muted]/30 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-[--il-purple] animate-pulse" />
                    <span className="text-xs text-[--il-purple] font-medium">
                      AI is reading the curriculum and Eedi taxonomy…
                    </span>
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <Skeleton className="h-16 w-full rounded-xl" />
                <Skeleton className="h-20 w-full rounded-xl" />
                <Skeleton className="h-14 w-full rounded-xl" />
              </div>
            )}
          </>
        )}

        {output && (
          <OutputPanel
            output={output}
            lesson={lesson}
            misconception={selected!}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
}
