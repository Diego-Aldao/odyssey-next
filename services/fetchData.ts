import { requestQueue } from "@/services/RequestQueue";

export default async function fetchData<T>(url: string): Promise<T> {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return new Promise<T>((resolve) => {
    requestQueue.enqueue(async () => {
      while (true) {
        try {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
          }

          const data: T = await response.json();
          resolve(data); // Devuelve los datos y sale del bucle
          break;
        } catch (error) {
          console.error("Fetch fallido, reintentando...", error);
          await delay(5000); // Espera antes de reintentar
        }
      }
    });
  });
}
