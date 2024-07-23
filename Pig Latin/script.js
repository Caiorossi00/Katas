function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let words = str.toLowerCase().split(" ");

  return words
    .map((word) => {
      let firstLetter = word[0];
      if (vowels.includes(firstLetter)) {
        return word + "way";
      } else {
        while (consonants.includes(firstLetter)) {
          word = word.slice(1) + firstLetter;
          firstLetter = word[0];
        }
        return word + "ay";
      }
    })
    .join(" ");
}

function convertPigLatin() {
  const textInput = document.getElementById("textInput");
  const resultParagraph = document.getElementById("result");

  const text = textInput.value;
  const pigLatinText = translatePigLatin(text);

  resultParagraph.textContent = pigLatinText;
}
