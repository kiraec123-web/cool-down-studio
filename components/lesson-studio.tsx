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

      if (!res.ok) {
        throw new Error(`Generation failed (${res.status})`);
      }

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
        <Card className="border-border bg-card p-5">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Learning Goal
                </p>
                <p className="mt-1 text-sm leading-relaxed">
                  {lesson.learning_goal}
                </p>
              </div>
              <Badge
                variant="outline"
                className="shrink-0 font-mono text-xs text-muted-foreground"
              >
                {lesson.standard_id}
              </Badge>
            </div>

            <Separator />

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Today's Cool-Down Prompt
              </p>
              <p className="mt-1 mb-2 text-xs text-muted-foreground">
                {lesson.cool_down_context}
              </p>
              <blockquote className="rounded-lg border border-border bg-background p-4 text-sm leading-relaxed italic text-foreground/90">
                {lesson.cool_down_prompt}
              </blockquote>
            </div>

            <Separator />

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Standard
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                <span className="font-mono text-foreground/70">
                  {lesson.standard_id}
                </span>{" "}
                — {lesson.standard_language}
              </p>
            </div>
          </div>
        </Card>

        <Card className="border-border bg-card p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
            Anticipated Errors (IM Teacher Notes)
          </p>
          <ul className="space-y-1.5">
            {lesson.anticipated_errors.map((error, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="mt-0.5 font-mono text-foreground/30">·</span>
                <span>{error}</span>
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
              <p className="text-sm font-medium mb-1">
                What did you observe in student work?
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                Select the reasoning pattern that best describes what most
                students who didn't demonstrate understanding were doing.
              </p>
              <div className="space-y-2">
                {misconceptions.map((m) => (
                  <button
                    key={m.misconception_id}
                    onClick={() =>
                      setSelected(
                        selected?.misconception_id === m.misconception_id
                          ? null
                          : m
                      )
                    }
                    className={`w-full rounded-lg border p-4 text-left transition-colors ${
                      selected?.misconception_id === m.misconception_id
                        ? "border-primary/60 bg-primary/5"
                        : "border-border bg-card hover:border-border/80 hover:bg-card/80"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-tight">
                          {m.short_label}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="shrink-0 font-mono text-xs text-muted-foreground"
                      >
                        {m.misconception_id}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                {error}
              </p>
            )}

            <Button
              onClick={handleGenerate}
              disabled={!selected || isGenerating}
              className="w-full"
              size="lg"
            >
              {isGenerating ? "Generating output package…" : "Generate output package"}
            </Button>

            {isGenerating && (
              <div className="space-y-3">
                <Skeleton className="h-20 w-full rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
                <Skeleton className="h-14 w-full rounded-lg" />
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
