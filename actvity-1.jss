function convertToFar() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    const result = (celsiusInput * 9/5) + 32;
    document.getElementById("result").innerHTML = `${celsiusInput}°C is equal to ${result.toFixed(2)}°F`;
}

function convertToCel() {
    const fahrenheitInput = document.getElementById("celsiusInput