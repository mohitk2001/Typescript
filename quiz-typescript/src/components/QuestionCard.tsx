import React, { useEffect } from "react";
import { fetchQuizQuestions, Difficulty,temp } from "../API";
function QuestionCard() {
  useEffect(() => {
    temp(10, Difficulty.HARD);
  }, []);

  return (
    <div>QuestionCard</div>
  )
}

export default QuestionCard