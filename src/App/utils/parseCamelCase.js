export const parseCamelCase = (string) => {
  return string.split("")
    .map((char, i) => {
      if (i === 0) {
        return char.toUpperCase();
      }

      return char.toUpperCase() === char ? ` ${char}` : char;
    })
    .join("")
    .trim();
}