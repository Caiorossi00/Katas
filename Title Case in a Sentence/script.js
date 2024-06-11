function formatarTitulo() {
  const fraseInput = document.getElementById("inputFrase").value;
  const resultadoElement = document.getElementById("resultado");

  if (fraseInput.trim() === "") {
    resultadoElement.textContent = "Por favor, insira uma frase.";
    return;
  }

  const excecoes = [
    "de",
    "da",
    "do",
    "em",
    "por",
    "para",
    "com",
    "sem",
    "sob",
    "a",
    "o",
    "as",
    "os",
    "e",
    "mas",
    "ou",
  ];
  const palavras = fraseInput.toLowerCase().split(" ");
  const resultado = [];

  for (const palavra of palavras) {
    if (!excecoes.includes(palavra) && palavra !== palavra.toUpperCase()) {
      resultado.push(palavra.charAt(0).toUpperCase() + palavra.slice(1));
    } else {
      resultado.push(palavra);
    }
  }

  resultadoElement.textContent = resultado.join(" ");
}
