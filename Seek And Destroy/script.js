function applyDestroyer() {
  const arrayInput = document.getElementById("arrayInput");
  const valuesToRemoveInput = document.getElementById("valuesToRemoveInput");
  const resultParagraph = document.getElementById("result");

  const arr = arrayInput.value.split(",").map((item) => {
    const num = parseFloat(item.trim());
    return isNaN(num) ? item.trim() : num;
  });

  const valsToRemove = valuesToRemoveInput.value.split(",").map((item) => {
    const num = parseFloat(item.trim());
    return isNaN(num) ? item.trim() : num;
  });

  try {
    const result = destroyer(arr, ...valsToRemove);
    resultParagraph.textContent = JSON.stringify(result);
  } catch (error) {
    resultParagraph.textContent = "Erro: " + error.message;
  }
}

function destroyer(arr, ...valsToRemove) {
  return arr.filter((elem) => !valsToRemove.includes(elem));
}
