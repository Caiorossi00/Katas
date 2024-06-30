function calculateSum() {
  const rangeStartInput = document.getElementById("rangeStart");
  const rangeEndInput = document.getElementById("rangeEnd");
  const resultParagraph = document.getElementById("result");

  const start = parseInt(rangeStartInput.value, 10);
  const end = parseInt(rangeEndInput.value, 10);

  try {
    if (isNaN(start) || isNaN(end)) {
      throw new Error("Por favor, insira números válidos para o intervalo.");
    }

    const result = sumAll([start, end]);
    resultParagraph.textContent = `A soma dos números no intervalo é: ${result}`;
  } catch (error) {
    resultParagraph.textContent = "Erro: " + error.message;
  }
}

function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
