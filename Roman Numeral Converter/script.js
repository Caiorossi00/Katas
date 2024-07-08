function convertToRoman() {
  let num = document.getElementById("numberInput").value.trim();

  if (isNaN(num) || num === "") {
    alert("Please enter a valid number.");
    return;
  }

  num = parseInt(num);

  function intToRoman(num) {
    if (typeof num !== "number" || num <= 0 || num > 3999) {
      return "Invalid number for Roman numeral conversion";
    }
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const syb = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let romanNum = "";
    for (let i = 0; i < val.length; i++) {
      while (num >= val[i]) {
        romanNum += syb[i];
        num -= val[i];
      }
    }
    return romanNum;
  }

  let romanNumeral = intToRoman(num);
  document.getElementById(
    "result"
  ).textContent = `Roman Numeral: ${romanNumeral}`;
}
