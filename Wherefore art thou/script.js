function filterCollection() {
  const collectionInput = document.getElementById("collectionInput");
  const sourceInput = document.getElementById("sourceInput");
  const resultParagraph = document.getElementById("result");

  try {
    const collection = JSON.parse(collectionInput.value);
    const source = JSON.parse(sourceInput.value);

    if (!Array.isArray(collection) || typeof source !== "object") {
      throw new Error(
        "Por favor, insira uma coleção de objetos (array) e um objeto de busca válidos em formato JSON."
      );
    }

    const result = whatIsInAName(collection, source);
    resultParagraph.textContent = JSON.stringify(result, null, 2);
  } catch (error) {
    resultParagraph.textContent = "Erro: " + error.message;
  }
}

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter((obj) => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (
        !obj.hasOwnProperty(sourceKeys[i]) ||
        obj[sourceKeys[i]] !== source[sourceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}
