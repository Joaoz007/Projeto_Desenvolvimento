export default {
    async handle() {
        await fetch('https://httpbin.org/delay/5');

        console.log('Requisição lenta executada pelo worker.');
    }
}