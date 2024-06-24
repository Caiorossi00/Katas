function returnTruthy(arrayMista) {
  let truthyArray = [];

  for (let i = 0; i < arrayMista.length; i++) {
    if (arrayMista[i]) {
      truthyArray.push(arrayMista[i]);
    }
  }

  return truthyArray;
}

function filterArray() {
  let input = document.getElementById("inputArray").value.trim();

  try {
    let arrayMista = JSON.parse(input);

    let resultado = returnTruthy(arrayMista);

    document.getElementById("result").innerHTML =
      "<strong>Resultado:</strong> [" + resultado + "]";
  } catch (error) {
    document.getElementById("result").innerHTML =
      "<span style='color: red;'>Erro ao processar o array. Verifique o conteúdo e tente novamente.</span>";
  }
}
