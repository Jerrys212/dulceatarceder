export const convertirCadena = (input) => {
  const palabras = input.split("-");

  const palabrasCapitalizadas = palabras.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return palabrasCapitalizadas.join(" ");
};
