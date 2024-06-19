function chunkArray() {
  const arrayInput = document.getElementById("arrayInput");
  const sizeInput = document.getElementById("sizeInput");
  const resultParagraph = document.getElementById("result");

  const arr = arrayInput.value.split(",").map((item) => item.trim());

  const size = parseInt(sizeInput.value, 10);

  try {
    const result = chunkArrayInGroups(arr, size);
    resultParagraph.textContent = JSON.stringify(result);
  } catch (error) {
    resultParagraph.textContent = error.message;
  }
}

function chunkArrayInGroups(arr, size) {
  const result = [];

  if (size <= 0) {
    throw new Error("O tamanho do grupo deve ser maior que zero.");
  }

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}
