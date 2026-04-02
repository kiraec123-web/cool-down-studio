import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { DemoBanner } from "@/components/demo-banner";
import { LessonStudio } from "@/components/lesson-studio";
import { lessons } from "@/lib/curriculum";
import { getMisconceptionsForLesson, misconceptionList } from "@/lib/eedi";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { id } = await params;
  const lesson = lessons[id];

  if (!lesson) notFound();

  const isDemo = !process.env.ANTHROPIC_API_KEY;

  // Get misconceptions relevant to this lesson; fall back to all if none mapped
  const misconceptions =
    getMisconceptionsForLesson(lesson.lesson_id).length > 0
      ? getMisconceptionsForLesson(lesson.lesson_id)
      : misconceptionList;

  return (
    <div className="flex min-h-screen flex-col">
      {isDemo && <DemoBanner />}

      {/* Header */}
      <header className="border-b border-border px-6 py-5">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  ← Cool-Down Studio
                </Link>
                <span className="text-muted-foreground/40">·</span>
                <span className="font-mono text-xs text-muted-foreground">
                  G6 · U2 · L{lesson.lesson_number}
                </span>
              </div>
              <h1 className="mt-1 text-xl font-semibold tracking-tight">
                {lesson.title}
              </h1>
            </div>
            <div className="flex shrink-0 items-center gap-2 mt-1">
              <Badge
                variant="outline"
                className="font-mono text-xs text-muted-foreground"
              >
                {lesson.standard_id}
              </Badge>
              <Badge
                variant="outline"
                className="text-xs text-muted-foreground capitalize"
              >
                {lesson.unit_position}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <LessonStudio lesson={lesson} misconceptions={misconceptions} />
        </div>
      </main>
    </div>
  );
}
