import React from "react";

const Question: React.FC = () => {
  const getRandomText = () => {
    // Logic to generate random text
    return "This is a random string of text.";
  };

  return <p>{getRandomText()}</p>;
};

export default Question;
