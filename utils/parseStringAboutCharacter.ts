//Funcion que transforma un string con multiples lineas de tipo "clave: valor\n" a un objeto
export function parseStringAboutCharacter(
  input: string
): Record<string, string> {
  const result: Record<string, string> = {};
  // dividir el string por lineas
  const lines = input.split("\n");

  for (const line of lines) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex !== -1) {
      // separar la clave (antes de ":") y el valor (después de ":")
      const key = line.substring(0, separatorIndex).trim();
      const value = line.substring(separatorIndex + 1).trim();
      result[key] = value;
    }
  }
  //si el objeto termina en numero impar, elimina la ultima entrie
  const keys = Object.keys(result);
  if (keys.length % 2 !== 0) {
    const lastKey = keys[keys.length - 1];
    delete result[lastKey];
  }

  return result;
}
