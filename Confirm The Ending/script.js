function confirmEnding(texto, sufixo) {
  let textoLength = texto.length;
  let sufixoLength = sufixo.length;

  if (sufixoLength > textoLength) {
    return false;
  }

  for (let i = 1; i <= sufixoLength; i++) {
    if (texto[textoLength - i] !== sufixo[sufixoLength - i]) {
      return false;
    }
  }

  return true;
}

function verificarSufixo() {
  let texto = document.getElementById("texto").value;
  let sufixo = document.getElementById("sufixo").value;

  let resultado = confirmEnding(texto, sufixo);
  let resultadoElement = document.getElementById("resultado");

  if (resultado) {
    resultadoElement.textContent = "O texto termina com o sufixo.";
  } else {
    resultadoElement.textContent = "O texto NÃO termina com o sufixo.";
  }
}
