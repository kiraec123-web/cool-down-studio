export type ClusterColor =
  | "bg-violet-500"  // M_RP_003 — additive thinking
  | "bg-blue-500"    // M_RP_001 — order reversal
  | "bg-amber-500"   // M_RP_009 — procedural, no explanation
  | "bg-gray-300"    // did not submit
  | "bg-orange-400"  // unclassified
  | "bg-emerald-500";// correct

export type ClusterId =
  | "M_RP_003"
  | "M_RP_001"
  | "M_RP_009"
  | "unclassified"
  | "correct"
  | null; // did not submit

export interface Student {
  id: string;
  initials: string;
  submitted: boolean;
  response: string | null;
  misconception_id: ClusterId;
  confidence_score: number | null;
  cluster_color: ClusterColor;
}

// 25 students total — 22 submitted, 3 did not submit
// Cluster distribution among submitted:
//   9 → M_RP_003 (additive ratio thinking)
//   5 → M_RP_001 (ratio order reversal)
//   4 → M_RP_009 (correct answer, no explanation)
//   2 → unclassified (confidence below threshold)
//   2 → correct (full explanation with ratio check)
export const students: Student[] = [
  // ── M_RP_003: Additive ratio thinking (9 students) ──────────────────────
  {
    id: "s01",
    initials: "A.B.",
    submitted: true,
    response: "She subtracted 1 from each number so it should still work. If you change both by the same amount it stays equal.",
    misconception_id: "M_RP_003",
    confidence_score: 0.91,
    cluster_color: "bg-violet-500",
  },
  {
    id: "s02",
    initials: "C.D.",
    submitted: true,
    response: "Yes because she added the same thing to both ingredients. Adding equal amounts keeps it balanced.",
    misconception_id: "M_RP_003",
    confidence_score: 0.88,
    cluster_color: "bg-violet-500",
  },
  {
    id: "s03",
    initials: "E.F.",
    submitted: true,
    response: "The difference between cups of water and juice is still 3, so the flavor is the same.",
    misconception_id: "M_RP_003",
    confidence_score: 0.93,
    cluster_color: "bg-violet-500",
  },
  {
    id: "s04",
    initials: "G.H.",
    submitted: true,
    response: "Both batches went up by the same amount so the flavor won't change. The gap is still 3.",
    misconception_id: "M_RP_003",
    confidence_score: 0.85,
    cluster_color: "bg-violet-500",
  },
  {
    id: "s05",
    initials: "I.J.",
    submitted: true,
    response: "She just added 1 to each ingredient. When you add the same thing to both sides it stays equal.",
    misconception_id: "M_RP_003",
    confidence_score: 0.89,
    cluster_color: "bg-violet-500",
  },
  {
    id: "s06",
    initials: "K.L.",
    submitted: true,
    response: "9 minus 6 equals 3 and 8 minus 5 equals 3. The gap is the same so it's still balanced.",
    misconception_id: "M_RP_003",
    confidence_score: 0.87,
    cluster_color: "bg-violet-500",
  },
  {
    id: "s07",
    initials: "M.N.",
    submitted: true,
    response: "The difference didn't change. If you keep the difference the same between juice and water the recipe works.",
    misconception_id: "M_RP_003",
    confidence_score: 0.92,
    cluster_color: "bg-violet-500",
  },
  {
    id: "s08",
    initials: "O.P.",
    submitted: true,
    response: "She added 1 to each so it balances out. It's like subtracting the same from both sides of an equation.",
    misconception_id: "M_RP_003",
    confidence_score: 0.84,
    cluster_color: "bg-violet-500",
  },
  {
    id: "s09",
    initials: "Q.R.",
    submitted: true,
    response: "5+1=6 and 6+1=7. She changed both by the same number so I think it's still the same ratio.",
    misconception_id: "M_RP_003",
    confidence_score: 0.86,
    cluster_color: "bg-violet-500",
  },

  // ── M_RP_001: Ratio order reversal (5 students) ─────────────────────────
  {
    id: "s10",
    initials: "S.T.",
    submitted: true,
    response: "No because the original ratio is 6:9 and the new one is 5:8. They are different.",
    misconception_id: "M_RP_001",
    confidence_score: 0.82,
    cluster_color: "bg-blue-500",
  },
  {
    id: "s11",
    initials: "U.V.",
    submitted: true,
    response: "The first batch is 6 water to 9 juice, the second is 5 to 8. They don't match so it will taste different.",
    misconception_id: "M_RP_001",
    confidence_score: 0.79,
    cluster_color: "bg-blue-500",
  },
  {
    id: "s12",
    initials: "W.X.",
    submitted: true,
    response: "I compared 9:6 and 8:5. 9 divided by 6 is 1.5 and 8 divided by 5 is 1.6, so they're not equal.",
    misconception_id: "M_RP_001",
    confidence_score: 0.81,
    cluster_color: "bg-blue-500",
  },
  {
    id: "s13",
    initials: "Y.Z.",
    submitted: true,
    response: "6 to 9 is not the same as 5 to 8. I wrote the ratio juice-first and it doesn't simplify the same.",
    misconception_id: "M_RP_001",
    confidence_score: 0.77,
    cluster_color: "bg-blue-500",
  },
  {
    id: "s14",
    initials: "A.C.",
    submitted: true,
    response: "The ratios are 6:9 and 5:8. They aren't equivalent, so the recipes won't taste the same.",
    misconception_id: "M_RP_001",
    confidence_score: 0.80,
    cluster_color: "bg-blue-500",
  },

  // ── M_RP_009: Correct answer, no explanation (4 students) ───────────────
  {
    id: "s15",
    initials: "B.D.",
    submitted: true,
    response: "No it won't taste the same.",
    misconception_id: "M_RP_009",
    confidence_score: 0.88,
    cluster_color: "bg-amber-500",
  },
  {
    id: "s16",
    initials: "E.G.",
    submitted: true,
    response: "They are not the same. The second batch is wrong.",
    misconception_id: "M_RP_009",
    confidence_score: 0.85,
    cluster_color: "bg-amber-500",
  },
  {
    id: "s17",
    initials: "F.H.",
    submitted: true,
    response: "No because the recipe changed.",
    misconception_id: "M_RP_009",
    confidence_score: 0.83,
    cluster_color: "bg-amber-500",
  },
  {
    id: "s18",
    initials: "J.K.",
    submitted: true,
    response: "The batches are different so they won't taste the same.",
    misconception_id: "M_RP_009",
    confidence_score: 0.87,
    cluster_color: "bg-amber-500",
  },

  // ── Unclassified — below confidence threshold (2 students) ──────────────
  {
    id: "s19",
    initials: "L.M.",
    submitted: true,
    response: "I think it's okay because ratios can change a little bit. It depends on how picky you are about taste.",
    misconception_id: "unclassified",
    confidence_score: 0.61,
    cluster_color: "bg-orange-400",
  },
  {
    id: "s20",
    initials: "N.O.",
    submitted: true,
    response: "She made it smaller which means less cups total. Smaller batches might be more concentrated so maybe it tastes different.",
    misconception_id: "unclassified",
    confidence_score: 0.58,
    cluster_color: "bg-orange-400",
  },

  // ── Correct understanding (2 students) ──────────────────────────────────
  {
    id: "s21",
    initials: "P.Q.",
    submitted: true,
    response: "No, it won't taste the same. The original ratio is 9:6 which simplifies to 3:2. The new ratio is 8:5, which does not equal 3:2, so the batches are not equivalent.",
    misconception_id: "correct",
    confidence_score: 0.97,
    cluster_color: "bg-emerald-500",
  },
  {
    id: "s22",
    initials: "R.S.",
    submitted: true,
    response: "They taste different. 9 ÷ 6 = 1.5 but 8 ÷ 5 = 1.6, so the juice-to-water ratio changed. You need equivalent ratios for the same flavor.",
    misconception_id: "correct",
    confidence_score: 0.95,
    cluster_color: "bg-emerald-500",
  },

  // ── Did not submit (3 students) ─────────────────────────────────────────
  {
    id: "s23",
    initials: "T.U.",
    submitted: false,
    response: null,
    misconception_id: null,
    confidence_score: null,
    cluster_color: "bg-gray-300",
  },
  {
    id: "s24",
    initials: "V.W.",
    submitted: false,
    response: null,
    misconception_id: null,
    confidence_score: null,
    cluster_color: "bg-gray-300",
  },
  {
    id: "s25",
    initials: "X.Y.",
    submitted: false,
    response: null,
    misconception_id: null,
    confidence_score: null,
    cluster_color: "bg-gray-300",
  },
];

export const CLUSTER_META: Record<
  Exclude<ClusterId, null>,
  {
    label: string;
    shortLabel: string;
    color: string;
    textColor: string;
    bgColor: string;
    borderColor: string;
  }
> = {
  M_RP_003: {
    label: "Additive Ratio Thinking",
    shortLabel: "Additive thinking",
    color: "bg-violet-500",
    textColor: "text-violet-700",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  M_RP_001: {
    label: "Ratio Order Reversal",
    shortLabel: "Order reversal",
    color: "bg-blue-500",
    textColor: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  M_RP_009: {
    label: "Correct Answer, No Explanation",
    shortLabel: "No explanation",
    color: "bg-amber-500",
    textColor: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  unclassified: {
    label: "Unclassified",
    shortLabel: "Unclassified",
    color: "bg-orange-400",
    textColor: "text-orange-700",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  correct: {
    label: "Correct Understanding",
    shortLabel: "Correct",
    color: "bg-emerald-500",
    textColor: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
};

export function getStudentsByCluster(
  clusterId: Exclude<ClusterId, null>
): Student[] {
  return students.filter((s) => s.misconception_id === clusterId);
}

// Warm-up questions generated per cluster (for demo purposes)
export const CLUSTER_WARMUPS: Record<Exclude<ClusterId, null | "correct" | "unclassified">, { question: string; source: string }> = {
  M_RP_003: {
    question: "Tamara says that a 4:6 orange juice-to-water mix and a 6:8 mix taste the same because both went up by 2. Do you agree? Explain your reasoning using multiplication or division.",
    source: "IM G6 U2 L2 — Equivalent Ratios; adapted from Eedi M_RP_003 intervention bank",
  },
  M_RP_001: {
    question: "A recipe calls for 3 cups of flour and 2 cups of sugar. Write the ratio of flour to sugar, then write the ratio of sugar to flour. Are these the same ratio? Why or why not?",
    source: "IM G6 U2 L1 practice problems; Eedi M_RP_001 re-engagement prompt",
  },
  M_RP_009: {
    question: "Tyler says the two juice batches taste different. Write a complete explanation: show the ratio for each batch, simplify or find unit rates, and explain what 'equivalent' means in this context.",
    source: "IM G6 U2 L1 cool-down extension; Eedi M_RP_009 explanation scaffold",
  },
};
