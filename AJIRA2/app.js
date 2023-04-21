function append(value) {
    document.getElementById('result').value += value;
  }
  function calculate() {
    document.getElementById('result').value = eval(document.getElementById('result').value);
  }
  function clearAll() {
    document.getElementById('result').value = '';
  }