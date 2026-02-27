const inputNumber = document.querySelector("#number");
const inputFrom = document.querySelector("#from");
const inputTo = document.querySelector("#to");
const noRepeatPermission = document.querySelector("#noRepeatPermission");

const button_draw = document.querySelector("#draw");

const showResultDiv = document.querySelector(".showResult");

/**
 *
 * @param {number} quantity
 * @param {number} min
 * @param {number} max
 * @param {boolean} noRepeat
 * @returns {number[]}
 */
function sortearNumeros(quantity, min, max, noRepeat) {
  let drawnNumbers = [];
  let interval = max - min + 1;

  if (noRepeat && quantity > interval) {
    alert("Erro: quantidade de números maior que o intervalo disponível.");
  }

  for (let i = 0; i < quantity; ) {
    let numero = Math.floor(Math.random() * interval) + min;

    if (!noRepeat) {
      drawnNumbers.push(numero);
      i++;
    } else {
      if (!drawnNumbers.includes(numero)) {
        drawnNumbers.push(numero);
        i++;
      }
    }
  }

  return drawnNumbers;
}

button_draw.addEventListener("click", () => {
  const qtdNumbers = parseInt(inputNumber.value);
  const qtdMin = parseInt(inputFrom.value);
  const qdtMax = parseInt(inputTo.value);
  const noRepeat = noRepeatPermission.checked;
  console.log(noRepeat);

  const result = sortearNumeros(qtdNumbers, qtdMin, qdtMax, noRepeat);

  const showResultParagraph = document.createElement("p");
  showResultParagraph.innerHTML = `Números sorteados: ${result.join("-")}`;
  showResultDiv.append(showResultParagraph);
});
