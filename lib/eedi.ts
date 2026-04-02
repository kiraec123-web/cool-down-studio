export interface MisconceptionObject {
  misconception_id: string;
  label: string;
  short_label: string; // for the picker button
  description: string; // teacher-facing description of what students do
  example_responses: string[];
  remediation_moves: string[];
  feedback_stem_template: string;
  confidence_floor: number;
  applicable_lessons: string[]; // which lessons this typically surfaces in
}

export const misconceptions: Record<string, MisconceptionObject> = {
  M_RP_001: {
    misconception_id: "M_RP_001",
    label: "Ratio order reversal",
    short_label: "Reversed the ratio order",
    description:
      "Student writes or applies the ratio with the quantities in the wrong order — for example, describing '9 seeds to 6 syrup' as 6:9.",
    example_responses: [
      "The ratio is 6 to 9",
      "There is 1 cup of syrup for every 1.5 cups of seeds",
      "She needs more syrup than seeds",
    ],
    remediation_moves: [
      "Re-read the problem aloud, emphasizing order language",
      "Use sentence frames: 'The ratio of ___ to ___ is ___:___'",
      "Draw a labeled tape diagram to anchor quantity order",
    ],
    feedback_stem_template:
      "Re-read the problem and notice which quantity is described first. Try writing: 'The ratio of seeds to syrup is ___:___.' Does your answer match that order?",
    confidence_floor: 0.8,
    applicable_lessons: ["G6_U2_L1", "G6_U2_L2"],
  },

  M_RP_003: {
    misconception_id: "M_RP_003",
    label: "Additive ratio thinking",
    short_label: "Students subtracted instead of scaling",
    description:
      "Student applies an additive change to both quantities (subtracting or adding the same number) instead of maintaining the multiplicative relationship. For example, concluding that 9-1=8 and 6-1=5 preserves the taste.",
    example_responses: [
      "you just take away 1 from each",
      "9-1=8 and 6-1=5 so it still works",
      "I subtracted the same number from both so the taste stays the same",
      "It should taste the same because she reduced both by 1",
    ],
    remediation_moves: [
      "Double number line showing multiplicative scaling",
      "Ratio table comparing original and modified batch",
      "Unit rate check: 9/6 vs 8/5",
    ],
    feedback_stem_template:
      "You noticed 9−1=8 and 6−1=5. Try checking: does 9/6 equal 8/5? What does that tell you about whether the taste changes?",
    confidence_floor: 0.75,
    applicable_lessons: ["G6_U2_L1", "G6_U2_L3", "G6_U2_L4"],
  },

  M_RP_005: {
    misconception_id: "M_RP_005",
    label: "Fraction-ratio conflation",
    short_label: "Confused part-to-part with part-to-whole",
    description:
      "Student treats the ratio as a fraction of the whole (part-to-whole) rather than a comparison between two parts. For example, describing the ratio of seeds to syrup as '9 out of 15 total.'",
    example_responses: [
      "9 out of 15 is seeds",
      "6/15 of the mix is syrup",
      "The ratio is 9 out of the whole amount",
      "seeds make up 9/15 of the recipe",
    ],
    remediation_moves: [
      "Compare a part-to-part tape diagram with a part-to-whole fraction bar",
      "Ask: 'What are the two things being compared?'",
      "Reinforce ratio language: 'for every X seeds, there are Y tablespoons of syrup'",
    ],
    feedback_stem_template:
      "A ratio compares two separate quantities, not a part to the whole total. What are the two things being compared in this recipe? Can you write the ratio as '9 cups of seeds for every ___ tablespoons of syrup'?",
    confidence_floor: 0.78,
    applicable_lessons: ["G6_U2_L1", "G6_U2_L2"],
  },

  M_RP_009: {
    misconception_id: "M_RP_009",
    label: "Procedural without conceptual understanding",
    short_label: "Correct answer, no explanation",
    description:
      "Student arrives at the correct conclusion (the smaller batch does NOT taste the same) but cannot explain why. They may write 'no' or give a numeric answer without connecting it to the ratio relationship.",
    example_responses: [
      "No it won't taste the same",
      "It's wrong because the numbers are different",
      "No because 9/6 ≠ 8/5",
      "The answer is no",
    ],
    remediation_moves: [
      "Ask students to write one sentence starting with 'because'",
      "Prompt: 'How would you explain this to a student who said yes?'",
      "Use sentence frames connecting the ratio check to the conclusion",
    ],
    feedback_stem_template:
      "You have the right answer — the smaller batch won't taste the same. Now try explaining why in one sentence. Start with: 'The taste changes because the ratio of seeds to syrup...'",
    confidence_floor: 0.82,
    applicable_lessons: ["G6_U2_L1", "G6_U2_L2", "G6_U2_L3", "G6_U2_L5"],
  },

  M_RP_012: {
    misconception_id: "M_RP_012",
    label: "Unit rate not recognized",
    short_label: "Didn't connect to unit rate",
    description:
      "Student understands the ratio is different but cannot identify the unit rate as the tool that explains why. They struggle to name the 'per one' relationship that would let them verify equivalence.",
    example_responses: [
      "The numbers are different so it won't work",
      "I can tell it's wrong but I don't know how to explain it",
      "9 and 6 are different from 8 and 5",
    ],
    remediation_moves: [
      "Introduce 'per one' language: 'How many cups of seeds per tablespoon of syrup?'",
      "Build a ratio table to show how unit rate stays constant in equivalent ratios",
      "Connect to division: 9 ÷ 6 vs 8 ÷ 5",
    ],
    feedback_stem_template:
      "Try asking: 'How many cups of seeds are there for every 1 tablespoon of syrup?' Check that for both batches. Do you get the same answer?",
    confidence_floor: 0.76,
    applicable_lessons: ["G6_U2_L3", "G6_U2_L4", "G6_U2_L5"],
  },

  M_RP_015: {
    misconception_id: "M_RP_015",
    label: "Incorrect scaling — one quantity only",
    short_label: "Only scaled one quantity",
    description:
      "When asked to scale a ratio up or down, the student multiplies or divides only one of the quantities. For example, tripling the olive oil but forgetting to triple the vinegar.",
    example_responses: [
      "I multiplied the oil by 3 but forgot the vinegar",
      "12 tablespoons oil and 1 tablespoon vinegar — I kept it the same",
      "I only changed the first number",
    ],
    remediation_moves: [
      "Use a ratio table with arrows showing both quantities scaling together",
      "Ask: 'Did you do the same thing to both quantities?'",
      "Draw a double number line and show both tracks moving together",
    ],
    feedback_stem_template:
      "Check: did you scale both quantities by the same factor? If the oil tripled, what happened to the vinegar? Try filling in a ratio table to see if both rows change by the same multiplier.",
    confidence_floor: 0.8,
    applicable_lessons: ["G6_U2_L3", "G6_U2_L4", "G6_U2_L5"],
  },
};

export const misconceptionList = Object.values(misconceptions);

// Returns misconceptions most likely to surface for a given lesson
export function getMisconceptionsForLesson(
  lessonId: string
): MisconceptionObject[] {
  return misconceptionList.filter((m) =>
    m.applicable_lessons.includes(lessonId)
  );
}
