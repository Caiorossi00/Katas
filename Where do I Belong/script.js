function findPosition() {
  const arrayInput = document.getElementById("arrayInput");
  const numInput = document.getElementById("numInput");
  const resultParagraph = document.getElementById("result");

  const arrString = arrayInput.value;
  const num = parseInt(numInput.value, 10);

  try {
    const arr = arrString
      .split(",")
      .map(Number)
      .sort((a, b) => a - b);

    if (isNaN(num) || arr.some(isNaN)) {
      throw new Error(
        "Por favor, insira um array de números válido e um número a inserir."
      );
    }

    const index = getIndexToIns(arr, num);
    resultParagraph.textContent = `O número ${num} deve ser inserido no índice ${index}.`;
  } catch (error) {
    resultParagraph.textContent = "Erro: " + error.message;
  }
}

function getIndexToIns(arr, num) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return index;
    }
    index++;
  }

  return index;
}
