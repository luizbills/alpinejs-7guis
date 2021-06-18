document.addEventListener('alpine:initializing', () => {
    Alpine.data('temperature-converter', () => ({
        celsius: 0,
        fahrenheit: 0,
        init() {
            this.updateFahrenheit();
        },
        updateCelsius() {
            this.fahrenheit = parseFloat(this.fahrenheit) || 0;
            this.celsius = Math.round((this.fahrenheit - 32) * (5 / 9))
        },
        updateFahrenheit() {
            this.celsius = parseFloat(this.celsius) || 0;
            this.fahrenheit = Math.round(this.celsius * (9 / 5) + 32)
        }
    }))
})