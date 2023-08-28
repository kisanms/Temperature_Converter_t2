document.getElementById("convertBtn").addEventListener("click", function () {
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const temperature = parseFloat(document.getElementById("temperature").value);

  let result;
  let resultSymbol;

  if (fromUnit === "celsius") {
    if (toUnit === "fahrenheit") {
      result = (temperature * 9 / 5) + 32;
      resultSymbol = "°F";
    } else if (toUnit === "kelvin") {
      result = temperature + 273.15;
      resultSymbol = "K";
    } else {
      result = temperature;
      resultSymbol = "°C";
    }
  } else if (fromUnit === "fahrenheit") {
    if (toUnit === "celsius") {
      result = (temperature - 32) * 5 / 9;
      resultSymbol = "°C";
    } else if (toUnit === "kelvin") {
      result = (temperature + 459.67) * 5 / 9;
      resultSymbol = "°K";
    } else {
      result = temperature;
      resultSymbol = "°F";
    }
  } else if (fromUnit === "kelvin") {
    if (toUnit === "celsius") {
      result = temperature - 273.15;
      resultSymbol = "°C";
    } else if (toUnit === "fahrenheit") {
      result = (temperature * 9 / 5) - 459.67;
      resultSymbol = "°F";
    } else {
      result = temperature;
      resultSymbol = "°K";
    }
  }

  document.getElementById("conversionResult").textContent = result.toFixed(2) + " " + resultSymbol;
});
