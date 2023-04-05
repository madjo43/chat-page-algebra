import { useState } from "react";


export function FaqQuestions ({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);
  
     function toggleAnswer() {
      setShowAnswer(!showAnswer);
    };
  
    return (
      <div className="question" onClick={toggleAnswer}>
        {question}
        {showAnswer && <div className="answer">{answer}</div>}
      </div>
    );
  }

    
    