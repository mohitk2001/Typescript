import React, { useEffect } from "react";
import { fetchQuizQuestions, Difficulty } from "../API";
function QuestionCard() {
  useEffect(() => {
    fetchQuizQuestions(10, Difficulty.HARD);
  }, []);

  return (
    <div>QuestionCard</div>
  )
}

export default QuestionCard