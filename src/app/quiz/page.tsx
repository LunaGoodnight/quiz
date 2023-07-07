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
  const { question, correctAnswer, id, answers } = questions[activeQuestion];
  return (
    <div>
      <h1>Quiz Page</h1>
      <div className="min-h-screen">
        <h2>
          Question: {activeQuestion + 1}
          <span>/{question.length}</span>
        </h2>

        {!showResult ? (
          <div>
            <h3>{questions[activeQuestion].question}</h3>
            <ul>
              {answers.map((answer, index) => {
                return <li key={index}>{answer}</li>;
              })}
            </ul>
          </div>
        ) : (
          <div>adfasdf</div>
        )}
      </div>
    </div>
  );
}
