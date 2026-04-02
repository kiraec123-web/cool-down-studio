import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DemoBanner } from "@/components/demo-banner";
import { lessonList } from "@/lib/curriculum";

const unitPositionColor: Record<string, string> = {
  introducing:
    "bg-blue-50 text-blue-700 border-blue-200",
  developing:
    "bg-violet-50 text-violet-700 border-violet-200",
  consolidating:
    "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const steps = [
  {
    number: "01",
    title: "Select a lesson",
    description:
      "Choose the Illustrative Mathematics lesson you just taught. The system loads the exact learning goal, cool-down prompt, and IM teacher notes.",
  },
  {
    number: "02",
    title: "Name the pattern",
    description:
      "Pick the reasoning pattern you observed in student work — drawn from Eedi's validated misconception taxonomy, mapped to IM's 6.RP standards.",
  },
  {
    number: "03",
    title: "Get your output package",
    description:
      "Receive a targeted re-assessment question, feedback language for returned papers, tomorrow's warm-up, and the next IM lesson connection — all grounded in the curriculum.",
  },
];

export default function Home() {
  const isDemo = !process.env.ANTHROPIC_API_KEY;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {isDemo && <DemoBanner />}

      {/* Header */}
      <header className="border-b border-border bg-white px-6 py-4">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
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
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="text-xs border-[--il-purple-border] text-[--il-purple] bg-[--il-purple-muted]"
            >
              Curriculum-Informed AI
            </Badge>
            <Badge variant="outline" className="text-xs text-muted-foreground">
              Mode 1 · Teacher Input
            </Badge>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero / Intro */}
        <div className="border-b border-border bg-gradient-to-b from-white to-[oklch(0.97_0.01_272)] px-6 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block h-1.5 w-6 rounded-full bg-[--il-purple]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[--il-purple]">
                Prototype · G6 Unit 2
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Close the daily instructional loop.
            </h1>
            <p className="mt-2 max-w-2xl text-base text-muted-foreground leading-relaxed">
              You collected the cool-downs. Now turn what you observed into
              tomorrow's targeted warm-up — in under 2 minutes, grounded
              entirely in Illustrative Mathematics and Eedi's misconception
              taxonomy.
            </p>

            {/* How it works steps */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-[--il-purple-border] bg-white p-5"
                >
                  <span className="font-mono text-xs font-bold text-[--il-purple-light]">
                    {step.number}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              {[
                "IM G6 Unit 2 curriculum",
                "Eedi misconception taxonomy",
                "IL PD Library",
                "Teacher approval required",
              ].map((signal) => (
                <div key={signal} className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-[--il-purple]" />
                  <span className="text-xs text-muted-foreground">{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lesson selector */}
        <div className="px-6 py-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Select the lesson you just taught
                </p>
                <p className="text-xs text-muted-foreground">
                  Grade 6 · Unit 2: Introducing Ratios
                </p>
              </div>
            </div>

            <div className="grid gap-2.5">
              {lessonList.map((lesson) => (
                <Link
                  key={lesson.lesson_id}
                  href={`/lesson/${lesson.lesson_id}`}
                >
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
                        <Badge
                          variant="outline"
                          className="font-mono text-xs text-muted-foreground"
                        >
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
    </div>
  );
}
