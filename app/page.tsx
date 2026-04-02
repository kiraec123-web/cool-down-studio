import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DemoBanner } from "@/components/demo-banner";
import { InterviewerGuide } from "@/components/interviewer-guide";
import { lessonList } from "@/lib/curriculum";

const unitPositionColor: Record<string, string> = {
  introducing: "bg-blue-50 text-blue-700 border-blue-200",
  developing: "bg-violet-50 text-violet-700 border-violet-200",
  consolidating: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const comparisonRows = [
  {
    label: "How cool-downs are collected",
    mode1: "Teacher observes student work on paper or informally",
    mode2: "Students submit typed responses digitally",
  },
  {
    label: "How misconceptions are identified",
    mode1: "Teacher selects the pattern they observed",
    mode2: "AI reads all responses and clusters automatically",
  },
  {
    label: "What teacher does",
    mode1: "Pick 1 misconception → get 4-part output package",
    mode2: "Review AI clusters → approve warm-ups → push",
  },
  {
    label: "Time to action",
    mode1: "~2 minutes after class",
    mode2: "~5 minutes the next morning",
  },
  {
    label: "Ships when",
    mode1: "Now — available in this prototype",
    mode2: "When digital exit tickets are enabled in IL platform",
  },
];

export default function Home() {
  const isDemo = !process.env.ANTHROPIC_API_KEY;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {isDemo && <DemoBanner />}

      {/* Header */}
      <header className="border-b border-border bg-white px-6 py-4">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* IL wordmark dots */}
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                <div className="h-2 w-2 rounded-full bg-[--il-purple]" />
                <div className="h-2 w-2 rounded-full bg-[--il-purple-light]" />
              </div>
              <div className="flex gap-0.5">
                <div className="h-2 w-2 rounded-full bg-[--il-purple-light]" />
                <div className="h-2 w-2 rounded-full bg-[--il-purple]" />
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground leading-none">
                Imagine Learning
              </p>
              <p className="text-sm font-semibold text-foreground leading-tight">
                Cool-Down Studio
              </p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="text-xs border-[--il-purple-border] text-[--il-purple] bg-[--il-purple-muted]"
          >
            Curriculum-Informed AI · G6 Unit 2
          </Badge>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <div className="border-b border-border bg-gradient-to-b from-white to-[oklch(0.97_0.01_272)] px-6 py-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block h-1.5 w-6 rounded-full bg-[--il-purple]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[--il-purple]">
                Prototype · G6 Unit 2 · Introducing Ratios
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Close the daily instructional loop.
            </h1>
            <p className="mt-2 max-w-2xl text-base text-muted-foreground leading-relaxed">
              Turn cool-down data into tomorrow's targeted warm-up — grounded entirely in Illustrative Mathematics and Eedi's misconception taxonomy. Two modes, one goal.
            </p>
          </div>
        </div>

        {/* Two-path cards */}
        <div className="px-6 py-8 border-b border-border">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Choose a mode
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {/* Mode 1 */}
              <div className="rounded-2xl border-2 border-[--il-purple-border] bg-white p-6 space-y-4 transition-all hover:border-[--il-purple]"
                style={{ boxShadow: "var(--il-glow-sm)" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[--il-purple] mb-1">
                      Mode 1
                    </p>
                    <p className="text-lg font-bold text-foreground leading-tight">
                      Teacher-Input Pipeline
                    </p>
                  </div>
                  <Badge className="shrink-0 bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                    Live
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You observed a reasoning pattern in student work. Select it from the Eedi taxonomy and receive a 4-part output package — re-assessment question, feedback stem, warm-up, and IM curriculum connection.
                </p>
                <div className="space-y-1.5">
                  {["Select lesson → pick misconception → get output", "Works from paper-based or informal observation", "Output ready in under 2 minutes"].map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[--il-purple-light]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/lesson/G6_U2_L1"
                  className="block w-full rounded-xl bg-[--il-purple] px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ boxShadow: "var(--il-glow-sm)" }}
                >
                  Try Mode 1 →
                </Link>
              </div>

              {/* Mode 2 */}
              <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/30 p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 mb-1">
                      Mode 2
                    </p>
                    <p className="text-lg font-bold text-foreground leading-tight">
                      Digital Exit Ticket Pipeline
                    </p>
                  </div>
                  <Badge className="shrink-0 bg-amber-100 text-amber-700 border border-amber-200 text-xs font-semibold">
                    In development
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Students submit typed responses digitally. AI reads every response overnight, clusters students by misconception, and prepares differentiated warm-ups for teacher approval before anything reaches students.
                </p>
                <div className="space-y-1.5">
                  {["AI clusters all 25 student responses automatically", "Confidence scores flag ambiguous cases for review", "Teacher approves per-cluster warm-ups before pushing"].map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/v2/G6_U2_L1"
                  className="block w-full rounded-xl border border-amber-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-amber-700 transition-all hover:bg-amber-50"
                >
                  Preview Mode 2 →
                </Link>
              </div>
            </div>

            {/* Comparison table */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Mode 1 vs. Mode 2
              </p>
              <div className="overflow-x-auto rounded-xl border border-border bg-white">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="text-left px-4 py-2.5 text-muted-foreground font-medium w-1/3"></th>
                      <th className="text-left px-4 py-2.5 text-[--il-purple] font-semibold">Mode 1 — Teacher Input</th>
                      <th className="text-left px-4 py-2.5 text-amber-700 font-semibold">Mode 2 — Digital Pipeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparisonRows.map((row) => (
                      <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-2.5 text-muted-foreground font-medium align-top">{row.label}</td>
                        <td className="px-4 py-2.5 text-foreground/80 align-top">{row.mode1}</td>
                        <td className="px-4 py-2.5 text-foreground/80 align-top">{row.mode2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Both modes demonstrated with G6 Unit 2 content
              </p>
            </div>
          </div>
        </div>

        {/* Mode 1 lesson selector */}
        <div className="px-6 py-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5">
              <p className="text-sm font-semibold text-foreground">
                Mode 1 — Select the lesson you just taught
              </p>
              <p className="text-xs text-muted-foreground">
                Grade 6 · Unit 2: Introducing Ratios
              </p>
            </div>

            <div className="grid gap-2.5">
              {lessonList.map((lesson) => (
                <Link key={lesson.lesson_id} href={`/lesson/${lesson.lesson_id}`}>
                  <Card className="group cursor-pointer border-border bg-white p-5 transition-all hover:border-[--il-purple-border] hover:shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[--il-purple-border] bg-[--il-purple-muted] font-mono text-sm font-semibold text-[--il-purple]">
                          {lesson.lesson_number}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground leading-tight">
                            {lesson.title}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {lesson.learning_goal}
                          </p>
                        </div>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-1.5">
                        <Badge variant="outline" className="font-mono text-xs text-muted-foreground">
                          {lesson.standard_id}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs capitalize ${unitPositionColor[lesson.unit_position]}`}
                        >
                          {lesson.unit_position}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <InterviewerGuide />
    </div>
  );
}
