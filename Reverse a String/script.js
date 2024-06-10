function reverseAndDisplay() {
  let inputString = getInputString();
  let reversedString = reverseString(inputString);
  displayReversedString(reversedString);
}

function getInputString() {
  return document.getElementById("inputString").value;
}

function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

function displayReversedString(str) {
  document.getElementById("output").innerText = str;
}
