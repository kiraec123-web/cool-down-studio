import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DemoBanner } from "@/components/demo-banner";
import { lessonList } from "@/lib/curriculum";

const unitPositionColor: Record<string, string> = {
  introducing: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  developing: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  consolidating: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
};

export default function Home() {
  const isDemo = !process.env.ANTHROPIC_API_KEY;

  return (
    <div className="flex min-h-screen flex-col">
      {isDemo && <DemoBanner />}

      {/* Header */}
      <header className="border-b border-border px-6 py-5">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  Imagine Learning
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="font-mono text-xs text-muted-foreground">
                  Curriculum-Informed AI
                </span>
              </div>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                Cool-Down Studio
              </h1>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Close the instructional loop. Turn today's cool-down into
                tomorrow's targeted warm-up.
              </p>
            </div>
            <Badge variant="outline" className="mt-1 font-mono text-xs">
              Mode 1 · Teacher Input
            </Badge>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Context strip */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
              <span className="text-xs text-muted-foreground">Grade</span>
              <span className="text-sm font-medium">6</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
              <span className="text-xs text-muted-foreground">Unit</span>
              <span className="text-sm font-medium">
                Unit 2: Introducing Ratios
              </span>
            </div>
            <div className="ml-auto text-xs text-muted-foreground">
              Select a lesson you just taught
            </div>
          </div>

          <Separator className="mb-6" />

          {/* Lesson grid */}
          <div className="grid gap-3">
            {lessonList.map((lesson) => (
              <Link key={lesson.lesson_id} href={`/lesson/${lesson.lesson_id}`}>
                <Card className="group cursor-pointer border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-card/80">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background font-mono text-sm text-muted-foreground">
                        {lesson.lesson_number}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium leading-tight">
                            {lesson.title}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {lesson.learning_goal}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2">
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

          {/* Footer note */}
          <div className="mt-8 rounded-lg border border-border bg-card/50 px-4 py-3">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground/60">
                How Cool-Down Studio works:
              </span>{" "}
              Select the lesson you just taught → confirm the cool-down prompt →
              choose the reasoning pattern you observed in student work → receive
              a targeted re-assessment question, feedback language, and
              tomorrow's warm-up. Grounded entirely in IM's curriculum and
              Eedi's misconception taxonomy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
