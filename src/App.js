import "./App.css";
import Header from "./components/Header";
import Human from "./components/Human";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import { useEffect, useState } from "react";
import { showNotification as show } from "./Utility";
import Overlay from "./components/Overlay";
import Notification from "./components/Notification";

const words = [
  "application",
  "programming",
  "interface",
  "wizard",
  "january",
  "border",
  "image",
  "film",
  "promise",
  "kids",
  "lungs",
  "doll",
  "rhyme",
  "damage",
  "plants",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetter) => [...currentLetter, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetter) => [...wrongLetter, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    // Keydown letter press
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  };

  return (
    <>
      <Header />
      <div className="hangman-container">
        <Human wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Overlay
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
