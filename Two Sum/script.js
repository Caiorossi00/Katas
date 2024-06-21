function calculateTwoSum() {
  const numsInput = document.getElementById("numsInput");
  const targetInput = document.getElementById("targetInput");
  const resultParagraph = document.getElementById("result");

  const numsString = numsInput.value;
  const target = parseInt(targetInput.value, 10);

  if (!numsString || isNaN(target)) {
    resultParagraph.textContent =
      "Erro: Por favor, insira um array de números e um valor alvo válido.";
    return;
  }

  const nums = numsString.split(",").map(Number);

  const result = twoSum(nums, target);

  if (result) {
    resultParagraph.textContent = `Índices encontrados: ${result}`;
  } else {
    resultParagraph.textContent = "Nenhum par de números encontrado.";
  }
}

function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (complement in numMap) {
      return [numMap[complement], i];
    } else {
      numMap[nums[i]] = i;
    }
  }

  return null;
}
