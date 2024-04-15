/**
 * Capitalize the first letter of each word in a string
 * @param {string} input - The string to capitalize
 * @returns {string} - The capitalized string
 */
export const capitalizeAfterComma = (input: string): string => {
  return input
    .replace(/(?:^|,)(\s*\w)/g, (match) => match.toUpperCase())
    .replace(/,/g, ", ");
};
