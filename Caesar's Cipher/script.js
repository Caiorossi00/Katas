const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
  ""
);

function rot13(str) {
  let cifrado = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const index = alphabet.indexOf(char);
    if (index === -1) {
      cifrado += char;
    } else {
      const newIndex = (index + 13) % 26;
      cifrado +=
        char === char.toUpperCase()
          ? alphabet[newIndex].toUpperCase()
          : alphabet[newIndex];
    }
  }
  return cifrado;
}

function cifrarTexto() {
  const textInput = document.getElementById("textInput");
  const resultParagraph = document.getElementById("result");

  const text = textInput.value;

  try {
    if (text === "") {
      throw new Error("Por favor, insira um texto.");
    }

    const result = rot13(text);
    resultParagraph.textContent = result;
  } catch (error) {
    resultParagraph.textContent = "Erro: " + error.message;
  }
}
