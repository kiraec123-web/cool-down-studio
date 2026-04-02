export interface OutputPackage {
  reAssessmentQuestion: string;
  feedbackStem: string;
  warmUp: string;
  imConnection: string;
  sources: {
    reAssessment: string;
    feedback: string;
    warmUp: string;
    connection: string;
  };
}

type MockOutputMap = Partial<
  Record<string, Partial<Record<string, OutputPackage>>>
>;

// High-fidelity outputs grounded in IM G6 U2 curriculum + Eedi taxonomy
export const mockOutputs: MockOutputMap = {
  G6_U2_L1: {
    M_RP_003: {
      reAssessmentQuestion:
        "A lemonade recipe uses 3 cups of lemon juice and 5 cups of water. Another version uses 6 cups of lemon juice and 8 cups of water. Will both versions taste the same? Explain your reasoning.",
      feedbackStem:
        "You noticed 9−1=8 and 6−1=5. Try checking: does 9/6 equal 8/5? What does that tell you about whether the taste changes?",
      warmUp:
        "Display two side-by-side ratio representations — one where both quantities decrease by 2 (additive), one where both are divided by 2 (multiplicative). Ask: 'If these were paint mixtures, would they look the same? How do you know?' Invite students to share their reasoning before connecting to the Compare and Connect MLR.",
      imConnection:
        "Unit 2 Lesson 5 (Defining Equivalent Ratios) explicitly develops the multiplicative relationship between equivalent ratios. In the meantime, Lesson 2's ratio diagrams offer a visual anchor for why additive changes break the relationship — consider opening tomorrow's warm-up with a diagram comparison.",
      sources: {
        reAssessment: "IM G6 U2 L1 learning goal + Eedi M_RP_003",
        feedback: "Eedi M_RP_003 remediation language",
        warmUp: "IL PD Library: Unit 2 Implementation Guide · MLR: Compare and Connect",
        connection: "IM G6 U2 scope and sequence · Lesson 5 teacher notes",
      },
    },
    M_RP_001: {
      reAssessmentQuestion:
        "A smoothie recipe uses 4 cups of mango and 2 cups of yogurt. Write the ratio of mango to yogurt. Then write the ratio of yogurt to mango. Are these the same ratio? Explain.",
      feedbackStem:
        "Re-read the problem and notice which ingredient is described first. Try completing this sentence: 'The ratio of seeds to syrup is ___:___.' Does your answer match that order?",
      warmUp:
        "Write two ratio statements on the board about the same situation (e.g., 'The ratio of boys to girls is 3:5' and 'The ratio of girls to boys is 5:3'). Ask: 'Are these the same ratio? Are they describing the same situation?' Use MLR Stronger and Clearer Each Time to have students refine their explanations.",
      imConnection:
        "Ratio language and order is reinforced throughout Unit 2 Lesson 2 (Representing Ratios with Diagrams). Labeling diagrams explicitly — with quantity names, not just numbers — helps anchor students to correct order.",
      sources: {
        reAssessment: "IM G6 U2 L1 learning goal + Eedi M_RP_001",
        feedback: "Eedi M_RP_001 remediation language",
        warmUp: "IL PD Library: MLR Stronger and Clearer Each Time · Unit 2 Guide",
        connection: "IM G6 U2 L2 teacher notes",
      },
    },
    M_RP_005: {
      reAssessmentQuestion:
        "A punch recipe has 2 cups of juice and 3 cups of soda. What is the ratio of juice to soda? What fraction of the total punch is juice? Are these the same thing? Explain the difference.",
      feedbackStem:
        "A ratio compares two separate quantities — not a part to the whole total. What are the two things being compared in Elena's recipe? Try writing: 'The ratio of seeds to syrup is 9 to ___.' That's different from asking what fraction of the mix is seeds.",
      warmUp:
        "Draw two visual models side by side: a tape diagram showing a 2:3 part-to-part ratio, and a fraction bar showing 2/5 part-to-whole. Ask: 'What question does each model answer?' Facilitate a whole-class discussion on when you use each.",
      imConnection:
        "Unit 2 Lesson 2 uses discrete diagrams that make the part-to-part relationship visible. Using those diagrams tomorrow will reinforce why ratios are not fractions of a whole.",
      sources: {
        reAssessment: "IM G6 U2 L1 learning goal + Eedi M_RP_005",
        feedback: "Eedi M_RP_005 remediation language",
        warmUp: "IL PD Library: Unit 2 Implementation Guide p.8",
        connection: "IM G6 U2 L2 teacher notes",
      },
    },
    M_RP_009: {
      reAssessmentQuestion:
        "A trail mix recipe uses 2 cups of nuts and 3 cups of dried fruit. A student makes a batch with 4 cups of nuts and 5 cups of dried fruit. Will it taste the same? Write a complete explanation — include a check you could do to be sure.",
      feedbackStem:
        "You have the right answer — the smaller batch won't taste the same. Now try explaining why in one sentence that starts with: 'The taste changes because the ratio of seeds to syrup...' What mathematical check shows this?",
      warmUp:
        "Display two student work samples (anonymized): one that gives a correct answer with no explanation, one that gives a correct answer with a ratio check. Ask: 'Which explanation would convince a skeptic? What would you add to the first one?' Use MLR Critique, Correct, and Clarify.",
      imConnection:
        "Mathematical reasoning and justification is an explicit goal throughout Unit 2. Unit 2 Lesson 3 (Recipes) asks students to explain equivalence in recipe contexts — a natural next opportunity to practice explanation.",
      sources: {
        reAssessment: "IM G6 U2 L1 learning goal + Eedi M_RP_009",
        feedback: "Eedi M_RP_009 remediation language",
        warmUp: "IL PD Library: MLR Critique, Correct, and Clarify · Unit 2 Guide",
        connection: "IM G6 U2 L3 teacher notes",
      },
    },
  },

  G6_U2_L2: {
    M_RP_003: {
      reAssessmentQuestion:
        "A diagram shows 3 stars and 4 circles repeating in groups. If you add one more star to each group instead of repeating the pattern, does the ratio stay the same? Draw or explain.",
      feedbackStem:
        "Look at your diagram — did you repeat the same group of stars and circles, or did you add to each group? Repeating the group keeps the ratio the same. Adding to each group changes it. Why does that matter?",
      warmUp:
        "Show two diagrams: one that extends a 2:3 ratio by repeating groups, one that adds 1 to each group. Ask: 'Do both diagrams show the same ratio? Which one is a correct extension?' Use MLR Compare and Connect.",
      imConnection:
        "The group-repeating structure of ratio diagrams directly connects to equivalent ratios in Lesson 5. Reinforcing why each group must be identical prepares students for the multiplicative definition of equivalence.",
      sources: {
        reAssessment: "IM G6 U2 L2 learning goal + Eedi M_RP_003",
        feedback: "Eedi M_RP_003 remediation language",
        warmUp: "IL PD Library: Unit 2 Implementation Guide · MLR: Compare and Connect",
        connection: "IM G6 U2 L5 teacher notes",
      },
    },
    M_RP_009: {
      reAssessmentQuestion:
        "Draw a diagram that shows the ratio 3:5. Then use your diagram to find how many of the second quantity you would need if you had 9 of the first quantity. Show your reasoning.",
      feedbackStem:
        "Your diagram looks correct. Can you add one sentence explaining how you used it to find the answer? Start with: 'I knew to use ___ because my diagram showed...'",
      warmUp:
        "Display a correct ratio diagram with no explanation and ask students to write the explanation. Share 2-3 explanations and discuss: what makes an explanation convincing?",
      imConnection:
        "Explaining diagram-based reasoning prepares students for Lesson 3's recipe context, where they will need to articulate why one batch tastes the same as another.",
      sources: {
        reAssessment: "IM G6 U2 L2 learning goal + Eedi M_RP_009",
        feedback: "Eedi M_RP_009 remediation language",
        warmUp: "IL PD Library: Unit 2 Implementation Guide",
        connection: "IM G6 U2 L3 teacher notes",
      },
    },
  },

  G6_U2_L3: {
    M_RP_003: {
      reAssessmentQuestion:
        "A granola recipe uses 2 cups of oats and 1 cup of honey. If you want to make a batch with 5 cups of oats, how much honey do you need? A classmate says 4 cups of honey because 'both numbers went up by about the same amount.' Is the classmate right? Explain.",
      feedbackStem:
        "Your classmate added similar amounts to both ingredients. Try asking: what did you multiply the oats by? Did you do the same thing to the honey?",
      warmUp:
        "Present a ratio table with one row filled in (2 oats, 1 honey) and three rows where students must decide which entries are equivalent. Include one additive distractor. Discuss: what makes a ratio table entry equivalent?",
      imConnection:
        "Lesson 4 (Color Mixtures) asks students to identify equivalent mixtures — the same additive vs. multiplicative distinction. This warm-up directly previews that work.",
      sources: {
        reAssessment: "IM G6 U2 L3 learning goal + Eedi M_RP_003",
        feedback: "Eedi M_RP_003 remediation language",
        warmUp: "IL PD Library: Unit 2 Implementation Guide",
        connection: "IM G6 U2 L4 teacher notes",
      },
    },
    M_RP_015: {
      reAssessmentQuestion:
        "A dressing recipe uses 3 tablespoons of oil and 1 tablespoon of vinegar. You want to triple the recipe. Complete the ratio table showing the original recipe and the tripled batch. What goes in each cell?",
      feedbackStem:
        "Check your table — did you multiply both the oil and the vinegar by 3? If one quantity triples but the other stays the same, will the dressing taste the same? Why or why not?",
      warmUp:
        "Show a ratio table with an error: one quantity correctly scaled, the other unchanged. Ask: 'What mistake did this student make? How would you fix it?' Connect to the visual of both rows of a double number line moving together.",
      imConnection:
        "Scaling both quantities correctly is the foundation of Lesson 5's definition of equivalent ratios. Students who scale only one quantity will struggle with the formal definition — this warm-up is directly preparatory.",
      sources: {
        reAssessment: "IM G6 U2 L3 learning goal + Eedi M_RP_015",
        feedback: "Eedi M_RP_015 remediation language",
        warmUp: "IL PD Library: Unit 2 Implementation Guide",
        connection: "IM G6 U2 L5 teacher notes",
      },
    },
  },

  G6_U2_L4: {
    M_RP_003: {
      reAssessmentQuestion:
        "Paint A uses 1 cup of red and 4 cups of blue. Paint B uses 2 cups of red and 5 cups of blue. (Note: each increases by 1.) Will the two paints look the same shade of purple? Explain why or why not.",
      feedbackStem:
        "You noticed both quantities went up by 1. Try checking the ratio: is 1:4 the same ratio as 2:5? What does that mean for the shade of purple?",
      warmUp:
        "Show color strips (or describe) two purple mixtures: one made by multiplying (1:4 → 2:8), one by adding (1:4 → 2:5). Ask: 'Which looks the same shade? Which looks different? How can you check using numbers?'",
      imConnection:
        "Lesson 5 formalizes this exact question — when are two ratios equivalent? This warm-up is a direct preview of that lesson's definition.",
      sources: {
        reAssessment: "IM G6 U2 L4 learning goal + Eedi M_RP_003",
        feedback: "Eedi M_RP_003 remediation language",
        warmUp: "IL PD Library: Unit 2 Implementation Guide",
        connection: "IM G6 U2 L5 teacher notes",
      },
    },
    M_RP_001: {
      reAssessmentQuestion:
        "Paint uses 3 cups of red and 7 cups of blue. Write the ratio of red to blue. Then write the ratio of blue to red. If someone says the paint is 'mostly blue,' which ratio helps you show that? Explain.",
      feedbackStem:
        "Check which color is named first in each ratio statement. Try writing both ratios clearly labeled — 'red to blue' and 'blue to red' — and see if your original answer matches one of them.",
      warmUp:
        "Write a ratio statement, then ask students to write the 'reverse' ratio. Discuss: do both ratios describe the same mixture? When does the order matter?",
      imConnection:
        "Order precision becomes critical in Lesson 5 when students verify equivalence. Misidentified ratio order leads to incorrect equivalence checks.",
      sources: {
        reAssessment: "IM G6 U2 L4 learning goal + Eedi M_RP_001",
        feedback: "Eedi M_RP_001 remediation language",
        warmUp: "IL PD Library: Unit 2 Implementation Guide",
        connection: "IM G6 U2 L5 teacher notes",
      },
    },
  },

  G6_U2_L5: {
    M_RP_003: {
      reAssessmentQuestion:
        "A student claims that 4:6 and 6:8 are equivalent because 'both went up by 2.' Is the student right? Show two different ways to check.",
      feedbackStem:
        "A quantity going up by the same amount doesn't mean the ratios are equivalent. Try dividing both quantities in each ratio. Do you get the same value? That's what equivalent means.",
      warmUp:
        "Present the statement: '10:15 and 12:17 are equivalent because both quantities are close together.' Ask students to prove or disprove this. Discuss: what is the 'proof standard' for equivalent ratios?",
      imConnection:
        "This lesson consolidates Unit 2's central idea. Students who persist with additive thinking at this stage will encounter difficulty in Unit 3 (Unit Rates) where the multiplicative relationship is foundational.",
      sources: {
        reAssessment: "IM G6 U2 L5 learning goal + Eedi M_RP_003",
        feedback: "Eedi M_RP_003 remediation language",
        warmUp: "IL PD Library: Unit 2 Implementation Guide",
        connection: "IM G6 U3 teacher notes",
      },
    },
    M_RP_009: {
      reAssessmentQuestion:
        "Are 8:12 and 10:15 equivalent ratios? Show how you know using a ratio table AND one other method.",
      feedbackStem:
        "You found the right answer. Now try explaining it two ways: one using a ratio table and one using division (unit rate). Can you name which method you used?",
      warmUp:
        "Show two student work samples proving equivalence — one using a ratio table, one using division. Ask: 'What is each student doing? Which is easier to follow? Could you use both?'",
      imConnection:
        "Multiple representations of equivalence (ratio table, double number line, unit rate) will all appear in Unit 3 and Unit 4. Students who can only get the answer without explaining it will struggle to choose strategies in novel contexts.",
      sources: {
        reAssessment: "IM G6 U2 L5 learning goal + Eedi M_RP_009",
        feedback: "Eedi M_RP_009 remediation language",
        warmUp: "IL PD Library: Unit 2 Implementation Guide",
        connection: "IM G6 U3 teacher notes",
      },
    },
    M_RP_012: {
      reAssessmentQuestion:
        "A ratio is 5:8. What is the unit rate (how much of the second quantity per 1 of the first)? Use the unit rate to decide if 10:16 is equivalent to 5:8.",
      feedbackStem:
        "Try asking: 'How much of the second quantity is there for every 1 of the first?' That's the unit rate. If two ratios have the same unit rate, they're equivalent.",
      warmUp:
        "Build a ratio table together: start with 5:8, scale up to 10:16 and 15:24. Ask: 'What stays the same in every row? Can you name that quantity?' Introduce the term 'unit rate' if students haven't named it yet.",
      imConnection:
        "Unit rate is the central concept in Unit 3. Students who leave Unit 2 without connecting equivalent ratios to unit rate will need significant scaffolding in the next unit.",
      sources: {
        reAssessment: "IM G6 U2 L5 learning goal + Eedi M_RP_012",
        feedback: "Eedi M_RP_012 remediation language",
        warmUp: "IL PD Library: Unit 2 Implementation Guide",
        connection: "IM G6 U3 teacher notes",
      },
    },
  },
};

// Fallback output when no specific mock exists for the combination
export function getFallbackOutput(
  lessonTitle: string,
  lessonId: string,
  misconceptionLabel: string,
  misconceptionId: string,
  standardId: string
): OutputPackage {
  return {
    reAssessmentQuestion: `A new problem targeting the same standard (${standardId}) and learning goal from ${lessonTitle}. This question uses a different context from the original cool-down to prevent pattern-matching, and requires students to explain their reasoning — not just calculate.`,
    feedbackStem: `Your work shows a pattern connected to ${misconceptionLabel}. Look back at the key step in your reasoning: does your approach work for all cases, or just this one? Try checking your answer a different way.`,
    warmUp: `Open tomorrow's class with a problem that creates cognitive conflict around ${misconceptionLabel}. Present two contrasting approaches (one correct, one showing the misconception) and ask students to explain which is right and why. Use MLR Compare and Connect to structure the discussion.`,
    imConnection: `Review the upcoming lessons in this unit for the next opportunity to revisit ${standardId}. Flag the students who showed this pattern for a check-in during the next activity's work time.`,
    sources: {
      reAssessment: `IM ${lessonId} learning goal + Eedi ${misconceptionId}`,
      feedback: `Eedi ${misconceptionId} remediation language`,
      warmUp: `IL PD Library: Unit Implementation Guide · MLR: Compare and Connect`,
      connection: `IM ${lessonId} scope and sequence`,
    },
  };
}

export function getOutput(
  lessonId: string,
  misconceptionId: string,
  lessonTitle: string,
  misconceptionLabel: string,
  standardId: string
): OutputPackage {
  const lessonOutputs = mockOutputs[lessonId];
  if (lessonOutputs) {
    const output = lessonOutputs[misconceptionId];
    if (output) return output;
  }
  return getFallbackOutput(
    lessonTitle,
    lessonId,
    misconceptionLabel,
    misconceptionId,
    standardId
  );
}
