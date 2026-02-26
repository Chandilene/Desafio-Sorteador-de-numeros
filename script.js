"use_strict";
const inputNumber = document.querySelector("#number");
const inputFrom = document.querySelector("#from");
const inputTo = document.querySelector("#to");
const permissionToRepeat = document.querySelector("#permission_to_repeat");

const button_draw = document.querySelector("#draw");

const showResultDiv = document.querySelector(".showResult");

function sortearNumeros(quantity, min, max, permissionRepeat) {
  let drawnNumbers = [];
  let interval = max - min + 1;

  if (!permissionRepeat && quantity > interval) {
    alert("Erro: quantidade de números maior que o intervalo disponível.");
  }

  while (drawnNumbers.length < quantity) {
    let numero = Math.floor(Math.random() * interval) + min;

    if (permissionRepeat) {
      drawnNumbers.push(numero);
    } else {
      if (!drawnNumbers.includes(numero)) {
        drawnNumbers.push(numero);
      }
    }
  }

  return drawnNumbers;
}

button_draw.addEventListener("click", () => {
  const qtdNumbers = parseInt(inputNumber.value);
  const qtdMin = parseInt(inputFrom.value);
  const qdtMax = parseInt(inputTo.value);
  const noRepeat = permissionToRepeat.checked;

  const result = sortearNumeros(qtdNumbers, qtdMin, qdtMax, !noRepeat);

  const showResultParagraph = document.createElement("p");
  showResultParagraph.innerHTML = `Números sorteados: ${result.join("-")}`;
  showResultDiv.append(showResultParagraph);

  console.log("Sorteados:", result);
});
