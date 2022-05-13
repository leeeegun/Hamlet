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

interface Options{
    optionId: number;
    contents: string;
    answer: boolean;
}
interface hamlet2{
    questionId : number;
    kinds : number;
    time : number;
    orders : number;
    multiple : boolean;
    contents : string;
    options : Options[];
    point : number;
}



export type { QuestionType, question, hamlet, hamlet2, Options };