const inputNumber = document.querySelector("#number");
const inputFrom = document.querySelector("#from");
const inputTo = document.querySelector("#to");
const noRepeatPermission = document.querySelector("#noRepeatPermission");

const button_draw = document.querySelector("#draw");

const showResultDiv = document.querySelector("#showResult");

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

const form = document.querySelector("#draw-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const qtdNumbers = parseInt(inputNumber.value) || 0;
  const qtdMin = parseInt(inputFrom.value) || 0;
  const qdtMax = parseInt(inputTo.value) || 0;
  const noRepeat = noRepeatPermission.checked;

  const result = sortearNumeros(qtdNumbers, qtdMin, qdtMax, noRepeat);

  if (result.length === 0) {
    alert("Erro ao sortear. Insira valores válidos");
    return;
  }

  showResultDiv.innerHTML = "";

  const resultContainer = document.createElement("div");
  resultContainer.classList.add("result-container");

  const resultHeader = document.createElement("header");
  resultHeader.classList.add("result-header");

  const resultHeaderP = document.createElement("p");
  resultHeaderP.classList.add("result-header-p");
  resultHeaderP.textContent = "Resultado do sorteio";

  const labelMd = document.createElement("p");
  labelMd.classList.add("label-md");
  labelMd.textContent = "1º RESULTADO";

  resultHeader.append(resultHeaderP, labelMd);

  const numbersWrapper = document.createElement("div");
  numbersWrapper.classList.add("numbers-wrapper");

  result.forEach((num) => {
    const span = document.createElement("span");
    span.classList.add("drawn-number");
    span.textContent = num;
    numbersWrapper.appendChild(span);
  });

  const restartBtn = document.createElement("button");
  restartBtn.type = "button";
  restartBtn.classList.add("draw");
  restartBtn.textContent = "SORTEAR NOVAMENTE ";

  const imgBtn = document.createElement("img");
  imgBtn.src = "./assets/again.svg";
  imgBtn.alt = "";

  restartBtn.appendChild(imgBtn);
  restartBtn.addEventListener("click", () => window.location.reload());

  resultContainer.append(resultHeader, numbersWrapper, restartBtn);
  showResultDiv.appendChild(resultContainer);

  form.style.display = "none";
  document.querySelector(".intro").style.display = "none";
});
