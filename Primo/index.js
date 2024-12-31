function verificarPrimo() {
  let numero = parseInt(prompt("Insira um valor:"));

  if (numero <= 1) {
    return "Não é primo";
  }

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      return "Não é primo";
    }
  }

  return "É primo";
}

alert(verificarPrimo());
