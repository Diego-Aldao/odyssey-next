import { requestQueue } from "@/services/RequestQueue";

export default async function fetchData<T>(url: string): Promise<T> {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return new Promise<T>((resolve, reject) => {
    requestQueue.enqueue(async () => {
      while (true) {
        try {
          const response = await fetch(url);

          if (!response.ok) {
            if (response.status === 404) {
              // Si se recibe un error 404, rechaza la promesa y termina el bucle
              reject(new Error("Error 404: Recurso no encontrado.")); // Rechaza la promesa con un error 404
              break; // Sale del bucle después de rechazar
            }
            throw new Error(`Error en la solicitud: ${response.status}`);
          }

          const data: T = await response.json();
          resolve(data); // Devuelve los datos y sale del bucle
          break;
        } catch (error) {
          console.error("Fetch fallido, reintentando...", error);
          if ((error as Error).message.includes("Error 404")) {
            reject(error); // Rechaza la promesa con el error 404
            break; // Rompe el bucle en caso de un error 404
          }
          await delay(1000); // Espera antes de reintentar
        }
      }
    });
  });
}
