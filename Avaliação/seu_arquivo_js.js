
const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('resultMessage');

function calculateAge() {
  const day = parseInt(document.getElementById('dayInput').value);
  const month = parseInt(document.getElementById('monthInput').value);
  const year = parseInt(document.getElementById('yearInput').value);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const ageInMilliseconds = today - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  if (isNaN(ageInYears)) {
    resultMessage.textContent = 'Por favor, insira uma data válida.';
  } else if (ageInYears >= 18) {
    resultMessage.textContent = 'Você é maior de idade!';
  } else {
    resultMessage.textContent = 'Você é menor de idade.';
  }
}
function resetar() {
 
  document.getElementById('dayInput').value = "";
  document.getElementById('monthInput').value = "";
  document.getElementById('yearInput').value = "";
  resultMessage.textContent = "";
}

checkButton.addEventListener('click', calculateAge);