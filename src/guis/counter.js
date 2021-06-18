document.addEventListener('alpine:initializing', () => {
    Alpine.data('counter', () => ({
        value: 0,

        increment() {
            this.value++
        }
    }))
})