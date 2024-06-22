function checkMutation() {
  const string1Input = document.getElementById("string1Input");
  const string2Input = document.getElementById("string2Input");
  const resultParagraph = document.getElementById("result");

  const string1 = string1Input.value.toLowerCase();
  const string2 = string2Input.value.toLowerCase();

  try {
    if (string1 === "" || string2 === "") {
      throw new Error("Por favor, preencha ambos os campos.");
    }

    const result = mutation([string1, string2]);

    if (result) {
      resultParagraph.textContent =
        "True: A segunda string contém todos os caracteres da primeira.";
    } else {
      resultParagraph.textContent =
        "False: A segunda string não contém todos os caracteres da primeira.";
    }
  } catch (error) {
    resultParagraph.textContent = "Erro: " + error.message;
  }
}

function mutation(arr) {
  const original = arr[0].toLowerCase();
  const test = arr[1].toLowerCase();

  for (let i = 0; i < original.length; i++) {
    if (test.indexOf(original[i]) < 0) {
      return false;
    }
  }
  return true;
}
