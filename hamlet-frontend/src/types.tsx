
// enum QuestionType {
//     quiz = "quiz",
//     poll = "poll",
//     subjective = "subjective",
//     survey = "survey",
// }

type QuestionType = "quiz" | "poll" | "subjective" | "survey"

interface question {
    q: string;
    type: QuestionType;
    choices?: string[];
}

interface hamlet {
    id: number;
    title: string;
    code?: string;
    date?: Date; 
}

export type { QuestionType, question, hamlet };