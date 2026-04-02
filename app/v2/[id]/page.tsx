import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { DemoBanner } from "@/components/demo-banner";
import { V2Dashboard } from "@/components/v2/v2-dashboard";
import { InterviewerGuide } from "@/components/interviewer-guide";
import { lessons } from "@/lib/curriculum";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function V2Page({ params }: PageProps) {
  const { id } = await params;
  const lesson = lessons[id];

  if (!lesson) notFound();

  const isDemo = !process.env.ANTHROPIC_API_KEY;

  return (
    <div className="flex min-h-screen flex-col">
      {isDemo && <DemoBanner />}

      {/* Header */}
      <header className="border-b border-border bg-white px-6 py-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="text-xs text-[--il-purple] transition-colors hover:text-[--il-purple-light]"
                >
                  ← Cool-Down Studio
                </Link>
                <span className="text-muted-foreground/40">·</span>
                <span className="font-mono text-xs text-muted-foreground">
                  Mode 2 · G6 · U2 · L{lesson.lesson_number}
                </span>
              </div>
              <h1 className="mt-1 text-xl font-bold tracking-tight text-foreground">
                {lesson.title}
              </h1>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Tonight's cool-down results — digital exit ticket pipeline
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2 mt-1">
              <Badge
                variant="outline"
                className="font-mono text-xs border-[--il-purple-border] text-[--il-purple] bg-[--il-purple-muted]"
              >
                {lesson.standard_id}
              </Badge>
              <Badge
                variant="outline"
                className="text-xs text-amber-700 border-amber-200 bg-amber-50"
              >
                Mode 2 Preview
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <V2Dashboard lesson={lesson} />
        </div>
      </main>

      <InterviewerGuide />
    </div>
  );
}
