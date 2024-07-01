function calculateDiff() {
  const arr1Input = document.getElementById("arr1Input");
  const arr2Input = document.getElementById("arr2Input");
  const resultParagraph = document.getElementById("result");

  const arr1 = arr1Input.value.split(",").map((item) => item.trim());
  const arr2 = arr2Input.value.split(",").map((item) => item.trim());

  try {
    if (arr1.length === 0 && arr2.length === 0) {
      throw new Error(
        "Por favor, insira pelo menos um elemento em um dos arrays."
      );
    }

    const result = diffArray(arr1, arr2);
    resultParagraph.textContent = JSON.stringify(result);
  } catch (error) {
    resultParagraph.textContent = "Erro: " + error.message;
  }
}

function diffArray(arr1, arr2) {
  const unique1 = arr1.filter((elem) => !arr2.includes(elem));
  const unique2 = arr2.filter((elem) => !arr1.includes(elem));
  return unique1.concat(unique2);
}
