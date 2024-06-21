function slasher(arr, howMany) {
  if (howMany >= arr.length) {
    throw new Error(
      "O número de elementos a serem removidos deve ser menor que o comprimento do array."
    );
  } else if (howMany < 0) {
    throw new Error(
      "O número de elementos a serem removidos deve ser não negativo."
    );
  } else {
    return arr.slice(howMany);
  }
}

function applySlasher() {
  const arrayInput = document.getElementById("arrayInput");
  const howManyInput = document.getElementById("howManyInput");
  const resultParagraph = document.getElementById("result");

  const arr = arrayInput.value.split(",").map((item) => item.trim());
  const howMany = parseInt(howManyInput.value, 10);

  try {
    const result = slasher(arr, howMany);
    resultParagraph.textContent = JSON.stringify(result);
  } catch (error) {
    resultParagraph.textContent = "Erro: " + error.message;
  }
}
