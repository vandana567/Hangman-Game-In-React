import React, { useEffect } from "react";
import { checkIfWinOrLose } from "../Utility";

const Overlay = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let resultMessage = "";
  let resultMessageWithWord = "";
  let playable = true;

  if (checkIfWinOrLose(correctLetters, wrongLetters, selectedWord) === "win") {
    resultMessage = "Congratulations! You won!";
    resultMessageWithWord = "You guessed the word!";
    playable = false;
  } else if (checkIfWinOrLose(correctLetters, wrongLetters, selectedWord) === "lose") {
    resultMessage = "Unfortunetely! You lost.";
    resultMessageWithWord = "This is the Hangman Word: " + selectedWord;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className="overlay-container"
      style={resultMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="overlay">
        <h2>{resultMessage}</h2>
        <h3>{resultMessageWithWord}</h3>
        <h2>Thanks For Playing! We expect you back again!</h2>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Overlay;
