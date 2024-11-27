export default async function fetchData<T>(url: string): Promise<T> {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms)); //Promesa para reintentar el fetch luego de x segundos en caso de fallar
  try {
    const response = await fetch(url);

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} - ${response.statusText}`
      );
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error);

    await delay(5000); //Reintento luego de 5 segundos si el fetch falla
    try {
      const retryResponse = await fetch(url);
      if (!retryResponse.ok) {
        throw new Error(
          `Error en el segundo intento: ${retryResponse.status} - ${retryResponse.statusText}`
        );
      }
      const retryData: T = await retryResponse.json();
      return retryData;
    } catch (retryError) {
      console.error("Error tras reintento:", retryError);
      throw retryError; // Propaga el error final
    }
  }
}
