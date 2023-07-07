"use client";

import { quiz } from "@/_config/quiz";
import { useState } from "react";

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswer: 0,
    wrongAnswer: 0,
  });

  const { questions } = quiz;
  const { question, correctAnswer, id, codeBlock } = questions[activeQuestion];
  return (
    <div>
      <h1>Quiz Page</h1>
      <div>
        <h2>
          Question: {activeQuestion + 1}
          <span>/{question.length}</span>
        </h2>

        {!showResult ? (
          <div>{questions[activeQuestion].question}</div>
        ) : (
          <div>adfasdf</div>
        )}
      </div>
    </div>
  );
}
