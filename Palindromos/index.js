function verificarPalindromo() {
  let palavra = prompt("Digite uma palavra:").trim();

  let palavraInvertida = palavra.toLowerCase().split("").reverse().join("");

  if (palavra.toLowerCase() === palavraInvertida) {
    return "É um palíndromo";
  } else {
    return "Não é um palíndromo";
  }
}

alert(verificarPalindromo());
