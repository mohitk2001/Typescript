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
// let userTestStatus: { id: number, name: string }[] = [
//     { "id": 0, "name": "Available" },
//     { "id": 1, "name": "Ready" },
//     { "id": 2, "name": "Started" }
// ];
export type QuestionState=Question & {answer:string[]}

export const temp=async(amount:number,difficulty:Difficulty)=>{
    const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data=await(await fetch(endpoint)).json()
   // console.log(QuestionState)
    // data.results.map((result:Question)=>{
        
    // })
}
export const fetchQuizQuestions=async(amount:number,difficulty:Difficulty):Promise<QuestionState[]>=>{
    const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data=await(await fetch(endpoint)).json()
    console.log(data)
    return data.results.map((result:Question)=>({
        ...result,
        answer: ([...result.incorrect_answer,result.correct_answer])
    
    })
    )
    
}