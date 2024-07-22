function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
      after = after[0].toUpperCase() + after.slice(1);
    } else {
      after = after[0].toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
  }
  
  function replaceWords() {
    const strInput = document.getElementById("strInput");
    const beforeInput = document.getElementById("beforeInput");
    const afterInput = document.getElementById("afterInput");
    const resultParagraph = document.getElementById("result");
  
    const str = strInput.value;
    const before = beforeInput.value;
    const after = afterInput.value;
  
    try {
      if (str === "" || before === "" || after === "") {
        throw new Error("Por favor, preencha todos os campos.");
      }
  
      const result = myReplace(str, before, after);
      resultParagraph.textContent = result;
    } catch (error) {
      resultParagraph.textContent = "Erro: " + error.message;
    }
  }
  