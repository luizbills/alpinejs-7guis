document.addEventListener('alpine:initializing', () => {
    Alpine.data('temperatureConverter', () => ({
        celsius: 0,
        fahrenheit: 0,
        init() {
            this.updateFahrenheit();
        },
        updateCelsius(value) {
            this.fahrenheit = parseFloat(value) || 0;
            this.celsius = Math.round((this.fahrenheit - 32) * (5 / 9))
        },
        updateFahrenheit(value) {
            this.celsius = parseFloat(value) || 0;
            this.fahrenheit = Math.round(this.celsius * (9 / 5) + 32)
        }
    }))
})