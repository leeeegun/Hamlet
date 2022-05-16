type QuestionType = "quiz" | "poll" | "subjective" | "survey"

interface question {
    q: string;
    type: QuestionType;
    time: number;
    point?: number;
    choices?: string[];
}

interface hamlet {
    id: number;
    title: string;
    code?: string;
    date?: Date; 
}

export type { QuestionType, question, hamlet };