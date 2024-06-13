function calculateLargestNumbers() {
  let inputNumbers = document.getElementById("inputNumbers").value;
  let nums = inputNumbers.split(" ").map(Number);

  if (nums.length === 0) {
    alert("Por favor, insira números válidos.");
    return;
  }

  let largestNumber = Math.max(...nums);

  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<h2>Maior Número:</h2><p>" + largestNumber + "</p>";
}
