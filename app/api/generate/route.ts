import { NextRequest, NextResponse } from "next/server";
import { lessons } from "@/lib/curriculum";
import { misconceptions } from "@/lib/eedi";
import { getOutput } from "@/lib/mock-outputs";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body?.lesson_id || !body?.misconception_id) {
    return NextResponse.json(
      { error: "lesson_id and misconception_id are required" },
      { status: 400 }
    );
  }

  const lesson = lessons[body.lesson_id];
  const misconception = misconceptions[body.misconception_id];

  if (!lesson || !misconception) {
    return NextResponse.json(
      { error: "Unknown lesson_id or misconception_id" },
      { status: 400 }
    );
  }

  // Live Claude generation if API key is present
  if (process.env.ANTHROPIC_API_KEY) {
    return generateWithAISDK(lesson, misconception);
  }

  // Demo mode: return pre-built outputs with a short delay for realism
  await new Promise((r) => setTimeout(r, 1400));

  const output = getOutput(
    lesson.lesson_id,
    misconception.misconception_id,
    lesson.title,
    misconception.label,
    lesson.standard_id
  );

  return NextResponse.json(output);
}

async function generateWithAISDK(
  lesson: (typeof lessons)[string],
  misconception: (typeof misconceptions)[string]
) {
  const { generateText, Output } = await import("ai");
  const { anthropic } = await import("@ai-sdk/anthropic");
  const { z } = await import("zod");

  const outputSchema = z.object({
    reAssessmentQuestion: z.string(),
    feedbackStem: z.string(),
    warmUp: z.string(),
    imConnection: z.string(),
    sources: z.object({
      reAssessment: z.string(),
      feedback: z.string(),
      warmUp: z.string(),
      connection: z.string(),
    }),
  });

  const systemPrompt = `You are an expert Illustrative Mathematics curriculum specialist and formative assessment designer.

Your job is to generate a targeted output package for a teacher who has just collected cool-down results and observed a specific student misconception.

CRITICAL RULES:
- Every output must be grounded ONLY in the curriculum context and misconception data provided.
- Do not invent curriculum claims, lesson references, or pedagogical strategies not present in the provided data.
- The re-assessment question must use a DIFFERENT real-world context from the original cool-down prompt (to prevent pattern-matching without understanding).
- The re-assessment question must require students to explain their reasoning — not just calculate.
- Feedback stems must use growth-mindset language. Never say "you got this wrong." Instead, invite re-examination ("Try checking...", "Can you verify...").
- The warm-up must be completable in 5 minutes and should create productive cognitive conflict around the misconception.
- Reference specific IM Mathematical Language Routines (MLRs) where appropriate.
- Sources should cite the IM lesson ID and Eedi misconception ID as grounding.`;

  const userPrompt = `LESSON CONTEXT:
${JSON.stringify(lesson, null, 2)}

OBSERVED MISCONCEPTION:
${JSON.stringify(misconception, null, 2)}

Generate the four-part output package. The teacher observed this misconception in their students' cool-down responses today. The output must be ready to use in tomorrow's class without editing.`;

  const { output } = await generateText({
    model: anthropic("claude-sonnet-4.6"),
    system: systemPrompt,
    prompt: userPrompt,
    output: Output.object({ schema: outputSchema }),
  });

  return NextResponse.json(output);
}
