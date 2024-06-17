function truncateString() {
  const stringInput = document.getElementById("stringInput");
  const numInput = document.getElementById("numInput");
  const resultParagraph = document.getElementById("result");

  const str = stringInput.value;
  const num = parseInt(numInput.value, 10);

  if (num <= 0) {
    resultParagraph.textContent = "...";
  } else if (num <= 3) {
    resultParagraph.textContent = "...";
  } else if (str.length > num) {
    const truncatedString = str.slice(0, num) + "...";
    resultParagraph.textContent = truncatedString;
  } else {
    resultParagraph.textContent = str;
  }
}
