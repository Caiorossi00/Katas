function findLongestWord() {
  const inputString = document.getElementById("inputString").value;
  const resultElement = document.getElementById("result");

  if (inputString.trim() === "") {
    resultElement.textContent = "Por favor, digite uma frase.";
    return;
  }

  const words = inputString.split(" ");
  let longestWords = [words[0]];
  let maxLength = words[0].length;

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > maxLength) {
      longestWords = [words[i]];
      maxLength = words[i].length;
    } else if (words[i].length === maxLength) {
      longestWords.push(words[i]);
    }
  }

  if (longestWords.length === 1) {
    resultElement.textContent = "A palavra mais longa é: " + longestWords[0];
  } else {
    resultElement.textContent =
      "As palavras mais longas são: " + longestWords.join(", ");
  }
}
