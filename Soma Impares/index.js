function somaImpar() {
  let inicio = parseInt(document.querySelector("#valorInicio").value);
  let final = parseInt(document.querySelector("#valorFinal").value);
  let somaImpares = 0;

  for (let i = inicio; i <= final; i++) {
    if (i % 2 !== 0) {
      somaImpares += i;
    }
  }

  return somaImpares;
}

document.querySelector("#calcular").addEventListener("click", () => {
  const resultado = somaImpar();
  alert(`A soma dos números ímpares é: ${resultado}`);
});
