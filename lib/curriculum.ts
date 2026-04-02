export type UnitPosition = "introducing" | "developing" | "consolidating";

export interface LessonObject {
  lesson_id: string;
  lesson_number: number;
  title: string;
  learning_goal: string;
  cool_down_prompt: string;
  cool_down_context: string; // brief framing sentence shown before the prompt
  standard_id: string;
  standard_language: string;
  anticipated_errors: string[];
  teacher_moves: string;
  unit_position: UnitPosition;
  prev_lesson_id: string | null;
  next_lesson_id: string | null;
}

export const lessons: Record<string, LessonObject> = {
  G6_U2_L1: {
    lesson_id: "G6_U2_L1",
    lesson_number: 1,
    title: "Introducing Ratios and Ratio Language",
    learning_goal:
      "Understand that a ratio associates two quantities and that the ratio can be written and described in multiple ways.",
    cool_down_prompt:
      "Elena's bird food recipe uses 9 cups of seeds and 6 tablespoons of syrup. She wants to make a smaller batch that tastes the same. A classmate suggests using 8 cups of seeds and 5 tablespoons of syrup. Will that taste the same? Explain your reasoning.",
    cool_down_context:
      "Students have just explored how ratios associate two quantities and practiced writing ratios in multiple ways.",
    standard_id: "6.RP.A.1",
    standard_language:
      "Understand the concept of a ratio and use ratio language to describe a ratio relationship between two quantities.",
    anticipated_errors: [
      "Subtracting the same amount from both quantities (additive thinking)",
      "Reversing the order of the ratio",
      "Getting the correct answer but unable to explain why",
      "Confusing part-to-part with part-to-whole",
    ],
    teacher_moves:
      "During synthesis, use the double number line to show that the two quantities must scale together. Ask: 'If seeds goes from 9 to 8, what happened to the syrup?' Emphasize multiplicative language: 'for every X, there are Y.'",
    unit_position: "introducing",
    prev_lesson_id: null,
    next_lesson_id: "G6_U2_L2",
  },

  G6_U2_L2: {
    lesson_id: "G6_U2_L2",
    lesson_number: 2,
    title: "Representing Ratios with Diagrams",
    learning_goal:
      "Represent ratios using discrete diagrams and understand how diagrams show the ratio relationship between two quantities.",
    cool_down_prompt:
      "A trail mix recipe uses 2 cups of raisins for every 3 cups of peanuts. Draw a diagram that represents this ratio. Then use your diagram to find how many cups of peanuts you would need if you used 6 cups of raisins.",
    cool_down_context:
      "Students have been drawing discrete diagrams (circles, squares, or objects) to represent ratio relationships and using them to find unknown quantities.",
    standard_id: "6.RP.A.1",
    standard_language:
      "Understand the concept of a ratio and use ratio language to describe a ratio relationship between two quantities.",
    anticipated_errors: [
      "Drawing a diagram that does not maintain the ratio relationship",
      "Reversing the raisins and peanuts in the diagram",
      "Correct diagram but incorrect extension (adding rather than scaling)",
      "Unable to connect the diagram to the written ratio",
    ],
    teacher_moves:
      "Highlight how the groups in the diagram can be repeated. Ask: 'How many groups of your pattern did you need?' Connect diagram representations to the ratio language: 'for every 2 cups of raisins, there are 3 cups of peanuts.'",
    unit_position: "introducing",
    prev_lesson_id: "G6_U2_L1",
    next_lesson_id: "G6_U2_L3",
  },

  G6_U2_L3: {
    lesson_id: "G6_U2_L3",
    lesson_number: 3,
    title: "Recipes",
    learning_goal:
      "Recognize that multiplying or dividing both quantities in a ratio by the same number produces an equivalent ratio.",
    cool_down_prompt:
      "A salad dressing recipe uses 4 tablespoons of olive oil and 1 tablespoon of vinegar. Mai wants to make a larger batch. She uses 12 tablespoons of olive oil. How much vinegar does she need? Show or explain how you know the dressing will taste the same.",
    cool_down_context:
      "Students have been exploring how to scale recipes up and down while maintaining flavor — connecting the idea of equivalent ratios to a cooking context.",
    standard_id: "6.RP.A.3",
    standard_language:
      "Use ratio and rate reasoning to solve real-world and mathematical problems.",
    anticipated_errors: [
      "Adding the same amount instead of multiplying (additive thinking)",
      "Scaling only one quantity and not the other",
      "Correct answer without explanation of why the taste stays the same",
      "Incorrect scaling factor identified",
    ],
    teacher_moves:
      "Ask: 'What did Mai do to the olive oil? Did she do the same thing to the vinegar?' Use a ratio table to record the scaling steps. Emphasize that the ratio 4:1 must stay consistent — both quantities multiply by the same factor.",
    unit_position: "developing",
    prev_lesson_id: "G6_U2_L2",
    next_lesson_id: "G6_U2_L4",
  },

  G6_U2_L4: {
    lesson_id: "G6_U2_L4",
    lesson_number: 4,
    title: "Color Mixtures",
    learning_goal:
      "Understand that equivalent ratios can be found by scaling ratios up or down, and identify when two mixtures will look the same.",
    cool_down_prompt:
      "Two students are mixing purple paint. Student A uses 2 cups of red and 6 cups of blue. Student B uses 3 cups of red and 9 cups of blue. Will the two batches of paint look the same shade of purple? Explain your reasoning.",
    cool_down_context:
      "Students have been mixing colors and comparing shades — building intuition that identical shades require identical ratios, not identical amounts.",
    standard_id: "6.RP.A.3.a",
    standard_language:
      "Make tables of equivalent ratios relating quantities with whole-number measurements, find missing values in the tables, and plot the pairs of values on the coordinate plane.",
    anticipated_errors: [
      "Subtracting quantities instead of checking the multiplicative relationship",
      "Concluding they look different because the amounts are different",
      "Correct conclusion without reasoning about the ratio",
      "Comparing differences (3-2=1, 9-6=3) instead of ratios",
    ],
    teacher_moves:
      "Ask students to check: 'Is the relationship between red and blue the same in both batches?' Introduce the ratio table as a tool to check equivalence. Show that 2:6 and 3:9 both simplify to 1:3.",
    unit_position: "developing",
    prev_lesson_id: "G6_U2_L3",
    next_lesson_id: "G6_U2_L5",
  },

  G6_U2_L5: {
    lesson_id: "G6_U2_L5",
    lesson_number: 5,
    title: "Defining Equivalent Ratios",
    learning_goal:
      "Define equivalent ratios as ratios where the two quantities have the same multiplicative relationship, and identify whether ratios are equivalent.",
    cool_down_prompt:
      "Are the ratios 6:9 and 8:12 equivalent? Show or explain two different ways to check.",
    cool_down_context:
      "Students have formalized the definition of equivalent ratios and practiced multiple strategies for checking equivalence: double number lines, ratio tables, and unit rate.",
    standard_id: "6.RP.A.3.a",
    standard_language:
      "Make tables of equivalent ratios relating quantities with whole-number measurements, find missing values in the tables, and plot the pairs of values on the coordinate plane.",
    anticipated_errors: [
      "Checking if the difference between quantities is the same (not the ratio)",
      "Using only one method and making an arithmetic error",
      "Correctly finding equivalent but unable to name a second method",
      "Confusing equivalent ratios with equal quantities",
    ],
    teacher_moves:
      "Celebrate students who used more than one method. Ask: 'How do you know you can trust your answer?' Highlight that 6:9 and 8:12 both simplify to 2:3 — and both have unit rate 2/3.",
    unit_position: "consolidating",
    prev_lesson_id: "G6_U2_L4",
    next_lesson_id: null,
  },
};

export const lessonList = Object.values(lessons).sort(
  (a, b) => a.lesson_number - b.lesson_number
);
