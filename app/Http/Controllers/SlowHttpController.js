import SlowHttpJob from '../../Jobs/SlowHttpJob.js';

export default async function SlowHttpController(request, response) {
    setTimeout(() => {
        SlowHttpJob.handle();
    }, 0);

    return response.status(200).json({
        response: 'Job enviado para a fila executar-job'
    });
}