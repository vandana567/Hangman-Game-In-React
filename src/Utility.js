export const showNotification = (setShowNotification) => {
  setShowNotification(true);
  // after 2 seconds, set it as false
  setTimeout(() => {
    setShowNotification(false);
  }, 2000);
};

export const checkIfWinOrLose = (correctLetters, wrongLetters, seletedWord) => {
  let status = "win";

  // check for win
  seletedWord.split("").forEach((letter) => {
    if (!correctLetters.includes(letter)) {
      status = "";
    }
  });

  // check for lose
  if (wrongLetters.length === 6) status = "lose";

  return status;
};
