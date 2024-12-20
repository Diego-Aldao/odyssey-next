type RequestFunction = () => Promise<void>;

function createRequestQueue(maxRequestsPerSecond: number) {
  const queue: RequestFunction[] = [];
  let activeRequests = 0;

  async function processQueue() {
    if (activeRequests >= maxRequestsPerSecond || queue.length === 0) {
      return;
    }

    activeRequests++;

    const request = queue.shift();
    if (request) {
      try {
        await request();
      } catch (error) {
        console.error("Error en la solicitud:", error);
      } finally {
        activeRequests--;
        setTimeout(processQueue, 3000); // espera 5 segundos antes de procesar la siguiente solicitud
      }
    }
  }

  function enqueue(request: RequestFunction) {
    queue.push(request);
    processQueue();
  }

  return { enqueue };
}

export const requestQueue = createRequestQueue(2); // maximo 2 solicitudes por segundo
