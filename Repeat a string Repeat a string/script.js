function repeatString() {
  const stringInput = document.getElementById("stringInput");
  const repetitionsInput = document.getElementById("repetitionsInput");
  const resultParagraph = document.getElementById("result");

  const stringToRepeat = stringInput.value;
  const numRepetitions = parseInt(repetitionsInput.value, 10);

  let repeatedString = "";

  if (numRepetitions === 0) {
    repeatedString = "";
  } else if (numRepetitions < 0) {
    repeatedString = "";
  } else {
    for (let i = 0; i < numRepetitions; i++) {
      repeatedString += " " + stringToRepeat;
    }
  }

  resultParagraph.textContent = repeatedString;
}
