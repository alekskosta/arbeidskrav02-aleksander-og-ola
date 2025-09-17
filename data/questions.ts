export type Option = { id: string; text: string };

export type Question = {
  id: string;
  title: string;
  options: Option[]; 
  correctOptionId: string; 
};

export const questions: Question[] = [
  {
    id: "q1",
    title: "Spørsmål 1",
    options: [
      { id: "a", text: "Svaralternativ 1" },
      { id: "b", text: "Svaralternativ 2" },
      { id: "c", text: "Svaralternativ 3" },
      { id: "d", text: "Svaralternativ 4" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q2",
    title: "Spørsmål 2",
    options: [
      { id: "a", text: "Svaralternativ 1" },
      { id: "b", text: "Svaralternativ 2" },
      { id: "c", text: "Svaralternativ 3" },
      { id: "d", text: "Svaralternativ 4" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q3",
    title: "Spørsmål 3",
    options: [
      { id: "a", text: "Svaralternativ 1" },
      { id: "b", text: "Svaralternativ 2" },
      { id: "c", text: "Svaralternativ 3" },
      { id: "d", text: "Svaralternativ 4" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q4",
    title: "Spørsmål 4",
    options: [
      { id: "a", text: "Svaralternativ 1" },
      { id: "b", text: "Svaralternativ 2" },
      { id: "c", text: "Svaralternativ 3" },
      { id: "d", text: "Svaralternativ 4" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q5",
    title: "Spørsmål 5",
    options: [
      { id: "a", text: "Svaralternativ 1" },
      { id: "b", text: "Svaralternativ 2" },
      { id: "c", text: "Svaralternativ 3" },
      { id: "d", text: "Svaralternativ 4" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q6",
    title: "Spørsmål 6",
    options: [
      { id: "a", text: "Svaralternativ 1" },
      { id: "b", text: "Svaralternativ 2" },
      { id: "c", text: "Svaralternativ 3" },
      { id: "d", text: "Svaralternativ 4" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q7",
    title: "Spørsmål 7",
    options: [
      { id: "a", text: "Svaralternativ 1" },
      { id: "b", text: "Svaralternativ 2" },
      { id: "c", text: "Svaralternativ 3" },
      { id: "d", text: "Svaralternativ 4" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q8",
    title: "Spørsmål 8",
    options: [
      { id: "a", text: "Svaralternativ 1" },
      { id: "b", text: "Svaralternativ 2" },
      { id: "c", text: "Svaralternativ 3" },
      { id: "d", text: "Svaralternativ 4" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q9",
    title: "Spørsmål 9",
    options: [
      { id: "a", text: "Svaralternativ 1" },
      { id: "b", text: "Svaralternativ 2" },
      { id: "c", text: "Svaralternativ 3" },
      { id: "d", text: "Svaralternativ 4" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q10",
    title: "Spørsmål 10",
    options: [
      { id: "a", text: "Svaralternativ 1" },
      { id: "b", text: "Svaralternativ 2" },
      { id: "c", text: "Svaralternativ 3" },
      { id: "d", text: "Svaralternativ 4" },
    ],
    correctOptionId: "a",
  },
];
