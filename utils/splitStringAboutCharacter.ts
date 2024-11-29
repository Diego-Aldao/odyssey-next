export function splitStringAboutCharacter(input: string): [string, string] {
  const separador = "\n\n";
  const separadorIndex = input.indexOf(separador);

  if (separadorIndex === -1) {
    // si no encuentra el separador, devuelve el string completo como la primera parte y la segunda como un string vacio
    return [input, ""];
  }

  // primera parte: desde el inicio hasta el indice del separador
  const primerParte = input.substring(0, separadorIndex);
  // segunda parte: comienza justo despues del separador
  const segundaParte = input.substring(separadorIndex + separador.length);

  return [primerParte, segundaParte];
}
