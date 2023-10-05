function convertTemperature() 
 {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var result;
    if (unit === "celsius") {
        result = (temperature * 9 / 5) + 32;
        document.getElementById("result").textContent = `${temperature} Celsius is equal to ${result.toFixed(2)} Fahrenheit.`;
    } else if (unit === "fahrenheit") {
        result = (temperature - 32) * 5 / 9;
        document.getElementById("result").textContent = `${temperature} Fahrenheit is equal to ${result.toFixed(2)} Celsius.`;
    } else {
        document.getElementById("result").textContent = "Invalid unit.";
    }
}
