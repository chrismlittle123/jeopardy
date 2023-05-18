import React, { useState } from "react";
import Question from "./Question";
import Response from "./Response";
import SubmitButton from "./SubmitButton";
import Message from "./Message";

const Jeopardy: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmission = () => {
    setSubmitted(true);
  };

  return (
    <div className="jeopardy">
      <Question />
      <Response />
      <SubmitButton onSubmit={handleSubmission} />
      {submitted && <Message />}
    </div>
  );
};

export default Jeopardy;
