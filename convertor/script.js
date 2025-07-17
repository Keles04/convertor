async function convert() {
  const amount = parseFloat(document.getElementById('amount').value);
  const currency = document.getElementById('currency').value;

  if (isNaN(amount) || amount <= 0) {
    document.getElementById('result').textContent = "Введите корректную сумму.";
    return;
  }

  try {
    const response = await fetch(`https://api.exchangerate.host/latest?base=${currency}&symbols=KZT`);
    const data = await response.json();
    const rate = data.rates.KZT;

    const converted = amount * rate;
    document.getElementById('result').textContent = `Результат: ${converted.toFixed(2)} ₸`;
  } catch (error) {
    document.getElementById('result').textContent = "Ошибка загрузки курса валют.";
  }
}