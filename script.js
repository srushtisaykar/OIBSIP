function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const temperature = parseFloat(temperatureInput.value);
    const unitSelect = document.getElementById('unit');
    const selectedUnit = unitSelect.value;
    const resultDiv = document.getElementById('result');

    // Input validation
    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemp;
    let convertedUnit;

    if (selectedUnit === "celsius") {
        convertedTemp = (temperature * 9 / 5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (selectedUnit === "fahrenheit") {
        convertedTemp = (temperature - 32) * 5 / 9;
        convertedUnit = "Celsius";
    } else if (selectedUnit === "kelvin") {
        // Optional Kelvin conversion (enable option in select first)
        convertedTemp = temperature + 273.15;
        convertedUnit = "Kelvin";
    }

    resultDiv.textContent = `${temperature}°${selectedUnit} is equal to ${convertedTemp.toFixed(2)}°${convertedUnit}`;
}
