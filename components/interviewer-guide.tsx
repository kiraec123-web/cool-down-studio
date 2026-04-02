"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PAGES = [
  {
    title: "What you're looking at",
    content: (
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-foreground/80">
          <strong className="text-foreground">IM Cool-Down Studio</strong> is an AI-powered formative assessment tool built for Illustrative Mathematics teachers. It takes the raw data from a cool-down (exit ticket) and instantly generates differentiated instructional resources — so teachers spend less time interpreting student work and more time acting on it.
        </p>
        <div className="rounded-xl border border-[--il-purple-border] bg-[--il-purple-muted] px-4 py-3 text-sm text-[--il-purple] leading-relaxed">
          <strong>The problem it solves:</strong> After a cool-down, teachers must manually scan 25–30 student responses, identify patterns, and plan tomorrow's warm-up — all before the next class. This tool collapses that 30–60 minute process to under 2 minutes.
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Who it's for:</strong> 6th-grade math teachers using Illustrative Mathematics who want to close the gap between formative data and differentiated instruction — without building everything from scratch.
        </p>
      </div>
    ),
  },
  {
    title: "Mode 1 vs. Mode 2",
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-muted-foreground font-medium w-1/3"></th>
              <th className="text-left py-2 pr-4 text-[--il-purple] font-semibold">Mode 1 — Ships Now</th>
              <th className="text-left py-2 text-amber-700 font-semibold">Mode 2 — In Development</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              [
                "How cool-downs are collected",
                "Teacher observes student work on paper or informally",
                "Students submit typed responses digitally (LMS or IL platform)",
              ],
              [
                "How misconceptions are identified",
                "Teacher selects the pattern they observed from a curated list",
                "AI reads all responses and clusters them by misconception automatically",
              ],
              [
                "What teacher does",
                "Pick 1 misconception → review 4-part output package",
                "Review AI clusters, approve warm-ups, assign unclassified responses",
              ],
              [
                "Time to action",
                "~2 minutes after class",
                "~5 minutes overnight (AI processes while teacher sleeps)",
              ],
              [
                "Data created",
                "Output package scoped to 1 misconception",
                "Per-cluster warm-ups for all student groups simultaneously",
              ],
              [
                "Ships when",
                "Now — available in this prototype",
                "When digital exit tickets are enabled in the IL platform",
              ],
            ].map(([row, m1, m2], i) => (
              <tr key={i}>
                <td className="py-2.5 pr-4 text-muted-foreground font-medium align-top">{row}</td>
                <td className="py-2.5 pr-4 text-foreground/80 align-top">{m1}</td>
                <td className="py-2.5 text-foreground/80 align-top">{m2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "Key design decisions",
    content: (
      <div className="space-y-4">
        {[
          {
            decision: "RAG instead of prompt-only generation",
            explanation:
              "Every output is grounded in three retrieval layers: the IM G6 Unit 2 curriculum, the Eedi misconception taxonomy, and the IL Professional Development Library. This prevents hallucinated problem numbers, misattributed standards, and generic advice that doesn't match what students actually did.",
          },
          {
            decision: "Teacher approval before anything reaches students",
            explanation:
              "AI clusters are predictions, not verdicts. A confidence score of 0.61 means the model is uncertain — and a teacher who was in the room knows things the model doesn't. Approval gates ensure the teacher remains the instructional decision-maker.",
          },
          {
            decision: "Eedi taxonomy, not a generic misconception list",
            explanation:
              "Eedi's misconception taxonomy was built from millions of student responses with expert validation. Using it as the classification schema means the AI's output language matches what research says students are actually doing — not ad hoc labels invented per-lesson.",
          },
          {
            decision: "Confidence threshold matters",
            explanation:
              "A response like 'I think it depends on how picky you are' might be M_RP_003, might be off-task, or might reveal genuine prior knowledge. Flagging ambiguous responses for teacher review is better than forcing a wrong cluster assignment that sends the student the wrong warm-up.",
          },
        ].map(({ decision, explanation }, i) => (
          <div key={i} className="space-y-1">
            <p className="text-sm font-semibold text-foreground">
              {i + 1}. {decision}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">{explanation}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "What to look for in the demo",
    content: (
      <div className="space-y-4">
        <div className="space-y-3">
          {[
            {
              step: "Start here",
              instruction: "Go to the home page. Try Mode 1 first — select Lesson 1 (G6 U2 L1), pick the M_RP_003 misconception (Additive Ratio Thinking), and click Generate.",
            },
            {
              step: "Notice the source citations",
              instruction: "Every output card shows exactly where the content came from — IM curriculum page, Eedi taxonomy ID, or IL PD library section. This is the RAG grounding made visible.",
            },
            {
              step: "Then try Mode 2",
              instruction: "Click 'Preview Mode 2' from the home page. Watch the AI pipeline animate — student responses clustering in real time. The class grid shows each student's assigned misconception.",
            },
            {
              step: "Notice the confidence scores",
              instruction: "Two students are flagged as 'Unclassified' with scores of 0.61 and 0.58. Read their responses — they genuinely are ambiguous. This is what a real threshold looks like.",
            },
            {
              step: "Approve and push",
              instruction: "Approve all 3 cluster warm-ups, manually assign the 2 unclassified responses, then push. The push button only activates when all decisions are made.",
            },
          ].map(({ step, instruction }, i) => (
            <div key={i} className="flex gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[--il-purple-muted] text-xs font-semibold text-[--il-purple]">
                {i + 1}
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">{step}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{instruction}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function InterviewerGuide() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => { setOpen(true); setPage(0); }}
        className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-[--il-purple-border] bg-white text-[--il-purple] shadow-lg transition-all hover:bg-[--il-purple-muted]"
        style={{ boxShadow: "var(--il-glow-sm)" }}
        aria-label="Open interviewer guide"
      >
        <span className="text-sm font-bold">?</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="relative w-full max-w-2xl rounded-2xl border border-border bg-white shadow-2xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[--il-purple]">
                  Interviewer Guide · Page {page + 1} of {PAGES.length}
                </p>
                <h2 className="text-base font-bold text-foreground mt-0.5">
                  {PAGES[page].title}
                </h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-lg leading-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Page indicators */}
            <div className="flex gap-1.5 px-6 py-3 shrink-0">
              {PAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === page ? "w-6 bg-[--il-purple]" : "w-1.5 bg-[--il-purple-border]"
                  }`}
                />
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
              {PAGES[page].content}
            </div>

            {/* Footer nav */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-border shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => p - 1)}
                disabled={page === 0}
              >
                ← Previous
              </Button>
              <span className="text-xs text-muted-foreground">Press ESC to close</span>
              {page < PAGES.length - 1 ? (
                <Button size="sm" onClick={() => setPage((p) => p + 1)}>
                  Next →
                </Button>
              ) : (
                <Button size="sm" onClick={() => setOpen(false)}>
                  Done
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
