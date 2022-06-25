export type Question={
    category:String,
    correct_answer:string,
    difficulty:string,
    incorrect_answer:string[],
    question:string,
    type:string
}

export enum Difficulty{
    EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionState=Question & {answer:string[]}

export const fetchQuizQuestions=async(amount:number,difficulty:Difficulty):Promise<QuestionState[]>=>{
    const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data=await(await fetch(endpoint)).json()
    // console.log(data.results)
    return data.results.map((result:Question)=>({
        ...result,
        answer: ([...result.incorrect_answer,result.correct_answer])
    }))
    
}