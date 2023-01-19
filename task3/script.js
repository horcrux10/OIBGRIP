function convertTemperature() {
    const temperature = document.getElementById("temperature").value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const result = document.getElementById("result");
  
    if (unit === "celsius") {
      result.innerHTML = `${temperature} &#8451; = ${(temperature * 9 / 5 + 32).toFixed(2)} &#8457;`;
    } else {
      result.innerHTML = `${temperature} &#8457; = ${((temperature - 32) * 5 / 9).toFixed(2)} &#8451;`;
    }
  }
  